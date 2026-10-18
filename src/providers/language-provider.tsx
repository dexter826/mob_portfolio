'use client';

import React, { createContext, useContext, useState, useSyncExternalStore, ReactNode } from 'react';
import type { Language, I18nRecord, MultiLangText } from '@/types';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(data: MultiLangText | I18nRecord<T> | T | undefined | null) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribeStorage(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getStoredLanguage(): Language {
  try {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'vi' || saved === 'en') {
      return saved;
    }
  } catch {
    // Bỏ qua nếu localStorage bị chặn
  }
  return 'vi';
}

function getServerLanguage(): Language {
  return 'vi';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const storedLang = useSyncExternalStore(subscribeStorage, getStoredLanguage, getServerLanguage);
  const [activeLanguage, setActiveLanguage] = useState<Language | null>(null);

  const language = activeLanguage ?? storedLang;

  const setLanguage = (lang: Language) => {
    setActiveLanguage(lang);
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch {
      // Bỏ qua nếu localStorage bị chặn
    }
  };

  // Hàm t hỗ trợ lấy dữ liệu an toàn theo ngôn ngữ hiện tại
  const t = <T = string>(data: MultiLangText | I18nRecord<T> | T | undefined | null): string => {
    if (!data) return '';
    if (typeof data === 'string') return data;
    if (typeof data === 'object' && data !== null) {
      const record = data as Record<string, unknown>;
      return String(record[language] ?? record['vi'] ?? '');
    }
    return String(data);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
