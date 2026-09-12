'use client';

import Link from 'next/link';
import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { Button, IconButton } from '@mob-signal/components';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GlitchText } from '@/components/ui/GlitchText';
import { staggerContainer, fadeInUp } from '@/lib/motion';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        if (!isMenuOpen) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const navLinks = [
    { href: "#about", label: t(UI_LABELS.nav.about) },
    { href: "#skills", label: t(UI_LABELS.nav.skills) },
    { href: "#projects", label: t(UI_LABELS.nav.projects) },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle shrink-0 transition-transform duration-300 ease-in-out",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-5 flex justify-between items-center w-full">
        <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-foreground group">
          <GlitchText text={PERSONAL_INFO.name} className="group-hover:text-primary transition-colors" />
        </Link>
        
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden gap-8 font-mono text-[11px] font-bold uppercase tracking-mega text-[var(--ds-text-muted)] sm:flex">
            {navLinks.map((link) => (
              <motion.a 
                key={link.href} 
                href={link.href} 
                whileHover={{ scale: 1.05 }}
                className="relative py-1 transition-colors hover:text-primary"
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
            variant="secondary"
            size="compact"
            onClick={toggleLanguage}
            className="h-7 border-primary/20 px-2 text-[10px] font-bold uppercase tracking-mega sm:text-[11px]"
          >
            {language === 'vi' ? 'EN' : 'VI'}
          </Button>

          <Button
            asChild
            variant="secondary"
            size="compact"
            className="hidden border-primary/20 text-[11px] font-bold uppercase tracking-mega text-primary hover:bg-primary hover:text-background sm:inline-flex"
          >
            <a href="#contact">{t(UI_LABELS.nav.contact)}</a>
          </Button>

          {/* Mobile Menu Toggle */}
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary sm:hidden"
            label="Toggle menu"
            icon={isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            size="compact"
          />
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
                  className="group flex items-center justify-between border-b border-border-subtle py-2 text-muted-foreground transition-colors hover:text-primary"
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
