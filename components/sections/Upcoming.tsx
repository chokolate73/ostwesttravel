'use client';

import { useState, useEffect } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const tours = [
  {
    title: 'Круиз по Карибским островам',
    dates: '15 апреля — 27 апреля 2026',
    startDate: '2026-04-15T00:00:00+02:00',
    format: 'Групповой круиз',
    highlight: 'Royal Caribbean, All-Inclusive, 5 островов',
    spots: '8 мест',
    /* TODO: заменить на реальное фото направления */
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=700&q=80',
    alt: 'Круиз по Карибским островам — апрель 2026',
  },
  {
    title: 'Средиземноморский круиз',
    dates: '10 июня — 20 июня 2026',
    startDate: '2026-06-10T00:00:00+02:00',
    format: 'Групповой круиз',
    highlight: 'MSC, Италия — Греция — Хорватия',
    spots: '12 мест',
    /* TODO: заменить на реальное фото */
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=700&q=80',
    alt: 'Средиземноморский круиз — июнь 2026',
  },
  {
    title: 'Норвежские фьорды',
    dates: '5 сентября — 14 сентября 2026',
    startDate: '2026-09-05T00:00:00+02:00',
    format: 'Групповой круиз',
    highlight: 'Costa Cruises, Фьорды — Берген — Нордкап',
    spots: '15 мест',
    /* TODO: заменить на реальное фото */
    image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=700&q=80',
    alt: 'Круиз по норвежским фьордам — сентябрь 2026',
  },
];

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    function update() {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2">
      {[
        { v: timeLeft.d, l: 'дней' },
        { v: timeLeft.h, l: 'часов' },
        { v: timeLeft.m, l: 'минут' },
        { v: timeLeft.s, l: 'секунд' },
      ].map((u) => (
        <div key={u.l} className="text-center bg-ocean-deep/5 rounded-xl p-3">
          <div className="text-2xl md:text-3xl font-serif text-ocean-deep">{u.v}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">{u.l}</div>
        </div>
      ))}
    </div>
  );
}

export default function Upcoming() {
  return (
    <section id="upcoming" className="py-20 md:py-24 bg-ocean-deep" aria-labelledby="upcoming-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Ближайшие путешествия"
          title="Присоединяйтесь к ближайшим поездкам"
          light
        />

        <div className="space-y-8">
          {tours.map((tour, i) => (
            <ScrollReveal key={tour.title} delay={i * 100}>
              <article className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-56 md:h-auto">
                    <img
                      src={tour.image}
                      alt={tour.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/50 to-transparent md:bg-gradient-to-r" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-ocean-deep text-xs font-bold rounded-full uppercase">
                      {tour.format}
                    </div>
                  </div>
                  <div className="p-6 md:p-10">
                    <Countdown targetDate={tour.startDate} />
                    <h3 className="text-xl md:text-2xl font-serif text-ocean-deep mt-6 mb-3">{tour.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                        {tour.dates}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                        {tour.spots}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tour.highlight.split(', ').map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gold/10 text-gold-dark rounded-full text-sm">{tag}</span>
                      ))}
                    </div>
                    <WhatsAppButton size="sm">Запросить программу</WhatsAppButton>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
