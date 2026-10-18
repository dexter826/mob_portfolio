'use client';

import React from 'react';
import { FadeIn } from '../ui';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'System Architecture',
    description:
      'Creation of scalable architectures, robust data pipelines, and serverless workflows tailored to high-demand applications.',
  },
  {
    number: '02',
    title: 'Motion & Interactive UI',
    description:
      'Dynamic animations, 60fps micro-interactions, and motion design that add energy and storytelling to digital experiences.',
  },
  {
    number: '03',
    title: 'Full-Stack Engineering',
    description:
      'Building clean, conversion-focused web apps and PWAs using modern React, TypeScript, and cloud services with extreme attention to speed.',
  },
  {
    number: '04',
    title: 'AI Solutions Integration',
    description:
      'Crafting intelligent AI-powered features, smart recommendation engines, and automation workflows that solve real operational bottlenecks.',
  },
  {
    number: '05',
    title: 'Modern Product Design',
    description:
      'Designing clean, modern, and memorable digital products with meticulous attention to layout, typography, and cohesive visual identities.',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28 tracking-tight">
            Services
          </h2>
        </FadeIn>

        {/* 5 Services List */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={20}
              className="flex flex-col md:flex-row md:items-start justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 md:gap-8 group hover:bg-[#0C0C0C]/[0.02] transition-colors"
            >
              {/* Number */}
              <div className="font-black text-[clamp(3rem,10vw,140px)] text-[#0C0C0C] leading-none min-w-[120px] sm:min-w-[180px] md:min-w-[220px] select-none">
                {service.number}
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C] leading-snug">
                  {service.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60 mt-2 sm:mt-3">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
