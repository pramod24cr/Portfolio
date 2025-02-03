import { ExternalLink } from "lucide-react";
import PropTypes from "prop-types";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8 text-green-500"
    aria-label="GitHub Icon"
  >
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10"
    />
  </svg>
);

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
        <h3 className="text-green-500 text-xl">{title}</h3>
        <div className="text-green-500">{icon}</div>
      </div>

      {/* Description */}
      <p className="text-gray-300 flex-grow">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 my-4">
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
      {(github || demo) && (
        <div className="flex justify-between">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="!text-green-500 flex items-center gap-2 transition-transform hover:scale-110 hover:text-green-400"
              aria-label="GitHub Repository"
            >
              <GithubIcon size={20} />
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
      )}
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
