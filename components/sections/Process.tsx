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
    title: 'Подготовка вариантов',
    text: 'Презентация с фото/видео, плюсы и минусы каждого варианта',
  },
  {
    num: 4,
    title: 'Бронирование',
    text: 'Оформление пакетного тура через официального туроператора',
  },
  {
    num: 5,
    title: 'Поддержка в поездке',
    text: 'На связи до, во время и после путешествия',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-[1060px] mx-auto px-6">
        <SectionHeader
          label="Как работаем"
          title="Как проходит работа"
        />

        {/* Desktop: horizontal timeline */}
        <div className="relative">
          {/* Connecting line — horizontal on md+, vertical on mobile */}
          <div className="
            absolute
            left-6 top-6 bottom-6 w-0.5 bg-gold/40
            md:left-[10%] md:right-[10%] md:top-6 md:bottom-auto md:h-0.5 md:w-auto
          " />

          <div className="
            flex flex-col gap-0
            md:grid md:grid-cols-5 md:gap-0
          ">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                {/* Mobile: horizontal row; Desktop: vertical column */}
                <div className="
                  flex items-start gap-5 pl-0 pb-9 last:pb-0
                  md:flex-col md:items-center md:text-center md:pb-0 md:gap-0
                ">
                  {/* Circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-[0_0_0_4px_rgba(197,165,90,0.2)] shrink-0 md:mb-5">
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
