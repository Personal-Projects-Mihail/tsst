import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#9112BC',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tsst.eu'),
  title: 'TSST - Tackling Self Stigma Together | Erasmus+ Youth Project',
  description:
    'TSST - Tackling Self Stigma Together is a transnational Erasmus+ youth project promoting mental health and self-stigma awareness among youth workers through MBTW therapies and AI digital tools.',
  keywords: [
    'TSST',
    'Tackling Self Stigma Together',
    'Erasmus+',
    'youth project',
    'mental health',
    'self-stigma',
    'youth workers',
    'MBTW',
    'MBAT',
    'ACT',
    'AI digital tools',
    'EU project',
  ],
  authors: [{ name: 'TSST Project Consortium' }],
  openGraph: {
    title: 'TSST - Tackling Self Stigma Together | Erasmus+ Youth Project',
    description: 'Erasmus+ youth project promoting mental health and self-stigma awareness among youth workers',
    type: 'website',
    url: 'https://tsst.eu',
    images: ['/images/og-image.jpg'],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSST - Tackling Self Stigma Together',
    description: 'Erasmus+ youth project promoting mental health and self-stigma awareness among youth workers',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/icons/icon-512x512.png',
    apple: '/icons/icon-512x512.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TSST - Tackling Self Stigma Together',
    alternateName: 'TSST',
    url: 'https://tsst.eu',
    logo: 'https://tsst.eu/icons/icon-512x512.png',
    description:
      'Erasmus+ youth project promoting mental health and self-stigma awareness among youth workers',
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen flex flex-col">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
