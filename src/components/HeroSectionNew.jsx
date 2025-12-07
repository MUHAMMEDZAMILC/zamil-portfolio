import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ["Muhammed Zamil", "a Flutter Developer", "a Problem Solver"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden bg-black text-white">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col items-start justify-center min-h-screen py-20">
          {/* Small greeting text with typing effect */}
          <div className="text-sm md:text-base tracking-widest mb-6 text-gray-400 uppercase flex items-center min-h-[24px]">
            <span>Hi there, I'm {displayText}</span>
            <span className="ml-1 animate-pulse text-white">|</span>
          </div>

          {/* Large FLUTTER text with overlay */}
          <div className="relative w-full mb-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black leading-none tracking-tight text-gray-800">
              FLUTTER
            </h1>
          </div>

          {/* DEVELOPER text */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black leading-none tracking-tight mb-12 text-white">
            DEVELOPER
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black font-bold overflow-hidden hover:bg-gray-200 transition-colors"
            >
              <span className="relative z-10">VIEW WORK</span>
            </a>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-colors"
            >
              VIEW RESUME
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;