'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { MatrixRain } from '@/components/ui/MatrixRain';
import { GlitchText } from '@/components/ui/GlitchText';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { dsMotion, easeExpo, fadeInUp } from '@/lib/motion';

export function Hero() {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const fullText = `${PERSONAL_INFO.rolePrefix} ${PERSONAL_INFO.roleSuffix}`;
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => {
    if (shouldReduceMotion) {
      const frame = requestAnimationFrame(() => setText(fullText));
      return () => cancelAnimationFrame(frame);
    }

    let i = 1;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, dsMotion.fast * 1000);
    return () => clearInterval(interval);
  }, [fullText, shouldReduceMotion]);

  return (
    <motion.section 
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-12 py-10 sm:py-12"
    >
      <MatrixRain />
      
      <div className="relative z-10 flex-1 max-w-3xl">
        <h1 className="text-[40px] sm:text-[60px] lg:text-[76px] font-black uppercase leading-[0.9] tracking-tighter text-foreground wrap-break-word">
          {text.split(' ').map((word, idx) => (
            <span key={idx} className="block">
              <GlitchText text={word} />
            </span>
          ))}
          <span className="ds-typing-cursor ml-2 inline-block h-[0.75em] w-[1ch] align-middle" />
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center lg:items-end gap-8">
        <div
          className="ds-media-scanline ds-media-reveal ds-signal-frame ds-expressive-hover group relative h-48 w-48 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
        >
          <Image 
            src="/avatar.JPG" 
            alt={PERSONAL_INFO.name}
            fill
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
            className="object-cover p-1"
            priority
          />
        </div>

        <div className="text-center lg:text-right">
          <p className="text-primary text-[11px] font-mono uppercase tracking-mega mb-2">{t(PERSONAL_INFO.status)}</p>
          {t(PERSONAL_INFO.quote) && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: dsMotion.panel, duration: dsMotion.reveal, ease: easeExpo }}
              className="mx-auto mb-4 block max-w-[280px] text-center font-mono text-[11px] italic text-[var(--ds-text-muted)] sm:max-w-xs lg:mr-0 lg:ml-auto lg:max-w-none lg:text-right"
            >
              &ldquo;{t(PERSONAL_INFO.quote)}&rdquo;
            </motion.p>
          )}
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--ds-text-muted)]">
            {t(UI_LABELS.hero.basedIn)} {t(PERSONAL_INFO.basedIn)}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
