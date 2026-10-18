'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Magnet, ContactButton } from '../ui';
import { PERSONAL_INFO, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="h-screen w-full flex flex-col justify-between overflow-x-clip relative select-none">
      {/* Top Navbar: Guaranteed mount animation, high z-index */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full z-40 relative px-6 md:px-12 pt-6 md:pt-8"
      >
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
            <a
              href="#about"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
            >
              {t(UI_LABELS.nav.about)}
            </a>
            <a
              href="#experience"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
            >
              {t(UI_LABELS.nav.experience)}
            </a>
            <a
              href="#projects"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
            >
              {t(UI_LABELS.nav.projects)}
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* VI / EN Language Switcher */}
            <div className="flex items-center rounded-full bg-[#181818] border border-[#D7E2EA]/20 p-1 text-xs font-mono">
              <button
                type="button"
                onClick={() => setLanguage('vi')}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                  language === 'vi'
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] font-bold'
                    : 'text-[#D7E2EA]/60 hover:text-white'
                }`}
                aria-label="Chuyển sang tiếng Việt"
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] font-bold'
                    : 'text-[#D7E2EA]/60 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={onContactClick}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              {t(UI_LABELS.nav.contact)}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Heading: Grand font size, shifted upward into upper-mid background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex items-center justify-center -z-0 px-2 sm:px-4 md:px-6 -mt-8 sm:-mt-14 md:-mt-20"
      >
        <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-center select-none w-full text-[clamp(2.8rem,13.6vw,14.8vw)]">
          Hi, i&apos;m minh
        </h1>
      </motion.div>

      {/* Centered 3D Portrait: Anchored at bottom-0 so it layers elegantly in front without obscuring text */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/minh-3d-avatar.png"
              alt="3D Portrait of Minh"
              className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[460px] object-contain drop-shadow-2xl pointer-events-none select-none"
              loading="eager"
            />
          </Magnet>
        </motion.div>
      </div>

      {/* Bottom Bar: 100% Authentic Data with generous breathing room */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-12 w-full z-20 relative"
      >
        <div className="flex flex-col gap-1 max-w-[260px] sm:max-w-[360px] md:max-w-[460px]">
          <p className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-[15px] leading-snug">
            {t(PERSONAL_INFO.role)} • {t(PERSONAL_INFO.basedIn)}
          </p>
          <p className="text-[#D7E2EA]/50 font-mono text-[11px] sm:text-xs italic line-clamp-2 leading-relaxed">
            &ldquo;{t(PERSONAL_INFO.quote)}&rdquo;
          </p>
        </div>

        <ContactButton
          onClick={onContactClick}
          label={language === 'vi' ? 'Liên hệ ngay' : 'Contact me'}
        />
      </motion.div>
    </section>
  );
}
