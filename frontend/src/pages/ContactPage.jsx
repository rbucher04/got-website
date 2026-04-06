import { Clock, Phone, Mail, MapPin } from "lucide-react";
import { useState, useMemo } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Generate stars only once, not on every render since it was messing with text box
  const stars = useMemo(() => {
    return [...Array(200)].map((_, i) => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      width: Math.random() * 2 + 1 + "px",
      height: Math.random() * 2 + 1 + "px",
      opacity: Math.random() * 0.7 + 0.3,
      animationDelay: Math.random() * 3 + "s",
      animationDuration: Math.random() * 2 + 2 + "s",
    }));
  }, []);

  // Handle form submission
  // Runs when user clicks "Submit" button
  // Sends form data to backend API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL;

      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error("Error from server:", data);
        alert("Something went wrong sending your message.");
        return;
      }

      const data = await res.json();
      console.log("Success:", data);
      alert("Thank you! Your message has been sent.");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Network error:", err);
      alert("Unable to send message. Please try again later.");
    }
  };

  // Handle input changes, when user types in form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative w-full min-h-screen overflow-auto bg-black">
      {/* Starfield background */}
      <div className="fixed inset-0 z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={star}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1
            className="text-white mb-6"
            style={{
              fontSize: "4rem",
              fontWeight: 200,
              letterSpacing: "0.02em",
            }}
          >
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p
            className="text-slate-300 max-w-3xl mx-auto"
            style={{ fontSize: "1.25rem", fontWeight: 300, lineHeight: "2rem" }}
          >
            Get in touch with us. We&apos;re here to help.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Hours */}
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-2xl text-center hover:border-blue-400/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-white mb-4"
              style={{ fontSize: "1.5rem", fontWeight: 300 }}
            >
              Hours
            </h3>
            <p
              className="text-slate-300 mb-2"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              Mon - Thur: 8am - 5pm
            </p>
            <p
              className="text-slate-300"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              Fri: 8am - 2pm
            </p>
          </div>

          {/* Phone */}
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-2xl text-center hover:border-purple-400/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-white mb-4"
              style={{ fontSize: "1.5rem", fontWeight: 300 }}
            >
              Phone
            </h3>
            <p
              className="text-slate-300 mb-2"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              Phone: 920.858.2900
            </p>
            <p
              className="text-slate-300"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              Emergency: 920.858.2749
            </p>
          </div>

          {/* Email */}
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-2xl text-center hover:border-blue-400/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-white mb-4"
              style={{ fontSize: "1.5rem", fontWeight: 300 }}
            >
              Email
            </h3>
            <p
              className="text-slate-300"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              info@gotinc.org
            </p>
          </div>

          {/* Address */}
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-2xl text-center hover:border-purple-400/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-white mb-4"
              style={{ fontSize: "1.5rem", fontWeight: 300 }}
            >
              Address
            </h3>
            <p
              className="text-slate-300 mb-2"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              P.O. box 1753
            </p>
            <p
              className="text-slate-300 mb-2"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              Appleton, Wisconsin 54912
            </p>
            <p
              className="text-slate-400"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Fax: 866.458.3923
            </p>
          </div>
        </div>
        
        {/* Text Messaging Consent (tied to phone contact) */}
        <div className="max-w-4xl mx-auto -mt-10 mb-20">
          <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-slate-700/40 text-center">
            <h3
              className="text-white mb-3"
              style={{ fontSize: "1.3rem", fontWeight: 300 }}
            >
              Text Messaging Consent
            </h3>

            <p
              className="text-slate-400 leading-7"
              style={{ fontSize: "0.9rem", fontWeight: 300 }}
            >
              By contacting us via the phone numbers listed above, you agree to
              receive messages related to appointment reminders, status updates,
              and answers to FAQs from Guardians of Tomorrow, Inc. Message
              frequency varies, and standard message and data rates may apply.
              You may opt out at any time by replying “STOP” to any message.
              Reply “HELP” for assistance.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <section className="mb-10">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
            <h2
              className="text-white text-center mb-10"
              style={{
                fontSize: "2.5rem",
                fontWeight: 300,
                letterSpacing: "0.02em",
              }}
            >
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto space-y-6"
            >
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-slate-600 text-slate-200 px-2 py-3 focus:border-blue-400 focus:outline-none transition-colors placeholder-slate-500"
                    style={{ fontSize: "1rem", fontWeight: 300 }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-slate-600 text-slate-200 px-2 py-3 focus:border-purple-400 focus:outline-none transition-colors placeholder-slate-500"
                    style={{ fontSize: "1rem", fontWeight: 300 }}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-slate-600 text-slate-200 px-2 py-3 focus:border-blue-400 focus:outline-none transition-colors placeholder-slate-500"
                  style={{ fontSize: "1rem", fontWeight: 300 }}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-slate-600 text-slate-200 px-2 py-3 focus:border-purple-400 focus:outline-none transition-colors placeholder-slate-500 resize-none"
                  style={{ fontSize: "1rem", fontWeight: 300 }}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-lg hover:bg-slate-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-16">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-slate-700/50 shadow-2xl">
            <h2
              className="text-white text-center mb-10 underline underline-offset-8"
              style={{
                fontSize: "2.2rem",
                fontWeight: 300,
                textDecorationThickness: "1px",
              }}
            >
              Privacy Policy
            </h2>

            <div className="max-w-5xl mx-auto space-y-10 text-center">
              <div>
                <h3
                  className="text-white mb-4"
                  style={{ fontSize: "1.5rem", fontWeight: 300 }}
                >
                  Sharing of Personal Information
                </h3>
                <p
                  className="text-slate-300 leading-9"
                  style={{ fontSize: "1.05rem", fontWeight: 300 }}
                >
                  Guardians of Tomorrow, Inc. will not share, sell or disclose
                  your personal information or mobile opt-in data to third
                  parties without your explicit consent, except where required
                  by law. Your information is kept confidential and used solely
                  for the purposes you have agreed to. All the above categories
                  exclude text messaging originator opt-in data and consent;
                  this information will not be shared with third parties. Text
                  messaging opt-in data is not being shared with third parties.
                </p>
              </div>

              <div>
                <h3
                  className="text-white mb-4"
                  style={{ fontSize: "1.5rem", fontWeight: 300 }}
                >
                  Opting Out of Text Messages
                </h3>
                <p
                  className="text-slate-300 leading-9"
                  style={{ fontSize: "1.05rem", fontWeight: 300 }}
                >
                  You have the right to opt out of receiving text messages from
                  Guardians of Tomorrow, Inc. at any time. To opt-out, you can
                  reply &quot;STOP&quot; to any text message you receive from
                  us.
                </p>
              </div>

              <div>
                <h3
                  className="text-white mb-4"
                  style={{ fontSize: "1.5rem", fontWeight: 300 }}
                >
                  Consent and Opt-In
                </h3>
                <p
                  className="text-slate-300 leading-9"
                  style={{ fontSize: "1.05rem", fontWeight: 300 }}
                >
                  By providing your phone number and opting in to receive text
                  messages you consent to the collection and use of your
                  personal information as described in this policy. We ensure
                  that your consent is obtained explicitly and that you are
                  informed about the types of messages you will receive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div
          className="text-center text-slate-500 pb-8"
          style={{ fontSize: "0.875rem", fontWeight: 300 }}
        >
          ©2024 by Guardians of Tomorrow, Inc.
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}