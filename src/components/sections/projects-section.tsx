'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton, FadeIn } from '../ui';
import { PROJECTS, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import type { Project } from '@/types';
import { ExternalLink, CheckCircle2, Layers } from 'lucide-react';

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: CardProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const number = `0${index + 1}`;

  return (
    <div
      ref={containerRef}
      className="h-[92vh] min-h-[680px] flex items-start justify-center sticky top-16 sm:top-20 md:top-24"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
        }}
        className="w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl relative overflow-hidden"
      >
        {/* Top Bar: Number, Title, Role, Live Demo & GitHub */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.2rem,5vw,72px)] text-[#D7E2EA] leading-none select-none">
              {number}
            </span>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] sm:text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                  {t(project.role)}
                </span>
              </div>
              <h3 className="font-bold uppercase text-lg sm:text-2xl md:text-3xl text-white tracking-tight mt-0.5">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light max-w-2xl line-clamp-1 mt-0.5">
                {t(project.description)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code on GitHub"
                title={t(UI_LABELS.projects.github)}
                className="p-2 sm:p-2.5 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/80 hover:text-white hover:border-[#D7E2EA] hover:bg-white/5 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.liveDemo && (
              <LiveProjectButton
                href={project.liveDemo}
                label={t(UI_LABELS.projects.liveDemo)}
              />
            )}
          </div>
        </div>

        {/* Card Body: Full 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 flex-1 items-stretch overflow-hidden">
          {/* Left Column (5 cols): Authentic Problem, Solution & Core Features */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 justify-between">
            {/* Problem & Solution Box */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#141414] border border-[#D7E2EA]/15 p-4 sm:p-5 flex flex-col gap-2.5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400/90 font-bold block mb-1">
                  ● {t(UI_LABELS.projects.problem)}
                </span>
                <p className="text-xs sm:text-[13px] text-[#D7E2EA]/80 leading-relaxed font-light">
                  {t(project.problem)}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400/90 font-bold block mb-1">
                  ● {t(UI_LABELS.projects.solution)}
                </span>
                <p className="text-xs sm:text-[13px] text-[#D7E2EA]/80 leading-relaxed font-light">
                  {t(project.solution)}
                </p>
              </div>
            </div>

            {/* Core Features List */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#141414] border border-[#D7E2EA]/15 p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D7E2EA]/60 font-semibold block mb-2">
                  {t(UI_LABELS.projects.coreFeatures)}
                </span>
                <ul className="space-y-1.5">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-[13px] text-[#D7E2EA]/90 flex items-start gap-2 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Real Mockup Image + Detailed TechStack Breakdown */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 justify-between">
            {/* Screenshot Hero */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181818] border border-[#D7E2EA]/15 relative min-h-[220px] sm:min-h-[260px] md:min-h-[290px] flex-1 group">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#D7E2EA]">
                <span className="bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  {t(UI_LABELS.projects.idPrefix)} {number}
                </span>
                <span className="text-emerald-400 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  ● {t(UI_LABELS.projects.liveDemo)}
                </span>
              </div>
            </div>

            {/* TechStack Breakdown Grid */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#141414] border border-[#D7E2EA]/15 p-4 sm:p-5">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Layers className="w-3.5 h-3.5 text-[#D7E2EA]/70" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D7E2EA]/60 font-semibold">
                  {t(UI_LABELS.projects.techStack)}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {Object.entries(project.techStack).map(([layer, val]) => (
                  <div
                    key={layer}
                    className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col"
                  >
                    <span className="text-[10px] uppercase text-[#D7E2EA]/50 font-bold">
                      {layer}
                    </span>
                    <span className="text-[#D7E2EA]/90 truncate mt-0.5">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="bg-[#0C0C0C] py-24 sm:py-32 select-none relative z-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20 text-center">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            {t(UI_LABELS.projects.title)}
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-widest mt-4">
            {language === 'vi'
              ? 'Các sản phẩm và hệ thống phần mềm đã xây dựng'
              : 'Production builds & system design implementations'}
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
