import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6 flex items-center bg-white text-black"
    >
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
                Have a project in mind? Let's create something extraordinary
                together.
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
                <h3 className="text-sm tracking-widest text-gray-500 mb-2">
                  EMAIL
                </h3>
                <a
                  href="mailto:mzofficial049@gmail.com"
                  className="text-2xl hover:opacity-60 transition-opacity"
                >
                  mzofficial049@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-gray-500 mb-2">
                  PHONE
                </h3>
                <a
                  href="tel:+918086851333"
                  className="text-2xl hover:opacity-60 transition-opacity"
                >
                  +91 8086851333
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-gray-500 mb-2">
                  SOCIAL
                </h3>
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
  );
};

export default ContactSection;