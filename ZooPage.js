import React, { useState, useEffect } from 'react';
import './ZooPage.css'; // Ensure you have the updated ZooPage.css

// Import your image here
import myBackground from '../images/myImage.png';

const ZooPage = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Welcome to my portfolio';

  // Revised typing effect using setTimeout recursively
  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index < fullText.length) {
        setText(prev => prev + fullText.charAt(index));
        index++;
        setTimeout(typeWriter, 100); // Adjust speed here
      }
    };

    // Start the typing effect only once
    typeWriter();

    // Make sure to cleanup any side effects when the component is unmounted
    return () => {
      index = fullText.length; // Stop typing effect if component is unmounted
    };
  }, []); // The empty dependency array ensures it runs only once on mount

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = myBackground;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen text-center t-0"  style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
    }}>
        {/* Background Image on the Right Side with 3D effect */}
        <div
          className={`zoo-background-image ${bgLoaded ? 'opacity-100' : 'fadeInImage'}`}
          style={{
            backgroundImage: `url(${myBackground})`,
          }}
/>

      {/* Your content */}
      <div className="relative z-50 flex flex-col items-center justify-center text-center min-h-screen px-6 py-10 mr-[400px] mb-[100px]">
        <h1 className="text-5xl font-bold typewriter ">{text}</h1>
        <p className="text-3xl mt-3 fadeInAfter2s font-semibold text-white font-mono">
          My Name is Arunesh J   [BE-CSE]
        </p>
        <p className="text-1.5xl mt-4 fadeInAfter2s font-semibold text-black font-mono">
          Web Developer HTML-CSS-BOOTSTRAP-TAILWIND-MERN-JAVA-SPRING-MYSQL
        </p>
      </div>
    </section>
  );
};

export default ZooPage;
