// components/home/Home.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="min-h-screen font-mono flex flex-col justify-center items-center px-4 md:px-8 bg-[#1a1a1a]">
      <div className="max-w-5xl text-left">
        {/* Greeting */}
        <p className="text-green-500 text-lg md:text-xl mb-4">
          Hello, World! I am
        </p>

        {/* Name with Typewriter Effect */}
        <h1 className="text-5xl md:text-7xl font-mono font-bold text-white mb-4">
          <Typewriter
            options={{
              strings: [
                'Pramod Mahajan H',
                'Software Engineer',
                'Fullstack Developer',
              ],
              autoStart: true, // Automatically start typing
              loop: true, // Loop infinitely
              delay: 100, // Typing speed (in milliseconds)
              deleteSpeed: 50, // Deleting speed (in milliseconds)
              cursor: '|', // Custom cursor
            }}
          />
        </h1>

        {/* Developer Tags */}
        <div className=" text-gray-400 flex flex-wrap justify-left text-xl gap-4 mb-8">
          <span>{`<Engineer />`}</span>
          <span>|</span>
          <span>{`<Developer />`}</span>
          <span>|</span>
          <span>{`<Problem Solver />`}</span>
        </div>

        {/* CTA Button */}
        <Link 
          to="/projects" 
          className="inline-block bg-green-500 !text-black px-6 py-3 rounded text-lg hover:bg-opacity-80 transition-transform transform hover:scale-105"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
};

export default Hero;