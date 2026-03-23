"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const FORMSPREE_URL = "https://formspree.io/f/xojkzjje";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const isNew = searchParams.get('type') === 'new';
  const isStripeReturn = searchParams.get('payment') === 'stripe';

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Auto-submit form data from localStorage after Stripe payment return
  useEffect(() => {
    if (!isStripeReturn) return;

    const stored = localStorage.getItem("ostwest_form_data");
    if (!stored) {
      setFormStatus('success'); // Already submitted or no data
      return;
    }

    setFormStatus('submitting');
    const data = JSON.parse(stored);

    fetch(FORMSPREE_URL, {
      method: "POST",
      body: JSON.stringify({ ...data, payment_method: "stripe" }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("submit failed");
        localStorage.removeItem("ostwest_form_data");
        setFormStatus('success');
      })
      .catch(() => {
        setFormStatus('error');
      });
  }, [isStripeReturn]);

  // Stripe return flow
  if (isStripeReturn) {
    return (
      <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
        {formStatus === 'submitting' && (
          <>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
              <svg className="w-10 h-10 text-gold animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-ocean-deep mb-2">Отправляем заявку...</h1>
            <p className="text-gray-500">Пожалуйста, подождите</p>
          </>
        )}

        {(formStatus === 'success' || formStatus === 'idle') && (
          <>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
              Оплата и заявка приняты!
            </h1>
            <p className="text-lg text-gray-600 mb-3">
              Василя скоро свяжется с вами.
            </p>
            <p className="text-gray-500 mb-10">
              Депозит 69,90&nbsp;&euro; получен. Я начну подбор вашего путешествия в ближайшее время.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton size="lg">Написать в WhatsApp</WhatsAppButton>
              <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                Вернуться на главную
              </Link>
            </div>
          </>
        )}

        {formStatus === 'error' && (
          <>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-ocean-deep mb-4">
              Оплата прошла, но заявка не отправилась
            </h1>
            <p className="text-gray-500 mb-6">
              Пожалуйста, свяжитесь с нами через WhatsApp — мы всё оформим вручную.
            </p>
            <WhatsAppButton size="lg">Написать в WhatsApp</WhatsAppButton>
          </>
        )}
      </div>
    );
  }

  // Original flow (existing/new client redirect from old flow)
  return (
    <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
        Заявка отправлена!
      </h1>

      <p className="text-lg text-gray-600 mb-3">
        Василя скоро свяжется с вами.
      </p>

      {isNew ? (
        <p className="text-gray-500 mb-10">
          Для новых клиентов подбор начинается после внесения возвратного депозита 69,90&nbsp;&euro;
        </p>
      ) : (
        <p className="text-gray-500 mb-10">
          Я свяжусь с вами в WhatsApp в течение часа в рабочее время, чтобы начать подбор вашего идеального путешествия.
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <WhatsAppButton size="lg">Написать в WhatsApp</WhatsAppButton>
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPageRu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-ocean-deep text-white">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-serif hover:text-gold transition-colors">
            OST-West <span className="text-gold">Travel</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            На главную
          </Link>
        </div>
      </div>

      <Suspense fallback={null}>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
