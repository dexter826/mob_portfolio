'use client';

import React from 'react';
import { FadeIn, SurfaceCard } from '@/components/ui';
import { SKILLS, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';

export function SkillsGrid() {
  const { t } = useLanguage();

  return (
    <FadeIn delay={0.2} y={30}>
      <div className="pt-8 border-t border-surface-base/15">
        <div className="text-center md:text-left mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-text-dark/50">
            {t(UI_LABELS.experience.skillsSubtitle)}
          </span>
          <h3 className="font-bold text-2xl sm:text-3xl uppercase tracking-tight text-text-dark mt-1">
            {t(UI_LABELS.skills.title)}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SKILLS.map((skillGroup, gIdx) => (
            <SurfaceCard
              key={gIdx}
              variant="contrast"
              className="p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-text-dark/60 block mb-3 font-semibold">
                  {t(skillGroup.category)}
                </span>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm font-medium text-text-dark/90 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-surface-base shrink-0" />
                      <span>{typeof item === 'string' ? item : t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
