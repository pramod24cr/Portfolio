/* eslint-disable react/prop-types */

// src/components/work/ExperienceCard.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

const WorkCard = ({ title, company, date, responsibilities }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 mb-6 font-mono">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-green-500 text-xl font-semibold ">{title}</h3>
          <div className="text-gray-400 ">{company}</div>
        </div>
        <div className="text-gray-500 ">{date}</div>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-300">• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;