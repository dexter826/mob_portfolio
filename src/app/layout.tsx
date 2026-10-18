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
  title: 'Jack -- 3D Creator',
  description: 'Portfolio of Jack (Minh) -- 3D Creator & Product Builder driven by crafting striking and unforgettable projects.',
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
      <body className="bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased overflow-x-clip m-0 p-0 selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
