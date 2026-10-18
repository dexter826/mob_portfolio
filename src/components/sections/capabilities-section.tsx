'use client';

import React from 'react';
import { FadeIn } from '../ui';

interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01',
    title: 'System Design & Architecture',
    description:
      'Translating complex business requirements into UML diagrams (Visual Paradigm), robust database schemas, and clean serverless system architectures designed for scalability and operational stability.',
    tags: ['Visual Paradigm', 'UML Modeling', 'Database Schema', 'Serverless Architecture'],
  },
  {
    number: '02',
    title: 'Full-Stack Web & PWA',
    description:
      'Developing agile, high-performance web applications and progressive web apps with React 19, Next.js, TypeScript, Tailwind CSS, and Firebase, featuring offline-first data caching and seamless sync.',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PWA / Offline'],
  },
  {
    number: '03',
    title: 'AI-Native & API Integration',
    description:
      'Embedding generative AI capabilities via OpenRouter and integrating production third-party APIs (instant VietQR payments, ZegoCloud WebRTC video/audio, TMDB API) into cohesive, automated workflows.',
    tags: ['OpenRouter AI', 'VietQR Fintech', 'ZegoCloud WebRTC', 'REST APIs'],
  },
  {
    number: '04',
    title: 'Product Thinking & UX',
    description:
      'Applying Design Thinking and pragmatic problem-solving to discover user pain points, eliminate operational bottlenecks, and craft intuitive, human-centered digital experiences.',
    tags: ['Design Thinking', 'Problem Solving', 'Critical Thinking', 'Agile Delivery'],
  },
  {
    number: '05',
    title: 'Engineering Experience',
    description:
      'Demonstrated real-world delivery: designing AI-native solutions as Intern Product Builder at YODY Fashion JSC, managing computing systems at TNC, and authoring rigorous technical specifications.',
    tags: ['YODY Fashion JSC', 'TNC Computer', 'HUIT Software Engineering', 'Technical Docs'],
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28 tracking-tight">
            Capabilities
          </h2>
        </FadeIn>

        {/* 5 Capabilities List */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {CAPABILITIES.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={20}
              className="flex flex-col md:flex-row md:items-start justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 md:gap-8 group hover:bg-[#0C0C0C]/[0.02] transition-colors"
            >
              {/* Number */}
              <div className="font-black text-[clamp(3rem,10vw,140px)] text-[#0C0C0C] leading-none min-w-[120px] sm:min-w-[180px] md:min-w-[220px] select-none">
                {item.number}
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-medium uppercase text-[clamp(1.1rem,2.2vw,2.1rem)] text-[#0C0C0C] leading-snug">
                  {item.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.2rem)] text-[#0C0C0C] opacity-70 mt-2 sm:mt-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-[#0C0C0C]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
