'use client';

import { PERSONAL_INFO } from '@/lib/data';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle shrink-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-5 flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter uppercase">{PERSONAL_INFO.name}</div>
        <nav className="hidden sm:flex gap-8 text-xs uppercase tracking-[0.2em] font-semibold text-muted font-mono">
          <a href="#about" className="hover:text-primary transition-colors">Giới thiệu</a>
          <a href="#skills" className="hover:text-primary transition-colors">Kỹ năng</a>
          <a href="#projects" className="hover:text-primary transition-colors">Dự án</a>
        </nav>
        <a href="#contact" className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), "sm:hidden font-mono uppercase tracking-widest text-[#00ff41] border-[#00ff41] hover:bg-[#00ff41] hover:text-black")}>
          Liên hệ
        </a>
      </div>
    </header>
  );
}
