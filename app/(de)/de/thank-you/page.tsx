import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Vielen Dank für die Zahlung - OST-West Travel',
  description: 'Kaution erfolgreich bezahlt. Wir melden uns in Kürze bei Ihnen.',
};

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

      <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
          Vielen Dank für die Zahlung!
        </h1>

        <p className="text-lg text-gray-600 mb-3">
          Die Kaution von 69,90&nbsp;&euro; wurde erfolgreich bezahlt.
        </p>

        <p className="text-gray-500 mb-10">
          Ich melde mich bei Ihnen per WhatsApp innerhalb einer Stunde während der Geschäftszeiten, um mit der Planung Ihrer idealen Reise zu beginnen.
        </p>

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
    </div>
  );
}
