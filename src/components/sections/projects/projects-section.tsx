'use client';

import React from 'react';
import { SectionContainer, SectionHeader } from '@/components/ui';
import { PROJECTS, UI_LABELS } from '@/data/portfolio';
import { useLanguage } from '@/context/language-context';
import { ProjectCard } from './project-card';

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <SectionContainer id="projects" variant="dark" className="py-24 sm:py-32 z-10">
      <SectionHeader
        title={t(UI_LABELS.projects.title)}
        subtitle={t(UI_LABELS.projects.subtitle)}
        theme="dark"
        align="center"
        className="mb-16 sm:mb-20 max-w-6xl mx-auto"
      />

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
    </SectionContainer>
  );
}
