'use client';

import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle shrink-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-5 flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter uppercase">{PERSONAL_INFO.name}</div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden sm:flex gap-8 text-xs uppercase tracking-[0.2em] font-semibold text-muted font-mono">
            <a href="#about" className="hover:text-primary transition-colors">{t(UI_LABELS.nav.about)}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{t(UI_LABELS.nav.skills)}</a>
            <a href="#projects" className="hover:text-primary transition-colors">{t(UI_LABELS.nav.projects)}</a>
          </nav>

          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="text-[10px] font-mono border border-primary/20 px-2 py-1 hover:bg-primary hover:text-background transition-all uppercase tracking-widest"
          >
            {language === 'vi' ? 'EN' : 'VI'}
          </button>

          <a href="#contact" className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), "sm:hidden font-mono uppercase tracking-widest text-[#00ff41] border-[#00ff41] hover:bg-[#00ff41] hover:text-black")}>
            {t(UI_LABELS.nav.contact)}
          </a>
        </div>
      </div>
    </header>
  );
}
