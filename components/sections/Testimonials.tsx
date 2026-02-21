'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    text: 'Лучший групповой тур в нашей жизни! Василя подобрала идеальный маршрут по Средиземноморью. Каждый день был наполнен впечатлениями!',
    name: 'Ирина & Сергей',
    city: 'Франкфурт',
    type: 'Круиз',
    initials: 'И',
  },
  {
    text: 'Василя организовала нам медовый месяц мечты. Каюта с балконом, романтический ужин от капитана — всё было идеально до мелочей.',
    name: 'Анна',
    city: 'Мюнхен',
    type: 'Круиз',
    initials: 'А',
  },
  {
    text: 'Уже третий раз бронируем через Василю. Всегда находит лучшие предложения и каюты, которые не найдёшь на сайтах.',
    name: 'Дмитрий & Ольга',
    city: 'Берлин',
    type: 'Круиз',
    initials: 'Д',
  },
  {
    text: 'Первый круиз и сразу влюбились! Василя терпеливо объяснила все нюансы, помогла с визами и трансфером.',
    name: 'Марина',
    city: 'Вена',
    type: 'Круиз',
    initials: 'М',
  },
  {
    text: 'Поддержка 24/7 — это не просто слова. Когда изменили расписание рейса, Василя решила всё за час.',
    name: 'Алексей',
    city: 'Цюрих',
    type: 'Круиз',
    initials: 'А',
  },
  {
    text: 'Брали круиз по Норвежским фьордам — зрелище невероятное. Василя посоветовала каюту именно по правому борту, чтобы видеть лучшие виды. Такое внимание к деталям дорогого стоит!',
    name: 'Наталья & Виктор',
    city: 'Дюссельдорф',
    type: 'Круиз',
    initials: 'Н',
  },
  {
    text: 'Летели с двумя детьми — переживали очень. Василя подобрала лайнер с детским клубом и аквапарком, дети были в восторге. Уже планируем следующий!',
    name: 'Елена',
    city: 'Штутгарт',
    type: 'Круиз',
    initials: 'Е',
  },
];

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    function calc() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 960) return 2;
      return 3;
    }
    setCount(calc());
    let timer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(timer);
      timer = setTimeout(() => setCount(calc()), 150);
    }
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); clearTimeout(timer); };
  }, []);
  return count;
}

const Star = () => (
  <svg className="w-[18px] h-[18px] fill-gold" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

export default function Testimonials() {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const [current, setCurrent] = useState(0);
  const hovered = useRef(false);

  const goTo = useCallback((i: number) => {
    setCurrent((prev) => {
      const max = Math.max(0, testimonials.length - visibleCount);
      if (i < 0) return max;
      if (i > max) return 0;
      return i;
    });
  }, [visibleCount]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Clamp current when visibleCount changes
  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  // Autoplay
  useEffect(() => {
    if (hovered.current) return;
    const interval = setInterval(() => {
      setCurrent((c) => {
        const max = Math.max(0, testimonials.length - visibleCount);
        return c >= max ? 0 : c + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const dotCount = maxIndex + 1;
  const pct = (100 / visibleCount) * current;

  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 bg-[#F8F6F1] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeader label="Отзывы" title="Что говорят мои путешественники" headingId="testimonials-heading" />

        <div
          onMouseEnter={() => { hovered.current = true; }}
          onMouseLeave={() => { hovered.current = false; }}
        >
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${pct}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white rounded-2xl p-5 pb-4 sm:p-7 sm:pb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative overflow-hidden h-full flex flex-col">
                    {/* Decorative quote */}
                    <span
                      className="absolute -top-2 right-3 font-serif text-[120px] leading-none text-gold/10 pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    {/* Stars */}
                    <div className="flex gap-[3px] mb-3 sm:mb-5 relative">
                      {Array.from({ length: 5 }).map((_, j) => <Star key={j} />)}
                    </div>

                    {/* Quote */}
                    <blockquote className="relative flex-1">
                      <p className="text-base leading-[1.7] italic text-ocean-deep">
                        &laquo;{t.text}&raquo;
                      </p>
                    </blockquote>

                    {/* Divider */}
                    <div className="h-px bg-gray-200 my-3 sm:my-5" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center shrink-0">
                        <span className="text-white font-serif text-[17px] font-bold leading-none">
                          {t.initials}
                        </span>
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-ocean-deep">{t.name}</div>
                        <div className="text-[13px] text-gray-500">{t.city} &bull; {t.type}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
              aria-label="Предыдущий отзыв"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: dotCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-gold'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
              aria-label="Следующий отзыв"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
