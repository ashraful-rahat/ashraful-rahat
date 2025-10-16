"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Copy, Mail, Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// ✅ TextPressure client-only load (no SSR → no hydration error)
const TextPressure = dynamic(() => import("./TextPressure"), { ssr: false });

const Banner = () => {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = ["Home", "About", "Projects", "Contact"];

  const copyEmail = () => {
    navigator.clipboard.writeText("ashrafulrahat34@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const mobileMenuVariants = {
    closed: { x: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
    open: { x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const navItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navbar */}
      <motion.nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-black/80 border border-white/10"
            : "bg-black/40 border border-white/5"
        }
        md:backdrop-blur-xl rounded-full px-10 py-4`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 relative py-2 px-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.8 }}
              onClick={() => setActiveNav(item)}
            >
              {item}
              {activeNav === item && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile - Hamburger Menu */}
        <div className="md:hidden flex items-center justify-end w-full">
          <motion.button
            className="p-2 ml-90 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                <X size={20} />
              </div>
            ) : (
              <Menu size={25} />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-black border-l border-white/10 z-50 md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.button
              className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                <X size={20} />
              </div>
            </motion.button>

            <div className="flex flex-col items-start gap-8 pt-24 px-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-medium text-gray-300 hover:text-white transition-colors relative py-2"
                  variants={navItemVariants}
                  initial="closed"
                  animate="open"
                  custom={index}
                  onClick={() => {
                    setActiveNav(item);
                    setIsMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeNav === item && (
                    <motion.div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
                      layoutId="mobileActiveNav"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <TextPressure
            text="Full Stack"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={116}
          />
          <motion.div
            className="text-4xl md:text-6xl font-light bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Web Developer
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl leading-relaxed font-light"
        >
          Crafting scalable web applications with modern technologies.
          <br />
          <span className="text-white/80">
            Specializing in full-stack development with
            <span className="text-green-400 font-medium"> MongoDB</span>,
            <span className="text-gray-300 font-medium"> Express.js</span>,
            <span className="text-blue-400 font-medium"> React</span>, and
            <span className="text-green-500 font-medium"> Node.js</span>
          </span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {[
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "TypeScript",
            "Next.js",
          ].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => (window.location.href = "/contact")}
            className="flex items-center gap-2 px-6 py-3 bg-black text-white border border-white/20 rounded-full font-medium text-base hover:bg-white hover:text-black transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let&lsquo;s Connect
            <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>

          <div className="flex items-center gap-3 bg-transparent rounded-full group relative">
            <span className="text-gray-300 font-medium text-sm flex items-center gap-2">
              <Mail size={14} className="text-blue-400" />
              fulrahat34@gmail.com
            </span>
            <motion.button
              onClick={copyEmail}
              className={`p-1.5 rounded-full transition-all duration-300 ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Copy email"
            >
              <Copy size={14} />
            </motion.button>

            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 text-xs font-medium absolute -top-6 right-0 bg-green-500/10 px-2 py-1 rounded border border-green-500/20"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default Banner;
