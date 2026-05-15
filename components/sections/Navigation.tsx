'use client';

import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const navLinks = [
    { href: "#about", label: t(UI_LABELS.nav.about) },
    { href: "#skills", label: t(UI_LABELS.nav.skills) },
    { href: "#projects", label: t(UI_LABELS.nav.projects) },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle shrink-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-5 flex justify-between items-center w-full">
        <a href="/" className="text-xl font-black tracking-tighter uppercase">{PERSONAL_INFO.name}</a>
        
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden sm:flex gap-8 text-xs uppercase tracking-[0.2em] font-semibold text-muted font-mono">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
            ))}
          </nav>

          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="text-[10px] font-mono border border-primary/20 px-2 py-1 hover:bg-primary hover:text-background transition-all uppercase tracking-widest"
          >
            {language === 'vi' ? 'EN' : 'VI'}
          </button>

          <a href="#contact" className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), "hidden sm:flex font-mono uppercase tracking-widest text-primary border-primary/20 hover:bg-primary hover:text-black")}>
            {t(UI_LABELS.nav.contact)}
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-primary p-1"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-t border-border-subtle bg-background/95 backdrop-blur-lg overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6 font-mono text-sm uppercase tracking-widest">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted hover:text-primary transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-primary hover:opacity-80 transition-opacity py-2"
              >
                {t(UI_LABELS.nav.contact)}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
