'use client';

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/lib/data';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6"
    >
      <h1 className="text-[52px] sm:text-[80px] lg:text-[100px] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
        {PERSONAL_INFO.rolePrefix}<br/>{PERSONAL_INFO.roleSuffix}
      </h1>
      <div className="sm:text-right pt-4">
        <p className="text-primary text-xs font-mono uppercase tracking-widest">{PERSONAL_INFO.status}</p>
        <p className="text-xs text-muted-foreground mt-1 font-mono">Based in {PERSONAL_INFO.basedIn}</p>
      </div>
    </motion.section>
  );
}
