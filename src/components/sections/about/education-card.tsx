'use client';

import React from 'react';
import { SurfaceCard, TagBadge } from '@/components/ui';
import { PERSONAL_INFO, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { GraduationCap } from 'lucide-react';

export function EducationCard() {
  const { t } = useLanguage();

  return (
    <SurfaceCard variant="dark" className="p-5 sm:p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>{t(UI_LABELS.about.education)}</span>
        </div>
        <h4 className="font-bold text-base sm:text-lg text-white leading-snug">
          {t(PERSONAL_INFO.education.school)}
        </h4>
        <p className="text-xs sm:text-sm text-text-muted mt-1">
          {t(PERSONAL_INFO.education.major)}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 mt-4 border-t border-border-subtle text-xs font-mono">
        <span className="text-text-muted">{PERSONAL_INFO.education.period}</span>
        <TagBadge variant="success" size="sm">
          {t(UI_LABELS.common.gpa)}: {PERSONAL_INFO.education.gpa}
        </TagBadge>
      </div>
    </SurfaceCard>
  );
}
