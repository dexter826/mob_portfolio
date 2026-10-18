import type { Variants, Transition } from 'motion/react';

export const easeCustom: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const easeExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeOutBack: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

export const transitionSmooth: Transition = {
  duration: 0.6,
  ease: easeCustom,
};

export const transitionSlow: Transition = {
  duration: 0.8,
  ease: easeCustom,
};

// Numeric mirrors of runtime motion tokens for JS choreography.
export const dsMotion = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  reveal: 0.6,
  hero: 0.8,
} as const;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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
      ease: easeCustom,
    },
  },
};

export const fadeInDigital: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeCustom,
    },
  },
};
