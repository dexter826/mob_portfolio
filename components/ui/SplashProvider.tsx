'use client';

import React, { useState, useEffect } from 'react';
import { SplashScreen } from './SplashScreen';

interface SplashProviderProps {
  children: React.ReactNode;
}

// Quản lý hiển thị Splash Screen một lần mỗi phiên.
export const SplashProvider: React.FC<SplashProviderProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isSplashShown = sessionStorage.getItem('splash_shown');
    if (!isSplashShown) {
      sessionStorage.setItem('splash_shown', 'true');
      requestAnimationFrame(() => setShowSplash(true));
    } else {
      requestAnimationFrame(() => {
        setShowSplash(false);
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsLoading(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={isLoading ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
};
