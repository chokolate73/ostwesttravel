import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import CooperationContent from '../../../app/cooperation/CooperationContent';

export const metadata: Metadata = {
  title: 'Сотрудничество — OST-West Travel',
  description:
    'Сотрудничество с брендами, отелями и туристическими проектами. Партнёрство с OST-West Travel.',
};

export default function CooperationPageRu() {
  return (
    <div className="min-h-screen bg-[#f5f1ea]">
      <nav className="bg-ocean-deep px-6 sm:px-10 py-[18px] flex justify-between items-center border-b border-white/[0.06]">
        <Link
          href="/"
          className="font-serif text-white text-lg sm:text-xl font-semibold tracking-wide hover:opacity-90 transition-opacity"
        >
          OST-West <span className="text-gold font-normal italic">Travel</span>
        </Link>
        <Link
          href="/#footer"
          className="text-[#b8c4d4] text-sm hover:text-gold transition-colors"
        >
          &lsaquo; Назад
        </Link>
      </nav>

      <CooperationContent />

      <Footer lang="ru" />
    </div>
  );
}
