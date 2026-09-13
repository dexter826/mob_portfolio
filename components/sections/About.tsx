'use client';

import { motion } from 'motion/react';
import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@mob-signal/components';
import { dsMotion, easeExpo } from '@/lib/motion';

export function About() {
  const { t } = useLanguage();

  return (
    <motion.div 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: dsMotion.reveal, ease: easeExpo }}
      viewport={{ once: true }}
      className="border-t border-border-medium py-10 sm:py-12"
    >
      <h2 className="sr-only">{t(UI_LABELS.about.title)}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Bio Column */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg sm:text-[22px] leading-relaxed text-muted-foreground italic font-medium">
            &ldquo;{t(PERSONAL_INFO.bio)}&rdquo;
          </p>
        </div>

        {/* Details Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 border-t pt-8 lg:border-t-0 lg:border-l border-border-subtle lg:pt-0 lg:pl-12">
          {/* Education Group */}
          <div className="space-y-4">
            <h3 className="ds-signal-label">{t(UI_LABELS.about.education)}</h3>
            <div>
              <p className="ds-meta-label mb-1 text-[var(--ds-text-muted)]">{PERSONAL_INFO.education.period}</p>
              <p className="text-sm font-bold uppercase tracking-wide text-foreground leading-tight">{t(PERSONAL_INFO.education.school)}</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{t(PERSONAL_INFO.education.major)}</p>
              {(PERSONAL_INFO.education as any).gpa && (
                <Badge variant="accent" className="mt-3 font-mono">GPA: {(PERSONAL_INFO.education as any).gpa}</Badge>
              )}
            </div>
          </div>

          {/* Profile Group */}
          <div className="space-y-4">
            <h3 className="ds-signal-label">{t(UI_LABELS.about.info)}</h3>
            <div className="space-y-4">
              <div>
                <p className="ds-meta-label mb-1 text-[var(--ds-text-muted)]">{t(UI_LABELS.about.birthDate)}</p>
                <p className="text-sm font-bold uppercase tracking-wide text-foreground">{(PERSONAL_INFO as any).birthDate}</p>
              </div>
              <div>
                <p className="ds-meta-label mb-1 text-[var(--ds-text-muted)]">{t(UI_LABELS.about.email)}</p>
                <p className="text-sm font-bold uppercase tracking-wide text-foreground truncate">{PERSONAL_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
}
