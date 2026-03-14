"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const directionOptions = [
  { value: "", label: "Выберите направление" },
  { value: "cruises", label: "Круизы" },
  { value: "maldives", label: "Мальдивы" },
  { value: "caribbean", label: "Карибы" },
  { value: "europe", label: "Европа" },
  { value: "asia", label: "Азия" },
  { value: "family", label: "Семейный отдых" },
  { value: "individual", label: "Индивидуальный тур" },
  { value: "other", label: "Другое" },
];

const budgetOptions = [
  { value: "", label: "Примерный бюджет" },
  { value: "1000-2000", label: "1 000 - 2 000 \u20ac" },
  { value: "2000-3000", label: "2 000 - 3 000 \u20ac" },
  { value: "3000-5000", label: "3 000 - 5 000 \u20ac" },
  { value: "5000-10000", label: "5 000 - 10 000 \u20ac" },
  { value: "10000+", label: "10 000+ \u20ac" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [hasChildren, setHasChildren] = useState(false);
  const [direction, setDirection] = useState("");
  const [clientType, setClientType] = useState<"new" | "existing" | null>(null);
  const [showClientPopup, setShowClientPopup] = useState(false);
  const [showPaymentChoice, setShowPaymentChoice] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/28EfZjfwld6WeMz9WkaAw00";
  const PAYPAL_PAYMENT_LINK = "https://paypal.me/touragentde?locale.x=de_DE&country.x=DE";

  // Support pre-filled direction from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dir = params.get("direction");
    if (dir) setDirection(dir);

    // Also check hash params like #contact?direction=cruises
    const hash = window.location.hash;
    if (hash.includes("direction=")) {
      const match = hash.match(/direction=([^&]+)/);
      if (match) setDirection(match[1]);
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!clientType) {
      setShowClientPopup(true);
      return;
    }
    const formData = new FormData(e.currentTarget);
    formData.set("client_type", clientType);
    const data = Object.fromEntries(formData);
    // TODO: подключить email/бот для отправки заявок
    console.log("Form submitted:", data);

    if (clientType === "new") {
      // Show payment method choice for new clients
      setShowPaymentChoice(true);
      // Scroll to section top so user sees PayPal/Stripe options
      setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } else {
      setSubmitted(true);
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-24 bg-gray-50" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          label="Запрос на подбор"
          title="Оставить заявку"
          subtitle="Заполните форму, и я свяжусь с вами в ближайшее время"
          headingId="contact-heading"
        />

        {showPaymentChoice ? (
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-2xl font-serif text-ocean-deep mb-2">Заявка принята!</h3>
              <p className="text-gray-500 mb-6">Выберите удобный способ оплаты депозита&nbsp;69,90&nbsp;&euro;</p>
              <div className="flex gap-4 justify-center">
                <a
                  href={PAYPAL_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border-2 border-gray-200 hover:border-[#0070ba] hover:bg-[#0070ba]/5 transition-all cursor-pointer group"
                >
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 3.72a.77.77 0 01.757-.654h6.451c2.138 0 3.626.563 4.424 1.674.373.52.61 1.103.707 1.733.101.66.05 1.45-.153 2.35l-.005.025v.462l.36.204c.305.16.548.35.735.57.313.37.516.838.602 1.39.089.567.06 1.225-.084 1.956-.166.84-.434 1.572-.798 2.176a4.587 4.587 0 01-1.24 1.378 5.048 5.048 0 01-1.663.793c-.618.178-1.326.268-2.104.268h-.5a1.504 1.504 0 00-1.486 1.27l-.038.194-.643 4.074-.029.14a.15.15 0 01-.044.095.143.143 0 01-.096.036H7.076z" fill="#253B80"/>
                    <path d="M19.438 8.086c-.01.065-.023.13-.037.2-.776 3.98-3.428 5.353-6.815 5.353H10.87a.838.838 0 00-.828.709l-.878 5.563-.249 1.577a.44.44 0 00.435.511h3.053c.363 0 .672-.264.73-.621l.03-.155.578-3.664.037-.202a.736.736 0 01.728-.623h.459c2.97 0 5.294-1.206 5.973-4.694.284-1.457.137-2.673-.614-3.527a2.927 2.927 0 00-.84-.627z" fill="#179BD7"/>
                    <path d="M18.504 7.706a5.937 5.937 0 00-.733-.163 9.312 9.312 0 00-1.482-.109h-4.49a.73.73 0 00-.727.622l-.955 6.055-.028.175a.838.838 0 01.828-.709h1.724c3.387 0 6.039-1.374 6.815-5.352.023-.118.043-.233.06-.345a3.94 3.94 0 00-1.012-.174z" fill="#222D65"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0070ba] transition-colors">PayPal</span>
                </a>
                <a
                  href={STRIPE_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border-2 border-gray-200 hover:border-[#635bff] hover:bg-[#635bff]/5 transition-all cursor-pointer group"
                >
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 4.5A2.5 2.5 0 013.5 2h17A2.5 2.5 0 0123 4.5v15a2.5 2.5 0 01-2.5 2.5h-17A2.5 2.5 0 011 19.5v-15zM11.154 10.08c-.753-.247-1.216-.453-1.216-.756 0-.257.228-.453.657-.453.878 0 1.768.33 2.374.617l.35-2.14a6.396 6.396 0 00-2.693-.576c-.89 0-1.63.233-2.163.653-.575.453-.878 1.109-.878 1.902 0 1.49 1.216 2.163 2.14 2.528.76.293 1.042.5 1.042.793 0 .34-.3.526-.793.526-.7 0-1.963-.37-2.693-.73l-.35 2.14c.617.31 1.757.617 2.94.617.952 0 1.718-.227 2.278-.64.622-.46.94-1.14.94-1.989 0-1.527-1.232-2.175-2.163-2.552l.228.06z" fill="#635BFF"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#635bff] transition-colors">Stripe</span>
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-6">Депозит полностью возвратный. <a href="#faq-deposit-why" className="text-gold hover:text-gold-dark underline">Подробнее</a></p>
            </div>
          </ScrollReveal>
        ) : submitted ? (
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-serif text-ocean-deep mb-3">Заявка отправлена!</h3>
              <p className="text-gray-500 mb-6">Я свяжусь с вами в течение часа в рабочее время.</p>
              <WhatsAppButton>Перейти в WhatsApp</WhatsAppButton>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="c-name" className="block text-sm font-medium text-gray-700 mb-1">Имя *</label>
                <input id="c-name" name="name" type="text" required autoComplete="name"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder="Ваше имя" />
              </div>

              {/* WhatsApp / Phone */}
              <div>
                <label htmlFor="c-phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Телефон *</label>
                <input id="c-phone" name="phone" type="tel" required autoComplete="tel"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder="+49 ..." />
              </div>

              {/* City */}
              <div>
                <label htmlFor="c-city" className="block text-sm font-medium text-gray-700 mb-1">Город в Германии</label>
                <input id="c-city" name="city" type="text" autoComplete="address-level2"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder="Например, Мюнхен" />
              </div>

              {/* Direction + Dates row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-direction" className="block text-sm font-medium text-gray-700 mb-1">Направление</label>
                  <select id="c-direction" name="direction" value={direction} onChange={(e) => setDirection(e.target.value)}
                    className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white">
                    {directionOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-dates" className="block text-sm font-medium text-gray-700 mb-1">Примерные даты</label>
                  <input id="c-dates" name="dates" type="text"
                    className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    placeholder="Например, май 2026" />
                </div>
              </div>

              {/* Budget + Adults row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-budget" className="block text-sm font-medium text-gray-700 mb-1">Бюджет</label>
                  <select id="c-budget" name="budget"
                    className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white">
                    {budgetOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-adults" className="block text-sm font-medium text-gray-700 mb-1">Кол-во взрослых</label>
                  <input id="c-adults" name="adults" type="number" min="1" max="20" defaultValue="2"
                    className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>
              </div>

              {/* Children */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={hasChildren} onChange={(e) => setHasChildren(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold" />
                  <span className="text-sm text-gray-700">Едут дети</span>
                </label>
                {hasChildren && (
                  <div className="mt-3">
                    <label htmlFor="c-children-ages" className="block text-sm font-medium text-gray-700 mb-1">Возраст детей</label>
                    <input id="c-children-ages" name="children_ages" type="text"
                      className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="Например, 5 и 10 лет" />
                  </div>
                )}
              </div>

              {/* Client type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Вы наш клиент? *</label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setClientType("new")}
                    className={`flex-1 h-12 rounded-xl border text-sm font-medium transition-all ${
                      clientType === "new"
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    Новый клиент
                  </button>
                  <button
                    type="button"
                    onClick={() => setClientType("existing")}
                    className={`flex-1 h-12 rounded-xl border text-sm font-medium transition-all ${
                      clientType === "existing"
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    Постоянный клиент
                  </button>
                </div>
                {clientType === "new" && (
                  <p className="mt-2 text-xs text-gray-400">
                    После отправки заявки вы сможете выбрать способ оплаты депозита 69,90&nbsp;&euro;
                  </p>
                )}
              </div>

              {/* Comment */}
              <div>
                <label htmlFor="c-comment" className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
                <textarea id="c-comment" name="comment" rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                  placeholder="Ваши пожелания..." />
              </div>

              {/* Submit */}
              <button type="submit"
                className="w-full h-14 bg-gradient-to-r from-gold to-gold-light text-ocean-deep rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all gold-glow">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                Отправить
              </button>

              <p className="text-xs text-gray-400 text-center">
                Подбор для новых путешественников начинается после внесения депозита.{" "}
                <a href="#faq-deposit-why" className="text-gold hover:text-gold-dark underline">Условия в FAQ</a>.
              </p>
            </form>

            {/* Popup: choose client type */}
            {showClientPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setShowClientPopup(false)}>
                <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-lg font-semibold text-ocean-deep mb-2">Вы новый или постоянный клиент?</h3>
                  <p className="text-sm text-gray-500 mb-5">
                    Для новых клиентов подбор начинается после внесения возвратного депозита&nbsp;69,90&nbsp;&euro;
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => { setClientType("new"); setShowClientPopup(false); }}
                      className="w-full h-12 rounded-xl border-2 border-gold bg-gold/10 text-gold font-semibold hover:bg-gold/20 transition-all"
                    >
                      Новый клиент
                    </button>
                    <button
                      onClick={() => { setClientType("existing"); setShowClientPopup(false); }}
                      className="w-full h-12 rounded-xl border border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-all"
                    >
                      Постоянный клиент
                    </button>
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
