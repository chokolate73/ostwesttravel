import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const values = [
  {
    icon: (
      /* Anchor — персональный подбор */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <line x1="12" y1="7" x2="12" y2="21" />
        <path d="M5 12H2a10 10 0 0020 0h-3" />
      </svg>
    ),
    title: 'Персональный подбор',
    text: 'Не массовая рассылка из системы — индивидуальная работа под ваш запрос',
  },
  {
    icon: (
      /* Ship — проверенные варианты */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15l2-6h12l2 6" />
        <path d="M9 9V5h6v4" />
        <line x1="12" y1="5" x2="12" y2="2" />
        <path d="M2 19c1.5-1.5 3-2 4.5-2s3 .5 4.5 2c1.5-1.5 3-2 4.5-2s3 .5 4.5 2" />
      </svg>
    ),
    title: 'Проверенные варианты',
    text: 'Лично инспектирую отели — рекомендую только то, в чём уверена',
  },
  {
    icon: (
      /* Clock with wave — экономия времени */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="7" />
        <polyline points="12 6 12 10 15 12" />
        <path d="M3 20c2-1.5 4-2 6-1s4 .5 6-1 4-2 6-1" />
      </svg>
    ),
    title: 'Экономия времени',
    text: 'Вы отдыхаете — я работаю. Всё от подбора до бронирования беру на себя',
  },
  {
    icon: (
      /* Headset — поддержка 24/7 */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13a8 8 0 0116 0" />
        <path d="M4 13v3a2 2 0 002 2h1v-5H4z" />
        <path d="M20 13v3a2 2 0 01-2 2h-1v-5h3z" />
        <path d="M18 18a2 2 0 01-2 2h-3" />
        <circle cx="12" cy="20" r="1" />
      </svg>
    ),
    title: 'Поддержка 24/7',
    text: 'На связи до, во время и после поездки — помогу с любым вопросом',
  },
  {
    icon: (
      /* Globe — русскоязычный комфорт */
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M5 7h14M5 17h14" />
      </svg>
    ),
    title: 'Русскоязычный комфорт',
    text: 'Всё общение на вашем языке — без языковых барьеров и недоразумений',
  },
  {
    icon: (
      /* Captain wheel — опыт с 2008 года */
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
    title: 'Опыт с 2008 года',
    text: 'Знаю нюансы изнутри — от тонкостей бронирования до особенностей каждого лайнера',
  },
];

export default function WhyMe() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-[#F8F6F1]">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Преимущества"
          title="Почему со мной спокойно"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="group bg-white rounded-xl border-l-[3px] border-gold p-7 h-full shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(27,42,74,0.10),0_8px_16px_rgba(27,42,74,0.06)]">
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
