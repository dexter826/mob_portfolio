'use client';

import React from 'react';
import Image from 'next/image';
import { Button, FadeIn } from '@/components/ui';
import { PERSONAL_INFO, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';

export interface FooterSectionProps {
  onContactClick: () => void;
}

export function FooterSection({ onContactClick }: FooterSectionProps) {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-surface-base border-t border-border-subtle relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Monolith Logo Mark */}
        <FadeIn delay={0.1} y={15}>
          <Image
            src="/icon-192.png"
            alt="Trần Công Minh Logo"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity mb-6"
          />
        </FadeIn>

        {/* Primary Closing Headline */}
        <FadeIn delay={0.15} y={20}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-2xl text-text-primary">
            {t(UI_LABELS.footer.headline)}
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} y={20}>
          <p className="text-text-muted text-sm sm:text-base md:text-lg max-w-xl mt-3 sm:mt-4 leading-relaxed font-light">
            {t(UI_LABELS.footer.subtitle)}
          </p>
        </FadeIn>

        {/* Primary Final Call to Action */}
        <FadeIn delay={0.25} y={20} className="mt-8 sm:mt-10">
          <Button variant="gradient-pill" onClick={onContactClick}>
            {t(UI_LABELS.common.contactMe)}
          </Button>
        </FadeIn>

        {/* Social Networks & Direct Email */}
        <FadeIn delay={0.3} y={15} className="mt-12 sm:mt-16 w-full pt-8 border-t border-border-subtle/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-text-muted">
          <div className="flex items-center gap-6">
            {PERSONAL_INFO.github && (
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors uppercase tracking-wider font-mono text-xs"
              >
                GitHub
              </a>
            )}
            {PERSONAL_INFO.facebook && (
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors uppercase tracking-wider font-mono text-xs"
              >
                Facebook
              </a>
            )}
            {PERSONAL_INFO.instagram && (
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors uppercase tracking-wider font-mono text-xs"
              >
                Instagram
              </a>
            )}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-text-primary transition-colors font-mono text-xs lowercase"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <p className="text-text-muted font-mono text-[11px] sm:text-xs">
            {t(UI_LABELS.footer.rights)}
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
