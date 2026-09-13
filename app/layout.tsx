import type {Metadata} from 'next';
import { JetBrains_Mono, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-geist'});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://minhdev.id.vn'),
  title: {
    template: '%s | Trần Công Minh',
    default: 'Trần Công Minh | Product Builder',
  },
  description: 'Portfolio của Trần Công Minh - Cử nhân Kỹ thuật Phần mềm đam mê phát triển hệ thống phần mềm thực dụng.',
  keywords: ['Product Builder', 'Software Engineer', 'Portfolio', 'Trần Công Minh', 'Web Development', 'Next.js', 'Flutter', 'Bachelor'],
  authors: [{ name: 'Trần Công Minh' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Trần Công Minh Portfolio',
    description: 'Khám phá các dự án và kỹ năng của Trần Công Minh - Cử nhân Kỹ thuật Phần mềm.',
    url: 'https://minhdev.id.vn',
    siteName: 'Trần Công Minh Portfolio',
    locale: 'vi_VN',
    type: 'website',
  },
};

import { LanguageProvider } from '@/context/LanguageContext';
import { SplashProvider } from '@/components/ui/SplashProvider';
import { MotionProvider } from '@/components/ui/MotionProvider';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Trần Công Minh",
    "jobTitle": "Product Builder",
    "url": "https://minhdev.id.vn",
    "sameAs": [
      "https://github.com/dexter826"
    ]
  };


  return (
    <html
      lang="vi"
      className={cn(jetbrainsMono.variable, geist.variable)}
      data-scroll-behavior="smooth"
      data-theme="dark"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased" suppressHydrationWarning>
        <MotionProvider>
          <SplashProvider>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </SplashProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
