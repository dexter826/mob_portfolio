'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PROJECTS, UI_LABELS } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@mob-signal/components';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { dsMotion, easeExpo } from '@/lib/motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: dsMotion.fast
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: dsMotion.reveal, ease: easeExpo } }
};

export function Projects() {
  const { t } = useLanguage();

  return (
    <motion.div 
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border-medium py-10 sm:py-12 flex flex-col"
    >
      <div className="flex justify-between items-center mb-8 sm:mb-10">
        <h2 className="ds-signal-label">{t(UI_LABELS.projects.title)}</h2>
        <a href="https://github.com/dexter826" target="_blank" rel="noopener noreferrer" className="ds-signal-link group flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest">
          {t(UI_LABELS.projects.github)} <ChevronRight className="h-3 w-3 transition-transform duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] group-hover:translate-x-1" />
        </a>
      </div>
      
      <div className="flex flex-col gap-12 lg:gap-16">
        {PROJECTS.map((project, idx) => (
          <motion.div key={idx} variants={item}>
            <Link href={`/projects/${project.slug}`}>
              <div className={`group flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-20 items-center cursor-pointer`}>
                {/* Image Section */}
                <div className="ds-media-scanline ds-signal-frame ds-expressive-hover relative aspect-3/2 w-full bg-card lg:w-[55%]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  {/* Project Number Overlay */}
                  <div className={`absolute bottom-4 ${idx % 2 === 1 ? 'left-4' : 'right-4'} z-20`}>
                    <span aria-hidden="true" className="select-none font-mono text-5xl font-black text-foreground/5">0{idx + 1}</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-[45%] flex flex-col">
                  <span className="ds-signal-label mb-6">{t(UI_LABELS.projects.idPrefix)}_0{idx + 1}</span>
                  
                  <h3 className="ds-editorial-heading mb-4 text-2xl transition-colors duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] group-hover:text-primary sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>
                  
                  <p className="mb-8 max-w-xl text-sm font-medium leading-relaxed text-[var(--ds-text-muted)] sm:text-[15px]">
                    {t(project.description)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                     {project.tech.map((tech, i) => (
                       <Badge key={i} variant="accent" className="font-mono">
                         {tech}
                       </Badge>
                     ))}
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--ds-text-muted)] transition-colors duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] group-hover:text-primary">
                    <span>{t(UI_LABELS.projects.viewDetail)}</span>
                    <ChevronRight className="h-3 w-3 transition-transform duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
