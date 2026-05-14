'use client';

import { motion } from 'motion/react';
import { EXPERIENCE, UI_LABELS } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function Experience() {
  const { t } = useLanguage();

  return (
    <motion.div 
      id="experience"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border-medium py-12"
    >
      <h2 className="text-xs uppercase tracking-widest text-primary mb-12 font-mono">{t(UI_LABELS.experience.title)}</h2>
      
      <div className="relative border-l border-border-subtle ml-3 space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div key={idx} variants={item} className="relative pl-8 group">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#00ff41]" />
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold uppercase italic tracking-tight text-foreground mb-1">
                    {t(exp.role)}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
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
                
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t(exp.description)}
                </p>
              </div>

              <div className="md:pt-1">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest bg-primary/5 px-2 py-1 border border-primary/20 whitespace-nowrap">
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
