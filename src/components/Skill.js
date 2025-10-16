"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skillsData = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "text-[#E34F26]",
    category: "Frontend",
  },
  { name: "CSS", icon: SiCss3, color: "text-[#1572B6]", category: "Frontend" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
    category: "Frontend",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-[#61DAFB]",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
    category: "Styling",
  },
  {
    name: "Framer",
    icon: SiFramer,
    color: "text-[#0055FF]",
    category: "Styling",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#339933]",
    category: "Backend",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-white",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47A248]",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-[#336791]",
    category: "Backend",
  },
  { name: "Git", icon: SiGit, color: "text-[#F05032]", category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "text-white", category: "Tools" },
  { name: "Vercel", icon: SiVercel, color: "text-white", category: "Tools" },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-[#FF6C37]",
    category: "Tools",
  },
];

const categories = ["All", "Frontend", "Backend", "Styling", "Tools"];

const roles = [
  "FULL STACK DEVELOPER",
  "REACT SPECIALIST",
  "UI/UX ENTHUSIAST",
  "CODE ARCHITECT",
  "PROBLEM SOLVER",
  "CREATIVE THINKER",
  "TECH INNOVATOR",
  "DIGITAL CRAFTSMAN",
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-white/20" />
              <span className="text-sm tracking-[0.3em] text-white/40 uppercase">
                Technical Expertise
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-none">
              Skills & Technologies
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit for building modern, scalable, and
              performant web applications.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 pb-20">
          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
            layout
          >
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative"
                >
                  <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 cursor-pointer h-32 flex flex-col items-center justify-center">
                    <IconComponent
                      className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-500 ${skill.color}`}
                    />
                    <span className="text-sm text-white/80 font-light tracking-wide">
                      {skill.name}
                    </span>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Fixed Marquee Section with your CSS */}
        <div className="marquee-wave">
          <div className="marquee-content">
            {[...roles, ...roles, ...roles].map((role, index) => (
              <span key={index} className="marquee-text">
                {role} <span className="mx-4">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Add your exact CSS */}
      <style jsx>{`
        .marquee-wave {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 2.5rem 0;
          background: linear-gradient(
            90deg,
            #4f46e5 0%,
            #7c3aed 20%,
            #ec4899 40%,
            #f97316 60%,
            #fbbf24 80%,
            #4f46e5 100%
          );
          box-shadow: 0 10px 40px rgba(79, 70, 229, 0.3);
        }

        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }

        .marquee-text {
          display: inline-flex;
          align-items: center;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          padding: 0 1rem;
          letter-spacing: 0.1em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 768px) {
          .marquee-text {
            font-size: 1rem;
            padding: 0 1rem;
          }

          .marquee-wave {
            padding: 1.5rem 0;
          }
        }
      `}</style>
    </div>
  );
}
