import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "LANGUAGES & FRAMEWORKS",
      items: ["Dart", "Flutter", "PHP", "CodeIgniter"],
    },
    {
      title: "STATE MANAGEMENT",
      items: ["BLoC", "Provider", "Riverpod", "Getx"],
    },
    {
      title: "MOBILE PLATFORMS",
      items: ["Android", "iOS", "Cross-Platform", "Play Store", "App Store"],
    },
    {
      title: "APIS & DATABASES",
      items: ["REST APIs", "Firebase", "Hive", "Dio", "HTTP"],
    },
    {
      title: "TOOLS & PLATFORMS",
      items: ["Git", "GitHub", "Xcode", "TestFlight", "Postman"],
    },
    {
      title: "DESIGN & METHODS",
      items: ["UI/UX", "Figma", "Photoshop", "Agile", "Project Mgmt"],
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
          SKILLS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-sm tracking-widest mb-6 text-gray-500">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, j) => (
                  <div key={j} className="text-2xl font-light text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
