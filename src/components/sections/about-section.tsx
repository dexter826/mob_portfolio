'use client';

import React from 'react';
import { FadeIn, AnimatedText, ContactButton } from '../ui';
import { PERSONAL_INFO, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { GraduationCap, User } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  const { language, t } = useLanguage();
  const bioText = t(PERSONAL_INFO.bio);

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden select-none bg-[#0C0C0C]"
    >
      {/* 4 Corner 3D Decorative Assets from Visual Language */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decorative Asset"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Decorative Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Asset"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Asset"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="flex flex-col items-center max-w-4xl z-20">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-8 sm:mb-12 md:mb-14">
            {t(UI_LABELS.about.title)}
          </h2>
        </FadeIn>

        {/* Character-by-character animated paragraph (100% authentic bio) */}
        <div className="mb-10 sm:mb-12 px-4">
          <AnimatedText
            key={bioText}
            text={bioText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px] text-[clamp(1.05rem,2.2vw,1.4rem)] mx-auto"
          />
        </div>

        {/* Personal Quote */}
        <FadeIn delay={0.15} y={20} className="mb-12">
          <p className="font-mono text-xs sm:text-sm italic text-[#D7E2EA]/60 max-w-md mx-auto">
            &ldquo;{t(PERSONAL_INFO.quote)}&rdquo;
          </p>
        </FadeIn>

        {/* Education & Profile Cards (Separated from Experience) */}
        <FadeIn delay={0.2} y={20} className="w-full max-w-2xl mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {/* Education Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#141414] border border-[#D7E2EA]/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#D7E2EA]/60 text-xs font-mono uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>{t(UI_LABELS.about.education)}</span>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-white leading-snug">
                  {t(PERSONAL_INFO.education.school)}
                </h4>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1">
                  {t(PERSONAL_INFO.education.major)}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs font-mono">
                <span className="text-[#D7E2EA]/60">{PERSONAL_INFO.education.period}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                  GPA: {PERSONAL_INFO.education.gpa}
                </span>
              </div>
            </div>

            {/* Profile Info Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#141414] border border-[#D7E2EA]/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#D7E2EA]/60 text-xs font-mono uppercase tracking-wider mb-2">
                  <User className="w-4 h-4 text-[#D7E2EA]" />
                  <span>{t(UI_LABELS.about.info)}</span>
                </div>
                <div className="space-y-2 mt-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D7E2EA]/50 block">
                      {t(UI_LABELS.about.birthDate)}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.birthDate}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D7E2EA]/50 block">
                      {t(UI_LABELS.hero.basedIn)}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {t(PERSONAL_INFO.basedIn)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono flex items-center justify-between text-[#D7E2EA]/60">
                <span>STATUS</span>
                <span className="text-white font-bold">{t(PERSONAL_INFO.status)}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.25} y={20}>
          <ContactButton
            onClick={onContactClick}
            label={language === 'vi' ? 'Liên hệ ngay' : 'Contact me'}
          />
        </FadeIn>
      </div>
    </section>
  );
}
