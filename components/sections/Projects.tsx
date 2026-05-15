'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PROJECTS, UI_LABELS } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
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
                <div className="w-full lg:w-[55%] relative aspect-3/2 overflow-hidden border border-border-subtle group-hover:border-primary/50 transition-colors bg-card">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-all duration-700" 
                  />
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-size-[100%_2px,3px_100%] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Project Number Overlay */}
                  <div className={`absolute bottom-4 ${idx % 2 === 1 ? 'left-4' : 'right-4'} z-20`}>
                    <span className="text-5xl font-black text-white/5 font-mono select-none">0{idx + 1}</span>
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
                  
                  <p className="text-sm sm:text-[15px] text-muted-foreground/90 leading-relaxed mb-8 max-w-xl font-medium">
                    {t(project.description)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                     {project.tech.map((tech, i) => (
                       <Badge key={i} variant="secondary" className="text-[10px] uppercase font-mono tracking-widest rounded-none text-primary bg-primary/5 border border-primary/10 hover:bg-primary hover:text-black py-0.5 px-2 transition-colors">
                         {tech}
                       </Badge>
                     ))}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] uppercase font-mono text-muted-foreground/60 group-hover:text-primary transition-colors tracking-widest">
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
