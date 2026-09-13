import { Variants } from 'motion/react';

export const easeExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

// Numeric mirrors of the M.O.B Signal runtime motion tokens for JS choreography.
export const dsMotion = {
  fast: 0.12,
  normal: 0.18,
  slow: 0.26,
  panel: 0.32,
  reveal: 0.6,
  pulse: 1.8,
} as const;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: dsMotion.fast,
      delayChildren: dsMotion.normal,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: dsMotion.reveal,
      ease: easeExpo as any,
    },
  },
};

export const fadeInDigital: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: dsMotion.reveal,
      ease: easeExpo as any,
    },
  },
};
