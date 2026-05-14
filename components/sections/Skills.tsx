'use client';

import { motion } from 'motion/react';
import { SKILLS } from '@/lib/data';

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
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
};

export function Skills() {
  return (
    <motion.div 
      id="skills"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border-medium pt-6"
    >
      <h2 className="text-xs uppercase tracking-widest text-primary mb-6 font-mono">Kỹ năng cốt lõi</h2>
      <div className="space-y-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div key={idx} variants={item}>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-2 font-mono">
              {skillGroup.category}
            </h3>
            <ul className="font-mono text-sm space-y-1 text-muted-foreground">
              {skillGroup.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
