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
      className="border-t border-border-medium pt-12"
    >
      <h2 className="text-xs uppercase tracking-widest text-primary mb-8 font-mono">Kỹ năng chuyên môn</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className={`p-6 border border-border-subtle bg-card/50 relative overflow-hidden group hover:border-primary/50 transition-colors ${
              idx === 0 ? 'md:col-span-2' : ''
            } ${idx === 3 ? 'md:col-span-3' : ''}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] group-hover:bg-primary/10 transition-colors" />
            
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-4 font-mono group-hover:text-primary transition-colors">
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider font-mono text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
