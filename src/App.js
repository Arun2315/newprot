import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ZooPage from "./components/ZooPage";
import Footer from "./components/Footer"; // Import Footer
import "./App.css";
import "./components/ZooPage.css";

function App() {
  return (
    <Router>
      {/* Default Background for all pages */}
      <section
        className="relative overflow-hidden min-h-screen flex flex-col"
        style={{ backgroundColor: "#4D4DFF" }}
      >
        <div className="absolute inset-0 bg-cover bg-center">
          <svg
            className="w-full h-screen object-cover"
            width="1721"
            height="1080"
            viewBox="0 0 1721 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path className="layer-item-1" d="M575 0H1275L695 929H-6L575 0Z" fill="white" fillOpacity="0.1" />
            <path className="layer-item-2" d="M709.929 695H999L759.484 1079H470L709.929 695Z" fill="white" fillOpacity="0.1" />
            <path className="layer-item-3" d="M486.5 412L71.5 1080.5H197L609 412H486.5Z" fill="#FFA500" />
            <path className="layer-item-4" d="M1364.5 0L949.5 668.5H1075L1487 0H1364.5Z" fill="#FFA500" />
          </svg>
        </div>

        {/* Navbar and Content */}
        <div className="relative z-10 flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<ZooPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer (always at the bottom) */}
        <Footer />
      </section>
    </Router>
  );
}

export default App;
