'use client';

import React, { createContext, useContext, useSyncExternalStore, useCallback } from 'react';
import type { Language, I18nRecord } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (record?: I18nRecord<string> | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let memoryLanguage: Language = 'vi';
let isHydrated = false;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): Language {
  if (typeof window !== 'undefined' && !isHydrated) {
    try {
      const saved = localStorage.getItem('portfolio_lang') as Language | null;
      if (saved === 'vi' || saved === 'en') {
        memoryLanguage = saved;
      }
    } catch {
      // ignore
    }
    isHydrated = true;
  }
  return memoryLanguage;
}

function getServerSnapshot(): Language {
  return 'vi';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    memoryLanguage = lang;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('portfolio_lang', lang);
      } catch {
        // ignore
      }
    }
    notify();
  }, []);

  const t = useCallback(
    (record?: I18nRecord<string> | string): string => {
      if (!record) return '';
      if (typeof record === 'string') return record;
      return record[language] || record.vi || record.en || '';
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
