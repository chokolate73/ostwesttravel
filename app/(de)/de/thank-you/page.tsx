"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const STRIPE_LINK = 'https://buy.stripe.com/eVqbJ3bg50kafQD7OcaAw02?locale=de';
const PAYPAL_LINK = 'https://paypal.me/touragentde?locale.x=de_DE&country.x=DE';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const isNew = searchParams.get('type') === 'new';

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
        <>
          <p className="text-gray-500 mb-8">
            Für Neukunden beginnt die Auswahl nach Einzahlung der erstattbaren Kaution von 69,90&nbsp;&euro;
          </p>

          <div className="flex flex-col gap-3 max-w-md mx-auto mb-8">
            <a
              href={PAYPAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-4 rounded-2xl border-2 border-gray-200 hover:border-[#0070ba] hover:bg-[#0070ba]/5 transition-all cursor-pointer group"
            >
              <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 3.72a.77.77 0 01.757-.654h6.451c2.138 0 3.626.563 4.424 1.674.373.52.61 1.103.707 1.733.101.66.05 1.45-.153 2.35l-.005.025v.462l.36.204c.305.16.548.35.735.57.313.37.516.838.602 1.39.089.567.06 1.225-.084 1.956-.166.84-.434 1.572-.798 2.176a4.587 4.587 0 01-1.24 1.378 5.048 5.048 0 01-1.663.793c-.618.178-1.326.268-2.104.268h-.5a1.504 1.504 0 00-1.486 1.27l-.038.194-.643 4.074-.029.14a.15.15 0 01-.044.095.143.143 0 01-.096.036H7.076z" fill="#253B80"/>
                <path d="M19.438 8.086c-.01.065-.023.13-.037.2-.776 3.98-3.428 5.353-6.815 5.353H10.87a.838.838 0 00-.828.709l-.878 5.563-.249 1.577a.44.44 0 00.435.511h3.053c.363 0 .672-.264.73-.621l.03-.155.578-3.664.037-.202a.736.736 0 01.728-.623h.459c2.97 0 5.294-1.206 5.973-4.694.284-1.457.137-2.673-.614-3.527a2.927 2.927 0 00-.84-.627z" fill="#179BD7"/>
                <path d="M18.504 7.706a5.937 5.937 0 00-.733-.163 9.312 9.312 0 00-1.482-.109h-4.49a.73.73 0 00-.727.622l-.955 6.055-.028.175a.838.838 0 01.828-.709h1.724c3.387 0 6.039-1.374 6.815-5.352.023-.118.043-.233.06-.345a3.94 3.94 0 00-1.012-.174z" fill="#222D65"/>
              </svg>
              <div className="text-left">
                <span className="text-base font-semibold text-gray-700 group-hover:text-[#0070ba] transition-colors">PayPal</span>
                <span className="block text-sm text-gray-400 leading-snug">Zahlung über PayPal</span>
              </div>
            </a>
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-4 rounded-2xl border-2 border-gray-200 hover:border-[#635bff] hover:bg-[#635bff]/5 transition-all cursor-pointer group"
            >
              <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="2" width="22" height="20" rx="2.5" fill="#635BFF"/>
                <text x="12" y="15" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">S</text>
              </svg>
              <div className="text-left">
                <span className="text-base font-semibold text-gray-700 group-hover:text-[#635bff] transition-colors">Stripe</span>
                <span className="block text-sm text-gray-400 leading-snug">Bankkarte, Bankkonto, Apple&nbsp;Pay oder Google&nbsp;Pay</span>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 mb-2 text-sm text-gray-400">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <span>Sichere Online-Zahlung</span>
          </div>
          <p className="text-sm text-gray-400 mb-8">Die Kaution wird nach Buchung der Reise erstattet.</p>
        </>
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
