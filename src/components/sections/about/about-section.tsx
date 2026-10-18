'use client';

import React from 'react';
import {
  FadeIn,
  AnimatedText,
  Button,
  SectionContainer,
  SectionHeader,
} from '@/components/ui';
import { PERSONAL_INFO, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { AboutDecorations } from './about-decorations';
import { EducationCard } from './education-card';
import { ProfileCard } from './profile-card';

export interface AboutSectionProps {
  onContactClick: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  const { t } = useLanguage();
  const bioText = t(PERSONAL_INFO.bio);

  return (
    <SectionContainer
      id="about"
      variant="dark"
      className="min-h-screen flex flex-col items-center justify-center text-center py-24 sm:py-32"
    >
      {/* 4 Corner 3D Decorative Assets */}
      <AboutDecorations />

      {/* Central Content */}
      <div className="flex flex-col items-center max-w-4xl z-20 w-full">
        {/* Section Header */}
        <SectionHeader
          title={t(UI_LABELS.about.title)}
          theme="dark"
          align="center"
          className="mb-8 sm:mb-12 md:mb-14"
        />

        {/* Character-by-character animated paragraph (100% authentic bio) */}
        <div className="mb-10 sm:mb-12 px-4 w-full">
          <AnimatedText
            key={bioText}
            text={bioText}
            className="text-text-primary font-medium text-center leading-relaxed max-w-[640px] text-[clamp(1.05rem,2.2vw,1.4rem)] mx-auto"
          />
        </div>

        {/* Personal Quote */}
        <FadeIn delay={0.15} y={20} className="mb-12">
          <p className="font-mono text-xs sm:text-sm italic text-text-muted max-w-md mx-auto">
            &ldquo;{t(PERSONAL_INFO.quote)}&rdquo;
          </p>
        </FadeIn>

        {/* Education & Profile Cards */}
        <FadeIn delay={0.2} y={20} className="w-full max-w-2xl mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <EducationCard />
            <ProfileCard />
          </div>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.25} y={20}>
          <Button variant="gradient-pill" onClick={onContactClick}>
            {t(UI_LABELS.common.contactMe)}
          </Button>
        </FadeIn>
      </div>
    </SectionContainer>
  );
}
