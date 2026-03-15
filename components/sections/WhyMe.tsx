import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const values = [
  {
    icon: (
      /* Anchor - персональный подбор */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <line x1="12" y1="7" x2="12" y2="21" />
        <path d="M5 12H2a10 10 0 0020 0h-3" />
      </svg>
    ),
    title: 'Персональный подбор',
    text: 'Не отправляю вам 20 случайных вариантов. Я слушаю, уточняю и подбираю под ваш ритм жизни, бюджет и ожидания',
  },
  {
    icon: (
      /* Ship - проверенные варианты */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15l2-6h12l2 6" />
        <path d="M9 9V5h6v4" />
        <line x1="12" y1="5" x2="12" y2="2" />
        <path d="M2 19c1.5-1.5 3-2 4.5-2s3 .5 4.5 2c1.5-1.5 3-2 4.5-2s3 .5 4.5 2" />
      </svg>
    ),
    title: 'Проверенные отели и круизы',
    text: 'Рекомендую только то, в чём уверена. Знаю нюансы - где хорошие каюты, где шумно, где действительно стоит своих денег',
  },
  {
    icon: (
      /* Clock with wave - экономия времени */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="7" />
        <polyline points="12 6 12 10 15 12" />
        <path d="M3 20c2-1.5 4-2 6-1s4 .5 6-1 4-2 6-1" />
      </svg>
    ),
    title: 'Экономия вашего времени',
    text: 'Вы не тратите вечера на сравнение сайтов и форумов. Я беру на себя подбор, проверку и бронирование',
  },
  {
    icon: (
      /* Headset - поддержка 24/7 */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13a8 8 0 0116 0" />
        <path d="M4 13v3a2 2 0 002 2h1v-5H4z" />
        <path d="M20 13v3a2 2 0 01-2 2h-1v-5h3z" />
        <path d="M18 18a2 2 0 01-2 2h-3" />
        <circle cx="12" cy="20" r="1" />
      </svg>
    ),
    title: 'Поддержка 24/7',
    text: 'До, во время и после поездки. Если что-то меняется - вы не остаётесь один на один с авиакомпанией или отелем. Я всегда на связи',
  },
  {
    icon: (
      /* Globe - русскоязычный комфорт */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M5 7h14M5 17h14" />
      </svg>
    ),
    title: 'Комфортное общение',
    text: 'Без языковых барьеров и сложных формулировок. Объясняю просто и по делу',
  },
  {
    icon: (
      /* Captain wheel - опыт с 2008 года */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="3" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="21" />
        <line x1="3" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="21" y2="12" />
        <line x1="5.64" y1="5.64" x2="9.88" y2="9.88" />
        <line x1="14.12" y1="14.12" x2="18.36" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="14.12" y2="9.88" />
        <line x1="9.88" y1="14.12" x2="5.64" y2="18.36" />
      </svg>
    ),
    title: 'Опыт с 2007 года',
    text: 'Знаю, как работает рынок изнутри. И где могут быть подводные камни',
  },
];

export default function WhyMe() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-[#F8F6F1]">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Преимущества"
          title="Что вы получаете, работая со мной"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="group bg-white rounded-xl border-l-[3px] border-gold p-5 sm:p-7 h-full shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(27,42,74,0.10),0_8px_16px_rgba(27,42,74,0.06)]">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gold/[0.15] flex items-center justify-center mb-5 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  {v.icon}
                </div>

                <h3 className="text-lg font-bold text-ocean-deep mb-2 font-serif">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {v.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center bg-white rounded-xl py-5 px-2 sm:px-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <svg className="w-6 h-6 text-gold mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-ocean-deep leading-tight">Официально<br />в&nbsp;Германии<br />и&nbsp;по&nbsp;Европе</span>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-xl py-5 px-2 sm:px-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <svg className="w-6 h-6 text-gold mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="13" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-ocean-deep leading-tight">Работаю&nbsp;через<br />туроператоров</span>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-xl py-5 px-2 sm:px-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <svg className="w-6 h-6 text-gold mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21a6.5 6.5 0 0113 0" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-ocean-deep leading-tight">Личное<br />сопровождение</span>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-16 md:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,80 L0,80 Z" fill="#EDE9E0" />
          <path d="M0,48 C240,72 480,24 720,48 C960,72 1200,24 1440,48 L1440,80 L0,80 Z" fill="#E8E3D9" />
        </svg>
      </div>
    </section>
  );
}
