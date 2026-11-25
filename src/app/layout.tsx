import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Linh Nguyen — Make-up Artist, Adelaide',
  description: 'Bridal, event & theatrical makeup artist in Adelaide. Selected work since 2016. English & Tiếng Việt.',
  keywords: ['makeup artist Adelaide', 'bridal makeup Adelaide', 'Vietnamese makeup artist', 'Linh Nguyen makeup', 'Diep Lam Make Up'],
  authors: [{ name: 'Linh Nguyen' }],
  metadataBase: new URL('https://linh-makeup-portfolio.vercel.app'),
  openGraph: {
    title: 'Linh Nguyen — Make-up Artist, Adelaide',
    description: 'Bridal, event & theatrical makeup artist. Selected work since 2016.',
    type: 'website',
    locale: 'en_AU',
    images: [{ url: '/portfolio/hero.jpg', alt: 'Linh Nguyen — bridal makeup' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linh Nguyen — Make-up Artist, Adelaide',
    description: 'Bridal, event & theatrical makeup artist. Selected work since 2016.',
    images: ['/portfolio/hero.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  alternates: { canonical: 'https://linh-makeup-portfolio.vercel.app/' },
};

// Structured data: what the business is, where, and how to reach Linh.
// No prices, testimonials or social links — none are verified.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Diep Lam Make Up',
  alternateName: 'Linh Nguyen — Make-up Artist',
  description:
    'Freelance bridal, event and theatrical makeup artist in Adelaide, Australia, working in Adelaide and Vietnam since 2016.',
  url: 'https://linh-makeup-portfolio.vercel.app/',
  telephone: '+61 424 785 266',
  email: 'nguyenlinhlinh9494@gmail.com',
  founder: { '@type': 'Person', name: 'Linh Nguyen', jobTitle: 'Make-up Artist' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'North Adelaide',
    addressRegion: 'SA',
    addressCountry: 'AU',
  },
  areaServed: ['Adelaide, South Australia', 'Vietnam'],
  knowsAbout: ['Bridal makeup', 'Event makeup', 'Theatrical makeup', 'Makeup lessons'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
