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
  const [activeNav, setActiveNav] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    // { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("ashrafulrahat34@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
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
    closed: {
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  const navItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  // ✅ Improved scroll handler with better error handling
  const handleNavClick = (item) => {
    setActiveNav(item.id);
    setIsMenuOpen(false);

    if (item.id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Wait a bit for mobile menu to close
    setTimeout(() => {
      const section = document.getElementById(item.id);
      if (section) {
        const offset = 80;
        const sectionTop = section.offsetTop - offset;

        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      } else {
        console.log(`Section with id '${item.id}' not found`);
        // Fallback: try to find by data attribute
        const fallbackSection = document.querySelector(
          `[data-section="${item.id}"]`
        );
        if (fallbackSection) {
          const offset = 80;
          const sectionTop = fallbackSection.offsetTop - offset;

          window.scrollTo({
            top: sectionTop,
            behavior: "smooth",
          });
        }
      }
    }, 300);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Section IDs for navigation */}
      <div id="home"></div>

      {/* Improved Navbar */}
      <motion.nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30"
            : "bg-transparent border-transparent"
        } rounded-full px-6 py-3 md:px-8 md:py-4 max-w-[90vw]`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
        style={{
          // Only show border when scrolled
          borderWidth: isScrolled ? "1px" : "0px",
        }}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 relative py-2 px-1 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1 + 0.8,
                duration: 0.5,
                ease: "easeOut",
              }}
              onClick={() => handleNavClick(item)}
            >
              <span className="relative z-10 whitespace-nowrap">
                {item.name}
              </span>

              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 -z-0"
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Active indicator */}
              {activeNav === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  layoutId="activeNav"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Mobile Logo/Brand - Optional */}
          <motion.span
            className="text-white text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Portfolio
          </motion.span>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <motion.div
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <X size={18} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Improved Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-2xl border-l border-white/10 z-50 md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <motion.span
                  className="text-white font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Navigation
                </motion.span>

                <motion.button
                  className="p-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col items-start gap-2 pt-8 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className="w-full py-4 px-4 text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 relative rounded-xl hover:bg-white/5 text-left"
                    variants={navItemVariants}
                    initial="closed"
                    animate="open"
                    custom={index}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item)}
                  >
                    <div className="flex items-center gap-4">
                      {activeNav === item.id && (
                        <motion.div
                          className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
                          layoutId="mobileActiveNav"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      <span
                        className={`${
                          activeNav === item.id ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>

                    {index < navItems.length - 1 && (
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-px bg-white/5"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Footer Section */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Mail size={14} className="text-blue-400" />
                    <span>fulrahat34@gmail.com</span>
                  </div>
                  <motion.button
                    onClick={copyEmail}
                    className={`p-2 rounded-full transition-all duration-300 ${
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
                </div>
              </motion.div>
            </motion.div>
          </>
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
            onClick={() => handleNavClick({ id: "contact", name: "Contact" })}
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
