'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Server,
  Globe,
  ChevronDown,
  ArrowRight,
  DownloadIcon,
} from 'lucide-react';
import TextPressure from './TextPressure';

import { AnimatedGradientTextDemo } from '@/hooks/lib/AnimatedGradientText';
import { ShinyButton } from './shiny-button';


const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const techIcons = [
    {
      Icon: Database,
      name: 'MongoDB',
      color: 'text-green-400',
      bg: 'bg-green-400/10',
    },
    {
      Icon: Code,
      name: 'React',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      Icon: Globe,
      name: 'Node.js',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

  

  <div className='mt-10'> <AnimatedGradientTextDemo />
  </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
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
            minFontSize={66}
          />
          <motion.div
            className="text-4xl md:text-6xl font-light bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Developer
          </motion.div>
        </motion.div>

        {/* Subtitle */}
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

        {/* Tech badges */}
        {/* <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {[
            'MongoDB',
            'Express.js',
            'React',
            'Node.js',
            'TypeScript',
            'Next.js',
          ].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div> */}

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <ShinyButton className="px-6 py-3 rounded-full">
            view Portfolio
          </ShinyButton>
          <ShinyButton className="px-6 py-3 rounded-full">
            Download Resume
          </ShinyButton>
        </motion.div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default Banner;
