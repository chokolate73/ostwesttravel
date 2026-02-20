'use client';

import { useState, useEffect } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

type FAQItem = { q: string; a: string; id: string };
type FAQCategory = { title: string; items: FAQItem[] };

const faqData: FAQCategory[] = [
  {
    title: 'Подбор и депозит',
    items: [
      {
        id: 'faq-deposit-why',
        q: 'Почему подбор путешествия осуществляется с депозитом?',
        a: 'Подбор проводится индивидуально: анализ запроса, проработка вариантов, проверка отелей и подготовка презентации. Депозит подтверждает начало персональной работы.',
      },
      {
        id: 'faq-deposit-amount',
        q: 'Сколько составляет депозит?',
        a: '69,90 \u20ac для новых клиентов.',
      },
      {
        id: 'faq-deposit-return',
        q: 'Депозит возвращается?',
        a: 'Да. При бронировании тура депозит полностью возвращается клиенту.',
      },
      {
        id: 'faq-deposit-how',
        q: 'Как происходит возврат?',
        a: 'Возврат осуществляется тем же способом оплаты, которым был внес\u0451н депозит (PayPal, банковский перевод и др.).',
      },
      {
        id: 'faq-deposit-no-book',
        q: 'Если я решу не бронировать тур?',
        a: 'В этом случае депозит оста\u0451тся как оплата оказанной консультации и выполненного подбора.',
      },
      {
        id: 'faq-deposit-included',
        q: 'Что входит в подбор?',
        a: 'Консультация, проработка вариантов, презентация туров, рекомендации по страховкам и сопровождение при бронировании.',
      },
    ],
  },
  {
    title: 'Круизы с сопровождением',
    items: [
      {
        id: 'faq-cruise-personal',
        q: 'Вы сопровождаете группы лично?',
        a: 'Да, все групповые круизы проходят с моим личным сопровождением.',
      },
      {
        id: 'faq-cruise-size',
        q: 'Сколько человек в группе?',
        a: 'Обычно 20\u201350 человек.',
      },
      {
        id: 'faq-cruise-solo',
        q: 'Можно поехать одному?',
        a: 'Да, многие путешествуют соло или парами.',
      },
      {
        id: 'faq-cruise-excursions',
        q: 'Организуются ли экскурсии?',
        a: 'Да, с русскоязычными гидами и продуманной логистикой.',
      },
      {
        id: 'faq-cruise-cabin',
        q: 'Помогаете с выбором каюты?',
        a: 'Да, с уч\u0451том лайнера, палубы и бюджета.',
      },
    ],
  },
  {
    title: 'Индивидуальные туры и отели',
    items: [
      {
        id: 'faq-ind-only-cruise',
        q: 'Вы прода\u0451те только круизы и Мальдивы?',
        a: 'Нет, подбираю отдых по всему миру: Европа, Азия, Карибы и др.',
      },
      {
        id: 'faq-ind-hotel',
        q: 'Можно подобрать только отель?',
        a: 'Да, в составе пакетного тура.',
      },
      {
        id: 'faq-ind-inspect',
        q: 'Вы лично знаете отели?',
        a: 'Многие отели посещаю в рамках инспекций и могу рекомендовать проверенные варианты.',
      },
      {
        id: 'faq-ind-romantic',
        q: 'Подбираете романтические путешествия?',
        a: 'Да, включая honeymoon и приватные резорты.',
      },
    ],
  },
  {
    title: 'Семейный отдых',
    items: [
      {
        id: 'faq-fam-kids',
        q: 'Вы подбираете отдых для семей с детьми?',
        a: 'Да, это отдельное направление.',
      },
      {
        id: 'faq-fam-what',
        q: 'На что обращаете внимание?',
        a: 'Детская инфраструктура, безопасность, питание, удобство перел\u0451та и размещения.',
      },
      {
        id: 'faq-fam-cruise',
        q: 'Можно ли в круиз с детьми?',
        a: 'Да, лайнеры предлагают семейные каюты и детские зоны.',
      },
    ],
  },
  {
    title: 'Бронирование и документы',
    items: [
      {
        id: 'faq-book-flights',
        q: 'Вы прода\u0451те авиабилеты отдельно?',
        a: 'Нет. Бронирование осуществляется только в составе пакетных туров.',
      },
      {
        id: 'faq-book-how',
        q: 'Как оформляется бронирование?',
        a: 'Официально через туроператоров Германии с полным пакетом документов.',
      },
      {
        id: 'faq-book-insurance',
        q: 'Помогаете со страховками?',
        a: 'Да, по желанию клиента подбираю страховые решения.',
      },
      {
        id: 'faq-book-support',
        q: 'Вы на связи во время поездки?',
        a: 'Да, сопровождаю клиентов до, во время и после путешествия.',
      },
      {
        id: 'faq-book-complaint',
        q: 'Помогаете при рекламациях?',
        a: 'Да, консультирую по дальнейшим действиям и взаимодействию с туроператором.',
      },
    ],
  },
  {
    title: 'Общие вопросы',
    items: [
      {
        id: 'faq-gen-online',
        q: 'Вы работаете только онлайн?',
        a: 'Нет, работаю онлайн и офлайн. Есть туристическое бюро в Германии.',
      },
      {
        id: 'faq-gen-who',
        q: 'С кем вы работаете?',
        a: 'В основном с русскоязычными клиентами, проживающими в Германии и Европе.',
      },
      {
        id: 'faq-gen-free',
        q: 'Можно сначала задать вопросы?',
        a: 'Да, первичная связь возможна до начала персонального подбора.',
      },
    ],
  },
];

// Left column: first 2 categories, Right column: remaining 4 + CTA
const leftGroups = faqData.slice(0, 2);
const rightGroups = faqData.slice(2);

function AccordionItem({
  item,
  isOpen,
  toggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      id={item.id}
      className={`bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-2 overflow-hidden transition-colors duration-300 ${
        isOpen ? 'border-l-[3px] border-gold' : 'border-l-[3px] border-transparent'
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
        aria-controls={`${item.id}-answer`}
      >
        <span className="text-base font-semibold text-ocean-deep leading-snug">{item.q}</span>
        <span className="shrink-0 w-5 h-5 relative">
          {/* Plus/minus icon */}
          <span className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gold -translate-x-1/2 -translate-y-1/2 rounded-sm" />
          <span
            className={`absolute top-1/2 left-1/2 w-0.5 h-4 bg-gold -translate-x-1/2 -translate-y-1/2 rounded-sm transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
        </span>
      </button>
      <div
        id={`${item.id}-answer`}
        className={`overflow-hidden transition-all duration-350 ${isOpen ? 'max-h-40 pb-1' : 'max-h-0'}`}
        role="region"
      >
        <div className="px-5 pb-4">
          <div className="h-px bg-gold/20 mb-3" />
          <p className="text-[15px] leading-[1.7] text-gray-500">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQColumn({
  groups,
  openId,
  toggle,
  startIndex,
}: {
  groups: FAQCategory[];
  openId: string | null;
  toggle: (id: string) => void;
  startIndex: number;
}) {
  return (
    <div>
      {groups.map((cat, ci) => (
        <div key={cat.title}>
          <div
            className={`text-[13px] font-semibold uppercase tracking-[2px] text-gold mb-4 ${
              ci + startIndex > 0 && ci > 0 ? 'mt-8' : ''
            }`}
          >
            {cat.title}
          </div>
          {cat.items.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggle={() => toggle(item.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  // Deep-link support
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('faq-')) {
      setOpenId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, []);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#F8F6F1]" aria-labelledby="faq-heading">
      <div className="max-w-[880px] mx-auto px-6">
        <SectionHeader label="Вопросы и ответы" title="Ответы на ваши вопросы" />

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 items-start">
            {/* Left column: Подбор и депозит + Круизы с сопровождением */}
            <FAQColumn
              groups={leftGroups}
              openId={openId}
              toggle={toggle}
              startIndex={0}
            />

            {/* Right column: remaining groups + CTA */}
            <div>
              <FAQColumn
                groups={rightGroups}
                openId={openId}
                toggle={toggle}
                startIndex={2}
              />

              {/* CTA block */}
              <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-7 text-center mt-8">
                <p className="text-[15px] font-semibold text-ocean-deep mb-4">Не нашли ответ?</p>
                <WhatsAppButton>Написать в WhatsApp</WhatsAppButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
