import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    ),
    title: 'Персональный подбор',
    text: 'Не массовая рассылка из системы — индивидуальная работа под ваш запрос',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: 'Проверенные варианты',
    text: 'Лично инспектирую отели — рекомендую только то, в чём уверена',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Экономия времени',
    text: 'Вы отдыхаете — я работаю. Всё от подбора до бронирования беру на себя',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
    ),
    title: 'Поддержка 24/7',
    text: 'На связи до, во время и после поездки — помогу с любым вопросом',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>
    ),
    title: 'Русскоязычный комфорт',
    text: 'Всё общение на вашем языке — без языковых барьеров и недоразумений',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
    ),
    title: 'Опыт с 2008 года',
    text: 'Знаю нюансы изнутри — от тонкостей бронирования до особенностей каждого лайнера',
  },
];

export default function WhyMe() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Преимущества"
          title="Почему со мной спокойно"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-white mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-ocean-deep mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
