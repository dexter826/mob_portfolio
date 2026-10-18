'use client';

import React, { useRef, useState, useEffect } from 'react';
import { MarqueeCard, type MotionCardItem } from './marquee-card';

const ROW_1_ITEMS: MotionCardItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
    title: 'Quantum Core Architecture',
    tag: 'SYSTEMS',
  },
  {
    src: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=80',
    title: 'Neural Synapse Matrix',
    tag: 'AI-NATIVE',
  },
  {
    src: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=800&auto=format&fit=crop&q=80',
    title: 'Titanium Monolith Mesh',
    tag: 'SPATIAL',
  },
  {
    src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80',
    title: 'Kinetic Physics Orb',
    tag: 'EXPERIENCE',
  },
  {
    src: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?w=800&auto=format&fit=crop&q=80',
    title: 'Distributed Cloud Topology',
    tag: 'INFRA',
  },
  {
    src: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&auto=format&fit=crop&q=80',
    title: 'Cryptographic Glass Shield',
    tag: 'SECURITY',
  },
  {
    src: 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?w=800&auto=format&fit=crop&q=80',
    title: 'Realtime Stream Topography',
    tag: 'DATA',
  },
  {
    src: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&auto=format&fit=crop&q=80',
    title: 'Orbital Compute Nodes',
    tag: 'GRAVITY',
  },
];

const ROW_2_ITEMS: MotionCardItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&auto=format&fit=crop&q=80',
    title: 'Rapid Prototype Engine',
    tag: '0-TO-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    title: 'Liquid Metal Pipeline',
    tag: 'FLUIDITY',
  },
  {
    src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80',
    title: 'Spectral Refraction Shaders',
    tag: 'PRISM',
  },
  {
    src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=80',
    title: 'Monolithic Sculpture',
    tag: 'OBSIDIAN',
  },
  {
    src: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&auto=format&fit=crop&q=80',
    title: 'Neon Vector Highways',
    tag: 'ACCELERATION',
  },
  {
    src: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&auto=format&fit=crop&q=80',
    title: 'Spatial Geometry Elements',
    tag: 'MINIMALISM',
  },
  {
    src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    title: 'Digital Intelligence Core',
    tag: 'SYNAPSE',
  },
  {
    src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80',
    title: 'Micro-Interaction Wave',
    tag: 'MOTION',
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
