'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
    }, 400);
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
        }, 800);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background font-mono px-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center"
          >
            <h1 
              className="text-4xl md:text-6xl font-bold tracking-tight text-primary"
              style={{ filter: 'drop-shadow(0 0 15px var(--primary))' }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block ml-1 md:ml-2 w-[3px] md:w-[4px] h-[32px] md:h-[48px] bg-primary align-middle"
                style={{ boxShadow: '0 0 10px var(--primary)' }}
              />
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

