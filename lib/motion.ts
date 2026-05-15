import { Variants } from 'motion/react';

export const easeExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeExpo as any,
    },
  },
};

export const fadeInDigital: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeExpo as any,
    },
  },
};

export const glitchVariants: Variants = {
  hover: {
    x: [0, -2, 2, -1, 1, 0],
    y: [0, 1, -1, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
    },
  },
};
