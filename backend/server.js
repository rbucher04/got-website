import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend-domain.amplifyapp.com",
      "https://www.yourdomain.com"
    ],
    methods: ["GET", "POST"],
    credentials: false
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.DBNAME,
  })
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.error(" MongoDB Error:", err));

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
// This will handle verifying sending emails
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// API is called when the user submits the contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save message to MongoDB
    const saved = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification
    // Below will be the format of how the email will be sent
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Submission: ${subject}`,
      text: `
New message from your website contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

MongoDB ID: ${saved._id}
      `,
    });

    res.json({ msg: "Message stored and email sent successfully." });

  } catch (err) {
    console.error(" Contact Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});