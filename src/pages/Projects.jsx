/* eslint-disable no-unused-vars */
// src/pages/Projects.jsx
import React from "react";
import {Utensils,Clapperboard } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "FoodPanda",
      description:
        "A seamless food delivery app that lets customers browse restaurants, explore menus, add items to the cart, and place orders effortlessly.",
      technologies: ["React", "Javascript", "Tailwind", "Redux"],
      icon: <Utensils size={24} />, // Food-related icon
      github: "https://github.com/pramod24cr/FoodPanda",
      demo: "https://foodpanda-demo.com",
    },
    {
      title: "NetflixGPT",
      description:
        "A Netflix-like app with an integrated AI-powered search feature that suggests movies based on user prompts.",
      technologies: ["React", "Node.js", "OpenAI API", "Redux"],
      icon: <Clapperboard size={24} />, // Movie-related icon
      github: "https://github.com/pramod24cr/NetflixGPT",
      demo: "https://netflixgpt-demo.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Projects Section Title */}
        <h2 className="text-green-500 text-center font-mono text-2xl mb-8">
          {"<projects>"}
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-18">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Closing Projects Section Title */}
        <h2 className="text-green-500 text-center font-mono text-2xl mt-8">
          {"</projects>"}
        </h2>
      </div>
    </div>
  );
};

export default Projects;
