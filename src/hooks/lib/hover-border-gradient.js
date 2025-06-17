'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/hooks/lib/utils';

export function HoverBorderGradient({
  children,
  className,
  containerClassName,
  as: Component = 'button',
  duration = 1,
  clockwise = true,
  ...props
}) {
  // State and logic for rotating gradient
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState('TOP');

  const rotateDirection = (currentDirection) => {
    const directions = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    BOTTOM: 'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    RIGHT: 'radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
  };

  const highlight =
    'radial-gradient(75% 181.15% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)';

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <div
      className={cn(
        'relative group inline-block rounded-xl p-[2px]', // original border thickness
        containerClassName
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover gradient border (simple fade in/out) */}
      <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none " />

      {/* Actual button content */}
      <Component
        className={cn(
          'relative z-10 rounded-xl dark:bg-black text-black dark:text-white transition-colors duration-300',
          className
        )}
        {...props}
      >
        {children}
      </Component>

      {/* Rotating blur gradient overlay on border */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-0"
        style={{ filter: 'blur(3px)' }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: 'linear', duration: duration }}
      />
      {/* Inner black overlay to hide the center blur */}
      <div className="absolute inset-[2px] rounded-xl bg-black/20 dark:bg-black/40 pointer-events-none z-10" />
    </div>
  );
}
