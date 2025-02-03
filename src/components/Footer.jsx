/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 font-mono py-12 px-6 md:px-12 mt-16">
      {/* Footer Line */}
      <div className="max-w-6xl mx-auto text-center border-b border-green-500 pb-6"></div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
        <div>
          <span className="text-green-500">©</span> 2025 All rights reserved.
        </div>
        <div className="mt-4 md:mt-0">
          <span className="text-green-500">{"<"}</span> Built with code and
          caffeine <span className="text-green-500">{"/>"}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
