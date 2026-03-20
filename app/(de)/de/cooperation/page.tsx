import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import CooperationContent from './CooperationContent';

export const metadata: Metadata = {
  title: 'Kooperation — OST-West Travel',
  description:
    'Zusammenarbeit mit Marken, Hotels und Reiseprojekten. Partnerschaft mit OST-West Travel.',
};

export default function CooperationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-ocean-deep text-white">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/de/" className="text-xl font-serif hover:text-gold transition-colors">
            OST-West <span className="text-gold">Travel</span>
          </Link>
          <Link
            href="/de/#footer"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Zurück
          </Link>
        </div>
      </div>

      <CooperationContent />

      <Footer lang="de" />
    </div>
  );
}
