import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';

const scenarios = [
  {
    title: 'Семья с малышом',
    description: 'Отели с детским питанием, baby-клубами, удобным трансфером и безопасным пляжем',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
    ),
    /* TODO: заменить на фото семьи с малышом на отдыхе */
    image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=500&q=80',
    alt: 'Семейный отдых с малышом — OST-West Travel',
  },
  {
    title: 'Школьники',
    description: 'Активный отдых, kids-клубы, аквапарки и анимация — дети заняты, родители отдыхают',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
    ),
    /* TODO: заменить на фото семьи со школьниками */
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80',
    alt: 'Семейный отдых со школьниками — OST-West Travel',
  },
  {
    title: 'Подростки',
    description: 'Приключения, спорт, водные виды — отдых, от которого подростки будут в восторге',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
    ),
    /* TODO: заменить на фото активного подросткового отдыха */
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=80',
    alt: 'Активный отдых для подростков — OST-West Travel',
  },
];

export default function Family() {
  return (
    <section id="family" className="py-20 md:py-24 bg-white" aria-labelledby="family-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Семьям"
          title="Семейный отдых"
          subtitle="Family-friendly отели, детские клубы, аквапарки и удобная логистика"
          headingId="family-heading"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {scenarios.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-gold">{s.icon}</div>
                    <h3 className="text-xl font-serif text-ocean-deep">{s.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <CTAButton href="#contact?direction=family">
            Подобрать семейный отдых
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
