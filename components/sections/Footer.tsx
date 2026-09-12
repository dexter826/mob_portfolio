'use client';

import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/lib/data';

export function Footer() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Ho_Chi_Minh'
  });

  return (
    <footer className="flex shrink-0 flex-col items-center justify-between gap-6 border-t border-border-subtle py-8 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--ds-text-muted)] sm:flex-row sm:gap-0">
      <div className="flex items-center gap-4">
        <span>{PERSONAL_INFO.basedIn.vi}</span>
        <span className="hidden sm:inline text-border-medium">|</span>
        <span className="text-primary">
          {mounted ? `${formattedTime} GMT+7` : '--:--:-- -- GMT+7'}
        </span>
      </div>
      <div>
        © {new Date().getFullYear()} {PERSONAL_INFO.name}
      </div>
    </footer>
  );
}

