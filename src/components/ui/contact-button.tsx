'use client';

import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function ContactButton({
  onClick,
  className = '',
  label = 'Contact me',
}: ContactButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center p-[2px] rounded-full transition-transform active:scale-95 duration-200 cursor-pointer ${className}`}
    >
      {/* Outer dual-gradient border */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D7E2EA] via-[#94A3B8] to-[#D7E2EA] p-[1.5px] transition-all group-hover:opacity-90" />

      {/* Inner surface */}
      <span className="relative flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#141414] text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base transition-colors duration-200 group-hover:bg-[#1E1E1E]">
        {label}
      </span>
    </button>
  );
}
