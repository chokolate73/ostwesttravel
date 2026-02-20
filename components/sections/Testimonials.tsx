'use client';

import { useState, useEffect, useCallback } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

/* TODO: заменить на реальные отзывы клиентов и скриншоты */
const testimonials = [
  {
    text: 'Василя организовала для нас незабываемый круиз по Карибам. Всё было идеально спланировано, от бронирования до экскурсий. Мы можем только рекомендовать её!',
    name: 'Familie Mueller',
    city: 'Мюнхен',
    type: 'Круиз',
    image: 'https://images.unsplash.com/photo-1559734840-f9509ee5677f?w=100&q=80',
  },
  {
    text: 'Wir haben unseren Familienurlaub komplett ueber Touragent.de gebucht. Die Beratung war erstklassig und alles lief reibungslos. Vielen Dank, Vasilya!',
    name: 'Familie Schmidt',
    city: 'Берлин',
    type: 'Семейный отдых',
    image: null,
    initials: 'S',
  },
  {
    text: 'Лучший групповой тур в нашей жизни! Василя подобрала идеальный маршрут по Средиземноморью. Каждый день был наполнен впечатлениями!',
    name: 'Ирина & Сергей',
    city: 'Франкфурт',
    type: 'Круиз',
    image: null,
    initials: 'И',
  },
  {
    text: 'Professionelle Beratung, faire Preise und ein unvergessliches Erlebnis. Touragent.de ist unsere erste Wahl fuer Reiseplanung!',
    name: 'Familie Weber',
    city: 'Гамбург',
    type: 'Индивидуальный тур',
    image: null,
    initials: 'W',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader label="Отзывы" title="Что говорят о нас путешественники" />

        {/* TODO: добавить место под скриншоты отзывов и видео */}
        <div className="relative">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[280px]">
            {/* Quote watermark */}
            <svg className="absolute top-4 right-4 w-16 h-16 text-gold/10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /></svg>

            {/* Stars */}
            <div className="flex gap-1 mb-6" aria-label="5 из 5 звёзд">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-gold text-gold" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
              ))}
            </div>

            <blockquote>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-light italic">
                &ldquo;{t.text}&rdquo;
              </p>
            </blockquote>

            <div className="flex items-center gap-4">
              {t.image ? (
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold/20" loading="lazy" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-ocean-deep/10 flex items-center justify-center border-2 border-gold/20">
                  <span className="text-lg font-serif text-ocean-deep">{t.initials}</span>
                </div>
              )}
              <div>
                <cite className="font-semibold text-ocean-deep not-italic">{t.name}</cite>
                <p className="text-sm text-gray-500">{t.city} &bull; {t.type}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-ocean-deep/20 flex items-center justify-center text-ocean-deep hover:bg-ocean-deep hover:text-white transition-all" aria-label="Предыдущий отзыв">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" /></svg>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-gold' : 'w-2 bg-ocean-deep/20'}`}
                  aria-label={`Отзыв ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-ocean-deep/20 flex items-center justify-center text-ocean-deep hover:bg-ocean-deep hover:text-white transition-all" aria-label="Следующий отзыв">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
