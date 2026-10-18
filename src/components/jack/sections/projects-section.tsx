'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton, FadeIn } from '../ui';

interface ProjectCardData {
  number: string;
  category: string;
  title: string;
  liveUrl: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const PROJECTS_DATA: ProjectCardData[] = [
  {
    number: '01',
    category: 'Product / System',
    title: 'CineMOB',
    liveUrl: 'https://cinematrics-e0231.firebaseapp.com/',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    category: 'Fintech / Payroll',
    title: 'ShiftPay',
    liveUrl: 'https://at-shiftpay.web.app/',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    category: 'Social / Realtime',
    title: 'Smurfy',
    liveUrl: 'https://smurfy-138c1.web.app/',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface CardProps {
  project: ProjectCardData;
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[600px] flex items-start justify-center sticky top-20 sm:top-24 md:top-28"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl relative"
      >
        {/* Top Row: Number, Category, Name, Live Project Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.5rem,6vw,80px)] text-[#D7E2EA] leading-none select-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="font-light uppercase tracking-widest text-[11px] sm:text-xs text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-lg sm:text-2xl md:text-3xl text-[#D7E2EA] tracking-wide">
                {project.title}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.liveUrl} />
        </div>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 flex-1 items-stretch">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-6 justify-between">
            <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] h-[clamp(130px,16vw,230px)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.col1Img1}
                alt={`${project.title} mockup 1`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] pointer-events-none select-none"
              />
            </div>

            <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] h-[clamp(160px,22vw,340px)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.col1Img2}
                alt={`${project.title} mockup 2`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="md:col-span-7 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] h-full min-h-[220px] sm:min-h-[300px] md:min-h-[460px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.col2Img}
              alt={`${project.title} main showcase`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] pointer-events-none select-none"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-16 sm:pt-20 md:pt-24 pb-28 sm:pb-36 px-4 sm:px-6 md:px-10 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-14 sm:mb-20 tracking-tight">
            Project
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="flex flex-col relative">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
