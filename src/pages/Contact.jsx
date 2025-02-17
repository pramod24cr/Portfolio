/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import ContactForm from "../components/ContactForm";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8 text-gray-300"
    aria-label="GitHub Icon"
  >
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8 text-gray-300"
    aria-label="LinkedIn Icon"
  >
    <path
      fill="currentColor"
      d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
    />
  </svg>
);

const SocialCard = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
    aria-label={`Visit ${label}`}
  >
    <div className="bg-[#2a2a2a] rounded-lg p-4 flex items-center justify-center flex-col gap-2 shadow-lg hover:bg-[#333333] transition-all transform hover:scale-105 cursor-pointer w-full">
      <Icon />
      <span className="text-gray-300 font-mono text-sm">{label}</span>
    </div>
  </a>
);

SocialCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-16 px-4 md:px-8 font-mono">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-green-500 text-center text-2xl mb-4">{`<contact>`}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form - Left Column */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg">
            <ContactForm />
          </div>

          {/* Right Column - Info and Social Links */}
          <div className="flex flex-col gap-8">
            {/* Contact Information */}
            <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg">
              <h3 className="text-green-500 font-mono text-lg mb-4">{`<connect/>`}</h3>
              <div className="space-y-3 text-gray-300 font-mono text-sm">
                <p>📧 pramod24cr@gmail.com</p>
                <p>📞 +91 7349095428</p>
                <p>📍 Bengaluru, Karnataka</p>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg">
              <h3 className="text-green-500 font-mono text-lg mb-4">{`<availability/>`}</h3>
              <div className="space-y-3 text-gray-300 font-mono text-sm">
                <p>Currently open to opportunities.</p>
                <p>Online and ready to collaborate</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg">
              <h3 className="text-green-500 font-mono text-lg mb-4">{`<socials/>`}</h3>
              <div className="grid grid-cols-2 gap-4">
                <SocialCard
                  icon={LinkedInIcon}
                  label="/linkedin"
                  href="https://www.linkedin.com/in/pramod24cr/"
                />
                <SocialCard
                  icon={GithubIcon}
                  label="/github"
                  href="https://github.com/pramod24cr"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-green-500 text-center text-2xl mt-4">{`</contact>`}</h2>
      </div>
    </div>
  );
};

export default Contact;