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
      className="border-t border-border-medium pt-6"
    >
      <h2 className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">Mục Tiêu & Học Vấn</h2>
      <div className="space-y-6">
        <p className="text-lg leading-snug text-muted-foreground">
          {PERSONAL_INFO.bio}
        </p>
        <div>
           <p className="text-sm text-muted font-mono">{PERSONAL_INFO.education.period}</p>
           <p className="text-base font-bold uppercase tracking-wide mt-1 text-foreground">{PERSONAL_INFO.education.school}</p>
           <p className="text-sm text-muted-foreground mt-1">{PERSONAL_INFO.education.major}</p>
        </div>
      </div>
    </motion.div>
  );
}
