import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const photos = [
  /* TODO: заменить все стоковые фото на реальные фото из поездок */
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Группа на Карибах — реальное фото из круиза', caption: 'Карибы', tall: true },
  { src: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80', alt: 'Экскурсия в Дубае — групповой тур', caption: 'Дубай' },
  { src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', alt: 'Бали — инспекция отеля', caption: 'Бали' },
  { src: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&q=80', alt: 'Мальдивы — инспекция курорта', caption: 'Мальдивы' },
  { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80', alt: 'Санторини — средиземноморский круиз', caption: 'Санторини' },
  { src: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80', alt: 'Таиланд — групповой тур', caption: 'Таиланд', tall: true },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-24 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Наши путешествия"
          title="Реальные фото из поездок"
          subtitle="Группы, лайнеры, экскурсии — живые моменты наших путешествий"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal
              key={photo.caption}
              delay={i * 60}
              className={photo.tall ? 'md:row-span-2' : ''}
            >
              <figure className="relative group overflow-hidden rounded-xl cursor-pointer h-full">
                <div className={photo.tall ? 'aspect-[3/4]' : 'aspect-square'}>
                  {/* TODO: заменить на реальное фото из поездок */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <figcaption className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-serif text-lg">{photo.caption}</p>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
