'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface MarqueeCardData {
  type: 'image' | 'tech';
  title: string;
  subtitle: string;
  tag: string;
  imageSrc?: string;
  details?: string[];
}

const ROW_1_CARDS: MarqueeCardData[] = [
  {
    type: 'image',
    title: 'CineMOB',
    subtitle: 'AI-Native Cinema Discovery & Tracker',
    tag: 'PROJECT 01',
    imageSrc: '/cinemob.jpg',
  },
  {
    type: 'tech',
    title: 'React 19 & Next.js',
    subtitle: 'Modern Full-Stack Web Development',
    tag: 'CORE STACK',
    details: ['Server Actions', 'Optimistic UI', 'Hooks Architecture', 'PWA Support'],
  },
  {
    type: 'image',
    title: 'ShiftPay',
    subtitle: 'Automated Payroll & VietQR Fintech',
    tag: 'PROJECT 02',
    imageSrc: '/shiftpay.jpg',
  },
  {
    type: 'tech',
    title: 'Firebase Serverless',
    subtitle: 'Scalable Cloud Infrastructure',
    tag: 'BACKEND',
    details: ['Firestore & RTDB', 'Cloud Functions', 'Google Auth', 'Offline Cache'],
  },
  {
    type: 'image',
    title: 'Smurfy Social',
    subtitle: 'Real-Time Communication Platform',
    tag: 'PROJECT 03',
    imageSrc: '/smurfy.jpg',
  },
  {
    type: 'tech',
    title: 'AI-Native Integration',
    subtitle: 'OpenRouter & Smart Suggestions',
    tag: 'INTELLIGENCE',
    details: ['LLM Orchestration', 'Contextual Search', 'Prompt Engineering', 'API Gateways'],
  },
  {
    type: 'tech',
    title: 'VietQR Integration',
    subtitle: 'Instant Automated Banking QR',
    tag: 'FINTECH',
    details: ['Zero-Fee Payments', 'Auto Reference Codes', 'Mobile-First UX', 'Offline Cache'],
  },
];

const ROW_2_CARDS: MarqueeCardData[] = [
  {
    type: 'tech',
    title: 'System Design & UML',
    subtitle: 'Visual Paradigm & System Architecture',
    tag: 'ARCHITECTURE',
    details: ['Class & Sequence Diagrams', 'ERD Database Design', 'Clean Boundaries', 'API Specs'],
  },
  {
    type: 'image',
    title: 'ShiftPay Dashboard',
    subtitle: 'Attendance Tracking & Debt Ledger',
    tag: 'FINTECH UX',
    imageSrc: '/shiftpay.jpg',
  },
  {
    type: 'tech',
    title: 'ZegoCloud Realtime',
    subtitle: 'Low-Latency Video & Audio Calls',
    tag: 'WEBRTC',
    details: ['Peer-to-Peer Calling', 'Room Management', 'State Sync', 'Media Controls'],
  },
  {
    type: 'image',
    title: 'Smurfy Realtime Feed',
    subtitle: 'Multimedia Chat & Cosine Friends',
    tag: 'SOCIAL NETWORK',
    imageSrc: '/smurfy.jpg',
  },
  {
    type: 'tech',
    title: 'Tailwind CSS & Motion',
    subtitle: 'High-Impact Design Systems',
    tag: 'FRONTEND CRAFT',
    details: ['Fluid Typography', 'Custom Cubic Bezier', 'Magnet Physics', 'Scroll Stacking'],
  },
  {
    type: 'image',
    title: 'CineMOB AI Picks',
    subtitle: 'TMDB API & Smart Recommendations',
    tag: 'ENTERTAINMENT',
    imageSrc: '/cinemob.jpg',
  },
  {
    type: 'tech',
    title: 'YODY Fashion JSC',
    subtitle: 'Intern Product Builder Experience',
    tag: 'CAREER',
    details: ['AI-Native Tooling', 'Business Problem Solving', 'Agile Delivery', 'HUIT 3.36 GPA'],
  },
];

// Tripled lists for seamless visual looping
const TRIPLED_ROW_1 = [...ROW_1_CARDS, ...ROW_1_CARDS, ...ROW_1_CARDS];
const TRIPLED_ROW_2 = [...ROW_2_CARDS, ...ROW_2_CARDS, ...ROW_2_CARDS];

function CardItem({ card }: { card: MarqueeCardData }) {
  if (card.type === 'image' && card.imageSrc) {
    return (
      <div className="w-[380px] sm:w-[420px] h-[240px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#181818] border border-[#D7E2EA]/15 shrink-0 relative group">
        <Image
          src={card.imageSrc}
          alt={card.title}
          fill
          sizes="(max-width: 640px) 380px, 420px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#D7E2EA]">
            {card.tag}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
            {card.title}
          </h4>
          <p className="text-xs text-[#D7E2EA]/70 mt-0.5 line-clamp-1">
            {card.subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[380px] sm:w-[420px] h-[240px] sm:h-[260px] rounded-2xl bg-[#141414] border border-[#D7E2EA]/15 p-6 flex flex-col justify-between shrink-0 hover:border-[#D7E2EA]/40 transition-colors">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 rounded-md bg-[#222222] border border-white/5 text-[10px] font-mono uppercase tracking-wider text-[#D7E2EA]/70">
            {card.tag}
          </span>
          <span className="text-emerald-400 text-xs font-mono">● LIVE SPEC</span>
        </div>
        <h4 className="font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
          {card.title}
        </h4>
        <p className="text-xs text-[#D7E2EA]/60 mt-1">{card.subtitle}</p>
      </div>

      {card.details && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          {card.details.map((detail, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono text-[#D7E2EA]/80 px-2 py-0.5 rounded bg-black/40 border border-white/5"
            >
              {detail}
            </span>
          ))}
        </div>
      )}
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
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
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
          {TRIPLED_ROW_1.map((card, index) => (
            <CardItem key={`row1-${index}`} card={card} />
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
          {TRIPLED_ROW_2.map((card, index) => (
            <CardItem key={`row2-${index}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
