'use client';

import { useState, useEffect } from 'react';
import { Lang } from '@/lib/i18n';

const navLinksRu = [
  { href: '#top', label: 'Главная', mobileOnly: true },
  { href: '#cruises', label: 'Круизы' },
  { href: '#individual', label: 'Индивидуально' },
  { href: '#family', label: 'Семьям с детьми' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#upcoming', label: 'Групповые туры' },
  { href: '#process', label: 'Как я работаю' },
  { href: '#faq', label: 'FAQ' },
  { href: '#footer', label: 'Контакт' },
];

const navLinksDe = [
  { href: '#top', label: 'Startseite', mobileOnly: true },
  { href: '#cruises', label: 'Kreuzfahrten' },
  { href: '#individual', label: 'Individuell' },
  { href: '#family', label: 'Familien' },
  { href: '#testimonials', label: 'Bewertungen' },
  { href: '#upcoming', label: 'Reisekalender' },
  { href: '#process', label: 'So arbeite ich' },
  { href: '#faq', label: 'FAQ' },
  { href: '#footer', label: 'Kontakt' },
];

export default function Header({ lang = 'de' }: { lang?: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = lang === 'de' ? navLinksDe : navLinksRu;

  useEffect(() => {
    let last = false;
    function onScroll() {
      const next = window.scrollY > 80;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-ocean-deep/95 backdrop-blur-md shadow-lg' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between" aria-label={lang === 'de' ? 'Hauptnavigation' : 'Основная навигация'}>
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-serif text-white tracking-wider shrink-0" aria-label={lang === 'de' ? 'OST-West Travel - Zur Startseite' : 'OST-West Travel - На главную'}>
          OST-West <span className="text-gold">Travel</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.filter((link) => !link.mobileOnly).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              onClick={link.href === '#top' ? (e: React.MouseEvent) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Language + Mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5 bg-white/10 backdrop-blur-md rounded-full p-0.5 border border-white/20">
            {lang === 'de' ? (
              <>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white text-ocean-deep">
                  DE
                </span>
                <a
                  href="/ru/"
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white transition-all"
                  hrefLang="ru"
                  aria-label="Русский"
                >
                  RU
                </a>
              </>
            ) : (
              <>
                <a
                  href="/"
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white transition-all"
                  hrefLang="de"
                  aria-label="Deutsch"
                >
                  DE
                </a>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white text-ocean-deep">
                  RU
                </span>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen
              ? (lang === 'de' ? 'Menü schließen' : 'Закрыть меню')
              : (lang === 'de' ? 'Menü öffnen' : 'Открыть меню')
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-ocean-deep/95 backdrop-blur-md border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-1 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white hover:bg-white/5 transition-colors text-base py-2.5 px-3 rounded-lg border-b border-white/5 last:border-b-0"
              onClick={(e: React.MouseEvent) => {
                setMobileOpen(false);
                if (link.href === '#top') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
