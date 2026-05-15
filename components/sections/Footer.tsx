'use client';

import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/lib/data';

export function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
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
    <footer className="border-t border-border-subtle py-8 flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center shrink-0 font-mono text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
      <div className="flex items-center gap-4">
        <span>{PERSONAL_INFO.basedIn.vi}</span>
        <span className="hidden sm:inline text-border-medium">|</span>
        <span className="text-primary/80">{formattedTime} GMT+7</span>
      </div>
      <div>
        © {new Date().getFullYear()} {PERSONAL_INFO.name}
      </div>
    </footer>
  );
}


