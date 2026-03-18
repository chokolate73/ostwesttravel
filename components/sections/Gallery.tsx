import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Lang } from '@/lib/i18n';

const t = {
  de: {
    label: 'Meine Reisen',
    title: 'Echte Fotos von Reisen',
    subtitle: 'Gruppen, Schiffe, Ausflüge – lebendige Reisemomente',
  },
  ru: {
    label: 'Мои путешествия',
    title: 'Реальные фото из поездок',
    subtitle: 'Группы, лайнеры, экскурсии - живые моменты путешествий',
  },
};

const photos = {
  de: [
    { src: '/images/азия1.jpg', alt: 'Reise durch Asien - OST-West Travel', caption: 'Asien', aspect: 'aspect-[4/3]' },
    { src: '/images/мексика.jpg', alt: 'Mexiko - OST-West Travel', caption: 'Mexiko', aspect: 'aspect-[3/4]' },
    { src: '/images/танзания1.jpeg', alt: 'Tansania - OST-West Travel', caption: 'Tansania', aspect: 'aspect-square' },
    { src: '/images/эмираты1.png', alt: 'Emirate - OST-West Travel', caption: 'Emirate', aspect: 'aspect-[3/4]' },
    { src: '/images/азия2.jpg', alt: 'Asien - OST-West Travel', caption: 'Asien', aspect: 'aspect-[4/3]' },
    { src: '/images/танзания2.jpg', alt: 'Tansania - OST-West Travel', caption: 'Tansania', aspect: 'aspect-[3/4]' },
    { src: '/images/эмираты2.jpeg', alt: 'Emirate - OST-West Travel', caption: 'Emirate', aspect: 'aspect-[4/3]' },
    { src: '/images/азия3.jpeg', alt: 'Asien - OST-West Travel', caption: 'Asien', aspect: 'aspect-square' },
    { src: '/images/танзания3.jpg', alt: 'Tansania - OST-West Travel', caption: 'Tansania', aspect: 'aspect-[3/4]' },
  ],
  ru: [
    { src: '/images/азия1.jpg', alt: 'Путешествие по Азии - OST-West Travel', caption: 'Азия', aspect: 'aspect-[4/3]' },
    { src: '/images/мексика.jpg', alt: 'Мексика - OST-West Travel', caption: 'Мексика', aspect: 'aspect-[3/4]' },
    { src: '/images/танзания1.jpeg', alt: 'Танзания - OST-West Travel', caption: 'Танзания', aspect: 'aspect-square' },
    { src: '/images/эмираты1.png', alt: 'Эмираты - OST-West Travel', caption: 'Эмираты', aspect: 'aspect-[3/4]' },
    { src: '/images/азия2.jpg', alt: 'Азия - OST-West Travel', caption: 'Азия', aspect: 'aspect-[4/3]' },
    { src: '/images/танзания2.jpg', alt: 'Танзания - OST-West Travel', caption: 'Танзания', aspect: 'aspect-[3/4]' },
    { src: '/images/эмираты2.jpeg', alt: 'Эмираты - OST-West Travel', caption: 'Эмираты', aspect: 'aspect-[4/3]' },
    { src: '/images/азия3.jpeg', alt: 'Азия - OST-West Travel', caption: 'Азия', aspect: 'aspect-square' },
    { src: '/images/танзания3.jpg', alt: 'Танзания - OST-West Travel', caption: 'Танзания', aspect: 'aspect-[3/4]' },
  ],
};

export default function Gallery({ lang = 'de' }: { lang?: Lang }) {
  const text = t[lang];
  const langPhotos = photos[lang];

  return (
    <section id="gallery" className="py-20 md:py-24 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={text.label}
          title={text.title}
          subtitle={text.subtitle}
          headingId="gallery-heading"
        />

        <div className="columns-2 md:columns-3 gap-2 sm:gap-3 md:gap-4">
          {langPhotos.map((photo, i) => (
            <ScrollReveal
              key={photo.src}
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
