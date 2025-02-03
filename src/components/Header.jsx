import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { path: "/about", label: "/about" },
    { path: "/work", label: "/work" },
    { path: "/projects", label: "/projects" },
    { path: "/certificates", label: "/certificates" },
    { path: "/contact", label: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#1a1a1a] p-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="!text-green-500 text-2xl text-bold hover:opacity-80 transition-opacity"
        >
          {"</>"}
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-6 font-mono">
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
    </nav>
  );
};

export default Header;
