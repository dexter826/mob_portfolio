'use client';

import { useParams, useRouter } from 'next/navigation';
import { PROJECTS } from '@/lib/data';
import { motion } from 'motion/react';
import { ChevronLeft, Terminal, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-primary font-mono">
        404_PROJECT_NOT_FOUND
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-background pb-20">
      {/* Background Matrix-like Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 pt-12 relative z-10">
        <button 
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back_to_Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border-medium pb-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20 rounded-none text-[10px] uppercase font-mono px-3 py-0.5">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="rounded-none font-mono text-[10px] uppercase tracking-widest border-border-medium hover:border-primary hover:text-primary bg-transparent">
                <Terminal className="w-4 h-4 mr-2" /> GitHub
              </Button>
              <Button size="sm" className="rounded-none font-mono text-[10px] uppercase tracking-widest bg-primary text-black hover:bg-primary/90">
                <Globe className="w-4 h-4 mr-2" /> Live Demo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="relative aspect-video w-full overflow-hidden border border-border-medium bg-card">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-bold">Case Study</h2>
                <p className="text-muted-foreground leading-relaxed text-lg italic">
                   {project.description}
                </p>
                <div className="h-px w-20 bg-primary/30" />
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 border border-border-subtle bg-card/50">
                <h3 className="text-[10px] uppercase tracking-widest text-primary font-mono mb-6 font-bold">Key Features</h3>
                <ul className="space-y-4">
                  {['Tích hợp Auth', 'Database Realtime', 'Giao diện Responsive', 'Tối ưu hiệu năng'].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-muted-foreground">
                      <ArrowRight className="w-3 h-3 mt-0.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border border-border-subtle bg-primary/5">
                <h3 className="text-[10px] uppercase tracking-widest text-primary font-mono mb-4 font-bold">Inspiration</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dự án này được lấy cảm hứng từ các thiết kế Terminal hiện đại, kết hợp giữa tính ứng dụng và thẩm mỹ tối giản.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
