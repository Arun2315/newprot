import React from "react";
import { Link } from "react-router-dom";

// Animated button component
const AnimatedButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-5 py-2 font-bold text-gray-900 transition-colors duration-400 hover:text-white focus:outline-none"
    >
      <span>{children}</span>
      {/* Top Border */}
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-100 group-hover:w-full animate-rainbow" />

      {/* Right Border */}
      <span className="absolute right-0 top-0 h-0 w-[3px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 transition-all delay-100 duration-100 group-hover:h-full animate-rainbow" />

      {/* Bottom Border */}
      <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all delay-200 duration-100 group-hover:w-full animate-rainbow" />

      {/* Left Border */}
      <span className="absolute bottom-0 left-0 h-0 w-[3px] bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 transition-all delay-300 duration-100 group-hover:h-full animate-rainbow" />


    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-end p-2 space-x-4">  {/* Align to right */}
      <Link to="/">
        <AnimatedButton>Home</AnimatedButton>
      </Link>
      <a href="/resume.pdf" download>
        <AnimatedButton>Resume</AnimatedButton>
      </a>
      <Link to="/projects">
        <AnimatedButton>Projects</AnimatedButton>
      </Link>
      <Link to="/contact">
        <AnimatedButton>Contact</AnimatedButton>
      </Link>
    </nav>
  );
};

export default Navbar;
