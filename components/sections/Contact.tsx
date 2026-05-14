'use client';

import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Contact() {
  return (
    <motion.div 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="pt-12 pb-6 border-t border-border-medium text-center"
    >
       <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-6 text-foreground">Let&apos;s Build Together</h2>
       <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Sẵn sàng học hỏi và đóng góp cho các dự án thực tế. Tìm kiếm cơ hội thực tập & Fresher.</p>
       <a href={`mailto:${PERSONAL_INFO.email}`} className={cn(buttonVariants({ size: "lg", variant: "default" }), "rounded-none bg-primary text-background hover:bg-foreground hover:text-background font-mono uppercase tracking-widest font-bold px-8 py-6 inline-flex items-center gap-3")}>
         <Mail className="w-5 h-5" /> Liên hệ ngay
       </a>
    </motion.div>
  );
}
