import PropTypes from "prop-types";

const TerminalCard = ({ command, output }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 font-mono">
      {/* Terminal Window Controls */}
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Command */}
      <div className="mb-3">
        <span className="text-green-500">$ </span>
        <span className="text-gray-300">{command}</span>
      </div>

      {/* Output */}
      <div className="text-gray-300">
        {Array.isArray(output) ? (
          output.map((line, index) => (
            <div key={index}>{line}</div>
          ))
        ) : (
          <div>{output}</div>
        )}
      </div>
    </div>
  );
};

// Define prop types
TerminalCard.propTypes = {
  command: PropTypes.string.isRequired,
  output: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default TerminalCard;
