'use client';

import { motion } from 'motion/react';
import { SKILLS, UI_LABELS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { Badge, Card, CardContent } from '@mob-signal/components';

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
        className="ds-signal-label mb-8 sm:mb-10"
      >
        {t(UI_LABELS.skills.title)}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
          >
            <Card className="ds-signal-frame ds-expressive-hover group h-full">
              <CardContent className="p-6">
                <h3 className="ds-meta-label mb-6 text-[var(--ds-text-muted)] transition-colors duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] group-hover:text-primary">
                  {t(skillGroup.category)}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge key={i} variant="neutral" className="cursor-default font-mono">
                      {t(skill)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
