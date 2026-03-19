import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Lang } from '@/lib/i18n';

const t = {
  de: {
    label: 'Ablauf der Zusammenarbeit',
    title: 'So läuft unsere Zusammenarbeit ab',
    steps: [
      { num: 1, title: 'Sie teilen mir Ihren Reisewunsch mit', text: 'über das Kontaktformular auf der Website oder per WhatsApp melden.' },
      { num: 2, title: 'Ich kläre alle wichtigen Details', text: 'Gemeinsam besprechen wir Format des Urlaubs, Budgetrahmen, Reisedaten und alle weiteren Wünsche.' },
      { num: 3, title: 'Maßgeschneiderte Reisevorschläge', text: 'Ich erstelle Ihnen durchdachte, ehrliche Varianten – inklusive Vor- und Nachteilen sowie persönlichen Empfehlungen.' },
      { num: 4, title: 'Reservierung & Buchung', text: 'Sobald Sie sich entschieden haben, buchen wir Ihre Wunschreise offiziell beim Veranstalter.' },
      { num: 5, title: 'Persönliche Betreuung', text: 'Ich bin vor, während und nach der Reise für Sie erreichbar. Falls etwas nicht wie geplant läuft – Sie stehen nie allein da.' },
    ],
  },
  ru: {
    label: 'Этапы сотрудничества',
    title: 'Как строится работа',
    steps: [
      { num: 1, title: 'Вы рассказываете, куда хотите поехать', text: 'Через сайт или WhatsApp' },
      { num: 2, title: 'Я уточняю детали', text: 'Формат отдыха, бюджет, даты и прочие нюансы' },
      { num: 3, title: 'Подготовка вариантов', text: 'Предлагаю продуманные варианты с плюсами, минусами и честными комментариями' },
      { num: 4, title: 'Бронирование', text: 'Оформляем выбранный вариант через официального туроператора' },
      { num: 5, title: 'Поддержка в поездке', text: 'Я на связи - до, во время и после поездки. Если что-то меняется - вы не остаетесь одни' },
    ],
  },
};

export default function Process({ lang = 'ru' }: { lang?: Lang }) {
  const text = t[lang];

  return (
    <section id="process" className="py-20 md:py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-[1060px] mx-auto px-6">
        <SectionHeader
          label={text.label}
          title={text.title}
          headingId="process-heading"
        />

        {/* Desktop: horizontal timeline */}
        <div className="relative">
          {/* Connecting line - horizontal on md+, vertical on mobile */}
          <div className="
            absolute
            left-6 top-6 bottom-6 w-0.5 bg-gold/40
            md:left-[10%] md:right-[10%] md:top-6 md:bottom-auto md:h-0.5 md:w-auto
          " />

          <div className="
            flex flex-col gap-0
            md:grid md:grid-cols-5 md:gap-0
          ">
            {text.steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                {/* Mobile: horizontal row; Desktop: vertical column */}
                <div className="
                  flex items-start gap-5 pl-0 pb-9 last:pb-0
                  md:flex-col md:items-center md:text-center md:pb-0 md:gap-0
                ">
                  {/* Circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-[0_0_0_4px_rgba(212,175,55,0.2)] shrink-0 md:mb-5">
                    <span className="text-white font-bold text-lg leading-none">{step.num}</span>
                  </div>

                  {/* Text */}
                  <div className="pt-2.5 md:pt-0">
                    <h3 className="text-base font-bold text-ocean-deep mb-1.5 md:mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed md:max-w-[180px] md:mx-auto">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
