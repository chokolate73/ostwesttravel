"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Lang } from "@/lib/i18n";

const directionOptionsDe = [
  { value: "", label: "Reiseziel wählen" },
  { value: "cruises", label: "Kreuzfahrten" },
  { value: "maldives", label: "Malediven" },
  { value: "caribbean", label: "Karibik" },
  { value: "europe", label: "Europa" },
  { value: "asia", label: "Asien" },
  { value: "family", label: "Familienurlaub" },
  { value: "individual", label: "Individuelle Reise" },
  { value: "other", label: "Sonstiges" },
];

const directionOptionsRu = [
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

const budgetOptionsDe = [
  { value: "", label: "Ungefähres Budget" },
  { value: "1000-2000", label: "1 000 - 2 000 \u20ac" },
  { value: "2000-3000", label: "2 000 - 3 000 \u20ac" },
  { value: "3000-5000", label: "3 000 - 5 000 \u20ac" },
  { value: "5000-10000", label: "5 000 - 10 000 \u20ac" },
  { value: "10000+", label: "10 000+ \u20ac" },
];

const budgetOptionsRu = [
  { value: "", label: "Примерный бюджет" },
  { value: "1000-2000", label: "1 000 - 2 000 \u20ac" },
  { value: "2000-3000", label: "2 000 - 3 000 \u20ac" },
  { value: "3000-5000", label: "3 000 - 5 000 \u20ac" },
  { value: "5000-10000", label: "5 000 - 10 000 \u20ac" },
  { value: "10000+", label: "10 000+ \u20ac" },
];

const t = {
  de: {
    sectionLabel: "Anfrage",
    sectionTitle: "Anfrage senden",
    sectionSubtitle: "Füllen Sie das Formular aus und ich melde mich bei Ihnen in Kürze",
    nameLabel: "Vor- und Nachname *",
    namePlaceholder: "Ihr Name",
    emailLabel: "E-Mail *",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    phoneLabel: "WhatsApp / Telefon *",
    cityLabel: "Stadt in Deutschland",
    cityPlaceholder: "z.B. München",
    directionLabel: "Reiseziel",
    datesLabel: "Ungefähre Termine",
    datesPlaceholder: "z.B. Mai 2026",
    budgetLabel: "Budget",
    adultsLabel: "Anzahl Erwachsene",
    childrenCheckbox: "Kinder reisen mit",
    childrenAgesLabel: "Alter der Kinder",
    childrenAgesPlaceholder: "z.B. 5 und 10 Jahre",
    clientTypeLabel: "Sind Sie unser Kunde? *",
    newClient: "Neukunde",
    existingClient: "Stammkunde",
    newClientNote: "Nach dem Absenden werden Sie zur sicheren Zahlung der Kaution von 69,90\u00a0\u20ac weitergeleitet",
    commentLabel: "Kommentar",
    commentPlaceholder: "Ihre Wünsche...",
    submit: "Absenden",
    submitting: "Wird gesendet...",
    footerNote: "Die Auswahl für neue Reisende beginnt nach Einzahlung der Kaution.",
    faqLink: "Bedingungen in FAQ",
    successTitle: "Anfrage gesendet!",
    successMessage: "Vasilya wird sich in Kürze bei Ihnen melden.",
    errorMessage: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    whatsappButton: "Zu WhatsApp wechseln",
    popupTitle: "Sind Sie Neukunde oder Stammkunde?",
    popupNote: "Für Neukunden beginnt die Auswahl nach Einzahlung der erstattbaren Kaution von 69,90\u00a0\u20ac",
    close: "Schließen",
  },
  ru: {
    sectionLabel: "Запрос на подбор",
    sectionTitle: "Оставить заявку",
    sectionSubtitle: "Заполните форму, и я свяжусь с вами в ближайшее время",
    nameLabel: "Имя и фамилия *",
    namePlaceholder: "Ваше имя и фамилия",
    emailLabel: "E-Mail *",
    emailPlaceholder: "Ваш e-mail",
    phoneLabel: "WhatsApp / Телефон *",
    cityLabel: "Город в Германии",
    cityPlaceholder: "Например, Мюнхен",
    directionLabel: "Направление",
    datesLabel: "Примерные даты",
    datesPlaceholder: "Например, май 2026",
    budgetLabel: "Бюджет",
    adultsLabel: "Кол-во взрослых",
    childrenCheckbox: "Едут дети",
    childrenAgesLabel: "Возраст детей",
    childrenAgesPlaceholder: "Например, 5 и 10 лет",
    clientTypeLabel: "Вы наш клиент? *",
    newClient: "Новый клиент",
    existingClient: "Постоянный клиент",
    newClientNote: "После отправки вы будете перенаправлены на безопасную оплату депозита 69,90\u00a0\u20ac",
    commentLabel: "Комментарий",
    commentPlaceholder: "Ваши пожелания...",
    submit: "Отправить",
    submitting: "Отправляем...",
    footerNote: "Подбор для новых путешественников начинается после внесения депозита.",
    faqLink: "Условия в FAQ",
    successTitle: "Заявка отправлена!",
    successMessage: "Василя скоро свяжется с вами.",
    errorMessage: "Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.",
    whatsappButton: "Перейти в WhatsApp",
    popupTitle: "Вы новый или постоянный клиент?",
    popupNote: "Для новых клиентов подбор начинается после внесения возвратного депозита\u00a069,90\u00a0\u20ac",
    close: "Закрыть",
  },
};

export default function Contact({ lang = 'ru' }: { lang?: Lang }) {
  const [hasChildren, setHasChildren] = useState(false);
  const [direction, setDirection] = useState("");
  const [clientType, setClientType] = useState<"new" | "existing" | null>(null);
  const [showClientPopup, setShowClientPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const STRIPE_PAYMENT_LINK = lang === 'ru'
    ? 'https://buy.stripe.com/14AaEZck9ff47k7ecAaAw01'
    : 'https://buy.stripe.com/28EfZjfwld6WeMz9WkaAw00';

  const text = t[lang];
  const directionOptions = lang === 'de' ? directionOptionsDe : directionOptionsRu;
  const budgetOptions = lang === 'de' ? budgetOptionsDe : budgetOptionsRu;

  // Support pre-filled direction from URL params and hash changes
  useEffect(() => {
    function readDirection() {
      const params = new URLSearchParams(window.location.search);
      const dir = params.get("direction");
      if (dir) { setDirection(dir); return; }

      const hash = window.location.hash;
      if (hash.includes("direction=")) {
        const match = hash.match(/direction=([^&]+)/);
        if (match) setDirection(match[1]);
      }
    }

    readDirection();
    window.addEventListener("hashchange", readDirection);
    return () => window.removeEventListener("hashchange", readDirection);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!clientType) {
      setShowClientPopup(true);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set("client_type", clientType);
    const data = Object.fromEntries(formData);

    if (clientType === "new") {
      // Save form data to localStorage — will be sent after Stripe payment
      localStorage.setItem("ostwest_form_data", JSON.stringify(data));
      window.location.href = STRIPE_PAYMENT_LINK;
      return;
    }

    // Existing client: submit to Formspree immediately
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("https://formspree.io/f/xojkzjje", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
      setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-24 bg-gray-50" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          label={text.sectionLabel}
          title={text.sectionTitle}
          subtitle={text.sectionSubtitle}
          headingId="contact-heading"
        />

        {submitted ? (
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-serif text-ocean-deep mb-3">{text.successTitle}</h3>
              <p className="text-gray-500 mb-6">{text.successMessage}</p>
              <WhatsAppButton>{text.whatsappButton}</WhatsAppButton>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
              {/* Honeypot - hidden from humans, bots fill it and get rejected */}
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              {/* Name */}
              <div>
                <label htmlFor="c-name" className="block text-sm font-medium text-gray-700 mb-1">{text.nameLabel}</label>
                <input id="c-name" name="name" type="text" required autoComplete="name"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder={text.namePlaceholder} />
              </div>

              {/* E-Mail */}
              <div>
                <label htmlFor="c-email" className="block text-sm font-medium text-gray-700 mb-1">{text.emailLabel}</label>
                <input id="c-email" name="email" type="email" required autoComplete="email"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder={text.emailPlaceholder} />
              </div>

              {/* WhatsApp / Phone */}
              <div>
                <label htmlFor="c-phone" className="block text-sm font-medium text-gray-700 mb-1">{text.phoneLabel}</label>
                <input id="c-phone" name="phone" type="tel" required autoComplete="tel"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder="+49 ..." />
              </div>

              {/* City */}
              <div>
                <label htmlFor="c-city" className="block text-sm font-medium text-gray-700 mb-1">{text.cityLabel}</label>
                <input id="c-city" name="city" type="text" autoComplete="address-level2"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder={text.cityPlaceholder} />
              </div>

              {/* Direction + Dates row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-direction" className="block text-sm font-medium text-gray-700 mb-1">{text.directionLabel}</label>
                  <select id="c-direction" name="direction" value={direction} onChange={(e) => setDirection(e.target.value)}
                    className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white">
                    {directionOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-dates" className="block text-sm font-medium text-gray-700 mb-1">{text.datesLabel}</label>
                  <input id="c-dates" name="dates" type="text"
                    className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    placeholder={text.datesPlaceholder} />
                </div>
              </div>

              {/* Budget + Adults row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-budget" className="block text-sm font-medium text-gray-700 mb-1">{text.budgetLabel}</label>
                  <select id="c-budget" name="budget"
                    className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white">
                    {budgetOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-adults" className="block text-sm font-medium text-gray-700 mb-1">{text.adultsLabel}</label>
                  <input id="c-adults" name="adults" type="number" min="1" max="20" defaultValue="2"
                    className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>
              </div>

              {/* Children */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={hasChildren} onChange={(e) => setHasChildren(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold" />
                  <span className="text-sm text-gray-700">{text.childrenCheckbox}</span>
                </label>
                {hasChildren && (
                  <div className="mt-3">
                    <label htmlFor="c-children-ages" className="block text-sm font-medium text-gray-700 mb-1">{text.childrenAgesLabel}</label>
                    <input id="c-children-ages" name="children_ages" type="text"
                      className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder={text.childrenAgesPlaceholder} />
                  </div>
                )}
              </div>

              {/* Client type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{text.clientTypeLabel}</label>
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
                    {text.newClient}
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
                    {text.existingClient}
                  </button>
                </div>
                {clientType === "new" && (
                  <p className="mt-2 text-xs text-gray-400">
                    {text.newClientNote}
                  </p>
                )}
              </div>

              {/* Comment */}
              <div>
                <label htmlFor="c-comment" className="block text-sm font-medium text-gray-700 mb-1">{text.commentLabel}</label>
                <textarea id="c-comment" name="comment" rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                  placeholder={text.commentPlaceholder} />
              </div>

              {/* Error */}
              {submitError && (
                <p className="text-sm text-red-600 text-center">{text.errorMessage}</p>
              )}

              {/* Submit */}
              <button type="submit" disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-gold to-gold-light text-ocean-deep rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all gold-glow disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                )}
                {isSubmitting ? text.submitting : text.submit}
              </button>

              <p className="text-xs text-gray-400 text-center">
                {text.footerNote}{" "}
                <a href="#faq-deposit-why" className="text-gold hover:text-gold-dark underline">{text.faqLink}</a>.
              </p>
            </form>

            {/* Popup: choose client type */}
            {showClientPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setShowClientPopup(false)}>
                <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-lg font-semibold text-ocean-deep mb-2">{text.popupTitle}</h3>
                  <p className="text-sm text-gray-500 mb-5">
                    {text.popupNote}
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => { setClientType("new"); setShowClientPopup(false); }}
                      className="w-full h-12 rounded-xl border-2 border-gold bg-gold/10 text-gold font-semibold hover:bg-gold/20 transition-all"
                    >
                      {text.newClient}
                    </button>
                    <button
                      onClick={() => { setClientType("existing"); setShowClientPopup(false); }}
                      className="w-full h-12 rounded-xl border border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-all"
                    >
                      {text.existingClient}
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
