'use client';

import React from 'react';

interface LiveProjectButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export function LiveProjectButton({
  href,
  className = '',
  label = 'Live Project',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 active:scale-[0.98] transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${className}`}
    >
      {label}
    </a>
  );
}
