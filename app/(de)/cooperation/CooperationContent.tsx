'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CooperationContent() {
  return (
    <>
      {/* HERO */}
      <div className="bg-ocean-deep px-6 sm:px-10 pt-16 sm:pt-20 pb-24 sm:pb-28 text-center relative overflow-hidden">
        <div className="absolute top-[-40%] left-[10%] w-[80%] h-[180%] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.2),transparent)]" />

        <ScrollReveal>
          <span className="inline-block text-[0.72rem] tracking-[3.5px] uppercase text-gold border border-gold/25 px-5 py-[7px] rounded-full font-medium mb-7">
            Partnerschaft
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-serif text-white font-bold leading-[1.25] max-w-[720px] mx-auto mb-6 text-[clamp(2rem,4.5vw,3.2rem)]">
            Zusammenarbeit mit{' '}
            <em className="text-gold not-italic">Marken und Projekten</em> im
            Reisebereich
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-[1.08rem] text-[#b8c4d4] max-w-[560px] mx-auto leading-[1.75] font-light">
            Ich arbeite mit Unternehmen zusammen, die meinen Qualitätsanspruch
            teilen – und empfehle nur das, wovon ich persönlich überzeugt bin.
          </p>
        </ScrollReveal>
      </div>

      {/* STATS */}
      <ScrollReveal className="relative z-10">
        <div className="flex flex-col sm:flex-row justify-center max-w-[740px] mx-auto -mt-[52px] bg-white rounded-xl shadow-[0_10px_50px_rgba(12,35,64,0.12)] overflow-hidden mx-6 sm:mx-auto">
          <StatItem number="23K" accent="+" label="Follower" sublabel="auf Instagram" />
          <StatItem number="18" label="Jahre Erfahrung" sublabel="im Tourismus" />
          <StatItem number="2–3" label="Gruppenreisen" sublabel="pro Jahr" last />
        </div>
      </ScrollReveal>

      {/* AUDIENCE */}
      <section className="max-w-[920px] mx-auto px-6 sm:px-10 pt-20 pb-10">
        <ScrollReveal>
          <p className="text-[0.72rem] tracking-[2.5px] uppercase text-gold-dark font-semibold mb-3">
            Meine Zielgruppe
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-serif text-ocean-deep font-bold leading-[1.3] mb-4 text-[clamp(1.6rem,3vw,2.2rem)]">
            Wen ich zu Partnern bringe
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-[1.05rem] text-[#4a4a4a] max-w-[640px] leading-[1.75]">
            Russisch- und deutschsprachige Familien und Paare in Deutschland,
            Österreich und der Schweiz – mit hohem Einkommen und der Gewohnheit,
            2–3 Mal im Jahr zu reisen.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-9">
          <ScrollReveal delay={100}>
            <AudienceCard
              num="01"
              title="Familien mit Kindern"
              text="Suchen geprüfte Hotels, sichere Strände und einfache Logistik. Bereit, für Komfort zu zahlen."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <AudienceCard
              num="02"
              title="Paare 30–50 Jahre"
              text="Buchen Premium-Kabinen, romantische Resorts und individuelle Routen."
            />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <AudienceCard
              num="03"
              title="Kreuzfahrt-Liebhaber"
              text="Kommen jede Saison in die Gruppen zurück. AIDA, MSC, Costa, Mein Schiff – kennen die Flotte."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FORMATS */}
      <div className="bg-ocean-deep px-6 sm:px-10 py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.15),transparent)]" />
        <div className="max-w-[920px] mx-auto">
          <ScrollReveal>
            <p className="text-[0.72rem] tracking-[2.5px] uppercase text-gold font-semibold mb-3">
              Formate
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-serif text-white font-bold leading-[1.3] mb-4 text-[clamp(1.6rem,3vw,2.2rem)]">
              Wie wir zusammenarbeiten können
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-[1.05rem] text-[#b8c4d4] max-w-[640px] leading-[1.75]">
              Jedes Format wird an die Aufgaben des Partners angepasst. Immer
              nativ und mit Rücksicht auf die Zielgruppe.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <ScrollReveal delay={100}>
              <FormatCard
                num="01"
                title="Instagram-Integration"
                text="Story-Serie, Reel, Beitragsbewertung oder gemeinsamer Livestream. Native Präsentation mit meiner persönlichen Erfahrung."
                tag="Content"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <FormatCard
                num="02"
                title="Teilnahme an Gruppenreisen"
                text="Ihre Marke – Teil der Reise: Welcome-Pakete, Aktivitäten an Bord, exklusive Angebote für die Gruppe."
                tag="Offline"
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <FormatCard
                num="03"
                title="Gemeinsame Projekte"
                text="Kooperationen mit Hotels, Resorts und Reisediensten – von Testreisen bis zur langfristigen Partnerschaft."
                tag="Strategie"
              />
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <FormatCard
                num="04"
                title="Produktempfehlungen"
                text="Versicherungen, Reisezubehör, Kinderprodukte – das, was ich selbst nutze und ehrlich empfehlen kann."
                tag="Produkt"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* IDEAL PARTNER */}
      <section className="max-w-[920px] mx-auto px-6 sm:px-10 py-20">
        <ScrollReveal>
          <p className="text-[0.72rem] tracking-[2.5px] uppercase text-gold-dark font-semibold mb-3">
            Wen ich suche
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-serif text-ocean-deep font-bold leading-[1.3] mb-7 text-[clamp(1.6rem,3vw,2.2rem)]">
            Mein idealer Partner
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          <ScrollReveal direction="left" delay={100}>
            <IdealItem>
              <strong className="text-ocean-deep font-semibold">
                Premium-Hotels und Resorts
              </strong>{' '}
              – besonders Familien- und Romantikformate, Malediven, Karibik,
              Mittelmeer
            </IdealItem>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={200}>
            <IdealItem>
              <strong className="text-ocean-deep font-semibold">
                Kreuzfahrtunternehmen
              </strong>{' '}
              – AIDA, MSC, Costa, TUI Cruises und andere Linien, mit denen ich
              arbeite
            </IdealItem>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={300}>
            <IdealItem>
              <strong className="text-ocean-deep font-semibold">
                Versicherungsunternehmen
              </strong>{' '}
              – Reiseversicherungen, die wirklich im Ausland funktionieren
            </IdealItem>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={350}>
            <IdealItem>
              <strong className="text-ocean-deep font-semibold">
                Lifestyle- und Reisemarken
              </strong>{' '}
              – Zubehör, Gepäck, Kinderprodukte für Reisen
            </IdealItem>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <IdealItem>
              <strong className="text-ocean-deep font-semibold">
                Reisedienste
              </strong>{' '}
              – Ausflüge, Transfers, Apps für Reisende
            </IdealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* PRINCIPLE / QUOTE */}
      <ScrollReveal className="max-w-[920px] mx-auto px-6 sm:px-10 mb-16">
        <div className="bg-ocean-deep rounded-xl px-8 sm:px-[52px] py-12 relative border border-gold/[0.12] overflow-hidden">
          <span className="absolute -top-4 left-5 font-serif text-[8rem] text-gold opacity-10 leading-none pointer-events-none select-none">
            &laquo;
          </span>
          <div className="absolute top-[-50%] right-[-20%] w-1/2 h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)] pointer-events-none" />

          <p className="font-serif text-white text-lg sm:text-xl leading-[1.7] italic relative z-10">
            Ich empfehle nur Projekte und Marken, die meiner Zielgruppe
            wirklich nützlich sein können – und die ich persönlich für
            würdig halte. Das ist keine Werbeplattform, sondern ein Raum
            des Vertrauens.
          </p>
          <span className="block mt-[18px] text-gold text-sm relative z-10">
            — Vasilya Nigmatova
          </span>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <div className="bg-ocean-deep text-center px-6 sm:px-10 py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.15),transparent)]" />
        <ScrollReveal>
          <h2 className="font-serif text-white font-bold mb-3.5 text-[clamp(1.5rem,3vw,2rem)]">
            Lassen Sie uns über eine Zusammenarbeit sprechen
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-[#b8c4d4] mb-9 text-base">
            Schreiben Sie mir – erzählen Sie von Ihrem Projekt und ich
            antworte innerhalb von 1–2 Werktagen.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <a
            href="mailto:info@ostwesttravel.de?subject=Kooperationsanfrage"
            className="inline-block bg-gradient-to-br from-gold to-gold-light text-ocean-deep font-semibold text-base px-11 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.35),0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-0.5 tracking-wide"
          >
            Anfrage senden
          </a>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="text-xs text-white/30 mt-4">
            oder per WhatsApp: +49 163 175 9956
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}

/* ── Sub-components ── */

function StatItem({
  number,
  accent,
  label,
  sublabel,
  last,
}: {
  number: string;
  accent?: string;
  label: string;
  sublabel: string;
  last?: boolean;
}) {
  return (
    <div className={`flex-1 text-center py-7 px-[18px] relative ${!last ? 'stat-divider' : ''}`}>
      <div className="font-serif text-[2.1rem] font-bold text-ocean-deep leading-none">
        {number}
        {accent && <span className="text-gold">{accent}</span>}
      </div>
      <div className="text-xs text-[#4a4a4a] mt-2 leading-snug">
        {label}
        <br />
        {sublabel}
      </div>
    </div>
  );
}

function AudienceCard({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-xl p-7 border border-ocean-deep/[0.06] transition-all hover:shadow-[0_6px_28px_rgba(12,35,64,0.08)] hover:-translate-y-[3px] h-full">
      <div className="font-serif text-[2rem] text-gold opacity-25 font-bold leading-none mb-3">
        {num}
      </div>
      <h4 className="font-serif text-ocean-deep text-[1.05rem] font-semibold mb-2">
        {title}
      </h4>
      <p className="text-sm text-[#4a4a4a] leading-relaxed">{text}</p>
    </div>
  );
}

function FormatCard({
  num,
  title,
  text,
  tag,
}: {
  num: string;
  title: string;
  text: string;
  tag: string;
}) {
  return (
    <div className="bg-ocean-medium border border-gold/10 rounded-xl px-7 py-8 transition-all hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] h-full">
      <div className="font-serif text-[2rem] text-gold opacity-30 font-bold leading-none mb-4">
        {num}
      </div>
      <h4 className="font-serif text-white text-[1.1rem] font-semibold mb-2.5">
        {title}
      </h4>
      <p className="text-sm text-[#b8c4d4] leading-relaxed">{text}</p>
      <span className="inline-block mt-4 text-[0.7rem] tracking-[1.2px] uppercase text-gold bg-gold/10 px-3.5 py-[5px] rounded-full font-medium">
        {tag}
      </span>
    </div>
  );
}

function IdealItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 px-6 py-5 bg-white rounded-[10px] border-l-[3px] border-l-gold transition-all hover:shadow-[0_4px_18px_rgba(12,35,64,0.06)] hover:translate-x-1">
      <span className="text-gold-dark text-base mt-0.5 shrink-0">&#10022;</span>
      <p className="text-[0.95rem] text-[#1a1a1a] leading-relaxed">{children}</p>
    </div>
  );
}
