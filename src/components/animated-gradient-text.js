'use client';

import { cn } from "@/hooks/lib/utils";



export function AnimatedGradientText({ className, children }) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient",
        className
      )}
    >
      {children}
    </span>
  );
}
