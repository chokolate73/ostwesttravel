'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Lang } from '@/lib/i18n';

const t = {
  de: {
    label: 'Bewertungen',
    title: 'Was meine Reisenden sagen',
    prevAriaLabel: 'Vorherige Bewertung',
    nextAriaLabel: 'Nächste Bewertung',
    dotAriaLabel: 'Bewertung',
    types: {
      'Пакетный тур': 'Pauschalreise',
      'Индивидуальный подбор': 'Individuelle Auswahl',
      'Круиз': 'Kreuzfahrt',
    } as Record<string, string>,
  },
  ru: {
    label: 'Отзывы',
    title: 'Что говорят мои путешественники',
    prevAriaLabel: 'Предыдущий отзыв',
    nextAriaLabel: 'Следующий отзыв',
    dotAriaLabel: 'Отзыв',
    types: {
      'Пакетный тур': 'Пакетный тур',
      'Индивидуальный подбор': 'Индивидуальный подбор',
      'Круиз': 'Круиз',
    } as Record<string, string>,
  },
};

const testimonials = {
  de: [
    {
      text: 'Die beste Gruppenreise unseres Lebens!🔥😁🔥 Vasilya hat uns die perfekte Route durchs Mittelmeer zusammengestellt. Einfach jeder Tag war voller Eindrücke!',
      name: 'Irina und Sergej',
      city: 'Frankfurt',
      type: 'Пакетный тур',
      image: '/images/мексика.jpeg',
    },
    {
      text: 'Danke, dass du uns die Traumflitterwochen organisiert hast😍 Kabine mit Balkon, Kapitänsdinner — alles war bis ins kleinste Detail perfekt.',
      name: 'Anna',
      city: 'München',
      type: 'Индивидуальный подбор',
      image: '/images/Анна.webp',
    },
    {
      text: 'Wir buchen bereits zum dritten Mal über Vasilya. Sie findet immer die besten Angebote und Kabinen, die man auf keiner Website findet.',
      name: 'Dmitrij und Olga',
      city: 'Berlin',
      type: 'Круиз',
      image: '/images/Дмитрий & Ольга.webp',
    },
    {
      text: 'Erste Kreuzfahrt und sofort verliebt! Vasilya hat geduldig alle Einzelheiten erklärt und bei Visa und Transfer geholfen.',
      name: 'Marina',
      city: 'Wien',
      type: 'Круиз',
      image: '/images/Марина.webp',
    },
    {
      text: '24/7-Support - das sind nicht nur Worte. Als der Flugplan geändert wurde, hat Vasilya alles innerhalb einer Stunde gelöst.',
      name: 'Alexej',
      city: 'Zürich',
      type: 'Индивидуальный подбор',
      image: '/images/Алексей.webp',
    },
    {
      text: 'Wir haben eine Kreuzfahrt durch die norwegischen Fjorde gemacht - ein unglaubliches Erlebnis. Vasilya hat uns eine Kabine auf der Steuerbordseite empfohlen, um die besten Aussichten zu genießen. Diese Liebe zum Detail ist unbezahlbar!',
      name: 'Natalja und Viktor',
      city: 'Düsseldorf',
      type: 'Круиз',
      image: '/images/Наталья & Виктор.webp',
    },
    {
      text: 'Wir sind mit zwei Kindern gereist - hatten große Bedenken. Vasilya hat ein Schiff mit Kinderclub und Aquapark ausgewählt, die Kinder waren begeistert. Wir planen schon die nächste Reise!',
      name: 'Elena',
      city: 'Stuttgart',
      type: 'Пакетный тур',
      image: '/images/Елена.webp',
    },
  ],
  ru: [
    {
      text: 'Лучший групповой тур в нашей жизни!🔥😁🔥 Василя подобрала нам идеальный маршрут по Средиземноморью. Просто каааждый день был наполнен впечатлениями!',
      name: 'Ирина и Сергей',
      city: 'Франкфурт',
      type: 'Пакетный тур',
      image: '/images/мексика.jpeg',
    },
    {
      text: 'Спасибо, что организовала нам медовый месяц мечты😍 Каюта с балконом, романтический ужин от капитана - всё было идеально до мелочей.',
      name: 'Анна',
      city: 'Мюнхен',
      type: 'Индивидуальный подбор',
      image: '/images/Анна.webp',
    },
    {
      text: 'Уже третий раз бронируем через Василю. Всегда находит лучшие предложения и каюты, которые не найдёшь на сайтах.',
      name: 'Дмитрий и Ольга',
      city: 'Берлин',
      type: 'Круиз',
      image: '/images/Дмитрий & Ольга.webp',
    },
    {
      text: 'Первый круиз и сразу влюбились! Василя терпеливо объяснила все нюансы, помогла с визами и трансфером.',
      name: 'Марина',
      city: 'Вена',
      type: 'Круиз',
      image: '/images/Марина.webp',
    },
    {
      text: 'Поддержка 24/7 - это не просто слова. Когда изменили расписание рейса, Василя решила всё за час.',
      name: 'Алексей',
      city: 'Цюрих',
      type: 'Индивидуальный подбор',
      image: '/images/Алексей.webp',
    },
    {
      text: 'Брали круиз по Норвежским фьордам - зрелище невероятное. Василя посоветовала каюту именно по правому борту, чтобы видеть лучшие виды. Такое внимание к деталям дорогого стоит!',
      name: 'Наталья и Виктор',
      city: 'Дюссельдорф',
      type: 'Круиз',
      image: '/images/Наталья & Виктор.webp',
    },
    {
      text: 'Летели с двумя детьми - переживали очень. Василя подобрала лайнер с детским клубом и аквапарком, дети были в восторге. Уже планируем следующий!',
      name: 'Елена',
      city: 'Штутгарт',
      type: 'Пакетный тур',
      image: '/images/Елена.webp',
    },
  ],
};

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

const MutedStar = () => (
  <svg className="w-[18px] h-[18px] fill-gold/25" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

export default function Testimonials({ lang = 'ru' }: { lang?: Lang }) {
  const text = t[lang];
  const visibleCount = useVisibleCount();
  const items = testimonials[lang];
  const maxIndex = Math.max(0, items.length - visibleCount);
  const [current, setCurrent] = useState(0);
  const hovered = useRef(false);

  const goTo = useCallback((i: number) => {
    setCurrent((prev) => {
      const max = Math.max(0, items.length - visibleCount);
      if (i < 0) return max;
      if (i > max) return 0;
      return i;
    });
  }, [visibleCount, items.length]);

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
        const max = Math.max(0, items.length - visibleCount);
        return c >= max ? 0 : c + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [visibleCount, items.length]);

  const dotCount = maxIndex + 1;
  const pct = (100 / visibleCount) * current;

  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 bg-[#F8F6F1] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeader label={text.label} title={text.title} headingId="testimonials-heading" />

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
              {items.map((item, i) => (
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
                      {i === current + Math.floor(visibleCount / 2) ? (
                        <>{Array.from({ length: 4 }).map((_, j) => <Star key={j} />)}<MutedStar /></>
                      ) : (
                        Array.from({ length: 5 }).map((_, j) => <Star key={j} />)
                      )}
                    </div>

                    {/* Quote */}
                    <blockquote className="relative flex-1">
                      <p className="text-base leading-[1.7] italic text-ocean-deep">
                        &laquo;{item.text}&raquo;
                      </p>
                    </blockquote>

                    {/* Divider */}
                    <div className="h-px bg-gray-200 my-3 sm:my-5" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <div className="text-[15px] font-bold text-ocean-deep">{item.name}</div>
                        <div className="text-[13px] text-gray-500">{item.city} &bull; {text.types[item.type] || item.type}</div>
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
              aria-label={text.prevAriaLabel}
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
                  aria-label={`${text.dotAriaLabel} ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
              aria-label={text.nextAriaLabel}
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
