'use client';

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/lib/data';
import { MatrixRain } from '@/components/ui/MatrixRain';
import { useEffect, useState } from 'react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = `${PERSONAL_INFO.rolePrefix} ${PERSONAL_INFO.roleSuffix}`;
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 py-10"
    >
      <MatrixRain />
      
      <div className="relative z-10 w-full overflow-hidden">
        <h1 className="text-[42px] sm:text-[80px] lg:text-[100px] font-black uppercase leading-[0.85] tracking-tighter text-foreground break-words">
          {text.split(' ').map((word, idx) => (
            <span key={idx} className="inline-block">
              {word}
              {idx === 0 && <br/>}
            </span>
          ))}
          <span className="animate-pulse inline-block w-[1ch] h-[1em] bg-primary align-middle ml-1 -mt-2"></span>
        </h1>
      </div>

      <div className="sm:text-right pt-4 relative z-10">
        <p className="text-primary text-xs font-mono uppercase tracking-widest">{PERSONAL_INFO.status}</p>
        <p className="text-xs text-muted-foreground mt-1 font-mono">Based in {PERSONAL_INFO.basedIn}</p>
      </div>
    </motion.section>
  );
}
