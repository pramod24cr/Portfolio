/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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

    const serviceId = "service_oztarz9";
    const templateId = "template_mv3vu2s";
    const publicKey = "fEYphWSJ-h7ba7yPN";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
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
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-green-500 block mb-2">name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#2a2a2a] rounded p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="text-green-500 block mb-2">email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#2a2a2a] rounded p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="text-green-500 block mb-2">message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            className="w-full bg-[#2a2a2a] rounded p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Success / Error Messages */}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          type="submit"
          className="w-full bg-green-500 text-black py-2 rounded hover:bg-opacity-80 transition-all"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message_"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
