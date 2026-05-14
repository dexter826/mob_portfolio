'use client';

import { PERSONAL_INFO } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center shrink-0">
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-muted font-mono">
        <a href={PERSONAL_INFO.linkedin} className="hover:text-primary transition-colors">LinkedIn</a>
        <a href={PERSONAL_INFO.github} className="hover:text-primary transition-colors">GitHub</a>
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted font-mono">
        {PERSONAL_INFO.email}
      </div>
    </footer>
  );
}
