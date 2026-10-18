'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui';
import { UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { easeCustom } from '@/lib/motion';

interface HeroNavbarProps {
  onContactClick: () => void;
}

export function HeroNavbar({ onContactClick }: HeroNavbarProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeCustom }}
      className="w-full z-40 relative px-6 md:px-12 pt-6 md:pt-8"
    >
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
          <a
            href="#about"
            className="text-text-primary font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
          >
            {t(UI_LABELS.nav.about)}
          </a>
          <a
            href="#experience"
            className="text-text-primary font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
          >
            {t(UI_LABELS.nav.experience)}
          </a>
          <a
            href="#projects"
            className="text-text-primary font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
          >
            {t(UI_LABELS.nav.projects)}
          </a>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* VI / EN Language Switcher */}
          <div className="flex items-center rounded-full bg-surface-card-hover border border-border-subtle p-1">
            <Button
              variant="tab"
              active={language === 'vi'}
              onClick={() => setLanguage('vi')}
              aria-label={t(UI_LABELS.nav.switchToVi)}
            >
              VI
            </Button>
            <Button
              variant="tab"
              active={language === 'en'}
              onClick={() => setLanguage('en')}
              aria-label={t(UI_LABELS.nav.switchToEn)}
            >
              EN
            </Button>
          </div>

          <Button variant="ghost" onClick={onContactClick}>
            {t(UI_LABELS.nav.contact)}
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
