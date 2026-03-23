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
      setFormStatus('success');
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
            <h1 className="text-2xl font-bold text-ocean-deep mb-2">Anfrage wird gesendet...</h1>
            <p className="text-gray-500">Bitte warten</p>
          </>
        )}

        {(formStatus === 'success' || formStatus === 'idle') && formStatus !== 'submitting' && (
          <>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
              Zahlung und Anfrage angenommen!
            </h1>
            <p className="text-lg text-gray-600 mb-3">
              Vasilya wird sich in Kürze bei Ihnen melden.
            </p>
            <p className="text-gray-500 mb-10">
              Die Kaution von 69,90&nbsp;&euro; wurde erhalten. Ich beginne in Kürze mit der Planung Ihrer Reise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton size="lg">Zu WhatsApp wechseln</WhatsAppButton>
              <Link href="/de/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                Zurück zur Startseite
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
              Zahlung erfolgreich, aber die Anfrage konnte nicht gesendet werden
            </h1>
            <p className="text-gray-500 mb-6">
              Bitte kontaktieren Sie uns über WhatsApp — wir kümmern uns persönlich darum.
            </p>
            <WhatsAppButton size="lg">Zu WhatsApp wechseln</WhatsAppButton>
          </>
        )}
      </div>
    );
  }

  // Original flow
  return (
    <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
        Anfrage gesendet!
      </h1>

      <p className="text-lg text-gray-600 mb-3">
        Vasilya wird sich in Kürze bei Ihnen melden.
      </p>

      {isNew ? (
        <p className="text-gray-500 mb-10">
          Für Neukunden beginnt die Auswahl nach Einzahlung der erstattbaren Kaution von 69,90&nbsp;&euro;
        </p>
      ) : (
        <p className="text-gray-500 mb-10">
          Ich melde mich bei Ihnen per WhatsApp innerhalb einer Stunde während der Geschäftszeiten, um mit der Planung Ihrer idealen Reise zu beginnen.
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <WhatsAppButton size="lg">Zu WhatsApp wechseln</WhatsAppButton>
        <Link
          href="/de/"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-ocean-deep text-white">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/de/" className="text-xl font-serif hover:text-gold transition-colors">
            OST-West <span className="text-gold">Travel</span>
          </Link>
          <Link
            href="/de/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Zur Startseite
          </Link>
        </div>
      </div>

      <Suspense fallback={null}>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
