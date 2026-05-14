'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      className="border-t border-border-medium pt-6 flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xs uppercase tracking-widest text-primary font-mono">Dự Án Nổi Bật</h2>
        <a href="https://github.com" className="text-[10px] uppercase tracking-widest text-muted hover:text-foreground transition-colors flex items-center gap-1 font-mono">
          GitHub <ChevronRight className="w-3 h-3" />
        </a>
      </div>
      
      <div className="space-y-8">
        {PROJECTS.map((project, idx) => (
          <motion.div key={idx} variants={item}>
            <Card className="group block transition-all hover:bg-white/5 border-0 bg-transparent rounded-none shadow-none p-0 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative w-full h-48 sm:h-56 lg:h-64 mb-6 overflow-hidden bg-border-subtle group-hover:border-primary border border-transparent transition-colors">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-end border-b border-border-subtle pb-2 mb-3">
                  <span className="text-2xl font-bold uppercase italic tracking-tight group-hover:text-primary transition-colors line-clamp-1 mr-4">
                    0{idx + 1}. {project.title}
                  </span>
                  <span className="text-[10px] text-muted uppercase whitespace-nowrap hidden lg:block font-mono">
                    {project.tech[0]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                   {project.tech.map((tech, i) => (
                     <Badge key={i} variant="secondary" className="text-[10px] uppercase font-mono tracking-widest rounded-none text-primary bg-border-subtle hover:bg-primary hover:text-black">
                       {tech}
                     </Badge>
                   ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
