import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Instagram() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <a
            href="https://instagram.com/touragent.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <div className="relative mx-auto w-28 h-28 mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-spin-slow" />
              <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center m-0 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-ocean-deep group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-2xl font-serif text-ocean-deep mb-1">@touragent.de</p>
            <p className="text-gray-500 mb-6">23 000+ подписчиков</p>
          </a>

          <a
            href="https://instagram.com/touragent.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Подписаться в Instagram
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
