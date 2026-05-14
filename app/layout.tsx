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
  title: 'Minh.Dev | Software Engineer Portfolio',
  description: 'Portfolio của Minh - Sinh viên IT đam mê phát triển phần mềm, chuyên về Web và Hệ thống.',
  keywords: ['Software Engineer', 'Portfolio', 'Minh Dev', 'Web Development', 'Next.js'],
  authors: [{ name: 'Minh.Dev' }],
  openGraph: {
    title: 'Minh.Dev Portfolio',
    description: 'Khám phá các dự án và kỹ năng lập trình của Minh.',
    url: 'https://minhdev.id.vn',
    siteName: 'Minh.Dev Portfolio',
    locale: 'vi_VN',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Minh.Dev",
    "jobTitle": "Software Engineer",
    "url": "https://minhdev.id.vn",
    "sameAs": [
      "https://github.com",
      "https://linkedin.com"
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
        {children}
      </body>
    </html>
  );
}
