'use client';

import React from 'react';
import { FadeIn } from '@/components/ui';

export function AboutDecorations() {
  return (
    <>
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[2%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decorative Asset"
            className="w-[70px] sm:w-[120px] md:w-[210px] object-contain drop-shadow-xl opacity-80 sm:opacity-100"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[4%] sm:bottom-[8%] left-[2%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none hidden sm:block">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Decorative Object"
            className="w-[60px] sm:w-[100px] md:w-[180px] object-contain drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[2%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Asset"
            className="w-[70px] sm:w-[120px] md:w-[210px] object-contain drop-shadow-xl opacity-80 sm:opacity-100"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[4%] sm:bottom-[8%] right-[2%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none hidden sm:block">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Asset"
            className="w-[70px] sm:w-[110px] md:w-[220px] object-contain drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>
    </>
  );
}
