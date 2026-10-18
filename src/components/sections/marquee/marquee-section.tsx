'use client';

import React, { useRef, useState, useEffect } from 'react';
import { MarqueeCard, type MotionCardItem } from './marquee-card';

const ROW_1_ITEMS: MotionCardItem[] = [
  {
    src: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    title: 'Space Architecture',
    tag: '3D GRAPHICS',
  },
  {
    src: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    title: 'CodeNest Core',
    tag: 'DEV TOOLING',
  },
  {
    src: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    title: 'Vex Systems',
    tag: 'SCALE INFRA',
  },
  {
    src: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    title: 'Stellar Intelligence',
    tag: 'AI-NATIVE',
  },
  {
    src: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    title: 'ASME Platform',
    tag: 'SYSTEM DESIGN',
  },
  {
    src: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    title: 'Transform Pipeline',
    tag: 'DATA ENGINE',
  },
  {
    src: 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
    title: 'Vitara Dynamics',
    tag: 'MICRO-INTERACTION',
  },
  {
    src: 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
    title: 'Terra Topology',
    tag: '3D COMPUTING',
  },
  {
    src: 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
    title: 'SkyElite Cloud',
    tag: 'SERVERLESS',
  },
  {
    src: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
    title: 'Aethera Core',
    tag: 'FULL-STACK',
  },
  {
    src: 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
    title: 'DesignPro Studio',
    tag: 'PRODUCT UX',
  },
];

const ROW_2_ITEMS: MotionCardItem[] = [
  {
    src: 'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
    title: 'Stellar Generative',
    tag: 'LLM ORCHESTRATION',
  },
  {
    src: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    title: 'Interactive Motion',
    tag: 'FRONTEND CRAFT',
  },
  {
    src: 'https://motionsites.ai/assets/hero-sparkling-preview-k9o-Uq1j.gif',
    title: 'Sparkling UI',
    tag: 'DYNAMIC GRAPHICS',
  },
  {
    src: 'https://motionsites.ai/assets/hero-aurora-preview-BwGk-D6y.gif',
    title: 'Aurora Engine',
    tag: 'GPU SHADERS',
  },
  {
    src: 'https://motionsites.ai/assets/hero-hyperion-preview-DEy1mHkS.gif',
    title: 'Hyperion Vector',
    tag: 'ALGORITHMIC',
  },
  {
    src: 'https://motionsites.ai/assets/hero-genesis-preview-DJ1_rC9n.gif',
    title: 'Genesis Cloud',
    tag: 'DISTRIBUTED SYS',
  },
  {
    src: 'https://motionsites.ai/assets/hero-pulse-preview-CO43e11W.gif',
    title: 'Pulse Analytics',
    tag: 'REAL-TIME DATA',
  },
  {
    src: 'https://motionsites.ai/assets/hero-orion-preview-B13lB6P7.gif',
    title: 'Orion Gateway',
    tag: 'API GATEWAY',
  },
  {
    src: 'https://motionsites.ai/assets/hero-zenith-preview-C5-3d_z2.gif',
    title: 'Zenith Studio',
    tag: 'CREATIVE TECH',
  },
  {
    src: 'https://motionsites.ai/assets/hero-nexus-preview-D2FkLm8P.gif',
    title: 'Nexus Intelligence',
    tag: 'ML PLATFORM',
  },
];

const TRIPLED_ROW_1 = [...ROW_1_ITEMS, ...ROW_1_ITEMS, ...ROW_1_ITEMS];
const TRIPLED_ROW_2 = [...ROW_2_ITEMS, ...ROW_2_ITEMS, ...ROW_2_ITEMS];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateOffset = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculated = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculated);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateOffset);
        ticking = true;
      }
    };

    updateOffset();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-surface-base pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-4 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-4 whitespace-nowrap"
          style={{
            transform: `translate3d(${offset - 200}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW_1.map((item, index) => (
            <MarqueeCard key={`row1-${index}`} item={item} />
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-4 whitespace-nowrap"
          style={{
            transform: `translate3d(${-offset - 200}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW_2.map((item, index) => (
            <MarqueeCard key={`row2-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
