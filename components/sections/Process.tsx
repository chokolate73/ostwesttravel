import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const steps = [
  {
    num: 1,
    title: 'Оставляете запрос',
    text: 'Через форму на сайте или WhatsApp',
  },
  {
    num: 2,
    title: 'Первичная связь',
    text: 'Короткое уточнение вашего запроса и пожеланий',
  },
  {
    num: 3,
    title: 'Депозит за подбор',
    text: 'Для новых клиентов — возвратный депозит за персональную работу',
  },
  {
    num: 4,
    title: 'Подготовка вариантов',
    text: 'Презентация с фото/видео, плюсы и минусы каждого варианта',
  },
  {
    num: 5,
    title: 'Бронирование',
    text: 'Оформление пакетного тура через официального туроператора',
  },
  {
    num: 6,
    title: 'Страховка',
    text: 'Подбор страхового решения по вашему желанию',
  },
  {
    num: 7,
    title: 'Сопровождение',
    text: 'Поддержка до, во время и после поездки',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-24 bg-gray-50" aria-labelledby="process-heading">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Как работаем"
          title="Как проходит работа"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <div className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Step number circle */}
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-white font-bold text-sm shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                    {step.num}
                  </div>
                  {/* Content */}
                  <div className={`flex-1 md:flex-none bg-white rounded-xl p-5 shadow-sm text-center md:w-[calc(50%-3.5rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <h3 className="font-semibold text-ocean-deep mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Important note */}
        <ScrollReveal className="mt-10">
          <div className="bg-ocean-deep/5 border border-ocean-deep/10 rounded-xl p-5 text-center">
            <p className="text-sm text-ocean-deep font-medium">
              <svg className="w-4 h-4 inline-block mr-1 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
              Авиабилеты отдельно не продаются — только в составе пакетных туров
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
