"use client";

import { useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CTAButton from "@/components/ui/CTAButton";
import { Lang } from "@/lib/i18n";

type FAQItem = { q: string; a: string; id: string };
type FAQCategory = { title: string; items: FAQItem[] };

const faqDataRu: FAQCategory[] = [
  {
    title: "Подбор и депозит",
    items: [
      {
        id: "faq-deposit-why",
        q: "Почему подбор путешествия осуществляется с депозитом?",
        a: "Я вникаю в каждый запрос лично - изучаю варианты, проверяю отели, готовлю подборку. Депозит просто подтверждает, что мы начинаем работать вместе.",
      },
      {
        id: "faq-deposit-amount",
        q: "Сколько составляет депозит?",
        a: "69,90 \u20ac для первого обращения.",
      },
      {
        id: "faq-deposit-return",
        q: "Депозит возвращается?",
        a: "Да! Если бронируете тур - депозит возвращается полностью.",
      },
      {
        id: "faq-deposit-how",
        q: "Как происходит возврат?",
        a: "Тем же способом, как оплачивали - PayPal, перевод и т.д.",
      },
      {
        id: "faq-deposit-no-book",
        q: "Если я решу не бронировать тур?",
        a: "Тогда депозит оста\u0451тся как оплата за мою работу по подбору - это честно.",
      },
      {
        id: "faq-deposit-included",
        q: "Что входит в подбор?",
        a: "Вс\u0451 от А до Я: консультация, подборка вариантов, презентация, советы по страховке и помощь с бронированием.",
      },
    ],
  },
  {
    title: "Круизы с сопровождением",
    items: [
      {
        id: "faq-cruise-personal",
        q: "Вы сопровождаете группы лично?",
        a: "Да, я лично на борту с группой - от посадки до возвращения.",
      },
      {
        id: "faq-cruise-size",
        q: "Сколько человек в группе?",
        a: "Обычно 20\u201350 человек - уютная компания.",
      },
      {
        id: "faq-cruise-solo",
        q: "Можно поехать одному?",
        a: "Конечно! Многие едут соло или парой - быстро знакомятся в группе.",
      },
      {
        id: "faq-cruise-excursions",
        q: "Организуются ли экскурсии?",
        a: "Да, с русскоязычными гидами - вс\u0451 продумано, просто наслаждайтесь.",
      },
      {
        id: "faq-cruise-cabin",
        q: "Помогаете с выбором каюты?",
        a: "Конечно - подберу лучшую каюту под ваш бюджет и пожелания.",
      },
    ],
  },
  {
    title: "Индивидуальные туры и отели",
    items: [
      {
        id: "faq-ind-only-cruise",
        q: "Вы прода\u0451те только круизы и Мальдивы?",
        a: "Нет, это просто мои любимые направления! Подбираю отдых по всему миру - Европа, Азия, Карибы и не только.",
      },
      {
        id: "faq-ind-hotel",
        q: "Можно подобрать только отель?",
        a: "Да, в рамках пакетного тура - так получается выгоднее и надёжнее.",
      },
      {
        id: "faq-ind-inspect",
        q: "Вы лично знаете отели?",
        a: "Многие проверяла лично! Поэтому рекомендую только то, в чём уверена.",
      },
      {
        id: "faq-ind-romantic",
        q: "Подбираете романтические путешествия?",
        a: "Да - медовый месяц, годовщины, приватные резорты. Люблю такие запросы!",
      },
    ],
  },
  {
    title: "Семейный отдых",
    items: [
      {
        id: "faq-fam-kids",
        q: "Вы подбираете отдых для семей с детьми?",
        a: "Да, это одно из моих любимых направлений - сама понимаю, как это важно.",
      },
      {
        id: "faq-fam-what",
        q: "На что обращаете внимание?",
        a: "Чтобы детям было интересно, а родителям спокойно: детские клубы, питание, удобный перел\u0451т, безопасность.",
      },
      {
        id: "faq-fam-cruise",
        q: "Можно ли в круиз с детьми?",
        a: "Ещ\u0451 как! На лайнерах есть семейные каюты, детские клубы, бассейны - дети в восторге.",
      },
    ],
  },
  {
    title: "Бронирование и документы",
    items: [
      {
        id: "faq-book-flights",
        q: "Вы прода\u0451те авиабилеты отдельно?",
        a: "Нет, только в составе пакетного тура - так вы защищены и вс\u0451 включено.",
      },
      {
        id: "faq-book-how",
        q: "Как оформляется бронирование?",
        a: "Официально, через немецких туроператоров - вы получаете полный пакет документов и страховку.",
      },
      {
        id: "faq-book-insurance",
        q: "Помогаете со страховками?",
        a: "Да, подберу подходящую страховку - чтобы вы путешествовали спокойно.",
      },
      {
        id: "faq-book-support",
        q: "Вы на связи во время поездки?",
        a: "Да! Я на связи до, во время и после поездки. Если что-то пойд\u0451т не так - решим вместе.",
      },
      {
        id: "faq-book-complaint",
        q: "Помогаете при рекламациях?",
        a: "Конечно. Если что-то пошло не так - помогу разобраться и решить вопрос с туроператором.",
      },
    ],
  },
  {
    title: "Общие вопросы",
    items: [
      {
        id: "faq-gen-online",
        q: "Вы работаете только онлайн?",
        a: "Нет, у меня есть офис в Германии - можно встретиться лично. Но большинство вопросов удобно решаем онлайн.",
      },
      {
        id: "faq-gen-who",
        q: "С кем вы работаете?",
        a: "С русскоязычными туристами в Германии и по всей Европе. Общаемся на русском - никаких языковых барьеров.",
      },
      {
        id: "faq-gen-free",
        q: "Можно сначала задать вопросы?",
        a: "Конечно! Напишите в WhatsApp, спросите что угодно - ни к чему не обязывает.",
      },
    ],
  },
];

const faqDataDe: FAQCategory[] = [
  {
    title: "Reiseplanung & Anzahlung",
    items: [
      {
        id: "faq-deposit-why",
        q: "Warum ist für die persönliche Reiseplanung eine Anzahlung erforderlich?",
        a: "Jede Anfrage bearbeite ich persönlich – ich recherchiere Varianten, prüfe Hotels und erstelle eine maßgeschneiderte Auswahl. Die Anzahlung bestätigt einfach, dass wir gemeinsam starten.",
      },
      {
        id: "faq-deposit-amount",
        q: "Wie hoch ist die Anzahlung?",
        a: "69,90 € bei der ersten Anfrage.",
      },
      {
        id: "faq-deposit-return",
        q: "Wird die Anzahlung zurückerstattet?",
        a: "Ja – bei Buchung der Reise wird sie vollständig zurückgezahlt.",
      },
      {
        id: "faq-deposit-how",
        q: "Wie erfolgt die Rückerstattung?",
        a: "Auf demselben Weg wie die Zahlung (PayPal, Banküberweisung etc.).",
      },
      {
        id: "faq-deposit-no-book",
        q: "Was passiert, wenn ich mich gegen eine Buchung entscheide?",
        a: "Die Anzahlung bleibt als faire Vergütung für die umfangreiche Beratungsleistung.",
      },
      {
        id: "faq-deposit-included",
        q: "Was ist alles in der Reiseplanung enthalten?",
        a: "Von A bis Z: ausführliche Beratung, sorgfältige Auswahl passender Reisen, übersichtliche Präsentation, Versicherungstipps und Unterstützung bei der Buchung.",
      },
    ],
  },
  {
    title: "Reisen mit Begleitung (Gruppenreisen & Kreuzfahrten)",
    items: [
      {
        id: "faq-cruise-personal",
        q: "Begleiten Sie die Gruppen persönlich?",
        a: "Ja – ich bin von der Einschiffung bis zur Rückreise persönlich an Bord und vor Ort.",
      },
      {
        id: "faq-cruise-size",
        q: "Wie groß sind die Gruppen?",
        a: "In der Regel 20–50 Personen – eine überschaubare und angenehme Gesellschaft.",
      },
      {
        id: "faq-cruise-solo",
        q: "Kann man auch alleine oder zu zweit mitfahren?",
        a: "Selbstverständlich! Viele reisen solo oder als Paar und finden schnell Anschluss.",
      },
      {
        id: "faq-cruise-excursions",
        q: "Werden Ausflüge organisiert?",
        a: "Ja – mit deutsch- oder russischsprachigen Reiseleitern. Alles ist bestens vorbereitet, Sie müssen nur genießen.",
      },
      {
        id: "faq-cruise-cabin",
        q: "Helfen Sie bei der Kabinenwahl?",
        a: "Natürlich – ich empfehle die optimale Kabine entsprechend Ihrem Budget und Ihren Vorlieben.",
      },
    ],
  },
  {
    title: "Individuelle Reisen & Hotels",
    items: [
      {
        id: "faq-ind-only-cruise",
        q: "Bieten Sie nur Kreuzfahrten und Malediven an?",
        a: "Nein, das sind lediglich meine persönlichen Lieblingsziele. Ich plane Urlaube weltweit – Europa, Asien, Karibik und viele weitere Destinationen.",
      },
      {
        id: "faq-ind-hotel",
        q: "Können Sie auch nur ein Hotel buchen?",
        a: "Ja – im Rahmen einer Pauschalreise. So erhalten Sie meist bessere Konditionen und volle Absicherung.",
      },
      {
        id: "faq-ind-inspect",
        q: "Kennen Sie die Hotels persönlich?",
        a: "Viele habe ich selbst besucht und geprüft. Deshalb empfehle ich ausschließlich Unterkünfte, von denen ich wirklich überzeugt bin.",
      },
      {
        id: "faq-ind-romantic",
        q: "Planen Sie auch romantische Reisen?",
        a: "Sehr gerne! Flitterwochen, Jubiläumsreisen, exklusive Resorts – solche Anfragen liebe ich besonders.",
      },
    ],
  },
  {
    title: "Familienurlaub",
    items: [
      {
        id: "faq-fam-kids",
        q: "Bieten Sie auch Reisen für Familien mit Kindern an?",
        a: "Ja, das ist eines meiner liebsten Themen. Als Mutter weiß genau, worauf es ankommt.",
      },
      {
        id: "faq-fam-what",
        q: "Worauf achten Sie besonders?",
        a: "Kinder sollen Spaß haben, Eltern entspannt sein: Kinderclubs, gutes Familienessen, bequeme Anreise und höchste Sicherheitsstandards.",
      },
      {
        id: "faq-fam-cruise",
        q: "Kann man mit Kindern auch auf Kreuzfahrt gehen?",
        a: "Absolut! Moderne Schiffe bieten Familienkabinen, Kinderclubs, Pools, vielseitige Unterhaltung und mehr.",
      },
    ],
  },
  {
    title: "Buchung & Unterlagen",
    items: [
      {
        id: "faq-book-flights",
        q: "Verkaufen Sie auch einzelne Flugtickets?",
        a: "Nein – nur im Rahmen eines Pauschalpakets. So sind Sie rundum abgesichert und alles ist inklusive.",
      },
      {
        id: "faq-book-how",
        q: "Wie läuft die Buchung ab?",
        a: "Offiziell über deutsche Reiseveranstalter. Sie erhalten den kompletten Buchungsunterlagenordner inklusive Reiseschutz.",
      },
      {
        id: "faq-book-insurance",
        q: "Helfen Sie bei der Versicherung?",
        a: "Selbstverständlich. Ich empfehle die passende Reiserücktritts- und Auslandskrankenversicherung, damit Sie sorgenfrei reisen können.",
      },
      {
        id: "faq-book-support",
        q: "Sind Sie während der Reise erreichbar?",
        a: "Ja – vor, während und nach der Reise. Sollte etwas nicht wie geplant laufen, kümmere ich mich direkt um eine Lösung mit dem Veranstalter.",
      },
      {
        id: "faq-book-complaint",
        q: "Unterstützen Sie bei Reklamationen?",
        a: "Natürlich. Falls etwas nicht stimmt, helfe ich Ihnen, den Sachverhalt zu klären und die Angelegenheit mit dem Veranstalter zu regeln.",
      },
    ],
  },
  {
    title: "Allgemeine Fragen",
    items: [
      {
        id: "faq-gen-online",
        q: "Arbeiten Sie nur online?",
        a: "Nein – ich habe ein Büro in Deutschland und biete auch persönliche Termine an. Die meisten Anfragen lassen sich jedoch sehr gut online klären.",
      },
      {
        id: "faq-gen-who",
        q: "Welche Sprachen sprechen Sie – und gibt es darauf basierende Spezialisierungen?",
        a: "Ich berate Sie auf Deutsch, Russisch und Englisch – ich arbeite häufig mit internationalen Partnern und begleite insbesondere auch russischsprachige Gruppen. Gleichzeitig gilt: Wir finden immer eine gemeinsame Sprache – klare Kommunikation und gegenseitiges Verständnis stehen für mich an erster Stelle.",
      },
      {
        id: "faq-gen-free",
        q: "Kann ich zuerst einfach Fragen stellen?",
        a: "Selbstverständlich! Schreiben Sie mir jederzeit über WhatsApp. Es entstehen keinerlei Verpflichtungen.",
      },
    ],
  },
];

const t = {
  de: {
    sectionTitle: "Häufig gestellte Fragen",
    whatsappButton: "Jetzt schreiben",
    ctaButton: "Reise planen",
  },
  ru: {
    sectionTitle: "Часто задаваемые вопросы",
    whatsappButton: "Написать сейчас",
    ctaButton: "Подобрать путешествие",
  },
};

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

export default function FAQ({ lang = 'ru' }: { lang?: Lang }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());

  const faqData = lang === 'de' ? faqDataDe : faqDataRu;
  const text = t[lang];

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
        <SectionHeader label="FAQ" title={text.sectionTitle} headingId="faq-heading" />

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
            <WhatsAppButton className="w-full sm:w-auto justify-center">{text.whatsappButton}</WhatsAppButton>
            <CTAButton href="#process" className="w-full sm:w-auto justify-center">{text.ctaButton}</CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
