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
    title: "Auswahl und Kaution",
    items: [
      {
        id: "faq-deposit-why",
        q: "Warum wird die Reiseauswahl mit einer Kaution durchgeführt?",
        a: "Ich gehe persönlich auf jede Anfrage ein – prüfe Optionen, überprüfe Hotels, bereite eine Auswahl vor. Die Kaution bestätigt einfach, dass wir zusammen arbeiten.",
      },
      {
        id: "faq-deposit-amount",
        q: "Wie hoch ist die Kaution?",
        a: "69,90 € für die erste Anfrage.",
      },
      {
        id: "faq-deposit-return",
        q: "Wird die Kaution erstattet?",
        a: "Ja! Wenn Sie eine Reise buchen – wird die Kaution vollständig erstattet.",
      },
      {
        id: "faq-deposit-how",
        q: "Wie erfolgt die Erstattung?",
        a: "Auf demselben Weg, wie Sie bezahlt haben – PayPal, Überweisung usw.",
      },
      {
        id: "faq-deposit-no-book",
        q: "Was, wenn ich keine Reise buche?",
        a: "Dann bleibt die Kaution als Bezahlung für meine Auswahlarbeit – das ist fair.",
      },
      {
        id: "faq-deposit-included",
        q: "Was ist in der Auswahl enthalten?",
        a: "Alles von A bis Z: Beratung, Optionsauswahl, Präsentation, Versicherungsberatung und Buchungshilfe.",
      },
    ],
  },
  {
    title: "Begleitete Kreuzfahrten",
    items: [
      {
        id: "faq-cruise-personal",
        q: "Begleiten Sie die Gruppen persönlich?",
        a: "Ja, ich bin persönlich an Bord mit der Gruppe – von der Einschiffung bis zur Rückkehr.",
      },
      {
        id: "faq-cruise-size",
        q: "Wie viele Personen in der Gruppe?",
        a: "Normalerweise 20–50 Personen – eine gemütliche Gesellschaft.",
      },
      {
        id: "faq-cruise-solo",
        q: "Kann man alleine fahren?",
        a: "Natürlich! Viele reisen solo oder zu zweit – man findet schnell Anschluss in der Gruppe.",
      },
      {
        id: "faq-cruise-excursions",
        q: "Werden Ausflüge organisiert?",
        a: "Ja, mit deutschsprachigen Guides – alles durchdacht, genießen Sie einfach.",
      },
      {
        id: "faq-cruise-cabin",
        q: "Helfen Sie bei der Kabinenauswahl?",
        a: "Selbstverständlich – ich wähle die beste Kabine für Ihr Budget und Ihre Wünsche.",
      },
    ],
  },
  {
    title: "Individuelle Reisen und Hotels",
    items: [
      {
        id: "faq-ind-only-cruise",
        q: "Verkaufen Sie nur Kreuzfahrten und Malediven?",
        a: "Nein, das sind einfach meine Lieblingsziele! Ich finde Urlaub weltweit – Europa, Asien, Karibik und mehr.",
      },
      {
        id: "faq-ind-hotel",
        q: "Kann man nur ein Hotel buchen?",
        a: "Ja, im Rahmen einer Pauschalreise – das ist günstiger und zuverlässiger.",
      },
      {
        id: "faq-ind-inspect",
        q: "Kennen Sie die Hotels persönlich?",
        a: "Viele habe ich persönlich geprüft! Deshalb empfehle ich nur das, wovon ich überzeugt bin.",
      },
      {
        id: "faq-ind-romantic",
        q: "Buchen Sie romantische Reisen?",
        a: "Ja – Flitterwochen, Jubiläen, private Resorts. Ich liebe solche Anfragen!",
      },
    ],
  },
  {
    title: "Familienurlaub",
    items: [
      {
        id: "faq-fam-kids",
        q: "Bieten Sie Urlaub für Familien mit Kindern an?",
        a: "Ja, das ist eines meiner Lieblingsthemen – ich verstehe selbst, wie wichtig das ist.",
      },
      {
        id: "faq-fam-what",
        q: "Worauf achten Sie?",
        a: "Dass es für Kinder interessant und für Eltern ruhig ist: Kinderclubs, Essen, bequemer Flug, Sicherheit.",
      },
      {
        id: "faq-fam-cruise",
        q: "Kann man mit Kindern auf Kreuzfahrt?",
        a: "Und wie! Auf den Schiffen gibt es Familienkabinen, Kinderclubs, Pools – Kinder sind begeistert.",
      },
    ],
  },
  {
    title: "Buchung und Dokumente",
    items: [
      {
        id: "faq-book-flights",
        q: "Verkaufen Sie Flugtickets einzeln?",
        a: "Nein, nur als Teil einer Pauschalreise – so sind Sie geschützt und alles ist inklusive.",
      },
      {
        id: "faq-book-how",
        q: "Wie wird die Buchung abgewickelt?",
        a: "Offiziell, über deutsche Reiseveranstalter – Sie erhalten das komplette Dokumentenpaket und Versicherung.",
      },
      {
        id: "faq-book-insurance",
        q: "Helfen Sie mit Versicherungen?",
        a: "Ja, ich finde die passende Versicherung – damit Sie sorglos reisen.",
      },
      {
        id: "faq-book-support",
        q: "Sind Sie während der Reise erreichbar?",
        a: "Ja! Ich bin vor, während und nach der Reise erreichbar. Wenn etwas schiefgeht – lösen wir es gemeinsam.",
      },
      {
        id: "faq-book-complaint",
        q: "Helfen Sie bei Reklamationen?",
        a: "Selbstverständlich. Wenn etwas nicht stimmt – ich helfe beim Klären mit dem Reiseveranstalter.",
      },
    ],
  },
  {
    title: "Allgemeine Fragen",
    items: [
      {
        id: "faq-gen-online",
        q: "Arbeiten Sie nur online?",
        a: "Nein, ich habe ein Büro in Deutschland – persönliche Treffen sind möglich. Aber die meisten Fragen klären wir bequem online.",
      },
      {
        id: "faq-gen-who",
        q: "Mit wem arbeiten Sie?",
        a: "Mit deutschsprachigen Touristen in Deutschland und ganz Europa. Wir kommunizieren auf Deutsch – keine Sprachbarrieren.",
      },
      {
        id: "faq-gen-free",
        q: "Kann man zuerst Fragen stellen?",
        a: "Natürlich! Schreiben Sie mir auf WhatsApp, fragen Sie alles – das verpflichtet zu nichts.",
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

export default function FAQ({ lang = 'de' }: { lang?: Lang }) {
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
            <CTAButton href="#contact" className="w-full sm:w-auto justify-center">{text.ctaButton}</CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
