'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/hooks/lib/utils'; 
import { HoverBorderGradient } from '@/hooks/lib/hover-border-gradient';



const animationProps = {
  initial: { '--x': '100%', scale: 0.8 },
  animate: { '--x': '-100%', scale: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
    type: 'spring',
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: 'spring',
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

export const ShinyButton = React.forwardRef(
  ({ children, className, icon: Icon, ...props }, ref) => {
    return (
      <HoverBorderGradient
        containerClassName="rounded-lg"
        className="rounded-lg inline-flex"
        as="div"
      >
        <motion.button
          ref={ref}
          className={cn(
            'relative flex items-center justify-center cursor-pointer rounded-lg px-6 py-2 font-medium backdrop-blur-xl border border-neutral-300/20 transition-shadow duration-300 ease-in-out',
            'shadow-lg hover:shadow-xl',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300',
            className
          )}
          style={{ '--primary': '#ffffff' }}
          {...animationProps}
          {...props}
        >
          {Icon && <Icon className="mr-2 h-5 w-5 text-white" />}
          <span
            className="relative block w-full text-sm uppercase tracking-wide text-white font-bold"
            style={{
              maskImage:
                'linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))',
              WebkitMaskImage:
                'linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
            }}
          >
            {children}
          </span>
        </motion.button>
      </HoverBorderGradient>
    );
  }
);

ShinyButton.displayName = 'ShinyButton';
