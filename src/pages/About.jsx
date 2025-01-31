/* eslint-disable no-unused-vars */
import React from 'react';
import TerminalCard from '../components/about/TerminalCard';
import PropTypes from 'prop-types';

// ProfileCard Component with Hover Animation
const ProfileCard = () => (
  <div className="relative bg-[#1e1e1e] w-80 h-80 rounded-lg border border-green-500 transform -rotate-6 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
    {/* Image container */}
    <div className="w-72 h-72 rounded-lg overflow-hidden">
      <img
        src="src/components/assets/Pramod.jpeg" // Update with the correct path
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Status container */}
    <div className="absolute -bottom-4 left-4 bg-[#1e1e1e] px-2 py-1 rounded text-xs border border-green-500">
      <span className="text-green-500">Status:</span>{' '}
      <span className="text-green-500">Online</span>
    </div>
  </div>
);

// SkillTag Component
const SkillTag = ({ skill }) => (
  <span className="bg-[#2a2a2a] text-green-500 px-3 py-1 rounded text-sm">
    {skill}
  </span>
);

SkillTag.propTypes = {
  skill: PropTypes.string.isRequired, // Fixed prop type
};

// About Component
const About = () => {
  const skills = ['Java', 'Spring-Boot', 'FEEL','JavaScript', 'React',  'MySQL'];
  const aboutText =
    'A passionate full-stack developer specializing in building secure, scalable web applications. I thrive on solving complex problems and continuously improving my skills to deliver high-quality solutions.';

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Opening Section Title with Gap */}
        <h2 className="text-green-500 font-mono text-2xl mb-12 text-center">{'<about>'}</h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="flex justify-center md:justify-start">
            <ProfileCard />
          </div>

          {/* Terminal Section */}
          <div className="space-y-8">
            <TerminalCard
              command="whoami"
              output={aboutText}
            />

            <TerminalCard
              command="cat skills.txt"
              output={
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              }
            />
          </div>
        </div>

        {/* Closing Section Title with Gap */}
        <h2 className="text-green-500 font-mono text-2xl mt-12 text-center">{'</about>'}</h2>
      </div>
    </div>
  );
};

export default About;