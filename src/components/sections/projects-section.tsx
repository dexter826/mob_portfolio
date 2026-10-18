'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton, FadeIn } from '../ui';
import { ExternalLink } from 'lucide-react';

interface ProjectCardData {
  number: string;
  category: string;
  title: string;
  role: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  imageSrc: string;
  techStack: string[];
  keyFeatures: string[];
}

const PROJECTS_DATA: ProjectCardData[] = [
  {
    number: '01',
    category: 'PWA / Serverless / AI',
    title: 'CineMOB - Movie Tracker',
    role: 'System Designer & Developer',
    description:
      'Personal movie management and smart cinema discovery platform with OpenRouter AI integration and TMDB API.',
    liveUrl: 'https://cinematrics-e0231.firebaseapp.com/',
    githubUrl: 'https://github.com/dexter826/cinemob',
    imageSrc: '/cinemob.jpg',
    techStack: ['React 19', 'TypeScript', 'Firebase v12', 'Zustand 5', 'OpenRouter AI', 'TMDB API'],
    keyFeatures: [
      'Smart AI Movie Recommendations',
      'Watchlist Random Picker',
      'TV Show Airing Schedule',
      'Excel Data Export (.xlsx)',
      'Google Auth & PWA Offline',
    ],
  },
  {
    number: '02',
    category: 'Mobile-First Web App / Fintech',
    title: 'ShiftPay - Payroll System',
    role: 'System Designer & Developer',
    description:
      'Flexible system for HR management, attendance tracking, and automated payroll with fast VietQR payment integration.',
    liveUrl: 'https://at-shiftpay.web.app/',
    githubUrl: 'https://github.com/dexter826/at_shiftpay',
    imageSrc: '/shiftpay.jpg',
    techStack: ['React 19', 'TypeScript', 'Firebase', 'VietQR API', 'Zustand', 'Tailwind CSS'],
    keyFeatures: [
      'Automated Shift-Based Payroll',
      'Dynamic VietQR Payment Codes',
      'Offline-First Data & Sync',
      'Employee Debt & Advance Tracking',
      'Visual Attendance Dashboard',
    ],
  },
  {
    number: '03',
    category: 'Real-Time Social Network / Media',
    title: 'Smurfy - Realtime Social',
    role: 'System Designer & Developer',
    description:
      'Real-time social communication platform supporting rich multimedia chat, ZegoCloud video calling, and hybrid database architecture.',
    liveUrl: 'https://smurfy-138c1.web.app/',
    githubUrl: 'https://github.com/dexter826/smurf_social',
    imageSrc: '/smurfy.jpg',
    techStack: ['React 19', 'TypeScript', 'Firestore & RTDB', 'Cloud Functions', 'ZegoCloud', 'Giphy API'],
    keyFeatures: [
      'Real-Time Chat & Media Sharing',
      'Low-Latency Video & Voice Calls',
      'Cosine Similarity Friend Matching',
      'Post Reactions & Feed Engine',
      'Admin Moderation & Access Control',
    ],
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
      className="h-[88vh] min-h-[640px] flex items-start justify-center sticky top-20 sm:top-24 md:top-28"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl relative"
      >
        {/* Top Row: Number, Category, Name, Live Project & GitHub */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.5rem,6vw,80px)] text-[#D7E2EA] leading-none select-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-light uppercase tracking-widest text-[11px] sm:text-xs text-[#D7E2EA]/60">
                  {project.category}
                </span>
                <span className="text-[#D7E2EA]/30 hidden sm:inline">•</span>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#D7E2EA]/50 uppercase tracking-wider">
                  {project.role}
                </span>
              </div>
              <h3 className="font-medium uppercase text-lg sm:text-2xl md:text-3xl text-[#D7E2EA] tracking-wide">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light mt-0.5 max-w-2xl line-clamp-1">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="p-2 sm:p-2.5 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/70 hover:text-white hover:border-[#D7E2EA] hover:bg-white/5 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        {/* Bottom Row: Two-Column Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 flex-1 items-stretch">
          {/* Left Column (5 cols): Architecture, Tech Stack & Key Features */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between">
            {/* Box 1: Tech Stack */}
            <div className="rounded-[28px] sm:rounded-[36px] bg-[#141414] border border-[#D7E2EA]/15 p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/50">
                  System Stack
                </span>
                <h4 className="font-medium text-sm sm:text-base text-white uppercase tracking-tight mt-1 mb-3">
                  Architecture & Tools
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-black/60 border border-white/5 text-[11px] font-mono text-[#D7E2EA]/90 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 2: Key Deliverables */}
            <div className="rounded-[28px] sm:rounded-[36px] bg-[#141414] border border-[#D7E2EA]/15 p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/50">
                  Deliverables
                </span>
                <h4 className="font-medium text-sm sm:text-base text-white uppercase tracking-tight mt-1 mb-2">
                  Key Capabilities Built
                </h4>
              </div>
              <ul className="space-y-1">
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-[#D7E2EA]/70 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (7 cols): Real Project Screenshot Showcase */}
          <div className="md:col-span-7 rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#181818] border border-[#D7E2EA]/15 relative min-h-[260px] sm:min-h-[340px] group">
            <Image
              src={project.imageSrc}
              alt={`${project.title} live interface`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#D7E2EA]">
              <span className="bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                Production Snapshot
              </span>
              <span className="text-emerald-400 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                ● Live on Web
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] py-24 sm:py-32 select-none relative z-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Projects
          </h2>
          <p className="font-mono text-center text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-widest mt-4">
            Curated production builds & system design implementations
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS_DATA.length}
          />
        ))}
      </div>
    </section>
  );
}
