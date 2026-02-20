import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CTAButton from '@/components/ui/CTAButton';

export default function Cruises() {
  return (
    <section id="cruises" className="py-20 md:py-24 bg-white" aria-labelledby="cruises-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Флагман"
          title="Групповые круизы с сопровождением"
          subtitle="Путешествуйте в компании единомышленников — с моим личным сопровождением на борту"
        />

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              {/* TODO: заменить на реальное фото из группового круиза */}
              <img
                src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=700&q=80"
                alt="Групповой круиз с сопровождением — OST-West Travel"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <h3 className="text-2xl font-serif text-ocean-deep mb-4">
              Формат, в который влюбляются
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              20–50 человек, 2–3 раза в год. Я лично сопровождаю каждый круиз
              от посадки до последнего вечера на борту.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Экскурсии с русскоязычными гидами',
                'Трансферы и логистика — всё организовано',
                'Помощь на месте в любой ситуации',
                'Подбор каюты с учётом лайнера, палубы и бюджета',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Fleet expertise */}
            <div className="bg-ocean-deep/5 rounded-xl p-5 mb-8">
              <p className="text-sm font-medium text-ocean-deep mb-3">Знаю флот изнутри:</p>
              <div className="flex flex-wrap gap-2">
                {['AIDA', 'MSC', 'Costa', 'Mein Schiff'].map((line) => (
                  <span key={line} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-ocean-deep shadow-sm">
                    {line}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Знаю классы кораблей и нюансы каждой линии
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton size="sm">Узнать о ближайшем круизе</WhatsAppButton>
              <CTAButton size="sm" href="#contact?direction=cruises">
                Оставить заявку на круиз
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
