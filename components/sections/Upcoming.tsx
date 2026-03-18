'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Lang } from '@/lib/i18n';

type Tour = {
  title: string;
  dates: string;
  startDate: string;
  format: string;
  type: 'land' | 'cruise';
  highlight: string;
  spots: string;
  image: string;
  alt: string;
  program: {
    ship: string;
    cabin: string;
    price: string;
    included: string[];
    itinerary: { day: string; desc: string }[];
  };
};

const toursRu: Tour[] = [
  {
    title: 'Шёлковый путь — Узбекистан',
    dates: '21 сентября - 1 октября 2026',
    startDate: '2026-09-21T00:00:00+02:00',
    format: 'Групповой тур',
    type: 'land',
    highlight: 'Шёлковый путь, 6 городов, 11 дней',
    spots: 'места ограничены',
    image: '/images/узбекистан.jpeg',
    alt: 'Тур по Шёлковому пути — Узбекистан, сентябрь 2026',
    program: {
      ship: 'Ургенч → Хива → Бухара → Самарканд → Шахрисабз → Ташкент',
      cabin: 'Отели 3–4 звезды (средний и повышенный класс)',
      price: 'от 1 899 € на человека',
      included: [
        'Перелёт из Германии и обратно',
        'Сборы и налоги аэропортов',
        'Проживание в отелях 3–4 звезды',
        'Все трансферы на современных кондиционированных автобусах',
        'Экскурсии, осмотр достопримечательностей и входные билеты по программе',
        'Немецко- или русскоговорящий гид',
        'Сопровождение опытным русскоговорящим руководителем группы',
      ],
      itinerary: [
        { day: 'День 1', desc: 'Вылет из Германии, прибытие в Ургенч' },
        { day: 'День 2–3', desc: 'Хива — древний город-музей, крепость Ичан-Кала' },
        { day: 'День 4–5', desc: 'Бухара — мечети, медресе, торговые купола' },
        { day: 'День 6–8', desc: 'Самарканд — Регистан, мавзолей Гур-Эмир, обсерватория Улугбека' },
        { day: 'День 9', desc: 'Шахрисабз — дворец Тимура Ак-Сарай' },
        { day: 'День 10–11', desc: 'Ташкент — столица, базары, перелёт домой' },
      ],
    },
  },
  {
    title: 'Круиз по Карибским островам',
    dates: '22 ноября - 6 декабря 2026',
    startDate: '2026-11-22T00:00:00+01:00',
    format: 'Групповой круиз',
    type: 'cruise',
    highlight: 'Карибы, All-Inclusive, VP+',
    spots: 'места ограничены',
    image: '/images/caribbean-cruise.jpg',
    alt: 'Круиз по Карибским островам — ноябрь 2026',
    program: {
      ship: 'AIDAdiva',
      cabin: 'Уточняется',
      price: 'от 2 450 € на человека',
      included: [
        'Прямой перелёт из Дюссельдорфа или Франкфурта',
        'Трансфер аэропорт — порт — аэропорт',
        'Круиз по Карибским островам',
        'Кабина выбранной категории — внутренняя, с окном или с балконом',
        'Питание VP+ (полный пансион плюс)',
        'Шоу, концерты и развлекательная программа',
        'Приятная компания новых друзей',
      ],
      itinerary: [
        { day: 'День 1', desc: 'Прямой перелёт из Германии, посадка на лайнер' },
        { day: 'День 2–13', desc: 'Круиз по Карибским островам — экскурсии, пляжи, шоу' },
        { day: 'День 14–15', desc: 'Возвращение, прямой перелёт в Германию' },
      ],
    },
  },
];

const toursDe: Tour[] = [
  {
    title: 'Seidenstraße — Usbekistan',
    dates: '21. September - 1. Oktober 2026',
    startDate: '2026-09-21T00:00:00+02:00',
    format: 'Gruppenreise',
    type: 'land',
    highlight: 'Seidenstraße, 6 Städte, 11 Tage',
    spots: 'begrenzte Plätze',
    image: '/images/узбекистан.jpeg',
    alt: 'Reise auf der Seidenstraße — Usbekistan, September 2026',
    program: {
      ship: 'Urgentsch → Chiwa → Buchara → Samarkand → Schachrisabs → Taschkent',
      cabin: 'Hotels 3–4 Sterne (Mittel- und gehobene Klasse)',
      price: 'ab 1.899 € pro Person',
      included: [
        'Flug aus Deutschland und zurück',
        'Flughafengebühren und -steuern',
        'Unterkunft in Hotels mit 3–4 Sternen',
        'Alle Transfers in modernen klimatisierten Bussen',
        'Ausflüge, Besichtigungen und Eintrittsgelder laut Programm',
        'Deutsch- oder russischsprachiger Reiseleiter',
        'Begleitung durch einen erfahrenen russischsprachigen Gruppenleiter',
      ],
      itinerary: [
        { day: 'Tag 1', desc: 'Abflug aus Deutschland, Ankunft in Urgentsch' },
        { day: 'Tag 2–3', desc: 'Chiwa — antike Museumsstadt, Festung Itschan-Kala' },
        { day: 'Tag 4–5', desc: 'Buchara — Moscheen, Medressen, Handelskuppeln' },
        { day: 'Tag 6–8', desc: 'Samarkand — Registan, Gur-Emir-Mausoleum, Observatorium von Ulugbek' },
        { day: 'Tag 9', desc: 'Schachrisabs — Timurs Palast Ak-Sarai' },
        { day: 'Tag 10–11', desc: 'Taschkent — Hauptstadt, Basare, Rückflug' },
      ],
    },
  },
  {
    title: 'Kreuzfahrt durch die Karibik',
    dates: '22. November - 6. Dezember 2026',
    startDate: '2026-11-22T00:00:00+01:00',
    format: 'Gruppenkreuzfahrt',
    type: 'cruise',
    highlight: 'Karibik, All-Inclusive, VP+',
    spots: 'begrenzte Plätze',
    image: '/images/caribbean-cruise.jpg',
    alt: 'Kreuzfahrt durch die Karibik — November 2026',
    program: {
      ship: 'AIDAdiva',
      cabin: 'Wird noch bekannt gegeben',
      price: 'ab 2.450 € pro Person',
      included: [
        'Direktflug ab Düsseldorf oder Frankfurt',
        'Transfer Flughafen — Hafen — Flughafen',
        'Kreuzfahrt durch die Karibik',
        'Kabine der gewählten Kategorie — Innen-, Außen- oder Balkonkabine',
        'Verpflegung VP+ (Vollpension plus)',
        'Shows, Konzerte und Unterhaltungsprogramm',
        'Angenehme Gesellschaft neuer Freunde',
      ],
      itinerary: [
        { day: 'Tag 1', desc: 'Direktflug aus Deutschland, Einschiffung' },
        { day: 'Tag 2–13', desc: 'Kreuzfahrt durch die Karibik — Ausflüge, Strände, Shows' },
        { day: 'Tag 14–15', desc: 'Rückkehr, Direktflug nach Deutschland' },
      ],
    },
  },
];

const t = {
  de: {
    sectionLabel: 'Nächste Reisen',
    sectionTitle: 'Schließen Sie sich einer Kleingruppe an',
    countdownLabels: ['Tage', 'Stunden', 'Minuten', 'Sekunden'],
    routeLabel: 'Route',
    shipLabel: 'Schiff',
    priceLabel: 'Preis',
    spotsLeft: 'Noch verfügbar',
    includedTitle: 'Inklusivleistungen',
    itineraryTitle: 'Tagesprogramm',
    requestProgram: 'Programm anfordern',
    moreDetails: 'Mehr erfahren',
    bookSpot: 'Platz buchen',
    closeModal: 'Schließen',
  },
  ru: {
    sectionLabel: 'Ближайшие путешествия',
    sectionTitle: 'Присоединяйтесь к поездке в небольшой группе',
    countdownLabels: ['дней', 'часов', 'минут', 'секунд'],
    routeLabel: 'Маршрут',
    shipLabel: 'Лайнер',
    priceLabel: 'Стоимость',
    spotsLeft: 'Осталось',
    includedTitle: 'Что включено',
    itineraryTitle: 'Программа по дням',
    requestProgram: 'Запросить программу',
    moreDetails: 'Подробнее',
    bookSpot: 'Забронировать место',
    closeModal: 'Закрыть',
  },
};

function Countdown({ targetDate, labels }: { targetDate: string; labels: string[] }) {
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
    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
      {[
        { v: timeLeft.d, l: labels[0] },
        { v: timeLeft.h, l: labels[1] },
        { v: timeLeft.m, l: labels[2] },
        { v: timeLeft.s, l: labels[3] },
      ].map((u) => (
        <div key={u.l} className="text-center bg-ocean-deep/5 rounded-xl p-2 md:p-3">
          <div className="text-xl md:text-3xl font-serif text-ocean-deep">{u.v}</div>
          <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">{u.l}</div>
        </div>
      ))}
    </div>
  );
}

function ProgramModal({ tour, lang, onClose }: { tour: Tour; lang: Lang; onClose: () => void }) {
  const p = tour.program;
  const s = t[lang];

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={tour.title}>
      <div className="absolute inset-0 bg-ocean-deep/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-t-2xl sm:rounded-3xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky close button - stays visible while scrolling */}
        <div className="sticky top-0 z-20 pointer-events-none">
          <div className="absolute top-4 right-4 pointer-events-auto">
            <button
              onClick={onClose}
              className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-ocean-deep hover:bg-white transition-colors shadow-md"
              aria-label={s.closeModal}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* Header image */}
        <div className="relative h-36 md:h-48 rounded-t-3xl overflow-hidden">
          <Image src={tour.image} alt={tour.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 md:bottom-4 md:left-6 md:right-6">
            <span className="inline-block px-3 py-1 bg-gold text-ocean-deep text-xs font-bold rounded-full uppercase mb-1 md:mb-2">
              {tour.format}
            </span>
            <h3 className="text-xl md:text-2xl font-serif text-white">{tour.title}</h3>
            <p className="text-white/80 text-sm">{tour.dates}</p>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 pb-24 md:pb-8 space-y-5 md:space-y-6">
          {/* Ship/Route & price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-ocean-deep/5 rounded-2xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{tour.type === 'land' ? s.routeLabel : s.shipLabel}</p>
              <p className="font-semibold text-ocean-deep">{p.ship}</p>
              <p className="text-sm text-gray-500 mt-1">{p.cabin}</p>
            </div>
            <div className="bg-gold/10 rounded-2xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{s.priceLabel}</p>
              <p className="font-semibold text-ocean-deep text-lg">{p.price}</p>
              <p className="text-sm text-gray-500 mt-1">{s.spotsLeft} {tour.spots}</p>
            </div>
          </div>

          {/* Included */}
          <div>
            <h4 className="font-serif text-ocean-deep text-lg mb-3">{s.includedTitle}</h4>
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
            <h4 className="font-serif text-ocean-deep text-lg mb-3">{s.itineraryTitle}</h4>
            <div className="space-y-3">
              {p.itinerary.map((step) => (
                <div key={step.day} className="flex gap-3">
                  <span className="shrink-0 text-xs font-bold text-gold uppercase bg-gold/10 rounded-lg px-3 py-1.5 text-center whitespace-nowrap">
                    {step.day}
                  </span>
                  <p className="text-sm text-gray-700 pt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <WhatsAppButton size="sm" className="w-full sm:w-auto justify-center">{s.bookSpot}</WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Upcoming({ lang = 'ru' }: { lang?: Lang }) {
  const [openTour, setOpenTour] = useState<number | null>(null);

  const closeModal = useCallback(() => setOpenTour(null), []);

  const tours = lang === 'de' ? toursDe : toursRu;
  const s = t[lang];

  return (
    <section id="upcoming" className="py-20 md:py-24 bg-ocean-deep" aria-labelledby="upcoming-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={s.sectionLabel}
          title={s.sectionTitle}
          light
          headingId="upcoming-heading"
        />

        <div className="space-y-8">
          {tours.map((tour, i) => (
            <ScrollReveal key={tour.title} delay={i * 100}>
              <article className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-48 sm:h-56 md:h-[360px]">
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
                  <div className="p-5 sm:p-6 md:p-10">
                    <Countdown targetDate={tour.startDate} labels={s.countdownLabels} />
                    <h3 className="text-xl md:text-2xl font-serif text-ocean-deep mt-4 sm:mt-6 mb-2 sm:mb-3">{tour.title}</h3>
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
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {tour.highlight.split(', ').map((tag) => (
                        <span key={tag} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-gold/10 text-gold-dark rounded-full text-xs sm:text-sm">{tag}</span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <WhatsAppButton size="sm" className="w-full sm:flex-1 justify-center">{s.requestProgram}</WhatsAppButton>
                      <button
                        onClick={() => setOpenTour(i)}
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 ring-2 ring-inset ring-ocean-deep/20 text-ocean-deep rounded-full text-sm font-semibold hover:bg-ocean-deep hover:text-white hover:ring-ocean-deep transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                        {s.moreDetails}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {openTour !== null && (
          <ProgramModal tour={tours[openTour]} lang={lang} onClose={closeModal} />
        )}
      </div>
    </section>
  );
}
