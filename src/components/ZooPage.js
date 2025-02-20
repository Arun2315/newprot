import React, { useState, useEffect } from 'react';
import './ZooPage.css';
import myBackground from '../images/myImage.png';

const ZooPage = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Welcome To My Portfolio ';

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = myBackground;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen text-center w-full px-4" style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
    }}>
      
     {/* Background Image with Fade-in Effect */}
<div className={`w-full lg:w-1/2 flex justify-center mb-3 lg:mb-0 relative lg:bottom-10 ${bgLoaded ? 'fadeInImage opacity-100' : 'opacity-0'}`}>
  <img
    src={myBackground}
    alt="Portfolio"
    className="w-3/4 sm:w-1/2 lg:w-full max-w-xs sm:max-w-sm lg:max-w-md"
  />
</div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center px-6 py-10">
      <h1 className="text-4xl sm:text-3xl font-bold typewriter">{text}</h1>


        <p className="text-3xl text-center sm:text-1xl mt-2 font-semibold text-gray-800 fadeInAfter2s font-mono">
          I'm Arunesh[BE-CSE]
        </p>
        <p className="text-xl text-center sm:text-1xl mt-4 mb-4 font-semibold text-indigo-800 fadeInUpBig font-italic">
          Web Developer HTML-CSS-TAILWIND-MERN-JAVA-SPRING-MYSQL
        </p>
      </div>

    </section>
  );
};

export default ZooPage;
