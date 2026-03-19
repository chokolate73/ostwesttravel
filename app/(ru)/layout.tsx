import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://touragent.de';

export const metadata: Metadata = {
  title: 'OST-West Travel - Василя Нигматова | Персональный эксперт по путешествиям в Германии',
  description:
    'Василя Нигматова - персональный эксперт по путешествиям в Германии с 2007 года. Групповые круизы с сопровождением, индивидуальные туры, семейный отдых. Мальдивы, Карибы, Средиземноморье. Русскоязычный сервис.',
  authors: [{ name: 'Vasilya Nigmatova' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'de_DE',
    siteName: 'OST-West Travel',
    title: 'OST-West Travel - Персональный эксперт по путешествиям в Германии',
    description:
      'Групповые круизы с сопровождением, индивидуальные туры, семейный отдых. Опыт с 2007 года. Русскоязычный сервис в Германии.',
    url: `${SITE_URL}/`,
    images: [
      {
        url: `${SITE_URL}/images/preview.jpg`,
        width: 1200,
        height: 630,
        alt: 'OST-West Travel - Путешествия мечты',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OST-West Travel - Персональный эксперт по путешествиям в Германии',
    description: 'Круизы, индивидуальные туры, семейный отдых. С 2007 года.',
    images: [`${SITE_URL}/images/preview.jpg`],
  },
  other: {
    'geo.region': 'DE',
    'geo.placename': 'Erftstadt',
    'geo.position': '50.7848344;6.7577333',
    ICBM: '50.7848344, 6.7577333',
  },
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      ru: `${SITE_URL}/`,
      de: `${SITE_URL}/de/`,
      'x-default': `${SITE_URL}/de/`,
    },
  },
};

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${inter.variable}`}>
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
                'Персональный эксперт по путешествиям в Германии. Групповые круизы, индивидуальные туры, семейный отдых с 2007 года.',
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
                  name: 'Почему подбор путешествия осуществляется с депозитом?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Я вникаю в каждый запрос лично - изучаю варианты, проверяю отели, готовлю подборку. Депозит просто подтверждает, что мы начинаем работать вместе.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Сколько составляет депозит?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '69,90 € для первого обращения.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Депозит возвращается?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Да! Если бронируете тур - депозит возвращается полностью.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Вы сопровождаете группы лично?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Да, я лично на борту с группой - от посадки до возвращения.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Сколько человек в группе?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Обычно 20–50 человек - уютная компания.',
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
                  name: 'Вы подбираете отдых для семей с детьми?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Да, это одно из моих любимых направлений - сама понимаю, как это важно.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Как оформляется бронирование?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Официально, через немецких туроператоров - вы получаете полный пакет документов и страховку.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Вы на связи во время поездки?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Да! Я на связи до, во время и после поездки. Если что-то пойдёт не так - решим вместе.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Можно сначала задать вопросы?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Конечно! Напишите в WhatsApp, спросите что угодно - ни к чему не обязывает.',
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
