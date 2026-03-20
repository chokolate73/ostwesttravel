import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import { Lang } from '@/lib/i18n';

const t = {
  de: {
    label: 'Angebot',
    title: 'Malediven, Karibik & Weltresorts – Persönliche Reiseplanung',
    subtitle: 'Ich finde die ideale Option über geprüfte Reiseveranstalter',
    destinations: [
      {
        title: 'Malediven',
        subtitle: 'Meine Spezialisierung',
        description: 'Ich kenne die Details: Lagunen, Riffe, Transfers, Saison. Ich helfe Ihnen, die Insel für Ihren Urlaubsstil zu wählen.',
        image: '/images/malediven.webp',
        alt: 'Malediven - Auswahl der perfekten Insel und des Hotels mit OST-West Travel',
      },
      {
        title: 'Karibik',
        subtitle: 'Inseln, Saisons, Kombi-Reisen',
        description: 'Ich stelle die Route unter Berücksichtigung von Saison und Logistik zusammen. Ich sage Ihnen, wo Kreuzfahrt und Hotel am besten kombiniert werden.',
        image: '/images/karibik.webp',
        alt: 'Karibik - Kreuzfahrten und Urlaub mit OST-West Travel',
      },
      {
        title: 'Weltresorts',
        subtitle: 'Von komfortabel bis premium',
        description: 'Dubai, Mallorca, Türkei, Griechenland, Seychellen, Dominikanische Republik (und mehr) – von komfortablen Hotels bis zu Premium-Resorts.',
        image: '/images/weltresorts.webp',
        alt: 'Weltresorts - Dubai, Mallorca, Türkei, Griechenland mit OST-West Travel',
      },
    ],
    cta: 'Individuellen Urlaub planen',
  },
  ru: {
    label: 'Предложение',
    title: 'Персональные путешествия',
    subtitle: 'Подберу идеальный вариант через проверенных туроператоров',
    destinations: [
      {
        title: 'Мальдивы',
        subtitle: 'Моя специализация',
        description: 'Знаю нюансы: лагуны, рифы, трансферы, сезонность. Помогу выбрать остров под ваш формат отдыха.',
        image: '/images/malediven.webp',
        alt: 'Мальдивы - подбор идеального острова и отеля с OST-West Travel',
      },
      {
        title: 'Карибы',
        subtitle: 'Острова, сезоны, комбо-туры',
        description: 'Соберу маршрут с учётом сезона и логистики. Подскажу, где лучше комбинировать круиз и отель.',
        image: '/images/karibik.webp',
        alt: 'Карибы - круизы и отдых с OST-West Travel',
      },
      {
        title: 'Курорты мира',
        subtitle: 'От комфортных до премиальных',
        description: 'Дубай, Майорка, Турция, Греция, Сейшелы, Доминикана (и не только) - от комфортных отелей до премиальных резортов.',
        image: '/images/weltresorts.webp',
        alt: 'Курорты мира - Дубай, Майорка, Турция, Греция с OST-West Travel',
      },
    ],
    cta: 'Подобрать индивидуальный отдых',
  },
};

export default function Individual({ lang = 'ru' }: { lang?: Lang }) {
  const text = t[lang];

  return (
    <section id="individual" className="py-20 md:py-24 bg-gray-50" aria-labelledby="individual-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={text.label}
          title={text.title}
          subtitle={text.subtitle}
          headingId="individual-heading"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {text.destinations.map((dest, i) => (
            <ScrollReveal key={dest.title} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm md:hover:shadow-xl transition-all h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    className="object-cover md:group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-ocean-deep">
                    {dest.subtitle}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif text-ocean-deep mb-2">{dest.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{dest.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <CTAButton href="#contact?direction=individual" className="w-full sm:w-auto justify-center whitespace-nowrap">
            {text.cta}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
