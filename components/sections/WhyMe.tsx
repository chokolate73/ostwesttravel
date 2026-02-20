import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const values = [
  {
    emoji: '\u{1F48E}',
    title: 'Персональный подбор',
    text: 'Не массовая рассылка из системы — индивидуальная работа под ваш запрос',
  },
  {
    emoji: '\u{1F50D}',
    title: 'Проверенные варианты',
    text: 'Лично инспектирую отели — рекомендую только то, в чём уверена',
  },
  {
    emoji: '\u23F3',
    title: 'Экономия времени',
    text: 'Вы отдыхаете — я работаю. Всё от подбора до бронирования беру на себя',
  },
  {
    emoji: '\u{1F4AC}',
    title: 'Поддержка 24/7',
    text: 'На связи до, во время и после поездки — помогу с любым вопросом',
  },
  {
    emoji: '\u{1F1E9}\u{1F1EA}',
    title: 'Русскоязычный комфорт',
    text: 'Всё общение на вашем языке — без языковых барьеров и недоразумений',
  },
  {
    emoji: '\u{1F3C6}',
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
                <span className="text-4xl mb-4 block" role="img">{v.emoji}</span>
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
