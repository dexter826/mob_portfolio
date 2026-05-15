'use client';

import { motion } from 'motion/react';
import { SKILLS, UI_LABELS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <motion.div 
      id="skills"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border-medium py-16"
    >
      <motion.h2 
        variants={item}
        className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold font-mono mb-12"
      >
        {t(UI_LABELS.skills.title)}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="p-6 border border-border-subtle bg-card/30 hover:border-primary/40 transition-colors duration-300 group"
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-6 font-mono group-hover:text-primary transition-colors">
              {t(skillGroup.category)}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] font-mono text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all cursor-default"
                >
                  {t(skill)}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
