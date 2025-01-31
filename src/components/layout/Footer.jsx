// components/layout/Footer.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] py-8 px-4 md:px-8 mt-16 font-mono">
    <div className="max-w-12xl mx-auto flex justify-between items-center mt-8 pt-8 border-t border-green-500"></div>
      <div className="max-w-6xl mx-auto  grid md:grid-cols-3 gap-8">

        {/* Left Section */}
        <div>
          <Link to="/" className="!text-green-500 mb-4 text-xl">{'</>'}</Link>
          <p className="text-gray-400 mt-2 leading-relaxed">
            Building secure, scalable, and elegant solutions.
            <br />
            One line of code at a time
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-500 mb-4 text-xl">{'<quick links>'}</h3>
          <nav className="space-y-2">
            <div><Link to="/about"className="!text-gray-400 hover:!text-green-500 transition-colors">/about</Link></div>
            <div><Link to="/work" className="!text-gray-400 hover:!text-green-500 transition-colors">/work</Link></div>
            <div><Link to="/projects" className="!text-gray-400 hover:!text-green-500 transition-colors">/projects</Link></div>
            <div><Link to="/contact" className="!text-gray-400 hover:!text-green-500 transition-colors">/contact</Link></div>
          </nav>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-green-500 mb-4 text-xl">{'<location>'}</h3>
          <div className="text-gray-400">Bengaluru</div>
          <div className="text-gray-400">Karnataka</div>
        </div>
    </div>
        
     {/* Footer Bottom */}   
    <div className="max-w-7xl mx-auto flex justify-between items-center mt-8 pt-8 border-t border-green-500">
        <div className="text-gray-400">
          <span className="text-green-500"> © </span>2025 All rights reserved</div>
        <div className="text-gray-400">
            <span className="text-green-500">{'<'}</span> {' Built with code and caffeine '} <span className="text-green-500">{'/>'}</span>
        </div>
    </div>
    </footer>
  );
};

export default Footer;