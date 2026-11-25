import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Linh Nguyen — Make-up Artist, Adelaide',
  description: 'Freelance make-up artist in Adelaide with 8 years of experience in weddings and events across Adelaide and Vietnam. Bilingual English and Vietnamese. Bridal, event and theatre makeup. Price on enquiry.',
  keywords: ['makeup artist Adelaide', 'bridal makeup Adelaide', 'Vietnamese makeup artist', 'Linh Nguyen makeup'],
  authors: [{ name: 'Linh Nguyen' }],
  openGraph: {
    title: 'Linh Nguyen — Make-up Artist, Adelaide',
    description: 'Freelance make-up artist in Adelaide, 8 years of weddings and events in Adelaide and Vietnam. English & Tiếng Việt.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
