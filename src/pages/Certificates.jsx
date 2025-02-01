/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TerminalCard from '../components/TerminalCard';
import PropTypes from 'prop-types';

// CertificateCard Component
const CertificateCard = ({ title, issuer, date, onClick }) => (
  <div
    className="bg-[#1a1a1a] border border-green-500 rounded-lg p-6 shadow-md hover:shadow-xl hover:border-green-400 hover:scale-105 transition-all cursor-pointer w-full flex justify-between items-center"
    onClick={onClick}
  >
    {/* Left Section: Title & Issuer */}
    <div className="flex flex-col">
      <h3 className="text-green-400 font-mono text-lg hover:underline cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-400 font-mono">{issuer}</p>
    </div>

    {/* Right Section: Date */}
    <p className="text-gray-400 font-mono ml-4 flex-shrink-0 text-right">
      {date}
    </p>
  </div>
);


// Prop Types for CertificateCard
CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Certificates Component
const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: 'OCP: Java SE 11 Developer',
      issuer: 'Oracle',
      date: 'November 2021',
      image: 'src/components/assets/java_certificate.jpg', // Update with actual path
    },
    {
      title: 'Web Development',
      issuer: 'Udemy',
      date: 'July 2020',
      image: 'src/components/assets/web_dev_certificate.jpg', // Update with actual path
    },
    {
      title: 'Blockchain Development',
      issuer: 'TRAKLabs',
      date: 'May 2020',
      image: 'src/components/assets/blockchain_certificate.jpg', // Update with actual path
    },
    {
      title: 'MySQL Bootcamp',
      issuer: 'Udemy',
      date: 'October 2019',
      image: 'src/components/assets/mysql_certificate.jpg', // Update with actual path
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pt-24 px-4 md:px-8 font-mono">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-green-500 text-center text-2xl font-bold mb-10">
          {'<certificates>'}
        </h2>

        {/* Terminal Window */}
        <TerminalCard
          command="ls certificates/"
          output={
            <div className="grid sm:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <CertificateCard
                  key={index}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  onClick={() => setSelectedCertificate(cert.image)}
                />
              ))}
            </div>
          }
        />

        {/* Modal for Certificate Preview */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <div className="relative bg-[#1e1e1e] rounded-lg p-6 shadow-lg max-w-3xl mx-4">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close Certificate Preview"
              >
                ✖
              </button>
              <img
                src={selectedCertificate}
                alt="Certificate Preview"
                className="max-w-full max-h-[80vh] rounded-lg shadow-md"
              />
            </div>
          </div>
        )}

        {/* Closing Section Title */}
        <h2 className="text-green-500 text-center text-2xl font-bold mt-10">
          {'</certificates>'}
        </h2>
      </div>
    </div>
  );
};

export default Certificates;