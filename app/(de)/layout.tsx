import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OST-West Travel – Vasilya Nigmatova | Ihre persönliche Reiseexpertin in Deutschland',
  description:
    'Vasilya Nigmatova – Ihre persönliche Reiseexpertin in Deutschland seit 2008. Begleitete Gruppenkreuzfahrten, individuelle Reisen, Familienurlaub. Malediven, Karibik, Mittelmeer.',
  authors: [{ name: 'Vasilya Nigmatova' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'ru_RU',
    siteName: 'OST-West Travel',
    title: 'OST-West Travel – Ihre persönliche Reiseexpertin in Deutschland',
    description:
      'Begleitete Gruppenkreuzfahrten, individuelle Reisen, Familienurlaub. Erfahrung seit 2008.',
    url: 'https://touragent.de/de/',
    images: [
      {
        url: 'https://ostwesttravel.vercel.app/images/preview.jpg?v=2',
        width: 1200,
        height: 630,
        alt: 'OST-West Travel – Traumreisen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OST-West Travel – Ihre persönliche Reiseexpertin in Deutschland',
    description: 'Kreuzfahrten, individuelle Reisen, Familienurlaub. Seit 2008.',
    images: ['https://ostwesttravel.vercel.app/images/preview.jpg?v=2'],
  },
  other: {
    'geo.region': 'DE',
    'geo.placename': 'Deutschland',
    'geo.position': '51.1657;10.4515',
    ICBM: '51.1657, 10.4515',
  },
  alternates: {
    canonical: 'https://touragent.de/de/',
    languages: {
      ru: 'https://touragent.de/',
      de: 'https://touragent.de/de/',
      'x-default': 'https://touragent.de/',
    },
  },
};

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link
          rel="icon"
          href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69831101582afc7d27b64f2d/d6f042586_logo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['TravelAgency', 'LocalBusiness'],
              '@id': 'https://touragent.de/#business',
              name: 'OST-West Travel',
              alternateName: 'Touragent.de',
              description:
                'Ihre persönliche Reiseexpertin in Deutschland. Begleitete Gruppenkreuzfahrten, individuelle Reisen, Familienurlaub seit 2008.',
              url: 'https://touragent.de',
              telephone: '+491631759956',
              email: 'info@touragent.de',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '51.1657',
                longitude: '10.4515',
              },
              image:
                'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/render/image/public/base44-prod/public/69831101582afc7d27b64f2d/d6f042586_logo.png?width=1200&height=630&resize=contain',
              areaServed: { '@type': 'Country', name: 'Germany' },
              knowsLanguage: ['de', 'ru', 'en'],
              founder: {
                '@type': 'Person',
                name: 'Vasilya Nigmatova',
                jobTitle: 'Reiseexpertin',
              },
              foundingDate: '2007',
              priceRange: '€€-€€€',
              sameAs: ['https://instagram.com/touragent.de'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Warum wird die Reiseauswahl mit einer Kaution durchgeführt?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ich widme mich jeder Anfrage persönlich – prüfe Optionen, überprüfe Hotels, bereite eine Auswahl vor. Die Kaution bestätigt einfach, dass wir zusammen arbeiten.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Reiseziele bietet OST-West Travel an?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Begleitete Gruppenkreuzfahrten, individuelle Reisen (Malediven, Karibik, Europa, Asien) und Familienurlaub weltweit. Seit 2008.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
