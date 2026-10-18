'use client';

import React from 'react';

export interface MotionCardItem {
  src: string;
  title: string;
  tag: string;
}

export function MarqueeCard({ item }: { item: MotionCardItem }) {
  return (
    <div className="w-[380px] sm:w-[420px] h-[240px] sm:h-[270px] min-w-[380px] sm:min-w-[420px] rounded-card overflow-hidden bg-surface-card-hover border border-white/10 shrink-0 relative group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover rounded-2xl pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Top-left category tag */}
      <div className="absolute top-4 left-4">
        <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-text-primary">
          {item.tag}
        </span>
      </div>

      {/* Bottom title */}
      <div className="absolute bottom-4 left-4 right-4">
        <h4 className="font-bold text-base sm:text-lg text-white uppercase tracking-tight">
          {item.title}
        </h4>
      </div>
    </div>
  );
}
