import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.guardiansoftomorrowinc.org",
      "https://guardiansoftomorrowinc.org",
    ],
    methods: ["GET", "POST"],
    credentials: false,
  })
);

app.use(express.json());

// Rate limit only the contact route
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 submissions per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many contact form submissions. Please try again later.",
  },
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.DBNAME,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

// Define the structure of contact message
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);

// Creates the model for contact messages
const ContactMessage = mongoose.model(
  "ContactMessage",
  contactSchema,
  process.env.COLLECTION
);

// Creates the email transporter using Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// API is called when the user submits the contact form
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedSubject = subject?.trim();
    const trimmedMessage = message?.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    if (trimmedName.length > 100) {
      return res.status(400).json({ error: "Name is too long." });
    }

    if (trimmedEmail.length > 254) {
      return res.status(400).json({ error: "Email is too long." });
    }

    if (trimmedSubject.length > 150) {
      return res.status(400).json({ error: "Subject is too long." });
    }

    if (trimmedMessage.length > 2000) {
      return res.status(400).json({ error: "Message is too long." });
    }

    // Save message to MongoDB
    const saved = await ContactMessage.create({
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    });

    // Send email notification
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Submission: ${trimmedSubject}`,
      text: `
New message from your website contact form:

Name: ${trimmedName}
Email: ${trimmedEmail}
Subject: ${trimmedSubject}

Message:
${trimmedMessage}

MongoDB ID: ${saved._id}
      `,
    });

    res.json({ msg: "Message stored and email sent successfully." });
  } catch (err) {
    console.error("Contact Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});