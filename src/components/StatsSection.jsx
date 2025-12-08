import React, { useState, useEffect, useRef } from 'react';

// Custom CountUp Component
const CountUp = ({ end, duration = 2, suffix = "", prefix = "", separator = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const endNum = typeof end === 'string' ? parseFloat(end.replace(/[^0-9.]/g, '')) : end;
    const steps = 60;
    const increment = endNum / steps;
    const stepDuration = (duration * 1000) / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= endNum) {
        setCount(endNum);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const formatNumber = (num) => {
    const rounded = Math.floor(num);
    if (separator === ",") {
      return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return rounded.toString();
  };

  return (
    <span ref={elementRef}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { number: "50000", label: "APP DOWNLOADS", suffix: "K+", prefix: "" },
    { number: "30", label: "LOAD TIME REDUCTION", suffix: "%", prefix: "" },
    { number: "10", label: "API INTEGRATIONS", suffix: "+", prefix: "" },
    { number: "99", label: "CRASH-FREE SESSIONS", suffix: "%", prefix: "" },
  ];

  return (
    <section className="py-32 px-6 bg-white xt-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group"
            >
              <div className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-black group-hover:scale-110 transition-transform duration-300">
                {stat.prefix}
                <CountUp 
                  end={stat.number} 
                  duration={2.5}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              <div className="h-1 w-16 bg-blackpdate  mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;