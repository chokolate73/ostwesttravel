import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';

const destinations = [
  {
    title: 'Мальдивы',
    subtitle: 'Моя специализация',
    description:
      'Знаю нюансы: лагуны, рифы, трансферы, сезонность. Помогу выбрать остров под ваш формат отдыха.',
    image: '/images/Мальдивы.webp',
    alt: 'Мальдивы - подбор идеального острова и отеля с OST-West Travel',
  },
  {
    title: 'Карибы',
    subtitle: 'Острова, сезоны, комбо-туры',
    description:
      'Соберу маршрут с учётом сезона и логистики. Подскажу, где лучше комбинировать круиз и отель.',
    image: '/images/Карибы.webp',
    alt: 'Карибы - круизы и отдых с OST-West Travel',
  },
  {
    title: 'Курорты мира',
    subtitle: 'От комфортных до премиальных',
    description:
      'Дубай, Майорка, Турция, Греция, Сейшелы, Доминикана (и не только) - от комфортных отелей до премиальных резортов.',
    image: '/images/Курорты мира.webp',
    alt: 'Курорты мира - Дубай, Майорка, Турция, Греция с OST-West Travel',
  },
];

export default function Individual() {
  return (
    <section id="individual" className="py-20 md:py-24 bg-gray-50" aria-labelledby="individual-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Предложение"
          title="Персональные путешествия"
          subtitle='Подберу идеальный вариант через проверенных туроператоров'
          headingId="individual-heading"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {destinations.map((dest, i) => (
            <ScrollReveal key={dest.title} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
            Подобрать индивидуальный отдых
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
