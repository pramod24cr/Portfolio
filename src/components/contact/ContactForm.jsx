/* eslint-disable no-unused-vars */
// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
            className="w-full bg-[#2a2a2a] rounded p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="text-green-500 block mb-2">message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-[#2a2a2a] rounded p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-black py-2 rounded hover:bg-opacity-80 transition-all"
        >
          Send Message_
        </button>
      </form>
    </div>
  );
};

export default ContactForm;