
'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Server, Database, Palette, Zap } from "lucide-react";
import { ShinyButton } from "./shiny-button";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces using modern frameworks and best practices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust server-side applications with scalable architecture and secure APIs.",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient database schemas and implementing optimized data management solutions.",
    technologies: ["Prisma", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Creating seamless experiences across all devices with responsive design principles.",
    technologies: ["React Native", "PWA", "Responsive Design"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting beautiful and intuitive user experiences with modern design principles.",
    technologies: ["Figma", "Framer Motion", "Design Systems"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, efficiency, and exceptional user experience.",
    technologies: ["Web Vitals", "Caching", "Code Splitting"]
  }
];

export default function WhatIDo() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-black relative overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        ></motion.div>
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-xl"
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6 font-medium"
          >
            SERVICES I PROVIDE
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-3xl lg:text-3xl font-bold text-white mb-6"
          >
            What I{" "}
            <span className="relative inline-block">
              <motion.span 
                className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Do
              </motion.span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent blur-lg"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.span>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="text- text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Specializing in modern web development with focus on clean code and exceptional user experiences
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <motion.div 
                className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 transition-all duration-500 overflow-hidden"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                ></motion.div>
                
                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["200% 0%", "-200% 0%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  ></motion.div>
                </motion.div>

                {/* Icon */}
                <div className="relative mb-8">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-zinc-800/80 rounded-2xl border border-zinc-700 group-hover:bg-zinc-700/80 group-hover:border-zinc-600 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      initial={false}
                      whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.icon className="w-8 h-8 text-white/90 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-semibold bg-zinc-800/60 text-gray-300 rounded-lg border border-zinc-700/50 hover:bg-zinc-700/60 hover:border-zinc-600/50 hover:text-white transition-all duration-300 cursor-default"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
<div className="flex justify-center items-center">
  <button className="relative px-8 mt-6 py-3.5 text-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 overflow-hidden group">
    <span className="relative z-10">Let&apos;s Work Together</span>
    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
  </button>
</div>
</div>
      
   
    </section>
  );
}
