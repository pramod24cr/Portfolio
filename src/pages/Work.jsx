import WorkCard from "../components/WorkCard";

const Work = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "LTIMindtree",
      date: "$ date --start 'August 2021' --end 'July 2023'",
      responsibilities: [
        "Transitioned rules implementation from Java to DMN for KYC compliance evaluation. ",
        "Analyzed and routed compliant KYC records to appropriate approvers using country-specific rules.",
        "Developed JUnit test cases with PowerMock and conducted end-to-end testing for functional accuracy.",
      ],
    },
    {
      title: "Summer Intern",
      company: "Leeway Hertz",
      date: "$ date --start 'July 2020' --end 'August 2020'",
      responsibilities: [
        "Designed a user-friendly interface for the Stellar wallet, focusing on seamless navigation and accessibility.",
        "Contributed to the development of a Stellar wallet for transactions of Lumen (XLM).",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-24 px-4 md:px-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-green-500 text-center text-2xl mb-10">{`<work>`}</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <WorkCard key={index} {...exp} />
          ))}
        </div>
        <h2 className="text-green-500 text-center text-2xl mt-10">{`</work>`}</h2>
      </div>
    </div>
  );
};

export default Work;
