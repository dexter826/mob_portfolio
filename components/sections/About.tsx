'use client';

import { motion } from 'motion/react';
import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <motion.div 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-border-medium py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Bio Column */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground italic">
            &ldquo;{t(PERSONAL_INFO.bio)}&rdquo;
          </p>
        </div>

        {/* Details Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 border-l border-border-subtle lg:pl-12">
          {/* Education Group */}
          <div className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono font-bold">{t(UI_LABELS.about.education)}</h3>
            <div>
              <p className="text-[10px] text-muted font-mono uppercase tracking-wider mb-1">{PERSONAL_INFO.education.period}</p>
              <p className="text-sm font-bold uppercase tracking-wide text-foreground">{t(PERSONAL_INFO.education.school)}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t(PERSONAL_INFO.education.major)}</p>
              {(PERSONAL_INFO.education as any).gpa && (
                <p className="text-[10px] font-mono text-primary mt-2 uppercase tracking-wider bg-primary/5 inline-block px-2 py-1">GPA: {(PERSONAL_INFO.education as any).gpa}</p>
              )}
            </div>
          </div>

          {/* Profile Group */}
          <div className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono font-bold">{t(UI_LABELS.about.info)}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-muted font-mono uppercase tracking-wider mb-1">{t(UI_LABELS.about.birthDate)}</p>
                <p className="text-sm font-bold uppercase tracking-wide text-foreground">{(PERSONAL_INFO as any).birthDate}</p>
              </div>
              <div>
                <p className="text-[10px] text-muted font-mono uppercase tracking-wider mb-1">{t(UI_LABELS.about.email)}</p>
                <p className="text-sm font-bold uppercase tracking-wide text-foreground truncate">{PERSONAL_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
}
