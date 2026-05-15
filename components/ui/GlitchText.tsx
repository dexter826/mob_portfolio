'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  speed?: number;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className, 
  as: Tag = 'span',
  speed = 0.5
}) => {
  // Use a capitalized name for the component to satisfy JSX requirements
  const Component = Tag as any;

  return (
    <div className={cn("relative inline-block group", className)}>
      <Component className="relative z-10">
        {text}
      </Component>
      
      {/* Glitch layers visible on hover or according to speed */}
      <motion.span
        className="glitch-layer text-primary select-none pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 0.7,
          x: [-2, 2, -1, 1, 0],
          transition: { repeat: Infinity, duration: speed }
        }}
        aria-hidden="true"
      >
        {text}
      </motion.span>
      
      <motion.span
        className="glitch-layer text-destructive select-none pointer-events-none"
        style={{ clipPath: 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)' }}
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 0.7,
          x: [2, -2, 1, -1, 0],
          transition: { repeat: Infinity, duration: speed }
        }}
        aria-hidden="true"
      >
        {text}
      </motion.span>
    </div>
  );
};
