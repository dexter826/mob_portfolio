'use client';

import React, { useRef, useState, useEffect } from 'react';

interface MotionCardItem {
  src: string;
  title: string;
  tag: string;
}

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
    src: 'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    title: 'Orbit Topology',
    tag: 'DISTRIBUTED SYSTEMS',
  },
  {
    src: 'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
    title: 'Nexora Interface',
    tag: 'NEXT-GEN UI',
  },
  {
    src: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
    title: 'EVR Workflows',
    tag: 'REAL-TIME OPS',
  },
  {
    src: 'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
    title: 'Planet Orbit',
    tag: 'GRAPHICS ENGINE',
  },
  {
    src: 'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
    title: 'New Era Digital',
    tag: 'WEB PLATFORM',
  },
  {
    src: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
    title: 'Fintech Engine',
    tag: 'FINTECH APIS',
  },
  {
    src: 'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
    title: 'Luminex Shader',
    tag: 'CREATIVE TECH',
  },
  {
    src: 'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
    title: 'Celestia Network',
    tag: 'PEER ARCHITECTURE',
  },
];

const TRIPLED_ROW_1 = [...ROW_1_ITEMS, ...ROW_1_ITEMS, ...ROW_1_ITEMS];
const TRIPLED_ROW_2 = [...ROW_2_ITEMS, ...ROW_2_ITEMS, ...ROW_2_ITEMS];

function MotionCard({ item }: { item: MotionCardItem }) {
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
            <MotionCard key={`row1-${index}`} item={item} />
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
            <MotionCard key={`row2-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
