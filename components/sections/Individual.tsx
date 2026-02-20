import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';

const destinations = [
  {
    title: 'Мальдивы',
    subtitle: 'Экспертная ниша',
    description:
      'Личные инспекции отелей, подбор идеального острова и отеля. Знаю нюансы: рифы, лагуны, трансферы, сезонность.',
    /* TODO: заменить на реальное фото с инспекции Мальдив */
    image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&q=80',
    alt: 'Мальдивы — подбор идеального острова и отеля с OST-West Travel',
  },
  {
    title: 'Карибы',
    subtitle: 'Острова, сезоны, комбо-туры',
    description:
      'Острова Карибского бассейна, лучшие сезоны, комбинированные туры «круиз + отель» — подберу идеальный вариант.',
    /* TODO: заменить на реальное фото из Карибских поездок */
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    alt: 'Карибы — круизы и отдых с OST-West Travel',
  },
  {
    title: 'Курорты мира',
    subtitle: 'От комфортных до премиальных',
    description:
      'Дубай, Майорка, Турция, Греция, Сейшелы, Доминикана и другие направления — от комфортных курортов до премиальных резортов.',
    /* TODO: заменить на коллаж из реальных фото разных направлений */
    image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80',
    alt: 'Курорты мира — Дубай, Майорка, Турция, Греция с OST-West Travel',
  },
];

export default function Individual() {
  return (
    <section id="individual" className="py-20 md:py-24 bg-gray-50" aria-labelledby="individual-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Индивидуально"
          title="Индивидуальные путешествия"
          subtitle='Персональный отдых «под ключ» — подберу идеальный вариант через проверенных туроператоров'
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
          <CTAButton href="#contact?direction=individual">
            Подобрать индивидуальный отдых
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
