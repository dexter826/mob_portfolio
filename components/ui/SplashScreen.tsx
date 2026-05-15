'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'motion/react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    fetch('/splash.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => {
        console.error('Failed to load splash animation:', err);
        setIsVisible(false);
        onComplete?.();
      });

    const timer = setTimeout(() => {
      handleComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#050505]"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[200px] md:max-w-[240px] px-4"
          >
            {animationData && (
              <Lottie
                animationData={animationData}
                loop={false}
                onComplete={handleComplete}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.8)) drop-shadow(0 0 15px rgba(0, 255, 65, 0.4)) brightness(1.1)'
                }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
