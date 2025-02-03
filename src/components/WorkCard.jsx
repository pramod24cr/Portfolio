import PropTypes from "prop-types";

const WorkCard = ({ title, company, date, responsibilities }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 mb-6 font-mono">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-green-500 text-xl ">{title}</h3>
          <div className="text-gray-400 text-base">{company}</div>
        </div>
        <div className="text-gray-500 text-sm">{date}</div>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-300 text-sm">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkCard;
