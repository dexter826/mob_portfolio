'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

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
  return (
    <motion.div 
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border-medium pt-12 flex flex-col"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xs uppercase tracking-widest text-primary font-mono">Dự Án Nổi Bật</h2>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-muted hover:text-foreground transition-colors flex items-center gap-1 font-mono">
          GitHub <ChevronRight className="w-3 h-3" />
        </a>
      </div>
      
      <div className="space-y-10">
        {PROJECTS.map((project, idx) => (
          <motion.div key={idx} variants={item}>
            <Link href={`/projects/${project.slug}`}>
              <Card className="group block transition-all hover:bg-white/5 border-0 bg-transparent rounded-none shadow-none p-0 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative w-full h-40 sm:h-48 lg:h-56 mb-4 overflow-hidden bg-border-subtle group-hover:border-primary border border-transparent transition-colors">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-end border-b border-border-subtle pb-1.5 mb-2.5">
                  <span className="text-xl font-bold uppercase italic tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                    0{idx + 1}. {project.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                   {project.tech.map((tech, i) => (
                     <Badge key={i} variant="secondary" className="text-[9px] uppercase font-mono tracking-widest rounded-none text-primary bg-border-subtle hover:bg-primary hover:text-black py-0 px-2">
                       {tech}
                     </Badge>
                   ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
