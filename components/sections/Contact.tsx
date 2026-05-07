"use client";

import { useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
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

const t = {
  de: {
    sectionLabel: "Anfrage",
    sectionTitle: "In wenigen Schritten zur Reise",
    sectionSubtitle:
      "Hinterlassen Sie 4 Angaben — auf der nächsten Seite können Sie weitere Details ergänzen",
    nameLabel: "Vor- und Nachname *",
    namePlaceholder: "Ihr Name",
    phoneLabel: "WhatsApp / Telefon *",
    phonePlaceholder: "+49 ...",
    directionLabel: "Reiseziel *",
    datesLabel: "Ungefähre Termine",
    datesPlaceholder: "z.B. Mai 2026",
    submit: "Weiter zur vollständigen Anfrage",
    submitArrow: "→",
    privacy:
      "Mit dem Klick stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage zu.",
  },
  ru: {
    sectionLabel: "Запрос на подбор",
    sectionTitle: "В несколько шагов к вашему путешествию",
    sectionSubtitle:
      "Оставьте 4 поля — на следующей странице можно дополнить детали",
    nameLabel: "Имя и фамилия *",
    namePlaceholder: "Ваше имя",
    phoneLabel: "WhatsApp / Телефон *",
    phonePlaceholder: "+49 ...",
    directionLabel: "Направление *",
    datesLabel: "Примерные даты",
    datesPlaceholder: "Например, май 2026",
    submit: "Продолжить заполнение",
    submitArrow: "→",
    privacy:
      "Нажимая, вы соглашаетесь на обработку данных для оформления заявки.",
  },
};

const inputClass =
  "w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors";

export default function Contact({ lang = "ru" }: { lang?: Lang }) {
  const [direction, setDirection] = useState("");
  const text = t[lang];
  const directionOptions = lang === "de" ? directionOptionsDe : directionOptionsRu;
  const targetPath = lang === "ru" ? "/zayavka" : "/de/anfrage";

  // Pre-fill direction from URL params or hash, same as before
  useEffect(() => {
    function readDirection() {
      const params = new URLSearchParams(window.location.search);
      const dir = params.get("direction");
      if (dir) {
        setDirection(dir);
        return;
      }
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      const v = String(value).trim();
      if (v) params.set(key, v);
    });
    window.location.href = `${targetPath}?${params.toString()}`;
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-gray-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          label={text.sectionLabel}
          title={text.sectionTitle}
          subtitle={text.sectionSubtitle}
          headingId="contact-heading"
        />

        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label
                htmlFor="c-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.nameLabel}
              </label>
              <input
                id="c-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
                placeholder={text.namePlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor="c-phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {text.phoneLabel}
              </label>
              <input
                id="c-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={inputClass}
                placeholder={text.phonePlaceholder}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="c-direction"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {text.directionLabel}
                </label>
                <select
                  id="c-direction"
                  name="direction"
                  required
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                  className={`${inputClass} bg-white`}
                >
                  {directionOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="c-dates"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {text.datesLabel}
                </label>
                <input
                  id="c-dates"
                  name="dates"
                  type="text"
                  className={inputClass}
                  placeholder={text.datesPlaceholder}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-gold to-gold-light text-ocean-deep rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all gold-glow"
            >
              {text.submit}
              <span aria-hidden="true">{text.submitArrow}</span>
            </button>

            <p className="text-xs text-gray-400 text-center">{text.privacy}</p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
