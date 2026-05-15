'use client';

import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { PERSONAL_INFO, UI_LABELS } from '@/lib/data';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <motion.div 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-10 sm:py-12 border-t border-border-medium text-center"
    >
       <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 sm:mb-8 text-foreground leading-[0.85]">{t(UI_LABELS.contact.title)}</h2>
        <p className="text-sm sm:text-base text-muted-foreground/70 mb-10 max-w-lg mx-auto font-medium">{t(UI_LABELS.contact.description)}</p>
       <a href={`mailto:${PERSONAL_INFO.email}`} className={cn(buttonVariants({ size: "lg", variant: "default" }), "rounded-none bg-primary text-background hover:bg-foreground hover:text-background font-mono uppercase tracking-mega font-bold px-8 py-4 text-sm inline-flex items-center gap-3 transition-all duration-300 hover:scale-105")}>
         <Mail className="w-4 h-4" /> {t(UI_LABELS.contact.button)}
       </a>
    </motion.div>
  );
}
