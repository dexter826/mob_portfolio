'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { dsMotion, easeExpo } from '@/lib/motion';

interface SplashScreenProps {
  onComplete?: () => void;
}

// Quản lý màn hình khởi tạo với hiệu ứng terminal.
export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const fullText = "<Hello World />";

  const handleComplete = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, dsMotion.panel * 1000);
  }, [onComplete]);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          handleComplete();
        }, dsMotion.reveal * 1000);
      }
    }, dsMotion.fast * 1000);

    return () => clearInterval(typingInterval);
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: dsMotion.panel, ease: easeExpo }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background font-mono px-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: dsMotion.slow, ease: easeExpo }}
            className="flex items-center"
          >
            <h1 
              className="text-4xl md:text-6xl font-bold tracking-tight text-primary"
              style={{ filter: 'drop-shadow(0 0 15px var(--ds-brand-accent))' }}
            >
              {displayedText}
              <span className="ds-typing-cursor ml-1 inline-block h-8 w-[3px] align-middle md:ml-2 md:h-12 md:w-1" />
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

