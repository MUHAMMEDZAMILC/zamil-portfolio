import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "CODEEDEX TECHNOLOGIES",
      role: "Senior Flutter Developer",
      period: "JUN 2025 — PRESENT",
      description:
        "Leading full mobile app lifecycle from planning to deployment. Managing Agile sprints, mentoring junior developers, and ensuring 99% crash-free sessions.",
    },
    {
      company: "SYSOL SYSTEM SOLUTION PVT LTD",
      role: "Flutter Developer",
      period: "DEC 2022 — FEB 2025",
      description:
        "Built and maintained 3+ production apps. Developed REST APIs, improved page load speeds by 25%, and achieved 100% client satisfaction.",
    },
    {
      company: "SOFTRONICS",
      role: "Flutter Development Intern",
      period: "JUL 2022 — DEC 2022",
      description:
        "Collaborated on UI/UX improvements for 3 mobile apps, increasing engagement by 20%. Applied design patterns including Provider and MVC.",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-8xl font-bold mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-24">
          {experiences.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-t border-gray-800 pt-12"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-2">
                    {job.company}
                  </h3>
                  <p className="text-xl text-gray-400">{job.role}</p>
                </div>
                <p className="text-gray-500 mt-4 md:mt-0">{job.period}</p>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed max-w-4xl">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;