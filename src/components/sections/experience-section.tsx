'use client';

import React from 'react';
import { FadeIn } from '../ui';
import { EXPERIENCE, SKILLS, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { ExternalLink } from 'lucide-react';

export function ExperienceSection() {
  const { language, t } = useLanguage();

  return (
    <section
      id="experience"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] leading-none mb-4 tracking-tight">
            {t(UI_LABELS.experience.title)}
          </h2>
          <p className="font-mono text-center text-xs sm:text-sm uppercase tracking-widest text-[#0C0C0C]/60 mb-16 sm:mb-20 md:mb-24">
            {language === 'vi'
              ? 'Lịch sử công tác và kinh nghiệm thực chiến'
              : 'Work history & professional production roles'}
          </p>
        </FadeIn>

        {/* 1. Work Experience Milestones (Strictly Work Only, No Education) */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15 mb-20 sm:mb-24">
          {EXPERIENCE.map((item, index) => {
            const number = `0${index + 1}`;
            return (
              <FadeIn
                key={`${item.company}-${item.period}`}
                delay={index * 0.1}
                y={20}
                className="flex flex-col md:flex-row md:items-start justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 md:gap-8 group hover:bg-[#0C0C0C]/[0.02] transition-colors"
              >
                {/* Number */}
                <div className="font-black text-[clamp(2.5rem,8vw,110px)] text-[#0C0C0C] leading-none min-w-[100px] sm:min-w-[140px] md:min-w-[180px] select-none">
                  {number}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0C0C0C]/70 bg-[#0C0C0C]/5 px-2.5 py-0.5 rounded">
                      {item.period}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#0C0C0C]/60 hover:text-[#0C0C0C] transition-colors"
                      >
                        <span>{t(UI_LABELS.experience.viewCompany)}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-bold uppercase text-[clamp(1.15rem,2.2vw,1.9rem)] text-[#0C0C0C] leading-snug">
                    {t(item.role)}
                  </h3>
                  <h4 className="font-medium text-sm sm:text-base text-[#0C0C0C]/80 mt-0.5">
                    {item.company}
                  </h4>

                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.5vw,1.1rem)] text-[#0C0C0C] opacity-75 mt-2 sm:mt-3">
                    {t(item.description)}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* 2. Verified Skills directly from portfolio.ts */}
        <FadeIn delay={0.2} y={30}>
          <div className="pt-8 border-t border-[#0C0C0C]/15">
            <div className="text-center md:text-left mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0C0C0C]/50">
                {language === 'vi' ? 'Năng lực cốt lõi' : 'Core Competencies'}
              </span>
              <h3 className="font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#0C0C0C] mt-1">
                {t(UI_LABELS.skills.title)}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {SKILLS.map((skillGroup, gIdx) => (
                <div
                  key={gIdx}
                  className="p-6 rounded-2xl bg-[#0C0C0C]/[0.03] border border-[#0C0C0C]/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#0C0C0C]/60 block mb-3 font-semibold">
                      {t(skillGroup.category)}
                    </span>
                    <ul className="space-y-2">
                      {skillGroup.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm font-medium text-[#0C0C0C]/90 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0C0C0C] shrink-0" />
                          <span>{typeof item === 'string' ? item : t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
