'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const totalChars = characters.length;

  return (
    <p ref={elementRef} className={`relative ${className}`}>
      {characters.map((char, index) => {
        const start = index / totalChars;
        const end = start + 1 / totalChars;
        return (
          <Character
            key={`char-${index}`}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}
