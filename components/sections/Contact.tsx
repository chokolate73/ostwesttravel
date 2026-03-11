"use client";

import { useState, useEffect } from "react";
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

  // TODO: Replace with actual Stripe payment link
  const STRIPE_PAYMENT_LINK = "#stripe-deposit";

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
      // Save form data, then redirect to Stripe for deposit payment
      setSubmitted(true);
      window.location.href = STRIPE_PAYMENT_LINK;
    } else {
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-gray-50" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          label="Запрос на подбор"
          title="Оставить заявку"
          subtitle="Заполните форму, и я свяжусь с вами в ближайшее время"
          headingId="contact-heading"
        />

        {submitted ? (
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
                    После отправки заявки вы будете перенаправлены на страницу оплаты депозита 69,90&nbsp;&euro;
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
