'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so the banner slides in smoothly after page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'all');
    setVisible(false);
  }

  function saveCustom() {
    const value = JSON.stringify({
      essential: true,
      analytics,
      marketing,
    });
    localStorage.setItem('cookie-consent', value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] animate-slideUp"
      role="dialog"
      aria-label="Согласие на использование cookie"
    >
      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="rounded-2xl bg-ocean-deep/95 backdrop-blur-md shadow-2xl border border-white/10 p-5 sm:p-6">
          {/* Main banner */}
          {!showSettings && (
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                {/* Cookie icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <svg
                    className="w-7 h-7 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="8" cy="9" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="14" cy="7" r="1" fill="currentColor" stroke="none" />
                    <circle cx="16" cy="13" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="10" cy="15" r="1" fill="currentColor" stroke="none" />
                    <circle cx="6" cy="13" r="0.8" fill="currentColor" stroke="none" />
                    <circle cx="13" cy="17" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    Этот сайт использует cookie для улучшения вашего опыта.{' '}
                    <a
                      href="https://touragent.de/datenschutz"
                      className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
                    >
                      Политика конфиденциальности
                    </a>
                  </p>
                </div>
                {/* Close button */}
                <button
                  onClick={() => setVisible(false)}
                  className="flex-shrink-0 text-white/50 hover:text-white transition-colors p-1"
                  aria-label="Закрыть"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="order-2 sm:order-1 px-5 py-2.5 text-sm font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition-all"
                >
                  Настроить
                </button>
                <button
                  onClick={accept}
                  className="order-1 sm:order-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-gold to-gold-light text-ocean-deep hover:shadow-lg hover:shadow-gold/20 transition-all gold-glow"
                >
                  Принять все
                </button>
              </div>
            </div>
          )}

          {/* Settings panel */}
          {showSettings && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-serif text-lg font-semibold">Настройки cookie</h3>
                <button
                  onClick={() => setVisible(false)}
                  className="text-white/50 hover:text-white transition-colors p-1"
                  aria-label="Закрыть"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                {/* Essential - always on */}
                <label className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5">
                  <div>
                    <p className="text-sm font-medium text-white">Необходимые</p>
                    <p className="text-xs text-white/50 mt-0.5">Обязательные для работы сайта</p>
                  </div>
                  <div className="relative">
                    <div className="w-10 h-6 bg-gold/80 rounded-full" />
                    <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow" />
                  </div>
                </label>

                {/* Analytics */}
                <label className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-white">Аналитика</p>
                    <p className="text-xs text-white/50 mt-0.5">Помогают улучшить сайт</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analytics}
                    onClick={() => setAnalytics(!analytics)}
                    className={`relative w-10 h-6 rounded-full transition-colors ${
                      analytics ? 'bg-gold/80' : 'bg-white/20'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        analytics ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </label>

                {/* Marketing */}
                <label className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-white">Маркетинг</p>
                    <p className="text-xs text-white/50 mt-0.5">Персонализированная реклама</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={marketing}
                    onClick={() => setMarketing(!marketing)}
                    className={`relative w-10 h-6 rounded-full transition-colors ${
                      marketing ? 'bg-gold/80' : 'bg-white/20'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        marketing ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="order-2 sm:order-1 px-5 py-2.5 text-sm font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition-all"
                >
                  Назад
                </button>
                <button
                  onClick={saveCustom}
                  className="order-1 sm:order-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-gold to-gold-light text-ocean-deep hover:shadow-lg hover:shadow-gold/20 transition-all gold-glow"
                >
                  Сохранить настройки
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
