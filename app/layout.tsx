import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OST-West Travel — Василя Нигматова | Персональный эксперт по путешествиям в Германии',
  description:
    'Василя Нигматова — персональный эксперт по путешествиям в Германии с 2008 года. Групповые круизы с сопровождением, индивидуальные туры, семейный отдых. Мальдивы, Карибы, Средиземноморье. Русскоязычный сервис.',
  keywords:
    'турагент Германия, круизы из Германии, Василя Нигматова, OST-West Travel, touragent.de, семейный отдых Германия, Мальдивы из Германии, групповые круизы, Reisebüro Deutschland, Kreuzfahrten',
  authors: [{ name: 'Vasilya Nigmatova' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'de_DE',
    siteName: 'OST-West Travel',
    title: 'OST-West Travel — Персональный эксперт по путешествиям в Германии',
    description:
      'Групповые круизы с сопровождением, индивидуальные туры, семейный отдых. Опыт с 2008 года. Русскоязычный сервис в Германии.',
    url: 'https://touragent.de',
    images: [
      {
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/render/image/public/base44-prod/public/69831101582afc7d27b64f2d/d6f042586_logo.png?width=1200&height=630&resize=contain',
        width: 1200,
        height: 630,
        alt: 'OST-West Travel — Touragent.de',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OST-West Travel — Персональный эксперт по путешествиям в Германии',
    description: 'Круизы, индивидуальные туры, семейный отдых. С 2008 года.',
  },
  other: {
    'geo.region': 'DE',
    'geo.placename': 'Deutschland',
    'geo.position': '51.1657;10.4515',
    ICBM: '51.1657, 10.4515',
  },
  alternates: {
    canonical: 'https://touragent.de/',
    languages: {
      ru: 'https://touragent.de/',
      de: 'https://touragent.de/de/',
      'x-default': 'https://touragent.de/',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
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
                'Персональный эксперт по путешествиям в Германии. Групповые круизы, индивидуальные туры, семейный отдых с 2008 года.',
              url: 'https://touragent.de',
              telephone: '+4915123456789',
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
              areaServed: { '@type': 'Country', name: 'Germany' },
              knowsLanguage: ['ru', 'de', 'en'],
              founder: {
                '@type': 'Person',
                name: 'Vasilya Nigmatova',
                jobTitle: 'Reiseexpertin',
              },
              foundingDate: '2008',
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
                  name: 'Почему подбор путешествия осуществляется с депозитом?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Подбор проводится индивидуально: анализ запроса, проработка вариантов, проверка отелей и подготовка презентации. Депозит подтверждает начало персональной работы.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Какие направления предлагает Touragent.de?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Групповые круизы с сопровождением (Карибы, Средиземноморье, Азия), индивидуальные туры (Мальдивы, Карибы, Европа, Азия), семейный отдых по всему миру.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Reiseziele bietet OST-West Travel an?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gruppenkreuzfahrten mit Begleitung, individuelle Reisen (Malediven, Karibik, Europa, Asien) und Familienurlaub weltweit. Seit 2008.',
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
