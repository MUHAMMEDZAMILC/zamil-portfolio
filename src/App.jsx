import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, ExternalLink, Download } from 'lucide-react';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="text-sm md:text-base tracking-widest mb-8 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              SENIOR FLUTTER DEVELOPER
            </motion.p>

            <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-bold leading-none mb-8">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                MUHAMMED
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                ZAMIL C
              </motion.span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Crafting exceptional mobile experiences with Flutter & Dart.
              Building the future, one pixel at a time.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#projects"
                className="group relative px-12 py-4 bg-white text-black font-bold overflow-hidden"
              >
                <span className="relative z-10">VIEW WORK</span>
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>

              <a
                href="#contact"
                className="px-12 py-4 border-2 border-white font-bold hover:bg-white hover:text-black transition-colors"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-20">
              ABOUT ME
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <motion.p
                  className="text-2xl md:text-4xl leading-relaxed text-gray-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  A passionate developer with 2+ years of experience building 
                  performant, scalable mobile applications that users love.
                </motion.p>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-12 h-px bg-white mr-4"></span>
                    EXPERTISE
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Specialized in Flutter, BLoC architecture, Firebase integration, 
                    and creating seamless user experiences. Proven track record of 
                    reducing app load times by 30% and maintaining apps with 50,000+ users.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-12 h-px bg-white mr-4"></span>
                    LOCATION
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Based in Malappuram, Kerala, India
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex gap-6 pt-8"
                >
                  <a
                    href="https://github.com/MUHAMMEDZAMILC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://in.linkedin.com/in/muhammed-zamil-c-4506ab243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:mzofficial049@gmail.com"
                    className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: "50K+", label: "APP DOWNLOADS" },
              { number: "30%", label: "LOAD TIME REDUCTION" },
              { number: "10+", label: "API INTEGRATIONS" },
              { number: "99%", label: "CRASH-FREE SESSIONS" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-bold mb-4">{stat.number}</div>
                <div className="text-sm tracking-widest text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
            {[
              {
                company: "CODEEDEX TECHNOLOGIES",
                role: "Senior Flutter Developer",
                period: "JUN 2025 — PRESENT",
                description: "Leading full mobile app lifecycle from planning to deployment. Managing Agile sprints, mentoring junior developers, and ensuring 99% crash-free sessions."
              },
              {
                company: "SYSOL SYSTEM SOLUTION PVT LTD",
                role: "Flutter Developer",
                period: "DEC 2022 — FEB 2025",
                description: "Built and maintained 3+ production apps. Developed REST APIs, improved page load speeds by 25%, and achieved 100% client satisfaction."
              },
              {
                company: "SOFTRONICS",
                role: "Flutter Development Intern",
                period: "JUL 2022 — DEC 2022",
                description: "Collaborated on UI/UX improvements for 3 mobile apps, increasing engagement by 20%. Applied design patterns including Provider and MVC."
              }
            ].map((job, i) => (
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
                    <h3 className="text-3xl md:text-5xl font-bold mb-2">{job.company}</h3>
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

      {/* Projects Section */}
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
            {[
              {
                name: "VOICY",
                subtitle: "Voice Call Application",
                description: "Real-time voice calling platform built with Flutter and Agora SDK. Features background calls, billing timers, and coin-based wallet system.",
                tags: ["FLUTTER", "AGORA SDK", "FIREBASE", "BLOC"],
                number: "01"
              },
              {
                name: "KEYROUTE",
                subtitle: "Travel & Transport App",
                description: "Comprehensive booking platform with vendor dashboards, location APIs, and route management for seamless travel experiences.",
                tags: ["FLUTTER", "MAPS API", "REST API", "PROVIDER"],
                number: "02"
              },
              {
                name: "CEROBIZ ERP",
                subtitle: "Business Management",
                description: "Enterprise resource planning mobile application with real-time tax tracking, sales monitoring, invoice printing, and API synchronization.",
                tags: ["FLUTTER", "REST API", "HIVE", "PDF GEN"],
                number: "03"
              },
              {
                name: "HAPPY NIKAH",
                subtitle: "Matrimony Platform",
                description: "Modern matrimony application featuring role-based authentication, real-time messaging, and location-based search functionality.",
                tags: ["FLUTTER", "FIREBASE", "GETX", "MESSAGING"],
                number: "04"
              }
            ].map((project, i) => (
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
                          <p className="text-xl text-gray-500">{project.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-xl text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-4 py-2 border border-gray-700 text-sm tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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

      {/* Skills Section */}
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
            {[
              {
                title: "LANGUAGES & FRAMEWORKS",
                items: ["Dart", "Flutter", "PHP", "CodeIgniter"]
              },
              {
                title: "STATE MANAGEMENT",
                items: ["BLoC", "Provider", "Riverpod", "Getx"]
              },
              {
                title: "MOBILE PLATFORMS",
                items: ["Android", "iOS", "Cross-Platform", "Play Store", "App Store"]
              },
              {
                title: "APIS & DATABASES",
                items: ["REST APIs", "Firebase", "Hive", "Dio", "HTTP"]
              },
              {
                title: "TOOLS & PLATFORMS",
                items: ["Git", "GitHub", "Xcode", "TestFlight", "Postman"]
              },
              {
                title: "DESIGN & METHODS",
                items: ["UI/UX", "Figma", "Photoshop", "Agile", "Project Mgmt"]
              }
            ].map((category, i) => (
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

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-32 px-6 flex items-center bg-white text-black">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-9xl font-bold mb-12">
              LET'S WORK
              <br />
              TOGETHER
            </h2>

            <div className="grid md:grid-cols-2 gap-16 mt-20">
              <div>
                <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed mb-12">
                  Have a project in mind? Let's create something extraordinary together.
                </p>

                <a
                  href="mailto:mzofficial049@gmail.com"
                  className="inline-flex items-center gap-4 text-2xl font-bold group"
                >
                  GET IN TOUCH
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-2">EMAIL</h3>
                  <a
                    href="mailto:mzofficial049@gmail.com"
                    className="text-2xl hover:opacity-60 transition-opacity"
                  >
                    mzofficial049@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-2">PHONE</h3>
                  <a
                    href="tel:+918086851333"
                    className="text-2xl hover:opacity-60 transition-opacity"
                  >
                    +91 8086851333
                  </a>
                </div>

                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-2">SOCIAL</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/MUHAMMEDZAMILC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:opacity-60 transition-opacity"
                    >
                      GitHub
                    </a>
                    <span>/</span>
                    <a
                      href="https://in.linkedin.com/in/muhammed-zamil-c-4506ab243"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:opacity-60 transition-opacity"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© 2025 MUHAMMED ZAMIL C</p>
        </div>
      </footer>
    </div>
  );
};

export default App;