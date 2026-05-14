'use client';

import { useParams, useRouter } from 'next/navigation';
import { PROJECTS, UI_LABELS } from '@/lib/data';
import { motion } from 'motion/react';
import { ChevronLeft, Terminal, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
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
          className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-mono text-xs uppercase tracking-widest cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t(UI_LABELS.projects.backToHome)}
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border-medium pb-8">
            <div className="flex-1">
              {project.role && (
                <span className="text-[10px] sm:text-xs font-mono text-primary uppercase tracking-[0.4em] mb-4 block">
                  {t(project.role)}
                </span>
              )}
              <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-foreground mb-6 leading-[0.85]">
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
            
            <div className="flex gap-4 shrink-0">
              <Link href={project.link} target="_blank">
                <Button variant="outline" size="sm" className="rounded-none font-mono text-[10px] uppercase tracking-widest border-border-medium hover:border-primary hover:text-primary bg-transparent h-10 px-6">
                  <Terminal className="w-4 h-4 mr-2" /> {t(UI_LABELS.projects.github)}
                </Button>
              </Link>
              {(project as any).liveDemo && (
                <Link href={(project as any).liveDemo} target="_blank">
                  <Button size="sm" className="rounded-none font-mono text-[10px] uppercase tracking-widest bg-primary text-black hover:bg-primary/90 h-10 px-6">
                    <Globe className="w-4 h-4 mr-2" /> {t(UI_LABELS.projects.liveDemo)}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Main Visual */}
          <div className="relative aspect-video w-full overflow-hidden border border-border-medium bg-card mb-16">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover opacity-80"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Overview Section */}
              <section className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-bold flex items-center gap-3">
                    <span className="w-8 h-px bg-primary/30" /> {t(UI_LABELS.projects.overview)}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-xl italic">
                    {t(project.description)}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                  <div className="space-y-3">
                    <h3 className="text-[10px] uppercase tracking-widest text-foreground font-mono font-bold">{t(UI_LABELS.projects.problem)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t((project as any).problem)}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[10px] uppercase tracking-widest text-foreground font-mono font-bold">{t(UI_LABELS.projects.solution)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t((project as any).solution)}
                    </p>
                  </div>
                </div>
              </section>

              {/* Detailed Features Section */}
              <section className="space-y-12">
                <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-bold flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/30" /> {t(UI_LABELS.projects.coreFeatures)}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {(project as any).detailedFeatures?.map((category: any, i: number) => (
                    <div key={i} className="space-y-6">
                      <h3 className="text-sm font-bold uppercase tracking-tighter text-foreground border-l-2 border-primary pl-4">
                        {t(category.category)}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item: any, j: number) => (
                          <li key={j} className="flex items-start gap-3 text-xs text-muted-foreground group">
                            <ArrowRight className="w-3 h-3 mt-0.5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Development Section */}
              <section className="space-y-8">
                <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-bold flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/30" /> {t(UI_LABELS.projects.caseStudy)}
                </h2>
                <div className="prose prose-invert max-w-none prose-sm text-muted-foreground leading-relaxed">
                  <p>{t(project.fullDescription)}</p>
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-10">
              {/* Tech Stack Sidebar */}
              <div className="p-8 border border-border-subtle bg-card/30 backdrop-blur-sm sticky top-12">
                <h3 className="text-[10px] uppercase tracking-widest text-primary font-mono mb-8 font-bold">{t(UI_LABELS.projects.techStack)}</h3>
                
                <div className="space-y-8">
                  {Object.entries((project as any).techStack || {}).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <h4 className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono">{key}</h4>
                      <p className="text-xs text-foreground font-medium">{value as string}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border-subtle">
                  <Link href={project.link} target="_blank" className="flex items-center justify-between group">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground group-hover:text-primary transition-colors">{t(UI_LABELS.projects.viewSource)}</span>
                    <Terminal className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
