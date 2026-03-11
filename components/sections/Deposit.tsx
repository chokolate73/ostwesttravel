import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Deposit() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gold/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-gold font-medium uppercase tracking-wider text-sm">
                    Персональный подбор путешествия
                  </span>
                  <div className="h-px w-8 bg-gold" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-deep mb-3">Для новых клиентов подбор начинается с&nbsp;возвратного депозита 69,90&nbsp;&euro;</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Это позволяет мне уделить вашему запросу максимум внимания: проверить актуальные цены у&nbsp;туроператоров, наличие мест, акции и&nbsp;подобрать лучшие варианты под ваши даты, бюджет и&nbsp;пожелания.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Если вы бронируете тур - депозит полностью возвращается.</strong>
                  <br />
                  Если вы решаете не&nbsp;бронировать, депозит остаётся как оплата персонального подбора и&nbsp;затраченного времени.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Для постоянных клиентов депозит не&nbsp;требуется.
                </p>
                <a
                  href="#faq-deposit-why"
                  className="text-gold hover:text-gold-dark font-medium text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Подробнее об условиях
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
