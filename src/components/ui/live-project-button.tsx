'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors duration-200 shrink-0 ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}
