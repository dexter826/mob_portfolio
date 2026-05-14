'use client';

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/lib/data';
import { MatrixRain } from '@/components/ui/MatrixRain';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
      className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-12 py-12"
    >
      <MatrixRain />
      
      <div className="relative z-10 flex-1 max-w-3xl">
        <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-black uppercase leading-[0.9] tracking-tighter text-foreground break-words">
          {text.split(' ').map((word, idx) => (
            <span key={idx} className="block">
              {word}
            </span>
          ))}
          <span className="animate-pulse inline-block w-[1ch] h-[0.8em] bg-primary align-middle ml-2"></span>
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center lg:items-end gap-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 grayscale hover:grayscale-0 transition-all duration-700 border border-primary/20 hover:border-primary shadow-[0_0_30px_rgba(0,255,65,0.05)] hover:shadow-[0_0_50px_rgba(0,255,65,0.1)]"
        >
          <Image 
            src="/avatar.JPG" 
            alt={PERSONAL_INFO.name}
            fill
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 288px"
            className="object-cover p-1"
            priority
          />
          {/* Scanline effect overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_2px,3px_100%]" />
        </motion.div>

        <div className="text-center lg:text-right">
          <p className="text-primary text-[10px] font-mono uppercase tracking-[0.3em] mb-2">{PERSONAL_INFO.status}</p>
          {(PERSONAL_INFO as any).quote && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-[9px] italic text-foreground font-mono mb-4 block"
            >
              &ldquo;{(PERSONAL_INFO as any).quote}&rdquo;
            </motion.p>
          )}
          <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest opacity-60">Based in {PERSONAL_INFO.basedIn}</p>
        </div>
      </div>
    </motion.section>
  );
}
