import ScrollReveal from '@/components/ui/ScrollReveal';
import { Lang } from '@/lib/i18n';

const t = {
  de: {
    label: 'So starten wir',
    heading: 'Für neue Kunden beginnt die intensive, persönliche Betreuung mit einem Deposit in Höhe von\u00a069,90\u00a0\u20ac.',
    paragraph1: 'Diese Gebühr ermöglicht mir, mich voll und ganz Ihrem Wunsch zu widmen: Ich prüfe aktuelle Preise bei den Veranstaltern, prüfe Verfügbarkeiten und Aktionen und stelle die besten Reisevarianten genau auf Ihre Termine, Ihr Budget und Ihre Wünsche ab.',
    bold: 'Wenn Sie eine Reise buchen – wird die Kaution vollständig erstattet.',
    notBook: 'Entscheiden Sie sich gegen eine Buchung, bleibt die Anzahlung als faire Vergütung für die intensive Beratung und den Zeitaufwand.',
    regular: 'Stammkunden benötigen keine Anzahlung.',
    link: 'Mehr zu den Bedingungen',
  },
  ru: {
    label: 'Персональный подбор',
    heading: 'Для новых клиентов работа начинается с\u00a0возвратного депозита\u00a069,90\u00a0\u20ac',
    paragraph1: 'Это позволяет мне уделить вашему запросу максимум внимания: проверить актуальные цены у\u00a0туроператоров, наличие мест, акции и\u00a0подобрать лучшие варианты под ваши даты, бюджет и\u00a0пожелания.',
    bold: 'Если вы бронируете тур - депозит полностью возвращается.',
    notBook: 'Если вы решаете не\u00a0бронировать, депозит остаётся как оплата персонального подбора и\u00a0затраченного времени.',
    regular: 'Для постоянных клиентов депозит не\u00a0требуется.',
    link: 'Подробнее об условиях',
  },
};

export default function Deposit({ lang = 'ru' }: { lang?: Lang }) {
  const text = t[lang];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm border border-gold/20">
            <div className="flex items-start gap-4">
              <div className="hidden md:flex w-10 h-10 rounded-full bg-gold/10 items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-gold font-medium uppercase tracking-wider text-sm">
                    {text.label}
                  </span>
                  <div className="h-px w-8 bg-gold" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-deep mb-3">{text.heading}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {text.paragraph1}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>{text.bold}</strong>
                  <br />
                  {text.notBook}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {text.regular}
                </p>
                <a
                  href="#faq-deposit-why"
                  className="text-gold hover:text-gold-dark font-medium text-sm inline-flex items-center gap-1 transition-colors"
                >
                  {text.link}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
