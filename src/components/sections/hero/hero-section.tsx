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
    <section className="min-h-[100dvh] h-[100dvh] w-full flex flex-col justify-between overflow-x-clip relative select-none bg-surface-base">
      {/* Top Navbar */}
      <HeroNavbar onContactClick={onContactClick} />

      {/* Middle Content: Heading on top, Avatar below on mobile; Anchored bottom-center on desktop */}
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 px-2 sm:px-4 md:static md:flex-initial md:w-full md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeCustom }}
          className="w-full flex items-center justify-center z-0 px-2 sm:px-4 md:px-6 md:-mt-16 lg:-mt-20"
        >
          <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-center select-none w-full text-[clamp(2.6rem,12.8vw,14.8vw)]">
            Hi, i&apos;m minh
          </h1>
        </motion.div>

        {/* Portrait: In-flow seamless blend below heading on mobile; Anchored bottom-center on desktop */}
        <HeroAvatar />
      </div>

      {/* Bottom Bar: 100% Authentic Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: easeCustom }}
        className="flex justify-between items-end pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-12 w-full z-20 relative gap-3"
      >
        <div className="flex flex-col gap-0.5 sm:gap-1 max-w-[240px] sm:max-w-[360px] md:max-w-[460px]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-[15px] leading-tight">
              {t(PERSONAL_INFO.role)}
            </span>
            <span className="hidden sm:inline text-text-muted">•</span>
            <span className="text-text-muted text-[11px] sm:text-sm md:text-[15px] leading-tight">
              {t(PERSONAL_INFO.basedIn)}
            </span>
          </div>
          <p className="text-text-muted font-mono text-[11px] sm:text-xs italic line-clamp-2 leading-relaxed mt-0.5">
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
