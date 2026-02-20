import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const values = [
  {
    icon: (
      /* Anchor — персональный подбор */
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <line x1="12" y1="7" x2="12" y2="21" />
        <path d="M5 12H2a10 10 0 0020 0h-3" />
      </svg>
    ),
    title: 'Персональный подбор',
    text: 'Не массовая рассылка из системы — индивидуальная работа под ваш запрос',
    accent: false,
  },
  {
    icon: (
      /* Ship — проверенные варианты */
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20l1.5-1.5C5 17 7 17 8.5 18.5 10 17 12 17 13.5 18.5 15 17 17 17 18.5 18.5 20 17 22 17 22 20" />
        <path d="M4 16l1-5h14l1 5" />
        <path d="M9 11V6h6v5" />
        <line x1="12" y1="6" x2="12" y2="3" />
      </svg>
    ),
    title: 'Проверенные варианты',
    text: 'Лично инспектирую отели — рекомендую только то, в чём уверена',
    accent: true,
  },
  {
    icon: (
      /* Compass — экономия времени */
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" opacity="0.15" stroke="currentColor" />
      </svg>
    ),
    title: 'Экономия времени',
    text: 'Вы отдыхаете — я работаю. Всё от подбора до бронирования беру на себя',
    accent: false,
  },
  {
    icon: (
      /* Lifebuoy — поддержка 24/7 */
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
      </svg>
    ),
    title: 'Поддержка 24/7',
    text: 'На связи до, во время и после поездки — помогу с любым вопросом',
    accent: false,
  },
  {
    icon: (
      /* Globe — русскоязычный комфорт */
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M4.5 7.5h15M4.5 16.5h15" />
      </svg>
    ),
    title: 'Русскоязычный комфорт',
    text: 'Всё общение на вашем языке — без языковых барьеров и недоразумений',
    accent: true,
  },
  {
    icon: (
      /* Captain wheel — опыт с 2008 года */
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
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
    title: 'Опыт с 2008 года',
    text: 'Знаю нюансы изнутри — от тонкостей бронирования до особенностей каждого лайнера',
    accent: false,
  },
];

export default function WhyMe() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#F8F6F1]">
      {/* Wave background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,100 1440,80 L1440,200 L0,200 Z" fill="#0C2340" />
        </svg>
        <svg className="absolute top-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,120 C360,40 720,200 1080,120 C1260,80 1380,100 1440,120 L1440,0 L0,0 Z" fill="#D4AF37" />
        </svg>
      </div>

      {/* Subtle wave line accent */}
      <div className="absolute left-0 right-0 top-12 pointer-events-none opacity-[0.07]">
        <svg className="w-full h-12" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,24 Q180,0 360,24 T720,24 T1080,24 T1440,24" fill="none" stroke="#D4AF37" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Преимущества"
          title="Почему со мной спокойно"
        />

        {/* Staggered grid: row 1 = 3 cards, row 2 = offset 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
          {values.map((v, i) => {
            // On desktop (lg): cards span 2 cols each, row 2 offset by 1 col
            const isSecondRow = i >= 3;
            const colSpan = 'lg:col-span-2';
            const colStart = isSecondRow && i === 3 ? 'lg:col-start-2' : '';

            return (
              <ScrollReveal
                key={v.title}
                delay={i * 100}
                className={`${colSpan} ${colStart}`}
              >
                <div
                  className={`
                    group relative rounded-2xl p-7 h-full
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-xl
                    ${v.accent
                      ? 'bg-ocean-deep text-white shadow-lg shadow-ocean-deep/20'
                      : 'bg-white shadow-sm hover:shadow-gold/10'
                    }
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      w-14 h-14 rounded-xl flex items-center justify-center mb-5
                      transition-all duration-300
                      ${v.accent
                        ? 'bg-gold/20 text-gold group-hover:bg-gold/30'
                        : 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white'
                      }
                    `}
                  >
                    {v.icon}
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      v.accent ? 'text-white' : 'text-ocean-deep'
                    }`}
                  >
                    {v.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      v.accent ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {v.text}
                  </p>

                  {/* Subtle corner decoration on accent cards */}
                  {v.accent && (
                    <div className="absolute top-4 right-4 opacity-[0.06]">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <line x1="24" y1="2" x2="24" y2="16" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="24" y1="32" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="2" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="32" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-8 md:h-12" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,24 Q360,48 720,24 T1440,24 L1440,48 L0,48 Z" fill="white" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
