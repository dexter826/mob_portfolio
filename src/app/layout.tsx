import type { Metadata, Viewport } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://minhdev.id.vn'),
  title: 'Trần Công Minh | Product Builder',
  description:
    'Portfolio của Trần Công Minh - Cử nhân Kỹ thuật Phần mềm đam mê phát triển hệ thống phần mềm thực dụng.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0C0C0C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kanit.variable} style={{ backgroundColor: '#0C0C0C' }}>
      <body className="bg-surface-base text-text-primary font-sans antialiased overflow-x-clip m-0 p-0 selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
