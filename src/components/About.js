
'use client'
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Target,
  Award,
  Lightbulb,
  ArrowRight,
  User,
  Coffee,
  Zap,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Download,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "20+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Satisfaction Rate" },
];

const skills = [
  { name: "Frontend Development", icon: "💻" },
  { name: "Backend Development", icon: "⚙️" },
  { name: "Computer Science", icon: "🎓" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "#", label: "Email" },
];

const AnimatedCounter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericEnd = parseInt(end.replace(/\D/g, '')) || 100;
      let start = 0;
      const increment = numericEnd / 50;

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericEnd) {
          setCount(numericEnd);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  const displayValue = end.includes('%') ? `${count}%` : 
                     end.includes('+') ? `${count}+` : 
                     end === "Full" ? "Full" : count.toString();

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        {displayValue}
      </div>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
};

export default function About() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80  border-b border-white/10">

      </nav>

      <section ref={heroRef} className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-700"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.p 
            className="text-sm uppercase tracking-wider text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            MORE ABOUT ME
          </motion.p>

          <div className="flex justify-center mb-12">
            <motion.div 
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={heroInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-purple-800 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <User className="w-24 h-24 text-blue-400" />
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                initial={{ opacity: 0, scale: 0 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1.2 }}
              >
                Developer
              </motion.div>
            </motion.div>
          </div>

          <motion.h1 
            className="text-4xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
          >
            Hey! I&apos;m <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">ASHRAFUL </span>
          </motion.h1>
        </motion.div>
      </section>

      <section ref={aboutRef} className="py-24 px-6 ">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                I&apos;m <span className="text-white font-semibold">Ashraful Rahat</span>, a Web developer and Computer Science student with 
                <span className="text-purple-400"> 3+ years of experience</span>. I specialize in building clean, responsive, and dynamic 
                websites using HTML, CSS, JavaScript, React, NextJS, PostgreSQL, Prisma, and MongoDB.
              </p>
              <p>
                I&lsquo;m always leveling up my skills and currently diving deeper into backend development and 
                DevOps. Whether it&apos;s full-time or freelance, I&lsquo;m open to exciting opportunities 
                where I can grow and build dope stuff with amazing people.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     


      
    </div>
  );
}
