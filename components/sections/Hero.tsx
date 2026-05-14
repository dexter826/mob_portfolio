'use client';

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/lib/data';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <h1 className="text-[60px] sm:text-[100px] lg:text-[140px] font-black uppercase leading-[0.8] tracking-tighter mb-4 text-foreground">
        {PERSONAL_INFO.rolePrefix}<br/>{PERSONAL_INFO.roleSuffix}
      </h1>
      <div className="sm:absolute sm:top-2 sm:right-0 sm:text-right mt-6 sm:mt-0">
        <p className="text-primary text-xs font-mono uppercase tracking-widest">{PERSONAL_INFO.status}</p>
        <p className="text-sm text-muted-foreground mt-2 font-mono">Based in {PERSONAL_INFO.basedIn}</p>
      </div>
    </motion.section>
  );
}
