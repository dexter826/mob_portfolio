'use client';

import React, { useRef, useState, useEffect } from 'react';
import { MarqueeCard, type MotionCardItem } from './marquee-card';

const ROW_1_ITEMS: MotionCardItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    title: 'Rapid Prototyping',
    tag: '0-TO-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    title: 'Pragmatic Architecture',
    tag: 'SYSTEMS',
  },
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    title: 'Intelligent Agent Workflows',
    tag: 'AI-NATIVE',
  },
  {
    src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80',
    title: 'Micro-Interaction Physics',
    tag: 'EXPERIENCE',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    title: 'Lean MVP & Unit Economics',
    tag: 'VALIDATION',
  },
  {
    src: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80',
    title: 'Clean Code & SOLID Standards',
    tag: 'CRAFT',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    title: 'High-Concurrency Engine',
    tag: 'FULL-STACK',
  },
  {
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    title: 'Zero-Downtime Pipeline',
    tag: 'DEPLOYMENT',
  },
];

const ROW_2_ITEMS: MotionCardItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    title: 'Minimalist Obsidian Setup',
    tag: 'WORKSPACE',
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
    title: 'First-Principles Thinking',
    tag: 'MINDSET',
  },
  {
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    title: 'Speciality Pour-Over Coffee',
    tag: 'RITUAL',
  },
  {
    src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    title: 'Swiss Typography & Grid',
    tag: 'AESTHETIC',
  },
  {
    src: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    title: 'Mechanical Keyboards & Gear',
    tag: 'HARDWARE',
  },
  {
    src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    title: 'Deep Knowledge & Systems',
    tag: 'READING',
  },
  {
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    title: 'High-Fidelity Studio Sound',
    tag: 'AUDIO',
  },
  {
    src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80',
    title: 'Continuous Kaizen & Curiosity',
    tag: 'PHILOSOPHY',
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
