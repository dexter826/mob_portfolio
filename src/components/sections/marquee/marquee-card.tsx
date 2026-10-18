'use client';

import React from 'react';

export interface MotionCardItem {
  src: string;
  title: string;
  tag: string;
}

export function MarqueeCard({ item }: { item: MotionCardItem }) {
  return (
    <div className="w-[280px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] min-w-[280px] sm:min-w-[350px] md:min-w-[420px] rounded-2xl md:rounded-card overflow-hidden bg-surface-card-hover border border-white/10 hover:border-white/25 shrink-0 relative group transition-colors duration-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover rounded-xl md:rounded-2xl pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      {/* Top-left category tag */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-text-primary">
          {item.tag}
        </span>
      </div>

      {/* Bottom title */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
        <h4 className="font-bold text-sm sm:text-base md:text-lg text-white uppercase tracking-tight">
          {item.title}
        </h4>
      </div>
    </div>
  );
}
