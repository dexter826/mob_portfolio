'use client';

import React from 'react';
import { SurfaceCard } from '@/components/ui';
import { PERSONAL_INFO, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { User } from 'lucide-react';

export function ProfileCard() {
  const { t } = useLanguage();

  return (
    <SurfaceCard variant="dark" className="p-5 sm:p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
          <User className="w-4 h-4 text-text-primary" />
          <span>{t(UI_LABELS.about.info)}</span>
        </div>
        <div className="space-y-2 mt-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
              {t(UI_LABELS.about.birthDate)}
            </span>
            <span className="text-sm font-semibold text-white">
              {PERSONAL_INFO.birthDate}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
              {t(UI_LABELS.hero.basedIn)}
            </span>
            <span className="text-sm font-semibold text-white">
              {t(PERSONAL_INFO.basedIn)}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-border-subtle text-xs font-mono flex items-center justify-between text-text-muted">
        <span>{t(UI_LABELS.common.status)}</span>
        <span className="text-white font-bold">{t(PERSONAL_INFO.status)}</span>
      </div>
    </SurfaceCard>
  );
}
