'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { MatrixRain } from '@/components/ui/MatrixRain';
import { GlitchText } from '@/components/ui/GlitchText';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Hero() {
  const { t } = useLanguage();
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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-12 py-10 sm:py-12"
    >
      <MatrixRain />
      
      <div className="relative z-10 flex-1 max-w-3xl">
        <h1 className="text-[40px] sm:text-[60px] lg:text-[76px] font-black uppercase leading-[0.9] tracking-tighter text-foreground wrap-break-word">
          {text.split(' ').map((word, idx) => (
            <span key={idx} className="block">
              <GlitchText text={word} speed={0.3} />
            </span>
          ))}
          <span className="animate-pulse inline-block w-[1ch] h-[0.75em] bg-primary align-middle ml-2"></span>
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center lg:items-end gap-8">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 grayscale hover:grayscale-0 transition-all duration-700 border border-primary/20 hover:border-primary shadow-[0_0_30px_rgba(0,255,65,0.05)] hover:shadow-[0_0_50px_rgba(0,255,65,0.2)] overflow-hidden group"
        >
          <Image 
            src="/avatar.JPG" 
            alt={PERSONAL_INFO.name}
            fill
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
            className="object-cover p-1 transition-transform duration-700 group-hover:scale-110"
            priority
          />
          
          {/* Animated Scanline overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <div className="w-full h-20 bg-linear-to-b from-transparent via-primary/10 to-transparent animate-scanline" />
          </div>
          
          {/* Static Scanline effect overlay (CRT feel) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-30 pointer-events-none bg-size-[100%_2px,3px_100%] opacity-50" />
        </motion.div>

        <div className="text-center lg:text-right">
          <p className="text-primary text-[11px] font-mono uppercase tracking-mega mb-2">{t(PERSONAL_INFO.status)}</p>
          {t(PERSONAL_INFO.quote) && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="text-[11px] italic text-foreground font-mono mb-4 block max-w-[280px] sm:max-w-xs lg:max-w-none mx-auto lg:ml-auto lg:mr-0 text-center lg:text-right"
            >
              &ldquo;{t(PERSONAL_INFO.quote)}&rdquo;
            </motion.p>
          )}
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-widest opacity-60">
            {t(UI_LABELS.hero.basedIn)} {t(PERSONAL_INFO.basedIn)}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
