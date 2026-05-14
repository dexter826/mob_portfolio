'use client';

import { motion } from 'motion/react';
import { EXPERIENCE } from '@/lib/data';

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
  return (
    <motion.div 
      id="experience"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border-medium pt-12"
    >
      <h2 className="text-xs uppercase tracking-widest text-primary mb-12 font-mono">Lộ trình phát triển</h2>
      
      <div className="relative border-l border-border-subtle ml-3 space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div key={idx} variants={item} className="relative pl-8">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#00ff41]" />
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
              <h3 className="text-lg font-bold uppercase italic tracking-tight text-foreground">
                {exp.role}
              </h3>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 border border-primary/20">
                {exp.period}
              </span>
            </div>
            
            <p className="text-[11px] font-mono text-muted uppercase tracking-wider mb-4">
              {exp.company}
            </p>
            
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
