import { useState } from "react";
import emailjs from "@emailjs/browser";

// Constants for EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: "service_oztarz9",
  templateId: "template_mv3vu2s",
  publicKey: "fEYphWSJ-h7ba7yPN",
};

const inputStyles =
  "w-full bg-[#2a2a2a] rounded p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500";
const buttonStyles =
  "w-full bg-green-500 text-black py-2 rounded hover:bg-opacity-80 transition-all disabled:opacity-50";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form after success
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 font-mono">
      {/* Terminal Controls */}
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="text-green-500 block mb-2">
            name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSending}
            className={inputStyles}
            aria-label="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="text-green-500 block mb-2">
            email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSending}
            className={inputStyles}
            aria-label="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="text-green-500 block mb-2">
            message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            disabled={isSending}
            className={inputStyles}
            aria-label="Enter your message"
          ></textarea>
        </div>

        {/* Success / Error Messages */}
        {successMessage && (
          <p className="text-green-500 text-sm" role="alert">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm" role="alert">
            {errorMessage}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={buttonStyles}
          disabled={isSending}
          aria-label={isSending ? "Sending message..." : "Send message"}
        >
          {isSending ? "Sending..." : "Send Message_"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
