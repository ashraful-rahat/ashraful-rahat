"use client";

import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>© {currentYear} Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>by Ashraful Rahat</span>
          </motion.div>

          {/* Center Section - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="mailto:ashrafulrahat34@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-white transition-all duration-300"
              title="Email"
            >
              <Mail size={18} />
            </motion.a>

            <motion.a
              href="https://github.com/ashraful-rahat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-white transition-all duration-300"
              title="GitHub"
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-white transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
          </motion.div>

          {/* Right Section - Simple Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            <span>Full Stack Developer</span>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
        />
      </div>
    </footer>
  );
};

export default Footer;
