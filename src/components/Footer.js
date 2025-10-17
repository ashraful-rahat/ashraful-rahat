"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Code2,
  Coffee,
  Github,
  Heart,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ashraful-rahat",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/ashraful-rahat",
      color: "hover:text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/ashraful_rahat",
      color: "hover:text-white",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:ashrafulrahat.dev@gmail.com",
      color: "hover:text-white",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black border-t border-gray-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0"
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Code2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Ashraful Islam
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md text-sm">
                Crafting digital experiences with modern technologies.
                Passionate about building scalable solutions and creating
                meaningful user interactions.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 pt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 transition-all duration-300 ${social.color} hover:border-white/50 hover:bg-gray-800 backdrop-blur-sm`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                <motion.a
                  href="mailto:ashrafulrahat.dev@gmail.com"
                  className="block text-gray-400 hover:text-white transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Email
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm">ashrafulrahat.dev@gmail.com</span>
                    <ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>

                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
                    Currently available for
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg border border-gray-800 font-medium">
                      Freelance
                    </span>
                    <span className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg border border-gray-800 font-medium">
                      Full-time
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-gray-400 text-xs md:text-sm"
            >
              <span>© {currentYear} Ashraful Islam. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-white/50 hover:bg-gray-800 transition-all duration-300 group text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        <motion.div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
      </div>
    </footer>
  );
};

export default Footer;
