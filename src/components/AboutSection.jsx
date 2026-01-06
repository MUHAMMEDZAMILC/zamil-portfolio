import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaMediumM } from 'react-icons/fa';


const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({
    main: false,
    text: false,
    expertise: false,
    location: false,
    social: false
  });
  
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const expertiseRef = useRef(null);
  const locationRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const observers = [];
    
    const createObserver = (ref, key) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1, rootMargin: '-100px' }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
      
      return observer;
    };

    createObserver(sectionRef, 'main');
    createObserver(textRef, 'text');
    createObserver(expertiseRef, 'expertise');
    createObserver(locationRef, 'location');
    createObserver(socialRef, 'social');

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 bg-black text-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideRight 0.6s ease-out forwards;
        }
        
        .animate-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animate-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .social-link {
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background-color: white;
          color: black;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className={isVisible.main ? 'animate-fade-in' : 'opacity-0'}
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-20">ABOUT ME</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p
                ref={textRef}
                className={`text-2xl md:text-4xl leading-relaxed text-gray-300 ${
                  isVisible.text ? 'animate-slide-up' : 'opacity-0'
                }`}
              >
                A passionate developer with 3+ years of experience building
                performant, scalable mobile applications that users love.
              </p>
            </div>

            <div className="space-y-8">
              <div
                ref={expertiseRef}
                className={isVisible.expertise ? 'animate-slide-right' : 'opacity-0'}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-12 h-px bg-white mr-4"></span>
                  EXPERTISE
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Specialized in Flutter, Provider, GetX architecture, Firebase
                  integration, and creating seamless user experiences. Proven
                  track record of reducing app load times by 30% and
                  maintaining apps with 50,000+ users.
                </p>
              </div>

              <div
                ref={locationRef}
                className={`${
                  isVisible.location ? 'animate-slide-right animate-delay-200' : 'opacity-0'
                }`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-12 h-px bg-white mr-4"></span>
                  LOCATION
                </h3>
                <p className="text-gray-400 text-lg">
                  Based in Malappuram, Kerala, India
                </p>
              </div>

              <div
                ref={socialRef}
                className={`flex gap-6 pt-8 ${
                  isVisible.social ? 'animate-slide-right animate-delay-400' : 'opacity-0'
                }`}
              >
                <a
                  href="https://github.com/MUHAMMEDZAMILC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white flex items-center justify-center social-link"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://in.linkedin.com/in/muhammed-zamil-c-4506ab243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white flex items-center justify-center social-link"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:mzofficial049@gmail.com"
                  className="w-12 h-12 border border-white flex items-center justify-center social-link"
                  aria-label="Email Contact"
                >
                  <Mail size={20} />
                </a>
                <a
  href="https://medium.com/@mzofficial049"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 border border-white flex items-center justify-center social-link"
  aria-label="Medium Profile"
>
  <FaMediumM size={20} />
</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;