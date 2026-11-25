import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Linh Nguyen — Make-up Artist, Adelaide',
  description: 'Bridal, event & theatrical makeup artist in Adelaide. Selected work 2016–2022. English & Tiếng Việt.',
  keywords: ['makeup artist Adelaide', 'bridal makeup Adelaide', 'Vietnamese makeup artist', 'Linh Nguyen makeup'],
  authors: [{ name: 'Linh Nguyen' }],
  metadataBase: new URL('https://linh-makeup-portfolio.vercel.app'),
  openGraph: {
    title: 'Linh Nguyen — Make-up Artist, Adelaide',
    description: 'Bridal, event & theatrical makeup artist. Selected work 2016–2022.',
    type: 'website',
    locale: 'en_AU',
    images: [{ url: '/portfolio/hero.jpg', alt: 'Linh Nguyen — bridal makeup' }],
  },
  alternates: { canonical: 'https://linh-makeup-portfolio.vercel.app/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
