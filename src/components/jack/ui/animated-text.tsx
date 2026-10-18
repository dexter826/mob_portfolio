'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ children, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{children}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {children}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, index) => {
        const start = index / total;
        const end = Math.min(1, (index + 2) / total);
        return (
          <Char key={index} progress={scrollYProgress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </p>
  );
}
