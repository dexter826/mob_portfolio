import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Trần Công Minh | Software Engineer',
  description: 'Portfolio của Trần Công Minh - Cử nhân Kỹ thuật Phần mềm đam mê phát triển hệ thống phần mềm thực dụng.',
  keywords: ['Software Engineer', 'Portfolio', 'Trần Công Minh', 'Web Development', 'Next.js', 'Flutter', 'Bachelor'],
  authors: [{ name: 'Trần Công Minh' }],
  openGraph: {
    title: 'Trần Công Minh Portfolio',
    description: 'Khám phá các dự án và kỹ năng của Trần Công Minh - Cử nhân Kỹ thuật Phần mềm.',
    url: 'https://minhdev.id.vn',
    siteName: 'Trần Công Minh Portfolio',
    locale: 'vi_VN',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
  },
};

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Trần Công Minh",
    "jobTitle": "Software Engineer",
    "url": "https://minhdev.id.vn",
    "sameAs": [
      "https://github.com/dexter826"
    ]
  };


  return (
    <html lang="vi" className={cn(jetbrainsMono.variable, "font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
