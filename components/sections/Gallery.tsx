import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const photos = [
  /* TODO: заменить стоковые фото на реальные фото из поездок */
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Группа на Карибах - реальное фото из круиза', caption: 'Карибы', aspect: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80', alt: 'Экскурсия в Дубае - групповой тур', caption: 'Дубай', aspect: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', alt: 'Бали - инспекция отеля', caption: 'Бали', aspect: 'aspect-square' },
  { src: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&q=80', alt: 'Мальдивы - инспекция курорта', caption: 'Мальдивы', aspect: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80', alt: 'Санторини - средиземноморский круиз', caption: 'Санторини', aspect: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80', alt: 'Таиланд - групповой тур', caption: 'Таиланд', aspect: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80', alt: 'Египет - пляжный отдых', caption: 'Египет', aspect: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80', alt: 'Шри-Ланка - экскурсионный тур', caption: 'Шри-Ланка', aspect: 'aspect-square' },
  { src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80', alt: 'Италия - средиземноморский круиз', caption: 'Италия', aspect: 'aspect-[3/4]' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-24 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Мои путешествия"
          title="Реальные фото из поездок"
          subtitle="Группы, лайнеры, экскурсии - живые моменты путешествий"
          headingId="gallery-heading"
        />

        <div className="columns-2 md:columns-3 gap-2 sm:gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal
              key={photo.caption}
              delay={i * 60}
              className="mb-2 sm:mb-3 md:mb-4 break-inside-avoid"
            >
              <figure className={`relative group overflow-hidden rounded-2xl ${photo.aspect}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent pt-8 sm:pt-12 pb-2 sm:pb-4 px-3 sm:px-4">
                  <p className="text-white font-serif text-sm sm:text-lg">{photo.caption}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
