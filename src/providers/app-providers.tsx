'use client';

import type { ReactNode } from 'react';
import { MotionProvider } from './motion-provider';
import { SplashProvider } from './splash-provider';
import { LanguageProvider } from './language-provider';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionProvider>
      <SplashProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </SplashProvider>
    </MotionProvider>
  );
}
