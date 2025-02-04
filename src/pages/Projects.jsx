import { Utensils, Clapperboard } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "FoodPanda",
      description:
        "A seamless food delivery app that lets customers browse restaurants, explore menus, add items to the cart, and place orders effortlessly.",
      technologies: ["React", "Javascript", "Tailwind", "Redux"],
      icon: <Utensils size={24} />,
      github: "https://github.com/pramod24cr/FoodPanda",
      demo: "https://food-panda-delivery.vercel.app/",
    },
    {
      title: "NetflixGPT",
      description:
        "A Netflix-like app with an integrated AI-powered search feature that suggests movies based on user prompts.",
      technologies: ["React", "Node.js", "OpenAI API", "Redux"],
      icon: <Clapperboard size={24} />,
      github: "https://github.com/pramod24cr/NetflixGPT",
      demo: "https://netflixgpt-demo.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Projects Section Title */}
        <h2 className="text-green-500 text-center text-2xl mb-8">
          {"<projects>"}
        </h2>

        {/* Projects Grid */}
        <div className="flex flex-col items-center gap-8 w-full">
          {projects.map((project, index) => (
            <div key={index} className="w-8/12 flex items-stretch">
              <ProjectCard {...project} className="w-full" />
            </div>
          ))}
        </div>

        {/* Closing Projects Section Title */}
        <h2 className="text-green-500 text-center text-2xl mt-8">
          {"</projects>"}
        </h2>
      </div>
    </div>
  );
};

export default Projects;
