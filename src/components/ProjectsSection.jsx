import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "VOICY",
      subtitle: "Voice Call Application",
      description:
        "Real-time voice calling platform built with Flutter and Agora SDK. Features background calls, billing timers, and coin-based wallet system.",
      tags: ["FLUTTER", "AGORA SDK", "FIREBASE", "BLOC"],
      number: "01",
      links: [
        {
          type: "android",
          url: "https://play.google.com/store/apps/details?id=com.bestie.user",
        },
      ],
    },
    {
      name: "KEYROUTE",
      subtitle: "Travel & Transport App",
      description:
        "Comprehensive booking platform with vendor dashboards, location APIs, and route management for seamless travel experiences.",
      tags: ["FLUTTER", "MAPS API", "REST API", "PROVIDER"],
      number: "02",
      links: [
        {
          type: "android",
          url: "https://play.google.com/store/apps/details?id=com.keyroute.user",
        },
      ],
    },
    {
      name: "CEROBIZ ERP",
      subtitle: "Business Management",
      description:
        "Enterprise resource planning mobile application with real-time tax tracking, sales monitoring, invoice printing, and API synchronization.",
      tags: ["FLUTTER", "REST API", "HIVE", "PDF GEN"],
      number: "03",
      links: [],
    },
    {
      name: "HAPPY NIKAH",
      subtitle: "Matrimony Platform",
      description:
        "Modern matrimony application featuring role-based authentication, real-time messaging, and location-based search functionality.",
      tags: ["FLUTTER", "FIREBASE", "GETX", "MESSAGING"],
      number: "04",
      links: [
        {
          type: "ios",
          url: "https://apps.apple.com/in/app/happy-nikah/id1638696026",
        },
        {
          type: "android",
          url: "https://play.google.com/store/apps/details?id=com.sysol.happy_nikah",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-8xl font-bold mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SELECTED WORK
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-6 mb-4">
                      <span className="text-6xl md:text-8xl font-bold text-gray-800">
                        {project.number}
                      </span>
                      <div>
                        <h3 className="text-4xl md:text-6xl font-bold group-hover:translate-x-4 transition-transform duration-500">
                          {project.name}
                        </h3>
                        <p className="text-xl text-gray-500">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-400 leading-relaxed mb-6 max-w-3xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-4 py-2 border border-gray-700 text-sm tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-4">
                        {project.links.map((link, j) => (
                          <a
                            key={j}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 px-6 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300"
                          >
                            <span className="text-sm tracking-wider font-medium">
                              {link.type === "ios"
                                ? "APP STORE"
                                : "PLAY STORE"}
                            </span>
                            <ExternalLink
                              size={16}
                              className="group-hover/link:translate-x-1 transition-transform"
                            />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <ArrowRight
                    className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity"
                    size={48}
                  />
                </div>

                <div className="h-px bg-gray-800 group-hover:bg-white transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;