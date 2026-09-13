'use client';

import { useParams, useRouter } from 'next/navigation';
import { PROJECTS, UI_LABELS } from '@/lib/data';
import { motion } from 'motion/react';
import { ChevronLeft, Terminal, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Button, Card, CardContent } from '@mob-signal/components';
import { useLanguage } from '@/context/LanguageContext';
import { dsMotion, easeExpo } from '@/lib/motion';

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
      <div className="ds-technical-grid pointer-events-none fixed inset-0 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--ds-bg-canvas)_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-10 sm:pt-14 relative z-10">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          size="compact"
          className="group mb-12 px-0 text-[11px] font-bold uppercase tracking-mega text-[var(--ds-text-muted)] hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4 transition-transform duration-[var(--ds-motion-fast)] group-hover:-translate-x-1" />
          {t(UI_LABELS.projects.backToHome)}
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dsMotion.reveal, ease: easeExpo }}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-border-medium pb-10">
            <div className="flex-1">
              {project.role && (
                <span className="ds-signal-label mb-4">
                  {t(project.role)}
                </span>
              )}
              <h1 className="ds-editorial-heading mb-6 text-4xl text-foreground wrap-break-word sm:text-6xl md:text-8xl">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <Badge key={i} variant="accent" className="px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full md:w-auto mt-4 md:mt-0">
              <Button asChild variant="secondary" size="default" className="h-11 w-full border-primary/20 bg-transparent px-7 text-[11px] font-bold uppercase tracking-mega hover:border-primary hover:text-primary sm:w-auto">
                <Link href={project.link} target="_blank">
                  <Terminal className="w-4 h-4 mr-2" /> {t(UI_LABELS.projects.github)}
                </Link>
              </Button>
              {(project as any).liveDemo && (
                <Button asChild size="default" className="h-11 w-full px-7 text-[11px] font-bold uppercase tracking-mega sm:w-auto">
                  <Link href={(project as any).liveDemo} target="_blank">
                    <Globe className="w-4 h-4 mr-2" /> {t(UI_LABELS.projects.liveDemo)}
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Main Visual */}
          <div className="ds-media-scanline ds-signal-frame relative mb-12 aspect-3/2 w-full bg-card">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover opacity-80"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            {/* Left Column: Content */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              {/* Overview Section */}
              <section className="space-y-6">
                <div className="space-y-4">
                  <h2 className="ds-signal-label">{t(UI_LABELS.projects.overview)}</h2>
                  <p className="text-xl font-medium italic leading-relaxed text-[var(--ds-text-muted)] sm:text-2xl">
                    {t(project.description)}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pt-2">
                  <div className="space-y-3">
                    <h3 className="ds-meta-label text-foreground">{t(UI_LABELS.projects.problem)}</h3>
                    <p className="text-sm font-medium leading-relaxed text-[var(--ds-text-muted)] sm:text-[15px]">
                      {t((project as any).problem)}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="ds-meta-label text-foreground">{t(UI_LABELS.projects.solution)}</h3>
                    <p className="text-sm font-medium leading-relaxed text-[var(--ds-text-muted)] sm:text-[15px]">
                      {t((project as any).solution)}
                    </p>
                  </div>
                </div>
              </section>

              {/* Detailed Features Section */}
              <section className="space-y-10">
                <h2 className="ds-signal-label">{t(UI_LABELS.projects.coreFeatures)}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                  {(project as any).detailedFeatures?.map((category: any, i: number) => (
                    <div key={i} className="space-y-5">
                      <h3 className="ds-editorial-heading border-l-2 border-primary pl-4 text-sm text-foreground">
                        {t(category.category)}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((item: any, j: number) => (
                          <li key={j} className="group flex items-start gap-3 text-[13px] font-medium leading-snug text-[var(--ds-text-muted)]">
                            <ArrowRight className="mt-1 h-3 w-3 shrink-0 text-primary transition-transform duration-[var(--ds-motion-fast)] group-hover:translate-x-1" />
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Development Section */}
              <section className="space-y-6">
                <h2 className="ds-signal-label">{t(UI_LABELS.projects.caseStudy)}</h2>
                <div className="prose prose-invert prose-sm max-w-none font-medium leading-relaxed text-[var(--ds-text-muted)]">
                  <p>{t(project.fullDescription)}</p>
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-10">
              {/* Tech Stack Sidebar */}
              <Card className="ds-signal-frame sticky top-24">
                <CardContent className="p-8">
                <h3 className="ds-signal-label mb-8">{t(UI_LABELS.projects.techStack)}</h3>
                
                <div className="space-y-6">
                  {Object.entries((project as any).techStack || {}).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <h4 className="ds-meta-label font-medium text-[var(--ds-text-muted)]">{key}</h4>
                      <p className="text-sm text-foreground font-bold uppercase tracking-tight">{value as string}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-border-subtle">
                  <Link href={project.link} target="_blank" className="ds-signal-link group flex items-center justify-between pb-1">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-mega text-[var(--ds-text-muted)] transition-colors duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] group-hover:text-primary">{t(UI_LABELS.projects.viewSource)}</span>
                    <Terminal className="h-4 w-4 text-muted-foreground transition-colors duration-[var(--ds-motion-fast)] ease-[var(--ds-ease-standard)] group-hover:text-primary" />
                  </Link>
                </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
