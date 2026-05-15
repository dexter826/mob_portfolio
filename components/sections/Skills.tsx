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
            whileHover={{ y: -5 }}
            className="p-6 border border-border-subtle bg-card/30 hover:border-primary/40 transition-all duration-300 group shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,255,65,0.05)]"
          >
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground mb-6 font-mono group-hover:text-primary transition-colors">
              {t(skillGroup.category)}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#00ff41",
                    borderColor: "rgba(0,255,65,0.4)",
                    backgroundColor: "rgba(0,255,65,0.1)"
                  }}
                  className="px-3 py-1 bg-white/5 border border-white/5 text-[11px] font-mono text-muted-foreground/80 transition-all cursor-default font-medium"
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
