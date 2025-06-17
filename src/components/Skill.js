'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", icon: "🌐", color: "from-[#e34f26] to-[#ef652a]", category: "Frontend" },
  { name: "CSS", icon: "🎨", color: "from-[#264de4] to-[#2965f1]", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", color: "from-[#f0db4f] to-[#f7e018]", category: "Frontend" },
  { name: "TypeScript", icon: "📘", color: "from-[#3178c6] to-[#007acc]", category: "Frontend" },
  { name: "ReactJS", icon: "⚛️", color: "from-[#61dafb] to-[#00d8ff]", category: "Frontend" },
  { name: "NextJS", icon: "▲", color: "from-[#000000] to-[#1a1a1a]", category: "Frontend" },

  { name: "Tailwind CSS", icon: "💨", color: "from-[#38bdf8] to-[#0ea5e9]", category: "Styling" },
  { name: "Framer Motion", icon: "🎭", color: "from-[#ffffff] to-[#f207f2]", category: "Styling" },
  { name: "Shadcn/ui", icon: "🎯", color: "from-[#1f2937] to-[#334155]", category: "Styling" },

  { name: "NodeJS", icon: "🟢", color: "from-[#3c873a] to-[#68a063]", category: "Backend" },
  { name: "ExpressJS", icon: "🚀", color: "from-[#303030] to-[#444444]", category: "Backend" },
  { name: "MongoDB", icon: "🍃", color: "from-[#47a248] to-[#4db33d]", category: "Backend" },
  { name: "MySQL", icon: "🐬", color: "from-[#00758f] to-[#00618a]", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", color: "from-[#336791] to-[#2f5d88]", category: "Backend" },
  { name: "Prisma", icon: "⚡", color: "from-[#0c344b] to-[#1b4965]", category: "Backend" },

  { name: "Git", icon: "📝", color: "from-[#f05032] to-[#e44e2b]", category: "Tools" },
  { name: "GitHub", icon: "🐙", color: "from-[#171515] to-[#333333]", category: "Tools" },
  { name: "Vercel", icon: "▲", color: "from-[#000000] to-[#111111]", category: "Tools" },
  { name: "Postman", icon: "📮", color: "from-[#ff6c37] to-[#f76935]", category: "Tools" },
  { name: "Zustand", icon: "🐻", color: "from-[#ffcc00] to-[#fbbf24]", category: "Tools" },
  { name: "Zod", icon: "🛡️", color: "from-[#8250df] to-[#7e3ff2]", category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Styling", "Tools"];

const roles = [
  "FULL STACK DEVELOPER",
  "REACT SPECIALIST",
  "UI/UX ENTHUSIAST",
  "CODE ARCHITECT",
  "PROBLEM SOLVER",
  "TECH INNOVATOR"
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* 🌌 Background: radial blobs + subtle grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-gray-400 mb-8"
          >
            I CONSTANTLY TRY TO IMPROVE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 relative"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 text-3xl to-cyan-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-md text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Technologies and tools I use to craft exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-24"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`relative bg-gradient-to-br ${skill.color} p-0.5 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer`}
              >
                <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 hover:bg-black/70 transition-all duration-500 relative overflow-hidden h-28 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <span className="text-2xl mb-2 group-hover:scale-125 transition-all duration-500 relative z-10">
                    {skill.icon}
                  </span>
                  <span className="font-semibold text-white text-center text-sm group-hover:text-gray-100 transition-colors duration-500 relative z-10">
                    {skill.name}
                  </span>
                  <div className="absolute top-2 right-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Roles Marquee */}
        <div className="relative overflow-hidden py-8 mb-12">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...roles, ...roles].map((role, index) => (
              <span
                key={index}
                className="mx-8 text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text"
              >
                {role} ✦
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Inline scroll animation style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
