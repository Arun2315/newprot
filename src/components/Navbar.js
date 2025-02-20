import React, { useState } from "react";
import { Link } from "react-router-dom";

// Animated button component
const AnimatedButton = ({ children, textColor, ...rest }) => {
  return (
    <button
      {...rest}
      className={`group tracking-widest relative px-5 py-2 font-semibold transition-colors duration-400 focus:outline-none ${textColor}`}
    >
      <span>{children}</span>

      {/* Top Border */}
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-100 group-hover:w-full" />
      {/* Right Border */}
      <span className="absolute right-0 top-0 h-0 w-[3px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 transition-all delay-100 duration-100 group-hover:h-full" />
      {/* Bottom Border */}
      <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all delay-200 duration-100 group-hover:w-full" />
      {/* Left Border */}
      <span className="absolute bottom-0 left-0 h-0 w-[3px] bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-end p-4">
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links (Desktop + Mobile) */}
      <div
        className={`absolute top-16 right-4 z-10 flex flex-col justify-center items-center text-center md:flex-row md:static md:space-x-5 md:top-0 md:right-0 transition-all ${isOpen ? "block" : "hidden"
          } md:block`}
        style={{
          backgroundColor: isOpen ? "#1a202c" : "transparent",
          borderRadius: isOpen ? "10%" : "0%",
          width: isOpen ? "150px" : "auto",
          height: isOpen ? "180px" : "auto",
          paddingTop: isOpen ? "10px" : "0px",
          minWidth: isOpen ? "100px" : "auto",
        }}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          <AnimatedButton textColor={isOpen ? "text-white" : "text-gray-900"}>
            Home
          </AnimatedButton>
        </Link>
        <a href="/resume.pdf" download onClick={() => setIsOpen(false)}>
          <AnimatedButton textColor={isOpen ? "text-white" : "text-gray-900"}>
            Resume
          </AnimatedButton>
        </a>
        <Link to="/projects" onClick={() => setIsOpen(false)}>
          <AnimatedButton textColor={isOpen ? "text-white" : "text-gray-900"}>
            Projects
          </AnimatedButton>
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <AnimatedButton textColor={isOpen ? "text-white" : "text-gray-900"}>
            Contact
          </AnimatedButton>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
