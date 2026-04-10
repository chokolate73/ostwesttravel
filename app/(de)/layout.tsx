import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://touragent.de';

export const viewport: Viewport = {
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Reisebüro Köln – Kreuzfahrten & Familienurlaub | Vasilya Nigmatova',
  description:
    'Persönliche Reiseexpertin in Erftstadt bei Köln. Begleitete Gruppenkreuzfahrten (AIDA, MSC, Costa), Malediven, Familienurlaub. Beratung auf Deutsch & Russisch. ☎ +49 221 27253591',
  keywords: [
    'Reisebüro Köln', 'Kreuzfahrt Spezialist Köln', 'begleitete Gruppenkreuzfahrt Deutschland',
    'Reisebüro Erftstadt', 'Malediven Reisebüro NRW', 'Familienurlaub Reisebüro Köln',
    'Vasilya Nigmatova', 'touragent Köln', 'Kreuzfahrt buchen Köln', 'persönliche Reiseberatung NRW',
  ],
  authors: [{ name: 'Vasilya Nigmatova' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'ru_RU',
    siteName: 'OST-West Travel – touragent.de',
    title: 'Reisebüro Köln – Kreuzfahrten & Familienurlaub | Vasilya Nigmatova',
    description:
      'Persönliche Reiseexpertin in Erftstadt bei Köln. Begleitete Gruppenkreuzfahrten, Malediven, Familienurlaub. Beratung auf Deutsch & Russisch.',
    url: `${SITE_URL}/de`,
    images: [
      {
        url: `${SITE_URL}/images/hero.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Vasilya Nigmatova – Reisebüro Köln, begleitete Kreuzfahrten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reisebüro Köln – Kreuzfahrten & Familienurlaub | Vasilya Nigmatova',
    description: 'Persönliche Reiseexpertin in Erftstadt bei Köln. Begleitete Gruppenkreuzfahrten, Malediven, Familienurlaub.',
    images: [`${SITE_URL}/images/hero.jpeg`],
  },
  other: {
    'geo.region': 'DE',
    'geo.placename': 'Erftstadt',
    'geo.position': '50.7848344;6.7577333',
    ICBM: '50.7848344, 6.7577333',
  },
  alternates: {
    canonical: `${SITE_URL}/de`,
    languages: {
      de: `${SITE_URL}/de`,
      ru: `${SITE_URL}`,
      'x-default': `${SITE_URL}/de`,
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-203WLEQVDB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-203WLEQVDB');
        `}
      </Script>
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
              '@graph': [
                {
                  '@type': ['LocalBusiness', 'TravelAgency'],
                  '@id': 'https://touragent.de/de#business',
                  name: 'OST-West Travel – Vasilya Nigmatova',
                  alternateName: 'touragent.de',
                  description: 'Persönliche Reiseexpertin in Erftstadt bei Köln. Begleitete Gruppenkreuzfahrten mit AIDA, MSC, Costa und Mein Schiff. Malediven, Karibik, Familienurlaub. Beratung auf Deutsch und Russisch.',
                  url: 'https://touragent.de/de',
                  logo: 'https://touragent.de/images/instagram.jpg',
                  image: 'https://touragent.de/images/hero.jpeg',
                  telephone: '+49-221-27253591',
                  email: 'info@ostwesttravel.de',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Franz-Xaver-Mauer-Straße 34',
                    addressLocality: 'Erftstadt',
                    postalCode: '50374',
                    addressRegion: 'Nordrhein-Westfalen',
                    addressCountry: 'DE',
                  },
                  geo: { '@type': 'GeoCoordinates', latitude: 50.8127, longitude: 6.7757 },
                  areaServed: [
                    { '@type': 'City', name: 'Köln' },
                    { '@type': 'City', name: 'Bonn' },
                    { '@type': 'City', name: 'Düsseldorf' },
                    { '@type': 'City', name: 'Leverkusen' },
                    { '@type': 'City', name: 'Aachen' },
                    { '@type': 'State', name: 'Nordrhein-Westfalen' },
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+49-163-1759956',
                    contactType: 'customer service',
                    availableLanguage: ['German', 'Russian', 'English'],
                  },
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '18:00',
                  },
                  sameAs: ['https://www.instagram.com/touragent.de/'],
                  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '7', bestRating: '5' },
                },
                {
                  '@type': 'Person',
                  '@id': 'https://touragent.de/de#person',
                  name: 'Vasilya Nigmatova',
                  jobTitle: 'Reiseexpertin & Inhaberin',
                  worksFor: { '@id': 'https://touragent.de/de#business' },
                  knowsLanguage: ['de', 'ru', 'en'],
                  sameAs: ['https://www.instagram.com/touragent.de/'],
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://touragent.de/de#webpage',
                  url: 'https://touragent.de/de',
                  name: 'Reisebüro Köln – Kreuzfahrten & Familienurlaub | Vasilya Nigmatova',
                  inLanguage: 'de',
                  isPartOf: { '@id': 'https://touragent.de/de#business' },
                },
              ],
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
                  name: 'Wie hoch ist die Kaution?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '69,90 € für die erste Anfrage.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wird die Kaution erstattet?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja! Wenn Sie eine Reise buchen – wird die Kaution vollständig erstattet.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Begleiten Sie die Gruppen persönlich?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, ich bin persönlich an Bord mit der Gruppe – von der Einschiffung bis zur Rückkehr.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie viele Personen in der Gruppe?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Normalerweise 20–50 Personen – eine gemütliche Gesellschaft.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Reiseziele bietet OST-West Travel an?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Begleitete Gruppenkreuzfahrten (Karibik, Mittelmeer, Asien), individuelle Reisen (Malediven, Karibik, Europa, Asien) und Familienurlaub weltweit.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Bieten Sie Urlaub für Familien mit Kindern an?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, das ist eines meiner Lieblingsthemen – ich verstehe selbst, wie wichtig das ist.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie wird die Buchung abgewickelt?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Offiziell, über deutsche Reiseveranstalter – Sie erhalten das komplette Dokumentenpaket und Versicherung.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Sind Sie während der Reise erreichbar?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja! Ich bin vor, während und nach der Reise erreichbar. Wenn etwas schiefgeht – lösen wir es gemeinsam.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Kann man zuerst Fragen stellen?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Natürlich! Schreiben Sie mir auf WhatsApp, fragen Sie alles – das verpflichtet zu nichts.',
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
