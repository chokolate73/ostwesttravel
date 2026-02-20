'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
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
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=700&h=500&fit=crop&crop=center&q=80',
    alt: 'Круиз по Карибским островам — апрель 2026',
    program: {
      ship: 'Royal Caribbean — Symphony of the Seas',
      cabin: 'Каюта с балконом (категория D5)',
      price: 'от 2 890 € на человека',
      included: [
        'Перелёт Франкфурт — Майами — Франкфурт',
        'Трансфер аэропорт — порт — аэропорт',
        'Проживание в каюте с балконом (12 ночей)',
        'Питание All-Inclusive на борту',
        'Развлекательная программа и шоу',
        'Русскоговорящий координатор группы',
      ],
      itinerary: [
        { day: 'День 1', desc: 'Вылет из Франкфурта, прибытие в Майами, посадка на лайнер' },
        { day: 'День 2', desc: 'День в море — знакомство с лайнером, бассейны, SPA' },
        { day: 'День 3–4', desc: 'Коста-Майя и Козумель (Мексика) — руины майя, сноркелинг' },
        { day: 'День 5', desc: 'Роатан (Гондурас) — коралловые рифы, дайвинг' },
        { day: 'День 6', desc: 'Белиз — заповедник Blue Hole, катамаран' },
        { day: 'День 7–8', desc: 'Ямайка — экскурсия на водопады Даннс-Ривер, Монтего-Бэй' },
        { day: 'День 9–10', desc: 'Дни в море — отдых, вечерние шоу, дегустации' },
        { day: 'День 11–12', desc: 'Багамские острова — пляж, Нассау, Атлантис' },
        { day: 'День 13', desc: 'Возвращение в Майами, перелёт во Франкфурт' },
      ],
    },
  },
  {
    title: 'Средиземноморский круиз',
    dates: '10 июня — 20 июня 2026',
    startDate: '2026-06-10T00:00:00+02:00',
    format: 'Групповой круиз',
    highlight: 'MSC, Италия — Греция — Хорватия',
    spots: '12 мест',
    /* TODO: заменить на реальное фото */
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=700&h=500&fit=crop&crop=center&q=80',
    alt: 'Средиземноморский круиз — июнь 2026',
    program: {
      ship: 'MSC World Europa',
      cabin: 'Каюта с балконом (категория Fantastica)',
      price: 'от 1 690 € на человека',
      included: [
        'Посадка в порту Генуя (Италия)',
        'Проживание в каюте с балконом (10 ночей)',
        'Полный пансион на борту',
        'Развлечения и анимация на борту',
        'Портовые сборы и налоги',
        'Русскоговорящий координатор группы',
      ],
      itinerary: [
        { day: 'День 1', desc: 'Генуя (Италия) — посадка на лайнер, приветственный ужин' },
        { day: 'День 2', desc: 'Чивитавеккья — экскурсия в Рим, Колизей, Ватикан' },
        { day: 'День 3', desc: 'Неаполь — Помпеи, побережье Амальфи' },
        { day: 'День 4', desc: 'День в море — SPA, мастер-классы, вечернее шоу' },
        { day: 'День 5', desc: 'Санторини (Греция) — белоснежные домики, закат в Ойе' },
        { day: 'День 6', desc: 'Афины (Пирей) — Акрополь, район Плака' },
        { day: 'День 7', desc: 'Корфу (Греция) — старый город, пляжи Палеокастрица' },
        { day: 'День 8', desc: 'Дубровник (Хорватия) — прогулка по крепостным стенам' },
        { day: 'День 9', desc: 'Сплит (Хорватия) — дворец Диоклетиана, набережная Рива' },
        { day: 'День 10', desc: 'День в море — прощальный гала-ужин' },
        { day: 'День 11', desc: 'Возвращение в Геную, высадка' },
      ],
    },
  },
  {
    title: 'Норвежские фьорды',
    dates: '5 сентября — 14 сентября 2026',
    startDate: '2026-09-05T00:00:00+02:00',
    format: 'Групповой круиз',
    highlight: 'Costa Cruises, Фьорды — Берген — Нордкап',
    spots: '15 мест',
    /* TODO: заменить на реальное фото */
    image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=700&h=500&fit=crop&crop=center&q=80',
    alt: 'Круиз по норвежским фьордам — сентябрь 2026',
    program: {
      ship: 'Costa Firenze',
      cabin: 'Каюта с балконом (категория Premium)',
      price: 'от 2 190 € на человека',
      included: [
        'Посадка в порту Гамбург (Германия)',
        'Проживание в каюте с балконом (9 ночей)',
        'Полный пансион на борту',
        'Развлечения, шоу и анимация',
        'Портовые сборы и налоги',
        'Русскоговорящий координатор группы',
      ],
      itinerary: [
        { day: 'День 1', desc: 'Гамбург (Германия) — посадка на лайнер' },
        { day: 'День 2', desc: 'День в море — знакомство с лайнером, SPA' },
        { day: 'День 3', desc: 'Берген (Норвегия) — рыбный рынок, фуникулёр Флёйбанен' },
        { day: 'День 4', desc: 'Согнефьорд — самый длинный фьорд Норвегии, каякинг' },
        { day: 'День 5', desc: 'Гейрангерфьорд — водопады «Семь сестёр», смотровые площадки' },
        { day: 'День 6', desc: 'Олесунн — город в стиле ар-нуво, панорама с горы Аксла' },
        { day: 'День 7', desc: 'Тромсё — арктический собор, охота за северным сиянием' },
        { day: 'День 8', desc: 'Нордкап — самая северная точка Европы, «Полуночное солнце»' },
        { day: 'День 9', desc: 'День в море — прощальный гала-ужин, дегустация аквавита' },
        { day: 'День 10', desc: 'Возвращение в Гамбург, высадка' },
      ],
    },
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

function ProgramModal({ tour, onClose }: { tour: typeof tours[number]; onClose: () => void }) {
  const p = tour.program;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={tour.title}>
      <div className="absolute inset-0 bg-ocean-deep/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-48 rounded-t-3xl overflow-hidden">
          <Image src={tour.image} alt={tour.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-gold text-ocean-deep text-xs font-bold rounded-full uppercase mb-2">
              {tour.format}
            </span>
            <h3 className="text-2xl font-serif text-white">{tour.title}</h3>
            <p className="text-white/80 text-sm">{tour.dates}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-ocean-deep hover:bg-white transition-colors"
            aria-label="Закрыть"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Ship & price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-ocean-deep/5 rounded-2xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Лайнер</p>
              <p className="font-semibold text-ocean-deep">{p.ship}</p>
              <p className="text-sm text-gray-500 mt-1">{p.cabin}</p>
            </div>
            <div className="bg-gold/10 rounded-2xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Стоимость</p>
              <p className="font-semibold text-ocean-deep text-lg">{p.price}</p>
              <p className="text-sm text-gray-500 mt-1">Осталось {tour.spots}</p>
            </div>
          </div>

          {/* Included */}
          <div>
            <h4 className="font-serif text-ocean-deep text-lg mb-3">Что включено</h4>
            <ul className="space-y-2">
              {p.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <h4 className="font-serif text-ocean-deep text-lg mb-3">Программа по дням</h4>
            <div className="space-y-3">
              {p.itinerary.map((step) => (
                <div key={step.day} className="flex gap-3">
                  <span className="shrink-0 w-20 text-xs font-bold text-gold uppercase bg-gold/10 rounded-lg px-2 py-1.5 text-center">
                    {step.day}
                  </span>
                  <p className="text-sm text-gray-700 pt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <WhatsAppButton size="sm">Забронировать место</WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Upcoming() {
  const [openTour, setOpenTour] = useState<number | null>(null);

  const closeModal = useCallback(() => setOpenTour(null), []);

  return (
    <section id="upcoming" className="py-20 md:py-24 bg-ocean-deep" aria-labelledby="upcoming-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Ближайшие путешествия"
          title="Присоединяйтесь к ближайшим поездкам"
          light
          headingId="upcoming-heading"
        />

        <div className="space-y-8">
          {tours.map((tour, i) => (
            <ScrollReveal key={tour.title} delay={i * 100}>
              <article className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-56 md:h-[360px]">
                    <Image
                      src={tour.image}
                      alt={tour.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                    <div className="flex flex-wrap gap-3">
                      <WhatsAppButton size="sm">Запросить программу</WhatsAppButton>
                      <button
                        onClick={() => setOpenTour(i)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-ocean-deep/20 text-ocean-deep rounded-full text-sm font-semibold hover:bg-ocean-deep hover:text-white transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                        Подробнее о программе
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {openTour !== null && (
          <ProgramModal tour={tours[openTour]} onClose={closeModal} />
        )}
      </div>
    </section>
  );
}
