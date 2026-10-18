'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { SplashScreen } from '@/components/ui/splash-screen';

interface SplashProviderProps {
  children: React.ReactNode;
}

const emptySubscribe = () => () => {};

function getSplashSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }
  try {
    const isSplashShown = sessionStorage.getItem('splash_shown');
    if (!isSplashShown) {
      sessionStorage.setItem('splash_shown', 'true');
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

function getServerSplashSnapshot(): boolean {
  return false;
}

// Quản lý hiển thị Splash Screen một lần mỗi phiên.
export function SplashProvider({ children }: SplashProviderProps) {
  const isInitialSplash = useSyncExternalStore(
    emptySubscribe,
    getSplashSnapshot,
    getServerSplashSnapshot
  );
  const [isDismissed, setIsDismissed] = useState(false);
  const showSplash = isInitialSplash && !isDismissed;

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
    setIsDismissed(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </>
  );
}
