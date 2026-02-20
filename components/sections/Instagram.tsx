import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Instagram() {
  return (
    <section className="pt-16 pb-32 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://instagram.com/touragent.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-28 h-28 mb-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[3px]">
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
              <p className="text-2xl font-serif text-ocean-deep mb-1">@touragent.de</p>
              <p className="text-gray-500">23 000+ подписчиков</p>
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
