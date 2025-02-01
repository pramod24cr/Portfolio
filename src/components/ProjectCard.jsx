/* eslint-disable no-unused-vars */
// src/components/projects/ProjectCard.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";

const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  demo,
  icon,
}) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 h-full font-mono flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-green-500 text-xl font-mono">{title}</h3>
        <div className="text-green-500">{icon}</div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-green-500 bg-[#2a2a2a] px-3 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-between items-center">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="!text-green-500 flex items-center gap-2 transition-transform hover:scale-110 hover:text-green-400"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="!text-green-500 flex items-center gap-2 transition-transform hover:scale-110 hover:text-green-400"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

// Prop Types for type checking
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string,
  demo: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

export default ProjectCard;
