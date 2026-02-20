import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const photos = [
  /* TODO: заменить все стоковые фото на реальные фото из поездок */
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Группа на Карибах — реальное фото из круиза', caption: 'Карибы' },
  { src: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80', alt: 'Экскурсия в Дубае — групповой тур', caption: 'Дубай' },
  { src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', alt: 'Бали — инспекция отеля', caption: 'Бали' },
  { src: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&q=80', alt: 'Мальдивы — инспекция курорта', caption: 'Мальдивы' },
  { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80', alt: 'Санторини — средиземноморский круиз', caption: 'Санторини' },
  { src: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80', alt: 'Таиланд — групповой тур', caption: 'Таиланд' },
];

/* Grid layout:
   Desktop (3 cols):
     [  large (2 cols)  ] [ small ]
     [ small ] [  large (2 cols)  ]
   Mobile (2 cols):
     [ img ] [ img ]
     [ img ] [ img ]
     [ img ] [ img ]
*/
const gridClasses = [
  'md:col-span-2 md:row-span-1',
  '',
  '',
  '',
  '',
  'md:col-span-2 md:row-span-1',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-24 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Наши путешествия"
          title="Реальные фото из поездок"
          subtitle="Группы, лайнеры, экскурсии — живые моменты наших путешествий"
          headingId="gallery-heading"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[280px]">
          {photos.map((photo, i) => (
            <ScrollReveal
              key={photo.caption}
              delay={i * 60}
              className={gridClasses[i] || ''}
            >
              <figure className="relative group overflow-hidden rounded-2xl h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent pt-12 pb-4 px-4">
                  <p className="text-white font-serif text-lg">{photo.caption}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
