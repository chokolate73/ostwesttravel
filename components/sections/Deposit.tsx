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
                <h3 className="text-lg font-semibold text-ocean-deep mb-3">Условия депозита</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Подбор тура для новых клиентов начинается после внесения возвратного депозита <strong>69,90 &euro;</strong>.
                  При бронировании тура депозит полностью возвращается клиенту тем же способом оплаты.
                  Если после проведённой работы клиент отказывается от бронирования, депозит остаётся как оплата консультации.
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
