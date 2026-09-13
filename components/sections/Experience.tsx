'use client';

import { motion, Variants } from 'motion/react';
import { EXPERIENCE, UI_LABELS } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { dsMotion, staggerContainer, easeExpo } from '@/lib/motion';

const item: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: dsMotion.reveal, ease: easeExpo }
  }
};

export function Experience() {
  const { t } = useLanguage();

  return (
    <motion.div 
      id="experience"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border-medium py-10 sm:py-12"
    >
      <motion.h2 
        variants={item}
        className="ds-signal-label mb-8 sm:mb-10"
      >
        {t(UI_LABELS.experience.title)}
      </motion.h2>
      
      <div className="relative border-l border-border-subtle ml-3 space-y-16">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div key={idx} variants={item} className="relative pl-8 group">
            <div className="absolute left-[-5.5px] top-2 w-[11px] h-[11px] border border-primary/50 bg-background flex items-center justify-center">
              <div className="ds-signal-pulse h-1.5 w-1.5 bg-primary" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
              <div className="space-y-4">
                <div>
                  <h3 className="ds-editorial-heading mb-2 text-xl text-foreground transition-colors duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] group-hover:text-primary">
                    {t(exp.role)}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest font-medium">
                      {exp.company}
                    </p>
                    {(exp as any).link && (
                      <a 
                        href={(exp as any).link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary transition-colors duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] hover:text-foreground"
                        title={t(UI_LABELS.experience.viewCompany)}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="max-w-2xl text-sm font-medium leading-relaxed text-[var(--ds-text-muted)] sm:text-[14px]">
                  {t(exp.description)}
                </p>
              </div>

              <div className="md:pt-1">
                <span className="text-[11px] font-mono text-primary uppercase tracking-mega bg-primary/5 px-2.5 py-1.5 border border-primary/20 whitespace-nowrap font-bold">
                  {exp.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
