import Image from 'next/image';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CTAButton from '@/components/ui/CTAButton';

// Tiny SVG placeholder matching ocean-deep theme — renders instantly before image loads
const HERO_BLUR =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwQzIzNDAiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzFFM0E1RiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBDMjM0MCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=';

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ocean-deep"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-bg-reveal [transform:translateZ(0)]">
        <Image
          src="/images/hero-cruise.webp"
          alt="Круизный лайнер в открытом море — OST-West Travel"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={HERO_BLUR}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/50 to-ocean-deep/80" />
      </div>

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 rotate-45 border border-gold" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <h1
          id="hero-heading"
          className="text-[1.7rem] sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-4 sm:mb-6"
        >
          Путешествия мечты с личным экспертом
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-serif text-gold font-semibold drop-shadow-lg mb-4 sm:mb-6">
          Василя Нигматова
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {['Круизы', 'Семейный отдых', 'Индивидуальные туры'].map((tag) => (
            <span key={tag} className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-medium text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <WhatsAppButton size="lg" className="w-full sm:w-auto justify-center">Написать в WhatsApp</WhatsAppButton>
          <CTAButton size="lg" href="#contact" className="w-full sm:w-auto justify-center">
            Заказать путешествие
          </CTAButton>
        </div>

        <p className="text-white font-semibold text-sm mt-4 sm:mt-5">Ответ в течение часа</p>
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
