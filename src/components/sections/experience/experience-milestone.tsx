'use client';

import React from 'react';
import { FadeIn, TagBadge } from '@/components/ui';
import { UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import type { ExperienceItem } from '@/types';
import { ExternalLink } from 'lucide-react';

export interface ExperienceMilestoneProps {
  item: ExperienceItem;
  index: number;
}

export function ExperienceMilestone({ item, index }: ExperienceMilestoneProps) {
  const { t } = useLanguage();
  const number = `0${index + 1}`;

  return (
    <FadeIn
      delay={index * 0.1}
      y={20}
      className="flex flex-col md:flex-row md:items-start justify-between py-8 sm:py-10 md:py-12 border-b border-surface-base/15 gap-4 md:gap-8 group hover:bg-surface-base/[0.02] transition-colors"
    >
      {/* Number */}
      <div className="font-black text-[clamp(2.5rem,8vw,110px)] text-text-dark leading-none min-w-[100px] sm:min-w-[140px] md:min-w-[180px] select-none">
        {number}
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
          <TagBadge variant="contrast" size="sm">
            {item.period}
          </TagBadge>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-text-dark/60 hover:text-text-dark transition-colors"
            >
              <span>{t(UI_LABELS.experience.viewCompany)}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        <h3 className="font-bold uppercase text-[clamp(1.15rem,2.2vw,1.9rem)] text-text-dark leading-snug">
          {t(item.role)}
        </h3>
        <h4 className="font-medium text-sm sm:text-base text-text-dark/80 mt-0.5">
          {item.company}
        </h4>

        <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.5vw,1.1rem)] text-text-dark opacity-75 mt-2 sm:mt-3">
          {t(item.description)}
        </p>
      </div>
    </FadeIn>
  );
}
