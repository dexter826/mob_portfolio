'use client';

import { motion } from 'motion/react';
import { SKILLS, UI_LABELS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { staggerContainer, fadeInUp } from '@/lib/motion';

export function Skills() {
  const { t } = useLanguage();

  return (
    <motion.div 
      id="skills"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border-medium py-10 sm:py-12"
    >
      <motion.h2 
        variants={fadeInUp}
        className="text-xs uppercase tracking-mega text-primary font-bold font-mono mb-8 sm:mb-10"
      >
        {t(UI_LABELS.skills.title)}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            className="p-6 border border-border-subtle bg-card/30 hover:border-primary/40 transition-all duration-300 group"
          >
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground mb-6 font-mono group-hover:text-primary transition-colors">
              {t(skillGroup.category)}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <motion.span
                  key={i}
                  className="cursor-default border border-foreground/5 bg-foreground/5 px-3 py-1 font-mono text-[11px] font-medium text-[var(--ds-text-muted)] transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  {t(skill)}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
