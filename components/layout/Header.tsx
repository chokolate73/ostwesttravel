'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#cruises', label: 'Круизы' },
  { href: '#individual', label: 'Индивидуально' },
  { href: '#family', label: 'Семьям' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#upcoming', label: 'Поездки' },
  { href: '#process', label: 'Как работаем' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Заявка' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between" aria-label="Основная навигация">
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-serif text-white tracking-wider shrink-0" aria-label="OST-West Travel — На главную">
          OST-West <span className="text-gold">Travel</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Language + Mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5 bg-white/10 backdrop-blur-md rounded-full p-0.5 border border-white/20">
            <a
              href="/de/"
              className="px-3 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white transition-all"
              hrefLang="de"
              aria-label="Deutsch"
            >
              DE
            </a>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white text-ocean-deep">
              RU
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
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
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white hover:bg-white/5 transition-colors text-base py-2.5 px-3 rounded-lg border-b border-white/5 last:border-b-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
