'use client';

import React from 'react';
import { SurfaceCard } from '@/components/ui';
import { UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { Layers } from 'lucide-react';

export interface ProjectTechGridProps {
  techStack: Record<string, string>;
}

export function ProjectTechGrid({ techStack }: ProjectTechGridProps) {
  const { t } = useLanguage();

  return (
    <SurfaceCard variant="dark" className="p-4 sm:p-5">
      <div className="flex items-center gap-1.5 mb-2.5">
        <Layers className="w-3.5 h-3.5 text-text-muted" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-semibold">
          {t(UI_LABELS.projects.techStack)}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
        {Object.entries(techStack).map(([layer, val]) => (
          <div
            key={layer}
            className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col"
          >
            <span className="text-[10px] uppercase text-text-muted font-bold">
              {layer}
            </span>
            <span className="text-text-primary/90 truncate mt-0.5">
              {val}
            </span>
          </div>
        ))}
      </div>
    </SurfaceCard>
  );
}
