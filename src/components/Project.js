"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      id: 1,
      title: "Paithara High School",
      description:
        "Complete school management system with dashboard, results, and admin panel. Features student portal, result publishing, class routine management, and full CRUD operations.",
      image: "/images/paithara.png",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express", icon: SiExpress, color: "text-white" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Framer", icon: SiFramer, color: "text-white" },
      ],
      features: [
        "Student Result Management System",
        "Class Routine & Schedule Management",
        "Teacher & Student CRUD Operations",
        "Admin Dashboard with Analytics",
        "Real-time Notifications",
      ],
      liveLink: "https://paithara-frontend.vercel.app/",
      githubFrontend: "https://github.com/ashraful-rahat/Paithara-frontend",
      githubBackend: "https://github.com/ashraful-rahat/Paithara-backhand",
      category: "School Management",
    },
    {
      id: 2,
      title: "Way Housing Ltd",
      description:
        "Real estate platform with property filtering and user dashboard. Complete solution for property management with dynamic content and admin control panel.",
      image: "/images/way.png",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express", icon: SiExpress, color: "text-white" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Framer", icon: SiFramer, color: "text-white" },
      ],
      features: [
        "Advanced Property Filtering System",
        "User Dashboard & Property Management",
        "Dynamic Content Management",
        "Real-time Property Search",
        "Admin Control Panel",
      ],
      liveLink: "https://way-frontend-rosy.vercel.app/",
      githubFrontend: "https://github.com/ashraful-rahat/way-frontend",
      githubBackend: "https://github.com/ashraful-rahat/Way-backhend",
      category: "Real Estate",
    },
    {
      id: 3,
      title: "Gym Fitness Center",
      description:
        "Complete gym management system with class booking, trainer management, and Stripe payment integration. Separate dashboards for admin, trainers, and students.",
      image: "/images/fitness.png",
      technologies: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express", icon: SiExpress, color: "text-white" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      ],
      features: [
        "Class Booking & Schedule Management",
        "Trainer & Student Dashboards",
        "Stripe Payment Integration",
        "Admin Control Panel",
        "Role-based Access Control",
      ],
      liveLink: "https://assigment-12-53904.web.app/",
      githubFrontend: "https://github.com/ashraful-rahat/Gym-Center-client",
      githubBackend: "https://github.com/ashraful-rahat/Gym-center-server",
      category: "Fitness Management",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className=" overflow-hidden pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 flex items-center justify-center gap-3"
            >
              <div className="h-px w-12 bg-white/20" />
              <span className="text-sm md:text-base tracking-[0.3em] text-gray-400 uppercase font-light">
                Selected Work
              </span>
              <div className="h-px w-12 bg-white/20" />
            </motion.div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight text-balance">
              Featured Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto text-balance">
              A collection of full-stack applications showcasing modern web
              development practices and elegant user experiences.
            </p>
          </motion.div>
        </div>

        {/* Decorative element */}
        <motion.div
          style={{ y }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"
        />
      </section>

      {/* Projects Grid */}
      <section ref={containerRef} className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-32"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Project Image */}
                  <motion.div
                    className={`relative ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    {/* Category */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block text-xs md:text-sm text-gray-400 tracking-wider uppercase font-light border border-gray-800 px-4 py-2 rounded-full bg-black/50">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight text-balance"
                    >
                      {project.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-base md:text-lg text-gray-300 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-3"
                    >
                      {project.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors"
                        >
                          <tech.icon className={`w-4 h-4 ${tech.color}`} />
                          <span className="text-xs md:text-sm text-white font-light">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </motion.div>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-2"
                    >
                      <h3 className="text-sm text-gray-400 uppercase tracking-wider font-light mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm md:text-base text-gray-300"
                          >
                            <span className="text-gray-500 mt-1.5">—</span>
                            <span className="font-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex flex-wrap gap-3 pt-4"
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all group/btn"
                      >
                        <span>View Live</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 text-white rounded-full text-sm font-light hover:border-gray-600 transition-all group/btn"
                      >
                        <Github className="w-4 h-4" />
                        <span>Frontend</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 text-white rounded-full text-sm font-light hover:border-gray-600 transition-all group/btn"
                      >
                        <Github className="w-4 h-4" />
                        <span>Backend</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px bg-gray-800 mt-32 origin-left"
                  />
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
