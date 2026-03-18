import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum - OST-West Travel',
  description: 'Impressum und rechtliche Angaben von Ost-West Logistik & Travel e.K.',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header bar */}
      <div className="bg-ocean-deep text-white">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-serif hover:text-gold transition-colors">
            OST-West <span className="text-gold">Travel</span>
          </Link>
          <Link
            href="/#footer"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Zurück
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-10">Impressum</h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Ost-West Logistik &amp; Travel e.K.<br />
              Franz-Xaver-Mauer-Str. 34<br />
              50374 Erftstadt<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Kontakt</h2>
            <ul className="space-y-1">
              <li>Telefon: <a href="tel:+4922127253591" className="text-gold hover:underline">+49 221 2725 3591</a></li>
              <li>Handy: <a href="tel:+491631759956" className="text-gold hover:underline">+49 163 175 9956</a></li>
              <li>WhatsApp: <a href="https://wa.me/491631759956" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">+49 163 175 9956</a></li>
              <li>E-Mail: <a href="mailto:info@ostwesttravel.de" className="text-gold hover:underline">info@ostwesttravel.de</a></li>
              <li>Instagram: <a href="https://instagram.com/touragent.de" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">@touragent.de</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
            <p>Vasilya Nigmatova</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Köln<br />
              Registernummer: HRA 27729<br />
              Steuernummer: 224/5185/5676
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE340001987</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Berufsrechtliche Regelungen</h2>
            <p>
              Betriebsleiterin: Vasilya Nigmatova, Reiseverkehrskauffrau (Bundesrepublik Deutschland)<br />
              Zuständige Kammer: Industrie- und Handelskammer zu Köln, Unter Sachsenhausen 10–26, 50667 Köln
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Haftung für Inhalte</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Haftung für Links</h2>
            <p>
              Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
            </p>
            <p className="mt-2">
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="mt-2">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ocean-deep mb-2">Bildnachweise</h2>
            <p>
              Ein Teil der auf dieser Website verwendeten Bilder stammt von externen Bilddatenbanken (z.&nbsp;B. Adobe Stock) und unterliegt den jeweiligen Lizenzbedingungen der Anbieter.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
