'use client';

import React from 'react';
import { FadeIn } from '../ui';
import { EXPERIENCE, SKILLS, PERSONAL_INFO } from '@/data/portfolio';
import { ExternalLink } from 'lucide-react';

interface ExperienceMilestone {
  number: string;
  period: string;
  role: string;
  company: string;
  link?: string;
  description: string;
  focus: string[];
}

const MILESTONES: ExperienceMilestone[] = [
  {
    number: '01',
    period: EXPERIENCE[0].period,
    role: EXPERIENCE[0].role.en,
    company: EXPERIENCE[0].company,
    link: EXPERIENCE[0].link,
    description: EXPERIENCE[0].description.en,
    focus: ['AI-Native Solutions', 'Business Workflows', 'Product Systems'],
  },
  {
    number: '02',
    period: EXPERIENCE[1].period,
    role: EXPERIENCE[1].role.en,
    company: EXPERIENCE[1].company,
    link: EXPERIENCE[1].link,
    description: EXPERIENCE[1].description.en,
    focus: ['Computer Hardware', 'OS Configuration', 'Systems Setup'],
  },
  {
    number: '03',
    period: PERSONAL_INFO.education.period,
    role: `${PERSONAL_INFO.education.major.en} (GPA ${PERSONAL_INFO.education.gpa})`,
    company: PERSONAL_INFO.education.school.en,
    link: 'https://huit.edu.vn',
    description:
      'Formal academic training in software engineering, system architecture, database modeling, and software engineering methodologies.',
    focus: ['Software Engineering', 'System Architecture', 'UML & Database'],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] leading-none mb-4 tracking-tight">
            Experience
          </h2>
          <p className="font-mono text-center text-xs sm:text-sm uppercase tracking-widest text-[#0C0C0C]/60 mb-16 sm:mb-20 md:mb-24">
            Work history, professional roles & academic background
          </p>
        </FadeIn>

        {/* 1. Chronological Experience & Education Milestones */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15 mb-20 sm:mb-24">
          {MILESTONES.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={20}
              className="flex flex-col md:flex-row md:items-start justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 md:gap-8 group hover:bg-[#0C0C0C]/[0.02] transition-colors"
            >
              {/* Number */}
              <div className="font-black text-[clamp(2.5rem,8vw,110px)] text-[#0C0C0C] leading-none min-w-[100px] sm:min-w-[140px] md:min-w-[180px] select-none">
                {item.number}
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0C0C0C]/70 bg-[#0C0C0C]/5 px-2.5 py-0.5 rounded">
                    {item.period}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#0C0C0C]/60 hover:text-[#0C0C0C] transition-colors"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h3 className="font-bold uppercase text-[clamp(1.15rem,2.2vw,1.9rem)] text-[#0C0C0C] leading-snug">
                  {item.role}
                </h3>
                <h4 className="font-medium text-sm sm:text-base text-[#0C0C0C]/80 mt-0.5">
                  {item.company}
                </h4>

                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.5vw,1.1rem)] text-[#0C0C0C] opacity-75 mt-2 sm:mt-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.focus.map((tag, tIdx) => (
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

        {/* 2. Verified Skills & Tools from portfolio.ts */}
        <FadeIn delay={0.2} y={30}>
          <div className="pt-8 border-t border-[#0C0C0C]/15">
            <div className="text-center md:text-left mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0C0C0C]/50">
                Competencies & Stack
              </span>
              <h3 className="font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#0C0C0C] mt-1">
                Verified Skills & Tools
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Tools */}
              <div className="p-6 rounded-2xl bg-[#0C0C0C]/[0.03] border border-[#0C0C0C]/10">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0C0C0C]/60 block mb-3 font-semibold">
                  Tools & Architecture
                </span>
                <ul className="space-y-2">
                  {SKILLS[0].items.map((tool, idx) => (
                    <li
                      key={idx}
                      className="text-sm font-medium text-[#0C0C0C]/90 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0C0C0C] shrink-0" />
                      <span>{typeof tool === 'string' ? tool : tool.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="p-6 rounded-2xl bg-[#0C0C0C]/[0.03] border border-[#0C0C0C]/10">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0C0C0C]/60 block mb-3 font-semibold">
                  Professional Methodologies
                </span>
                <ul className="space-y-2">
                  {SKILLS[1].items.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-sm font-medium text-[#0C0C0C]/90 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0C0C0C] shrink-0" />
                      <span>{typeof skill === 'string' ? skill : skill.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages & Core Stack */}
              <div className="p-6 rounded-2xl bg-[#0C0C0C]/[0.03] border border-[#0C0C0C]/10">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0C0C0C]/60 block mb-3 font-semibold">
                  Languages & Stack
                </span>
                <ul className="space-y-2">
                  {SKILLS[2].items.map((lang, idx) => (
                    <li
                      key={idx}
                      className="text-sm font-medium text-[#0C0C0C]/90 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0C0C0C] shrink-0" />
                      <span>{typeof lang === 'string' ? lang : lang.en}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-4 border-t border-[#0C0C0C]/10">
                  <div className="flex flex-wrap gap-1.5">
                    {['React 19', 'TypeScript', 'Firebase', 'Tailwind', 'Zustand', 'VietQR'].map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#0C0C0C]/10 text-[#0C0C0C]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
