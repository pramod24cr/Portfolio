import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/about", label: "/about" },
    { path: "/work", label: "/work" },
    { path: "/projects", label: "/projects" },
    { path: "/certificates", label: "/certificates" },
    { path: "/contact", label: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[#1a1a1a] p-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="!text-green-500 text-2xl font-bold hover:opacity-80 transition-opacity"
        >
          {"</>"}
        </NavLink>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          className="md:hidden text-gray-300 hover:text-green-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-6 font-mono">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `!text-gray-300 hover:!text-green-500 transition-colors ${
                  isActive ? "!text-green-500" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col gap-4 font-mono">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `!text-gray-300 hover:!text-green-500 transition-colors ${
                    isActive ? "!text-green-500" : ""
                  }`
                }
                onClick={toggleMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;