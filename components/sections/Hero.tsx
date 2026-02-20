import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CTAButton from '@/components/ui/CTAButton';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* TODO: заменить на реальное фото Васили или живое фото с круиза */}
        <img
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80"
          alt="Круизный лайнер в открытом море — OST-West Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/50 to-ocean-deep/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 rotate-45 border border-gold" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6"
        >
          Путешествия мечты с личным экспертом
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-serif text-gold mb-6">
          Василя Нигматова
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {['Круизы', 'Семейный отдых', 'Индивидуальные туры'].map((tag) => (
            <span key={tag} className="border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton size="lg">Написать в WhatsApp</WhatsAppButton>
          <CTAButton size="lg" href="#contact">
            Заказать путешествие
          </CTAButton>
        </div>

        <p className="text-white font-semibold text-sm mt-5">Ответ в течение часа</p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-float"
        aria-label="Прокрутить вниз"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </a>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
