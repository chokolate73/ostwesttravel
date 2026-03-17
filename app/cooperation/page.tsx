import type { Metadata } from 'next';
import Link from 'next/link';
import CooperationContent from './CooperationContent';

export const metadata: Metadata = {
  title: 'Сотрудничество — OST-West Travel',
  description:
    'Сотрудничество с брендами, отелями и туристическими проектами. Партнёрство с OST-West Travel.',
};

export default function CooperationPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea]">
      {/* NAV */}
      <nav className="bg-ocean-deep px-6 sm:px-10 py-[18px] flex justify-between items-center border-b border-white/[0.06]">
        <Link
          href="/"
          className="font-serif text-white text-lg sm:text-xl font-semibold tracking-wide hover:opacity-90 transition-opacity"
        >
          OST-West <span className="text-gold font-normal italic">Travel</span>
        </Link>
        <Link
          href="/"
          className="text-[#b8c4d4] text-sm hover:text-gold transition-colors"
        >
          &lsaquo; На главную
        </Link>
      </nav>

      <CooperationContent />

      {/* FOOTER */}
      <footer className="bg-ocean-deep border-t border-white/5 py-6 px-10 text-center text-xs text-[rgba(184,196,212,0.3)]">
        © 2026 OST-West Travel · Ost-West Logistik &amp; Travel e.K. · Erftstadt,
        Deutschland
      </footer>
    </div>
  );
}
