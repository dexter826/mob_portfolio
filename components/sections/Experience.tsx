'use client';

import { motion, Variants } from 'motion/react';
import { EXPERIENCE, UI_LABELS } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { staggerContainer, easeExpo } from '@/lib/motion';

const item: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: easeExpo as any }
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
        className="text-xs uppercase tracking-mega text-primary font-bold mb-8 sm:mb-10 font-mono"
      >
        {t(UI_LABELS.experience.title)}
      </motion.h2>
      
      <div className="relative border-l border-border-subtle ml-3 space-y-16">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div key={idx} variants={item} className="relative pl-8 group">
            <div className="absolute left-[-5.5px] top-2 w-[11px] h-[11px] border border-primary/50 bg-background flex items-center justify-center">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-primary shadow-[0_0_8px_#00ff41]" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold uppercase italic tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
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
                        className="text-primary hover:text-foreground transition-colors"
                        title={t(UI_LABELS.experience.viewCompany)}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-sm sm:text-[14px] text-muted-foreground/90 leading-relaxed font-medium max-w-2xl">
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
