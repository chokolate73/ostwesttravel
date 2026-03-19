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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://touragent.de';

export const metadata: Metadata = {
  title: 'OST-West Travel – Vasilya Nigmatova | Ihre persönliche Reiseexpertin in Deutschland',
  description:
    'Vasilya Nigmatova – Ihre persönliche Reiseexpertin in Deutschland seit 2007. Begleitete Gruppenkreuzfahrten, individuelle Reisen, Familienurlaub. Malediven, Karibik, Mittelmeer.',
  authors: [{ name: 'Vasilya Nigmatova' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'ru_RU',
    siteName: 'OST-West Travel',
    title: 'OST-West Travel – Ihre persönliche Reiseexpertin in Deutschland',
    description:
      'Begleitete Gruppenkreuzfahrten, individuelle Reisen, Familienurlaub. Erfahrung seit 2007.',
    url: `${SITE_URL}/de/`,
    images: [
      {
        url: `${SITE_URL}/images/preview.jpg`,
        width: 1200,
        height: 630,
        alt: 'OST-West Travel – Traumreisen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OST-West Travel – Ihre persönliche Reiseexpertin in Deutschland',
    description: 'Kreuzfahrten, individuelle Reisen, Familienurlaub. Seit 2007.',
    images: [`${SITE_URL}/images/preview.jpg`],
  },
  other: {
    'geo.region': 'DE',
    'geo.placename': 'Erftstadt',
    'geo.position': '50.7848344;6.7577333',
    ICBM: '50.7848344, 6.7577333',
  },
  alternates: {
    canonical: `${SITE_URL}/de/`,
    languages: {
      ru: `${SITE_URL}/`,
      de: `${SITE_URL}/de/`,
      'x-default': `${SITE_URL}/de/`,
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
                'Ihre persönliche Reiseexpertin in Deutschland. Begleitete Gruppenkreuzfahrten, individuelle Reisen, Familienurlaub seit 2007.',
              url: 'https://touragent.de',
              telephone: '+4922127253591',
              email: 'info@ostwesttravel.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Franz-Xaver-Mauer-Straße 34',
                postalCode: '50374',
                addressLocality: 'Erftstadt',
                addressRegion: 'Nordrhein-Westfalen',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '50.7848344',
                longitude: '6.7577333',
              },
              image: 'https://touragent.de/images/preview.jpg',
              areaServed: { '@type': 'Country', name: 'Germany' },
              knowsLanguage: ['de', 'ru'],
              founder: {
                '@type': 'Person',
                name: 'Vasilya Nigmatova',
                jobTitle: 'Reiseexpertin',
              },
              foundingDate: '2007',
              priceRange: '€€-€€€',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '10:00',
                  closes: '18:00',
                },
              ],
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
