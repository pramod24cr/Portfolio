// src/pages/Contact.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-24 px-4 md:px-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-green-500 font-bold text-center text-2xl mb-8">{`<contact >`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-8">
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <h3 className="text-green-500 font-mono mb-4">{`<connect />`}</h3>
              <div className="space-y-2 text-gray-300 font-mono">
                <p>📧 pramod24cr@gmail.com</p>
                <p>📍 Bengaluru, Karnataka</p>
              </div>
            </div>
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <h3 className="text-green-500 font-mono mb-4">{`<availability />`}</h3>
              <p className="text-gray-300">
                Currently available for opportunities.
              </p>
              <p className="text-green-500 mt-4">• Online and ready to collaborate</p>
            </div>
          </div>
        </div>
       <h2 className="text-green-500 font-bold text-center text-2xl mt-12 mb-8">{`<contact />`}</h2>
      </div>
    </div>
  );
};

export default Contact;