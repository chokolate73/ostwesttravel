'use client';

import { useState, useEffect } from 'react';

export default function FloatingPhone() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let last = false;
    function onScroll() {
      const next = window.scrollY > window.innerHeight * 0.3;
      if (next !== last) {
        last = next;
        setVisible(next);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="tel:+4915123456789"
      aria-label="Позвонить"
      className={`fixed bottom-6 right-6 z-50 hidden md:flex w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white items-center justify-center shadow-lg animate-phone-pulse transition-all duration-300 ${
        visible ? 'md:opacity-100 md:scale-100' : 'md:opacity-0 md:scale-75 md:pointer-events-none'
      }`}
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    </a>
  );
}
