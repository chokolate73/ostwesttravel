"use client";

import { useState, useRef } from "react";
import { Lang } from "@/lib/i18n";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const FORMSPREE_URL = "https://formspree.io/f/xojkzjje";

const inputClass =
  "w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors";
const selectClass = `${inputClass} bg-white`;
const textareaClass =
  "w-full px-4 py-3 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none";

type Options = { value: string; label: string }[];

const directionOptions: Record<Lang, Options> = {
  de: [
    { value: "", label: "Reiseziel wählen" },
    { value: "cruises", label: "Kreuzfahrten" },
    { value: "maldives", label: "Malediven" },
    { value: "caribbean", label: "Karibik" },
    { value: "europe", label: "Europa" },
    { value: "asia", label: "Asien" },
    { value: "family", label: "Familienurlaub" },
    { value: "individual", label: "Individuelle Reise" },
    { value: "other", label: "Sonstiges" },
  ],
  ru: [
    { value: "", label: "Выберите направление" },
    { value: "cruises", label: "Круизы" },
    { value: "maldives", label: "Мальдивы" },
    { value: "caribbean", label: "Карибы" },
    { value: "europe", label: "Европа" },
    { value: "asia", label: "Азия" },
    { value: "family", label: "Семейный отдых" },
    { value: "individual", label: "Индивидуальный тур" },
    { value: "other", label: "Другое" },
  ],
};

const vacationTypeOptions: Record<Lang, Options> = {
  de: [
    { value: "", label: "Art des Urlaubs wählen" },
    { value: "beach", label: "Strand / Erholung" },
    { value: "sightseeing", label: "Sightseeing / Kultur" },
    { value: "cruise", label: "Kreuzfahrt" },
    { value: "ski", label: "Skiurlaub" },
    { value: "wellness", label: "Wellness / Spa" },
    { value: "family", label: "Familienurlaub" },
    { value: "combined", label: "Kombiniert" },
    { value: "other", label: "Sonstiges" },
  ],
  ru: [
    { value: "", label: "Выберите тип отдыха" },
    { value: "beach", label: "Пляжный / отдых" },
    { value: "sightseeing", label: "Экскурсионный" },
    { value: "cruise", label: "Круиз" },
    { value: "ski", label: "Горнолыжный" },
    { value: "wellness", label: "Wellness / Spa" },
    { value: "family", label: "Семейный" },
    { value: "combined", label: "Комбинированный" },
    { value: "other", label: "Другое" },
  ],
};

const dateFlexibilityOptions: Record<Lang, Options> = {
  de: [
    { value: "", label: "Bitte wählen" },
    { value: "fixed", label: "Feste Daten" },
    { value: "+-3", label: "± 3 Tage" },
    { value: "+-1w", label: "± 1 Woche" },
    { value: "flexible", label: "Flexibel" },
  ],
  ru: [
    { value: "", label: "Выберите вариант" },
    { value: "fixed", label: "Фиксированные даты" },
    { value: "+-3", label: "± 3 дня" },
    { value: "+-1w", label: "± 1 неделя" },
    { value: "flexible", label: "Гибкие" },
  ],
};

const departureOptions: Record<Lang, Options> = {
  de: [
    { value: "", label: "Abflughafen wählen" },
    { value: "MUC", label: "München (MUC)" },
    { value: "FRA", label: "Frankfurt (FRA)" },
    { value: "BER", label: "Berlin (BER)" },
    { value: "DUS", label: "Düsseldorf (DUS)" },
    { value: "HAM", label: "Hamburg (HAM)" },
    { value: "STR", label: "Stuttgart (STR)" },
    { value: "any", label: "Egal / noch unklar" },
    { value: "other", label: "Anderer Flughafen" },
  ],
  ru: [
    { value: "", label: "Выберите аэропорт вылета" },
    { value: "MUC", label: "Мюнхен (MUC)" },
    { value: "FRA", label: "Франкфурт (FRA)" },
    { value: "BER", label: "Берлин (BER)" },
    { value: "DUS", label: "Дюссельдорф (DUS)" },
    { value: "HAM", label: "Гамбург (HAM)" },
    { value: "STR", label: "Штутгарт (STR)" },
    { value: "any", label: "Не важно / пока не знаю" },
    { value: "other", label: "Другой аэропорт" },
  ],
};

const hotelStarsOptions: Record<Lang, Options> = {
  de: [
    { value: "", label: "Bitte wählen" },
    { value: "3", label: "3 Sterne" },
    { value: "4", label: "4 Sterne" },
    { value: "5", label: "5 Sterne" },
    { value: "luxury", label: "Luxus / 5+" },
    { value: "any", label: "Egal" },
  ],
  ru: [
    { value: "", label: "Выберите категорию" },
    { value: "3", label: "3 звезды" },
    { value: "4", label: "4 звезды" },
    { value: "5", label: "5 звёзд" },
    { value: "luxury", label: "Luxury / 5+" },
    { value: "any", label: "Не важно" },
  ],
};

const mealPlanOptions: Record<Lang, Options> = {
  de: [
    { value: "", label: "Bitte wählen" },
    { value: "none", label: "Ohne Verpflegung" },
    { value: "BB", label: "Frühstück" },
    { value: "HB", label: "Halbpension" },
    { value: "FB", label: "Vollpension" },
    { value: "AI", label: "All Inclusive" },
    { value: "UAI", label: "Ultra All Inclusive" },
    { value: "any", label: "Egal" },
  ],
  ru: [
    { value: "", label: "Выберите вариант" },
    { value: "none", label: "Без питания" },
    { value: "BB", label: "Завтраки" },
    { value: "HB", label: "Полупансион" },
    { value: "FB", label: "Полный пансион" },
    { value: "AI", label: "Всё включено" },
    { value: "UAI", label: "Ultra All Inclusive" },
    { value: "any", label: "Не важно" },
  ],
};

const budgetOptions: Record<Lang, Options> = {
  de: [
    { value: "", label: "Bitte wählen" },
    { value: "1000-2000", label: "1 000 - 2 000 €" },
    { value: "2000-3000", label: "2 000 - 3 000 €" },
    { value: "3000-5000", label: "3 000 - 5 000 €" },
    { value: "5000-10000", label: "5 000 - 10 000 €" },
    { value: "10000+", label: "10 000+ €" },
  ],
  ru: [
    { value: "", label: "Выберите диапазон" },
    { value: "1000-2000", label: "1 000 - 2 000 €" },
    { value: "2000-3000", label: "2 000 - 3 000 €" },
    { value: "3000-5000", label: "3 000 - 5 000 €" },
    { value: "5000-10000", label: "5 000 - 10 000 €" },
    { value: "10000+", label: "10 000+ €" },
  ],
};

const t = {
  de: {
    sectionContact: "Kontakt",
    sectionTrip: "Reise",
    sectionTravelers: "Reisende",
    sectionHotel: "Unterkunft",
    sectionBudget: "Budget & Status",
    sectionComment: "Kommentar",

    nameLabel: "Vor- und Nachname *",
    namePlaceholder: "Ihr Name",
    emailLabel: "E-Mail *",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    phoneLabel: "WhatsApp / Telefon *",
    cityLabel: "Stadt in Deutschland",
    cityPlaceholder: "z.B. München",

    directionLabel: "Reiseziel",
    vacationTypeLabel: "Art des Urlaubs",
    datesLabel: "Ungefähre Termine *",
    datesPlaceholder: "z.B. Mai 2026",
    dateFlexibilityLabel: "Flexibilität",
    durationLabel: "Dauer (Nächte)",
    durationPlaceholder: "z.B. 7",
    departureLabel: "Abflughafen",

    adultsLabel: "Anzahl Erwachsene",
    childrenCheckbox: "Kinder reisen mit",
    childrenAgesLabel: "Alter der Kinder",
    childrenAgesPlaceholder: "z.B. 5 und 10 Jahre",

    hotelStarsLabel: "Hotelkategorie",
    mealPlanLabel: "Verpflegung",

    budgetLabel: "Budget",
    clientTypeLabel: "Sind Sie unser Kunde? *",
    newClient: "Neukunde",
    existingClient: "Stammkunde",
    newClientNote:
      "Nach dem Absenden werden Sie zur sicheren Zahlung der Kaution von 69,90 € weitergeleitet",

    commentLabel: "Wünsche & Anmerkungen",
    commentPlaceholder:
      "Besondere Wünsche: Allergien, Mobilität, Vorstellungen vom Hotel...",

    consentLabel:
      "Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzerklärung zu *",
    consentLink: "Datenschutz",

    submit: "Anfrage absenden",
    submitting: "Wird gesendet...",
    successTitle: "Anfrage gesendet!",
    successMessage: "Vasilya wird sich in Kürze bei Ihnen melden.",
    errorMessage:
      "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    whatsappButton: "Zu WhatsApp wechseln",

    popupTitle: "Sind Sie Neukunde oder Stammkunde?",
    popupNote:
      "Für Neukunden beginnt die Auswahl nach Einzahlung der erstattbaren Kaution von 69,90 €",

    footerNote:
      "Die Auswahl für neue Reisende beginnt nach Einzahlung der Kaution.",
    faqLink: "Bedingungen in FAQ",
  },
  ru: {
    sectionContact: "Контакт",
    sectionTrip: "Поездка",
    sectionTravelers: "Путешественники",
    sectionHotel: "Размещение",
    sectionBudget: "Бюджет и статус",
    sectionComment: "Комментарий",

    nameLabel: "Имя и фамилия *",
    namePlaceholder: "Ваше имя и фамилия",
    emailLabel: "E-Mail *",
    emailPlaceholder: "Ваш e-mail",
    phoneLabel: "WhatsApp / Телефон *",
    cityLabel: "Город в Германии",
    cityPlaceholder: "Например, Мюнхен",

    directionLabel: "Направление",
    vacationTypeLabel: "Тип отдыха",
    datesLabel: "Примерные даты *",
    datesPlaceholder: "Например, май 2026",
    dateFlexibilityLabel: "Гибкость",
    durationLabel: "Длительность (ночей)",
    durationPlaceholder: "Например, 7",
    departureLabel: "Аэропорт вылета",

    adultsLabel: "Кол-во взрослых",
    childrenCheckbox: "Едут дети",
    childrenAgesLabel: "Возраст детей",
    childrenAgesPlaceholder: "Например, 5 и 10 лет",

    hotelStarsLabel: "Категория отеля",
    mealPlanLabel: "Питание",

    budgetLabel: "Бюджет",
    clientTypeLabel: "Вы наш клиент? *",
    newClient: "Новый клиент",
    existingClient: "Постоянный клиент",
    newClientNote:
      "После отправки вы будете перенаправлены на безопасную оплату депозита 69,90 €",

    commentLabel: "Пожелания и комментарий",
    commentPlaceholder:
      "Особые пожелания: аллергии, мобильность, представления об отеле...",

    consentLabel:
      "Я согласен(на) на обработку персональных данных согласно политике конфиденциальности *",
    consentLink: "Политика",

    submit: "Отправить заявку",
    submitting: "Отправляем...",
    successTitle: "Заявка отправлена!",
    successMessage: "Василя скоро свяжется с вами.",
    errorMessage:
      "Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.",
    whatsappButton: "Перейти в WhatsApp",

    popupTitle: "Вы новый или постоянный клиент?",
    popupNote:
      "Для новых клиентов подбор начинается после внесения возвратного депозита 69,90 €",

    footerNote:
      "Подбор для новых путешественников начинается после внесения депозита.",
    faqLink: "Условия в FAQ",
  },
};

export type RequestFormInitialValues = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  direction?: string;
  vacation_type?: string;
  dates?: string;
  date_flexibility?: string;
  duration?: string;
  departure?: string;
  adults?: string;
  children_ages?: string;
  hotel_stars?: string;
  meal_plan?: string;
  budget?: string;
  comment?: string;
};

export default function RequestForm({
  lang,
  initialValues = {},
}: {
  lang: Lang;
  initialValues?: RequestFormInitialValues;
}) {
  const text = t[lang];

  const [hasChildren, setHasChildren] = useState(
    Boolean(initialValues.children_ages),
  );
  const [clientType, setClientType] = useState<"new" | "existing" | null>(null);
  const [showClientPopup, setShowClientPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const stripeLink =
    lang === "ru"
      ? "https://buy.stripe.com/14AaEZck9ff47k7ecAaAw01"
      : "https://buy.stripe.com/eVqbJ3bg50kafQD7OcaAw02";

  const thankYouHref = lang === "ru" ? "/thank-you" : "/de/thank-you";
  const privacyHref = lang === "ru" ? "/de/datenschutz" : "/de/datenschutz";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!clientType) {
      setShowClientPopup(true);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set("client_type", clientType);
    formData.set("source_lang", lang);
    const data = Object.fromEntries(formData);

    if (clientType === "new") {
      localStorage.setItem("ostwest_form_data", JSON.stringify(data));
      window.location.href = stripeLink;
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
      window.location.href = `${thankYouHref}?type=existing`;
    } catch {
      setSubmitError(true);
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-ocean-deep mb-3">
          {text.successTitle}
        </h3>
        <p className="text-gray-500 mb-6">{text.successMessage}</p>
        <WhatsAppButton>{text.whatsappButton}</WhatsAppButton>
      </div>
    );
  }

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xs font-semibold tracking-wider text-gold uppercase mb-1">
      {children}
    </h3>
  );

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-8"
      >
        {/* Honeypot */}
        <input
          type="text"
          name="_gotcha"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* SECTION: Contact */}
        <div className="space-y-5">
          <SectionLabel>{text.sectionContact}</SectionLabel>

          <div>
            <label
              htmlFor="rf-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {text.nameLabel}
            </label>
            <input
              id="rf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              defaultValue={initialValues.name || ""}
              className={inputClass}
              placeholder={text.namePlaceholder}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="rf-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.emailLabel}
              </label>
              <input
                id="rf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                defaultValue={initialValues.email || ""}
                className={inputClass}
                placeholder={text.emailPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="rf-phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.phoneLabel}
              </label>
              <input
                id="rf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                defaultValue={initialValues.phone || ""}
                className={inputClass}
                placeholder="+49 ..."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="rf-city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {text.cityLabel}
            </label>
            <input
              id="rf-city"
              name="city"
              type="text"
              autoComplete="address-level2"
              defaultValue={initialValues.city || ""}
              className={inputClass}
              placeholder={text.cityPlaceholder}
            />
          </div>
        </div>

        {/* SECTION: Trip */}
        <div className="space-y-5">
          <SectionLabel>{text.sectionTrip}</SectionLabel>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="rf-direction"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.directionLabel}
              </label>
              <select
                id="rf-direction"
                name="direction"
                defaultValue={initialValues.direction || ""}
                className={selectClass}
              >
                {directionOptions[lang].map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="rf-vacation-type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.vacationTypeLabel}
              </label>
              <select
                id="rf-vacation-type"
                name="vacation_type"
                defaultValue={initialValues.vacation_type || ""}
                className={selectClass}
              >
                {vacationTypeOptions[lang].map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="rf-dates"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.datesLabel}
              </label>
              <input
                id="rf-dates"
                name="dates"
                type="text"
                required
                defaultValue={initialValues.dates || ""}
                className={inputClass}
                placeholder={text.datesPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="rf-flex"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.dateFlexibilityLabel}
              </label>
              <select
                id="rf-flex"
                name="date_flexibility"
                defaultValue={initialValues.date_flexibility || ""}
                className={selectClass}
              >
                {dateFlexibilityOptions[lang].map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="rf-duration"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.durationLabel}
              </label>
              <input
                id="rf-duration"
                name="duration"
                type="number"
                min="1"
                max="60"
                defaultValue={initialValues.duration || ""}
                className={inputClass}
                placeholder={text.durationPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="rf-departure"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.departureLabel}
              </label>
              <select
                id="rf-departure"
                name="departure"
                defaultValue={initialValues.departure || ""}
                className={selectClass}
              >
                {departureOptions[lang].map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* SECTION: Travelers */}
        <div className="space-y-5">
          <SectionLabel>{text.sectionTravelers}</SectionLabel>

          <div>
            <label
              htmlFor="rf-adults"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {text.adultsLabel}
            </label>
            <input
              id="rf-adults"
              name="adults"
              type="number"
              min="1"
              max="20"
              defaultValue={initialValues.adults || "2"}
              className={inputClass}
            />
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={hasChildren}
                onChange={(e) => setHasChildren(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold"
              />
              <span className="text-sm text-gray-700">
                {text.childrenCheckbox}
              </span>
            </label>
            {hasChildren && (
              <div className="mt-3">
                <label
                  htmlFor="rf-children-ages"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {text.childrenAgesLabel}
                </label>
                <input
                  id="rf-children-ages"
                  name="children_ages"
                  type="text"
                  defaultValue={initialValues.children_ages || ""}
                  className={inputClass}
                  placeholder={text.childrenAgesPlaceholder}
                />
              </div>
            )}
          </div>
        </div>

        {/* SECTION: Hotel */}
        <div className="space-y-5">
          <SectionLabel>{text.sectionHotel}</SectionLabel>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="rf-stars"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.hotelStarsLabel}
              </label>
              <select
                id="rf-stars"
                name="hotel_stars"
                defaultValue={initialValues.hotel_stars || ""}
                className={selectClass}
              >
                {hotelStarsOptions[lang].map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="rf-meal"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.mealPlanLabel}
              </label>
              <select
                id="rf-meal"
                name="meal_plan"
                defaultValue={initialValues.meal_plan || ""}
                className={selectClass}
              >
                {mealPlanOptions[lang].map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* SECTION: Budget & Status */}
        <div className="space-y-5">
          <SectionLabel>{text.sectionBudget}</SectionLabel>

          <div>
            <label
              htmlFor="rf-budget"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {text.budgetLabel}
            </label>
            <select
              id="rf-budget"
              name="budget"
              defaultValue={initialValues.budget || ""}
              className={selectClass}
            >
              {budgetOptions[lang].map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {text.clientTypeLabel}
            </label>
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
              <p className="mt-2 text-xs text-gray-400">{text.newClientNote}</p>
            )}
          </div>
        </div>

        {/* SECTION: Comment */}
        <div className="space-y-5">
          <SectionLabel>{text.sectionComment}</SectionLabel>

          <div>
            <label
              htmlFor="rf-comment"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {text.commentLabel}
            </label>
            <textarea
              id="rf-comment"
              name="comment"
              rows={4}
              defaultValue={initialValues.comment || ""}
              className={textareaClass}
              placeholder={text.commentPlaceholder}
            />
          </div>
        </div>

        {/* GDPR consent */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            {text.consentLabel}{" "}
            <a
              href={privacyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark underline"
            >
              ({text.consentLink})
            </a>
          </span>
        </label>

        {submitError && (
          <p className="text-sm text-red-600 text-center">{text.errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 bg-gradient-to-r from-gold to-gold-light text-ocean-deep rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all gold-glow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          )}
          {isSubmitting ? text.submitting : text.submit}
        </button>

        <p className="text-xs text-gray-400 text-center">
          {text.footerNote}{" "}
          <a
            href={lang === "ru" ? "/#faq-deposit-why" : "/de/#faq-deposit-why"}
            className="text-gold hover:text-gold-dark underline"
          >
            {text.faqLink}
          </a>
          .
        </p>
      </form>

      {showClientPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowClientPopup(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-ocean-deep mb-2">
              {text.popupTitle}
            </h3>
            <p className="text-sm text-gray-500 mb-5">{text.popupNote}</p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setClientType("new");
                  setShowClientPopup(false);
                  setTimeout(() => formRef.current?.requestSubmit(), 0);
                }}
                className="w-full h-12 rounded-xl border-2 border-gold bg-gold/10 text-gold font-semibold hover:bg-gold/20 transition-all"
              >
                {text.newClient}
              </button>
              <button
                onClick={() => {
                  setClientType("existing");
                  setShowClientPopup(false);
                  setTimeout(() => formRef.current?.requestSubmit(), 0);
                }}
                className="w-full h-12 rounded-xl border border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-all"
              >
                {text.existingClient}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
