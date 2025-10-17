"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Calendar,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

export default function Education() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const educationData = [
    {
      id: 1,
      degree: "Secondary School Certificate",
      shortDegree: "SSC",
      institution: "Feni Govt Pilot High School",
      year: "2020",
      result: "GPA 5.00",
      duration: "2015 — 2020",
      location: "Feni, Bangladesh",
      description:
        "Completed secondary education with outstanding results in Science group, establishing a strong foundation in analytical thinking and scientific methodology.",
      achievements: ["Golden GPA 5.00", "Science Group", "Board Scholarship"],
      icon: BookOpen,
      accentColor: "from-amber-400 to-orange-500",
      glowColor: "shadow-amber-500/20",
    },
    {
      id: 2,
      degree: "Diploma in Computer Science",
      shortDegree: "Diploma CST",
      institution: "Feni Polytechnic Institute",
      year: "2024",
      result: "CGPA 3.46",
      duration: "2020 — 2024",
      location: "Feni, Bangladesh",
      description:
        "Specialized in software development, web technologies, and computer fundamentals with hands-on experience in modern programming paradigms and system architecture.",
      achievements: [
        "Software Development",
        "Web Technologies",
        "Database Management",
      ],
      icon: GraduationCap,
      accentColor: "from-blue-400 to-cyan-500",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: 3,
      degree: "Bachelor of Science in CSE",
      shortDegree: "BSc CSE",
      institution: "Bangladesh University of Business & Technology",
      year: "Present",
      result: "Currently Enrolled",
      duration: "2024 — Present",
      location: "Dhaka, Bangladesh",
      description:
        "Pursuing advanced studies in Computer Science and Engineering with focus on artificial intelligence, machine learning, and cutting-edge software engineering practices.",
      achievements: [
        "Computer Science",
        "Software Engineering",
        "AI & Machine Learning",
      ],
      icon: Sparkles,
      accentColor: "from-emerald-400 to-teal-500",
      glowColor: "shadow-emerald-500/20",
    },
  ];

  const itemRefs = useRef([]);

  return (
    <div
      id="education"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-blue-500/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-500/5 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 sm:mb-8 flex items-center justify-center gap-3 sm:gap-4"
            >
              <div className="h-px w-8 sm:w-16 bg-gray-700" />
              <span className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-gray-400 uppercase font-light">
                Academic Journey
              </span>
              <div className="h-px w-8 sm:w-16 bg-gray-700" />
            </motion.div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 sm:mb-8 tracking-tight px-4">
              Education
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light text-balance px-4">
              A continuous pursuit of knowledge through formal education,
              <br className="hidden sm:block" />
              building expertise in technology and innovation.
            </p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16 sm:mt-20"
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs tracking-widest text-gray-400 uppercase">
                  Scroll to explore
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section
        ref={containerRef}
        className="relative py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-20 sm:space-y-24 md:space-y-32"
          >
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;

              return (
                <motion.div
                  key={edu.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start">
                    {/* Year Badge - Mobile Top, Desktop Left */}
                    <div className="md:col-span-2 flex justify-center md:justify-end mb-4 md:mb-0">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex flex-col items-center md:items-end"
                      >
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 tracking-tight">
                          {edu.year}
                        </span>
                        <div
                          className={`mt-1 sm:mt-2 h-px w-8 sm:w-12 bg-gradient-to-r ${edu.accentColor}`}
                        />
                      </motion.div>
                    </div>

                    {/* Main Content Card */}
                    <div className="md:col-span-10">
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="group relative"
                      >
                        {/* Glow Effect on Hover */}
                        <div
                          className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-r ${edu.accentColor} opacity-0 group-hover:opacity-10 blur-xl sm:blur-2xl transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                        />

                        {/* Card */}
                        <div className="relative bg-gray-900/50 border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
                            {/* Icon */}
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${edu.accentColor} flex items-center justify-center ${edu.glowColor} shadow-lg mx-auto sm:mx-0`}
                            >
                              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                            </motion.div>

                            {/* Title & Institution */}
                            <div className="flex-1 min-w-0 text-center sm:text-left">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-2 sm:mb-3 tracking-tight text-balance">
                                {edu.degree}
                              </h3>
                              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light">
                                {edu.institution}
                              </p>
                            </div>

                            {/* Result Badge - Desktop */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className={`hidden sm:flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r ${edu.accentColor} text-white text-xs md:text-sm font-medium shadow-lg ${edu.glowColor} flex-shrink-0`}
                            >
                              {edu.result}
                            </motion.div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-balance text-sm sm:text-base">
                            {edu.description}
                          </p>

                          {/* Meta Information */}
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
                            <div className="flex items-center gap-2 justify-center sm:justify-start">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center sm:justify-start">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>

                          {/* Mobile Result Badge */}
                          <div className="sm:hidden mb-4 flex justify-center">
                            <div
                              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${edu.accentColor} text-white text-xs font-medium shadow-lg ${edu.glowColor}`}
                            >
                              {edu.result}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {edu.achievements.map((achievement, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-xs font-light backdrop-blur-sm"
                              >
                                {achievement}
                              </motion.span>
                            ))}
                          </div>

                          {/* Decorative Corner Element */}
                          <div
                            className={`absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br ${edu.accentColor} opacity-5 rounded-bl-full`}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < educationData.length - 1 && (
                    <div className="hidden md:block absolute left-[8.333%] top-full h-20 sm:h-24 md:h-32 w-px">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-full w-full bg-gradient-to-b from-gray-700 to-transparent origin-top"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-16 sm:h-20 md:h-24 lg:h-32" />

      {/* Global CSS */}
      <style jsx global>{`
        * {
          border-color: rgba(255, 255, 255, 0.1);
        }

        body {
          background: #000;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
