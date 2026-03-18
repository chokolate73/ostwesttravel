import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Спасибо за оплату - OST-West Travel',
  description: 'Депозит успешно оплачен. Мы свяжемся с вами в ближайшее время.',
};

export default function ThankYouPageRu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-ocean-deep text-white">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/ru/" className="text-xl font-serif hover:text-gold transition-colors">
            OST-West <span className="text-gold">Travel</span>
          </Link>
          <Link
            href="/ru/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            На главную
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
          Спасибо за оплату!
        </h1>

        <p className="text-lg text-gray-600 mb-3">
          Депозит 69,90&nbsp;&euro; успешно оплачен.
        </p>

        <p className="text-gray-500 mb-10">
          Я свяжусь с вами в WhatsApp в течение часа в рабочее время, чтобы начать подбор вашего идеального путешествия.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton size="lg">Написать в WhatsApp</WhatsAppButton>
          <Link
            href="/ru/"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
