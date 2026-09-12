'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PROJECTS, UI_LABELS } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@mob-signal/components';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
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
        <h2 className="text-xs uppercase tracking-mega text-primary font-bold font-mono">{t(UI_LABELS.projects.title)}</h2>
        <a href="https://github.com/dexter826" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-mono group">
          {t(UI_LABELS.projects.github)} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      
      <div className="flex flex-col gap-12 lg:gap-16">
        {PROJECTS.map((project, idx) => (
          <motion.div key={idx} variants={item}>
            <Link href={`/projects/${project.slug}`}>
              <div className={`group flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-20 items-center cursor-pointer`}>
                {/* Image Section */}
                <div className="ds-media-scanline relative aspect-3/2 w-full overflow-hidden border border-border-subtle bg-card transition-colors group-hover:border-primary/50 lg:w-[55%]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-all duration-700" 
                  />
                  {/* Project Number Overlay */}
                  <div className={`absolute bottom-4 ${idx % 2 === 1 ? 'left-4' : 'right-4'} z-20`}>
                    <span aria-hidden="true" className="select-none font-mono text-5xl font-black text-foreground/5">0{idx + 1}</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-[45%] flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-10 bg-primary/30" />
                    <span className="text-[11px] uppercase font-mono text-primary tracking-mega">{t(UI_LABELS.projects.idPrefix)}_0{idx + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">
                    {project.title}
                  </h3>
                  
                  <p className="mb-8 max-w-xl text-sm font-medium leading-relaxed text-[var(--ds-text-muted)] sm:text-[15px]">
                    {t(project.description)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                     {project.tech.map((tech, i) => (
                       <Badge key={i} variant="accent" className="font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-primary hover:text-background">
                         {tech}
                       </Badge>
                     ))}
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--ds-text-muted)] transition-colors group-hover:text-primary">
                    <span>{t(UI_LABELS.projects.viewDetail)}</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
