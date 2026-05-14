'use client';

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/lib/data';

export function About() {
  return (
    <motion.div 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-border-medium pt-12"
    >
      <h2 className="text-xs uppercase tracking-widest text-primary mb-8 font-mono">Mục Tiêu & Học Vấn</h2>
      <div className="space-y-6">
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
          {PERSONAL_INFO.bio}
        </p>
        <div className="pt-2">
           <p className="text-[10px] text-muted font-mono uppercase tracking-wider">{PERSONAL_INFO.education.period}</p>
           <p className="text-sm font-bold uppercase tracking-wide mt-1 text-foreground">{PERSONAL_INFO.education.school}</p>
           <p className="text-xs text-muted-foreground mt-0.5">{PERSONAL_INFO.education.major}</p>
        </div>
      </div>
    </motion.div>
  );
}
