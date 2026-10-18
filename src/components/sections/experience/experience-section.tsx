'use client';

import React from 'react';
import { SectionContainer, SectionHeader } from '@/components/ui';
import { EXPERIENCE, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { ExperienceMilestone } from './experience-milestone';
import { SkillsGrid } from './skills-grid';

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <SectionContainer
      id="experience"
      variant="contrast"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <SectionHeader
          title={t(UI_LABELS.experience.title)}
          subtitle={t(UI_LABELS.experience.subtitle)}
          theme="contrast"
          align="center"
          className="mb-16 sm:mb-20 md:mb-24"
        />

        {/* 1. Work Experience Milestones */}
        <div className="flex flex-col border-t border-surface-base/15 mb-20 sm:mb-24">
          {EXPERIENCE.map((item, index) => (
            <ExperienceMilestone
              key={`${item.company}-${item.period}`}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* 2. Verified Skills directly from portfolio.ts */}
        <SkillsGrid />
      </div>
    </SectionContainer>
  );
}
