'use client';

import React from 'react';
import { FadeIn } from './fade-in';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  theme?: 'dark' | 'contrast';
  align?: 'center' | 'left';
  className?: string;
  delay?: number;
}

export function SectionHeader({
  title,
  subtitle,
  theme = 'dark',
  align = 'center',
  className,
  delay = 0,
}: SectionHeaderProps) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <FadeIn delay={delay} y={30} className={cn('w-full', className)}>
      <div className={cn('flex flex-col', isCenter ? 'items-center text-center' : 'items-start text-left')}>
        <h2
          className={cn(
            'font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-3 sm:mb-4 select-none',
            isDark ? 'hero-heading' : 'text-text-dark'
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              'font-mono text-xs sm:text-sm uppercase tracking-widest',
              isDark ? 'text-text-muted' : 'text-text-dark/60'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
