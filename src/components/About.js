"use client";
import { motion, useInView } from "framer-motion";
import {
  Download,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function About() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [isImageVisible, setIsImageVisible] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 relative z-10"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Top Gradient Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* About Me Container */}
          <div className="relative">
            {/* Left decoration */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full hidden lg:block"></div>
            {/* Right decoration */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full hidden lg:block"></div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 flex items-center justify-center gap-3"
              >
                <div className="h-px w-12 bg-white/20" />
                <span className="text-sm md:text-base tracking-[0.3em] text-gray-400 uppercase font-light">
                  More About Me
                </span>
                <div className="h-px w-12 bg-white/20" />
              </motion.div>

              {/* Profile */}
              <motion.div
                className="relative mb-8 inline-block"
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 mx-auto border border-white/10">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <User className="w-16 h-16 md:w-20 md:h-20 text-blue-400" />
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    heroInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 1.2 }}
                >
                  Developer
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.6 }}
              >
                Hey! I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ASHRAFUL
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                Full Stack Developer & Computer Science Student passionate about{" "}
                <span className="text-blue-400">
                  amazing digital experiences
                </span>
              </motion.p>

              {/* About Text Section */}
              <motion.div
                className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto mb-8 space-y-6 text-lg lg:text-xl leading-relaxed text-gray-300 bg-white/5 p-6 lg:p-10 rounded-2xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 1 }}
              >
                <p>
                  I&apos;m{" "}
                  <span className="text-white font-semibold">
                    Ashraful Rahat
                  </span>
                  , a passionate Web Developer and Computer Science student with{" "}
                  <span className="text-blue-400 font-medium">
                    3+ years of experience
                  </span>{" "}
                  in crafting digital solutions.
                </p>
                <p>
                  I specialize in building{" "}
                  <span className="text-purple-400">
                    scalable web applications
                  </span>{" "}
                  using React, Next.js, Node.js, and MongoDB. My focus is on
                  creating clean, efficient, and user-friendly experiences.
                </p>

                {/* Tooltip safe wrapper */}
                <div className="relative inline-block">
                  <p>
                    I recently completed my internship as a{" "}
                    <span
                      className="relative group cursor-pointer text-green-400 font-medium"
                      onMouseEnter={() => setIsImageVisible(true)}
                      onMouseLeave={() => setIsImageVisible(false)}
                    >
                      Frontend Developer at Codexaa Limited
                    </span>
                    , where I gained hands-on experience with{" "}
                    <span className="text-blue-400">
                      React.js, Next.js, TypeScript, and Tailwind CSS
                    </span>
                    .
                  </p>
                  {/* Tooltip outside <p> ✅ */}
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-10"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{
                      opacity: isImageVisible ? 1 : 0,
                      scale: isImageVisible ? 1 : 0.8,
                      y: isImageVisible ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="bg-black/95 p-3 rounded-xl border border-white/20 shadow-2xl backdrop-blur-sm">
                      <Image
                        src="/images/logo.png"
                        alt="Codexaa Limited Internship Certificate"
                        width={220}
                        height={160}
                        className="rounded-lg object-cover transition-all duration-300"
                      />
                      <div className="text-xs text-gray-300 mt-2 text-center">
                        Internship Certificate
                      </div>
                    </div>
                  </motion.div>
                </div>

                <p>
                  Currently diving deeper into{" "}
                  <span className="text-blue-400">backend development</span> and
                  DevOps, I&lsquo;m always eager to learn new technologies and
                  take on challenging projects.
                </p>
              </motion.div>

              {/* Download Resume */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.2 }}
              >
                <motion.button
                  onClick={() => (window.location.href = "/resume.pdf")}
                  className="flex items-center gap-2 px-6 py-3 bg-black text-white border border-white/20 rounded-full font-medium text-base hover:bg-white hover:text-black transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  Download Resume
                </motion.button>
              </motion.div>

              {/* Bottom Gradient Line */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-12" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
