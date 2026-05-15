'use client';

import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { GlitchText } from '@/components/ui/GlitchText';
import { staggerContainer, fadeInUp } from '@/lib/motion';

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
        <a href="/" className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-foreground group">
          <GlitchText text={PERSONAL_INFO.name} className="group-hover:text-primary transition-colors" />
        </a>
        
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden sm:flex gap-8 text-[11px] uppercase tracking-mega font-bold text-muted-foreground/60 font-mono">
            {navLinks.map((link) => (
              <motion.a 
                key={link.href} 
                href={link.href} 
                whileHover={{ scale: 1.05, color: "#00ff41" }}
                className="relative transition-colors py-1"
              >
                {link.label}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-px bg-primary"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Language Switcher */}
          <Button 
            variant="outline"
            size="xs"
            onClick={toggleLanguage}
            className="text-[10px] sm:text-[11px] font-mono border-primary/20 hover:bg-primary hover:text-background transition-all uppercase tracking-mega font-bold h-7"
          >
            {language === 'vi' ? 'EN' : 'VI'}
          </Button>

          <a href="#contact" className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), "hidden sm:flex font-mono uppercase tracking-mega text-primary border-primary/20 hover:bg-primary hover:text-black text-[11px] font-bold")}>
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
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden border-t border-border-subtle bg-background/95 backdrop-blur-lg overflow-hidden"
          >
            <motion.nav 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col p-6 gap-6 font-mono text-sm uppercase tracking-widest"
            >
              {navLinks.map((link) => (
                <motion.a 
                  key={link.href} 
                  href={link.href} 
                  variants={fadeInUp}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-white/5 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary text-[10px]">_GO</span>
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                variants={fadeInUp}
                onClick={() => setIsMenuOpen(false)}
                className="text-primary hover:opacity-80 transition-opacity py-2 font-bold"
              >
                {t(UI_LABELS.nav.contact)}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
