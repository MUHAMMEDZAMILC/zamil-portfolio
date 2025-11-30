import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-20">ABOUT ME</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <motion.p
                className="text-2xl md:text-4xl leading-relaxed text-gray-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                A passionate developer with 3+ years of experience building
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
                  Specialized in Flutter, BLoC architecture, Firebase
                  integration, and creating seamless user experiences. Proven
                  track record of reducing app load times by 30% and
                  maintaining apps with 50,000+ users.
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
  );
};

export default AboutSection;