'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui';
import { PERSONAL_INFO, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { easeCustom } from '@/lib/motion';
import { HeroNavbar } from './hero-navbar';
import { HeroAvatar } from './hero-avatar';

export interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="h-screen w-full flex flex-col justify-between overflow-x-clip relative select-none bg-surface-base">
      {/* Top Navbar */}
      <HeroNavbar onContactClick={onContactClick} />

      {/* Hero Heading: Grand font size, shifted upward into upper-mid background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: easeCustom }}
        className="w-full flex items-center justify-center -z-0 px-2 sm:px-4 md:px-6 -mt-8 sm:-mt-14 md:-mt-20"
      >
        <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-center select-none w-full text-[clamp(2.8rem,13.6vw,14.8vw)]">
          Hi, i&apos;m minh
        </h1>
      </motion.div>

      {/* Centered 3D Portrait with Magnet tilt */}
      <HeroAvatar />

      {/* Bottom Bar: 100% Authentic Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: easeCustom }}
        className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-12 w-full z-20 relative"
      >
        <div className="flex flex-col gap-1 max-w-[260px] sm:max-w-[360px] md:max-w-[460px]">
          <p className="text-text-primary font-medium uppercase tracking-wider text-xs sm:text-sm md:text-[15px] leading-snug">
            {t(PERSONAL_INFO.role)} • {t(PERSONAL_INFO.basedIn)}
          </p>
          <p className="text-text-muted font-mono text-[11px] sm:text-xs italic line-clamp-2 leading-relaxed">
            &ldquo;{t(PERSONAL_INFO.quote)}&rdquo;
          </p>
        </div>

        <Button variant="gradient-pill" onClick={onContactClick}>
          {t(UI_LABELS.common.contactMe)}
        </Button>
      </motion.div>
    </section>
  );
}
