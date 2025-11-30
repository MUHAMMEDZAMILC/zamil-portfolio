import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: "50K+", label: "APP DOWNLOADS" },
    { number: "30%", label: "LOAD TIME REDUCTION" },
    { number: "10+", label: "API INTEGRATIONS" },
    { number: "99%", label: "CRASH-FREE SESSIONS" },
  ];

  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-bold mb-4">
                {stat.number}
              </div>
              <div className="text-sm tracking-widest text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;