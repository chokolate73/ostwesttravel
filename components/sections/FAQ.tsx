"use client";

import { useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CTAButton from "@/components/ui/CTAButton";

type FAQItem = { q: string; a: string; id: string };
type FAQCategory = { title: string; items: FAQItem[] };

const faqData: FAQCategory[] = [
  {
    title: "Подбор и депозит",
    items: [
      {
        id: "faq-deposit-why",
        q: "Почему подбор путешествия осуществляется с депозитом?",
        a: "Подбор проводится индивидуально: анализ запроса, проработка вариантов, проверка отелей и подготовка презентации. Депозит подтверждает начало персональной работы.",
      },
      {
        id: "faq-deposit-amount",
        q: "Сколько составляет депозит?",
        a: "69,90 \u20ac для новых клиентов.",
      },
      {
        id: "faq-deposit-return",
        q: "Депозит возвращается?",
        a: "Да. При бронировании тура депозит полностью возвращается клиенту.",
      },
      {
        id: "faq-deposit-how",
        q: "Как происходит возврат?",
        a: "Возврат осуществляется тем же способом оплаты, которым был внес\u0451н депозит (PayPal, банковский перевод и др.).",
      },
      {
        id: "faq-deposit-no-book",
        q: "Если я решу не бронировать тур?",
        a: "В этом случае депозит оста\u0451тся как оплата оказанной консультации и выполненного подбора.",
      },
      {
        id: "faq-deposit-included",
        q: "Что входит в подбор?",
        a: "Консультация, проработка вариантов, презентация туров, рекомендации по страховкам и сопровождение при бронировании.",
      },
    ],
  },
  {
    title: "Круизы с сопровождением",
    items: [
      {
        id: "faq-cruise-personal",
        q: "Вы сопровождаете группы лично?",
        a: "Да, все групповые круизы проходят с моим личным сопровождением.",
      },
      {
        id: "faq-cruise-size",
        q: "Сколько человек в группе?",
        a: "Обычно 20\u201350 человек.",
      },
      {
        id: "faq-cruise-solo",
        q: "Можно поехать одному?",
        a: "Да, многие путешествуют соло или парами.",
      },
      {
        id: "faq-cruise-excursions",
        q: "Организуются ли экскурсии?",
        a: "Да, с русскоязычными гидами и продуманной логистикой.",
      },
      {
        id: "faq-cruise-cabin",
        q: "Помогаете с выбором каюты?",
        a: "Да, с уч\u0451том лайнера, палубы и бюджета.",
      },
    ],
  },
  {
    title: "Индивидуальные туры и отели",
    items: [
      {
        id: "faq-ind-only-cruise",
        q: "Вы прода\u0451те только круизы и Мальдивы?",
        a: "Нет, подбираю отдых по всему миру: Европа, Азия, Карибы и др.",
      },
      {
        id: "faq-ind-hotel",
        q: "Можно подобрать только отель?",
        a: "Да, в составе пакетного тура.",
      },
      {
        id: "faq-ind-inspect",
        q: "Вы лично знаете отели?",
        a: "Многие отели посещаю в рамках инспекций и могу рекомендовать проверенные варианты.",
      },
      {
        id: "faq-ind-romantic",
        q: "Подбираете романтические путешествия?",
        a: "Да, включая honeymoon и приватные резорты.",
      },
    ],
  },
  {
    title: "Семейный отдых",
    items: [
      {
        id: "faq-fam-kids",
        q: "Вы подбираете отдых для семей с детьми?",
        a: "Да, это отдельное направление.",
      },
      {
        id: "faq-fam-what",
        q: "На что обращаете внимание?",
        a: "Детская инфраструктура, безопасность, питание, удобство перел\u0451та и размещения.",
      },
      {
        id: "faq-fam-cruise",
        q: "Можно ли в круиз с детьми?",
        a: "Да, лайнеры предлагают семейные каюты и детские зоны.",
      },
    ],
  },
  {
    title: "Бронирование и документы",
    items: [
      {
        id: "faq-book-flights",
        q: "Вы прода\u0451те авиабилеты отдельно?",
        a: "Нет. Бронирование осуществляется только в составе пакетных туров.",
      },
      {
        id: "faq-book-how",
        q: "Как оформляется бронирование?",
        a: "Официально через туроператоров Германии с полным пакетом документов.",
      },
      {
        id: "faq-book-insurance",
        q: "Помогаете со страховками?",
        a: "Да, по желанию клиента подбираю страховые решения.",
      },
      {
        id: "faq-book-support",
        q: "Вы на связи во время поездки?",
        a: "Да, сопровождаю клиентов до, во время и после путешествия.",
      },
      {
        id: "faq-book-complaint",
        q: "Помогаете при рекламациях?",
        a: "Да, консультирую по дальнейшим действиям и взаимодействию с туроператором.",
      },
    ],
  },
  {
    title: "Общие вопросы",
    items: [
      {
        id: "faq-gen-online",
        q: "Вы работаете только онлайн?",
        a: "Нет, работаю онлайн и офлайн. Есть туристическое бюро в Германии.",
      },
      {
        id: "faq-gen-who",
        q: "С кем вы работаете?",
        a: "В основном с русскоязычными клиентами, проживающими в Германии и Европе.",
      },
      {
        id: "faq-gen-free",
        q: "Можно сначала задать вопросы?",
        a: "Да, первичная связь возможна до начала персонального подбора.",
      },
    ],
  },
];

function FAQAccordionItem({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div id={item.id} className="border-b border-gray-100 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        aria-expanded={isOpen}
        aria-controls={`${item.id}-answer`}
      >
        <span className="font-medium text-ocean-deep text-sm md:text-base">{item.q}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-gold transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`${item.id}-answer`}
        className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        role="region"
        aria-labelledby={item.id}
      >
        <div className="overflow-hidden">
          <p className={`text-gray-500 text-sm leading-relaxed ${isOpen ? "pb-4" : ""}`}>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());

  // Deep-link support: open specific FAQ on hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith("faq-")) {
      setOpenItems(new Set([hash]));
      // Find and open the category containing this item
      const catIndex = faqData.findIndex((cat) => cat.items.some((item) => item.id === hash));
      if (catIndex !== -1) setOpenCategories(new Set([catIndex]));
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, []);

  function toggle(id: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleCategory(index: number) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section id="faq" className="py-20 md:py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader label="FAQ" title="Часто задаваемые вопросы" headingId="faq-heading" />

        <div className="space-y-4">
          {faqData.map((cat, ci) => {
            const isOpen = openCategories.has(ci);
            return (
              <ScrollReveal key={cat.title} delay={ci * 60}>
                <div className="bg-gray-50 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleCategory(ci)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-base font-semibold text-ocean-deep">{cat.title}</h3>
                    <svg
                      className={`w-5 h-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 md:px-6 md:pb-6">
                        {cat.items.map((item) => (
                          <FAQAccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openItems.has(item.id)}
                            toggle={() => toggle(item.id)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-10">
          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton>Написать в WhatsApp</WhatsAppButton>
            <CTAButton href="#contact">Заказать путешествие</CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
