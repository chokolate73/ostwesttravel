'use client';

export default function CooperationContent() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 md:py-16 pb-24 md:pb-32">
      <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-10">
        Zusammenarbeit mit Marken
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="font-semibold">
          Ich bin offen für Kooperationen mit Marken, Hotels und touristischen Projekten.
        </p>

        <p>
          Wenn Ihr Unternehmen im Bereich Reisen, Lifestyle oder Gastfreundschaft tätig ist und Sie an einer Zusammenarbeit interessiert sind - freue ich mich, mögliche Formate zu besprechen.
        </p>

        <div>
          <p className="font-semibold mb-3">Partnerschaftsformate:</p>
          <ul className="list-disc list-inside space-y-1.5 ml-1">
            <li>gemeinsame Reisen und Projekte</li>
            <li>native Integrationen in sozialen Netzwerken</li>
            <li>Zusammenarbeit mit Hotels und Resorts</li>
            <li>Partnerprojekte mit Reisemarken</li>
            <li>Markenbeteiligung an Gruppenreisen</li>
          </ul>
        </div>

        <p className="font-medium text-ocean-deep">
          Ich berücksichtige nur Projekte und Marken, die für meine Zielgruppe wirklich interessant sein können. Und die ich persönlich für empfehlenswert halte.
        </p>

        <div className="pt-4">
          <a
            href="mailto:info@ostwesttravel.de?subject=Kooperationsanfrage"
            className="inline-block bg-gradient-to-br from-gold to-gold-light text-ocean-deep font-semibold text-base px-8 py-3.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 text-center"
          >
            Kooperationsvorschlag senden
          </a>
        </div>
      </div>
    </div>
  );
}
