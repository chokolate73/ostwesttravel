import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - OST-West Travel',
  description: 'Datenschutzerklärung von Ost-West Logistik & Travel e.K.',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header bar */}
      <div className="bg-ocean-deep text-white">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-serif hover:text-gold transition-colors">
            OST-West <span className="text-gold">Travel</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            На главную
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-10">Datenschutzerklärung</h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">1. Datenschutz auf einen Blick</h2>
            <p className="mb-3">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Websites besuchen.
            </p>
            <p className="mb-3">Diese Datenschutzerklärung gilt für folgende Websites:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>www.touragent.de</li>
              <li>www.ostwesttravel.de</li>
              <li>www.ost-west-reisen-koeln.de</li>
            </ul>
            <p>Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">2. Verantwortlicher</h2>
            <p className="mb-3">
              Verantwortlicher für die Datenverarbeitung auf diesen Websites im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              Ost-West Logistik &amp; Travel e.K.<br />
              Vasilya Nigmatova<br />
              Franz-Xaver-Mauer-Str. 34<br />
              50374 Erftstadt<br />
              Deutschland
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">3. Datenerfassung beim Besuch unserer Websites</h2>
            <p className="mb-3">
              Beim Aufrufen unserer Websites werden automatisch Informationen durch den Hostinganbieter in sogenannten Server-Logfiles gespeichert.
            </p>
            <p className="mb-2">Erfasst werden können insbesondere:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>
            <p className="mb-2">
              Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Websites sowie zur Verbesserung unseres Angebots ausgewertet.
            </p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">4. Hosting</h2>
            <p>
              Unsere Websites werden bei einem externen Hostinganbieter betrieben. Der Hostinganbieter verarbeitet personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Vorgaben und zur technischen Bereitstellung der Website.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">5. Cookies</h2>
            <p className="mb-2">Unsere Websites verwenden Cookies.</p>
            <p className="mb-2">
              Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">6. Google Analytics</h2>
            <p className="mb-3">Diese Websites nutzen Funktionen des Webanalysedienstes Google Analytics.</p>
            <p className="mb-3">
              Anbieter ist:<br />
              Google Ireland Limited<br />
              Gordon House, Barrow Street<br />
              Dublin 4, Irland
            </p>
            <p className="mb-2">
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch Cookies erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert.
            </p>
            <p className="mb-2">Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
            <p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern.</p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">7. Facebook / Meta</h2>
            <p className="mb-3">Auf unseren Websites können Funktionen des sozialen Netzwerks Facebook integriert sein.</p>
            <p className="mb-3">
              Anbieter ist:<br />
              Meta Platforms Ireland Ltd.<br />
              4 Grand Canal Square<br />
              Dublin 2, Irland
            </p>
            <p>
              Wenn Sie unsere Seiten besuchen, kann über das Plugin eine direkte Verbindung zwischen Ihrem Browser und den Servern von Facebook hergestellt werden.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">8. Google Maps</h2>
            <p className="mb-3">Unsere Websites können Karten des Dienstes Google Maps verwenden.</p>
            <p className="mb-3">
              Anbieter ist:<br />
              Google Ireland Limited<br />
              Gordon House, Barrow Street<br />
              Dublin 4, Irland
            </p>
            <p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.</p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">9. Kommunikation über WhatsApp</h2>
            <p className="mb-3">Sie haben die Möglichkeit, über den Messenger-Dienst WhatsApp mit uns in Kontakt zu treten.</p>
            <p className="mb-3">
              Anbieter ist:<br />
              WhatsApp Ireland Limited<br />
              4 Grand Canal Square<br />
              Dublin 2, Irland
            </p>
            <p>
              Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Telefonnummer und weitere von Ihnen bereitgestellte Daten zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">10. Zahlungsdienstleister PayPal</h2>
            <p className="mb-3">Auf unseren Websites kann die Möglichkeit bestehen, Zahlungen über den Zahlungsdienstleister PayPal abzuwickeln.</p>
            <p className="mb-3">
              Anbieter ist:<br />
              PayPal (Europe) S.à r.l. et Cie, S.C.A.<br />
              22-24 Boulevard Royal<br />
              L-2449 Luxemburg
            </p>
            <p>Wenn Sie mit PayPal bezahlen, werden die von Ihnen eingegebenen Zahlungsdaten an PayPal übermittelt.</p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">11. Stripe</h2>
            <p className="mb-3">Auf unseren Websites kann die Möglichkeit bestehen, Zahlungen über den Zahlungsdienstleister Stripe abzuwickeln.</p>
            <p className="mb-3">
              Anbieter ist:<br />
              Stripe Payments Europe, Limited<br />
              1 Grand Canal Street Lower<br />
              Grand Canal Dock, Dublin, Irland
            </p>
            <p className="mb-2">
              Wenn Sie eine Zahlung über Stripe vornehmen, werden Ihre Zahlungsdaten sowie weitere zur Zahlungsabwicklung erforderliche Daten an Stripe übermittelt. Hierzu können insbesondere Name, E-Mail-Adresse, Rechnungsdaten, Zahlungsdaten, IP-Adresse sowie transaktionsbezogene Daten gehören.
            </p>
            <p className="mb-2">
              Die Verarbeitung erfolgt zum Zweck der Zahlungsabwicklung und auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie, soweit erforderlich, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an einer sicheren und effizienten Zahlungsabwicklung sowie der Verhinderung von Betrug.
            </p>
            <p>Weitere Informationen zur Datenverarbeitung durch Stripe finden Sie in den Datenschutzhinweisen von Stripe.</p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">12. Newsletter</h2>
            <p className="mb-2">
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind.
            </p>
            <p className="mb-2">Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen.</p>
            <p>Sie können den Newsletter jederzeit abbestellen.</p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">13. Kontaktaufnahme</h2>
            <p className="mb-2">
              Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zum Zweck der Bearbeitung Ihrer Anfrage gespeichert.
            </p>
            <p>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">14. Ihre Rechte</h2>
            <p className="mb-2">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Einschränkung der Verarbeitung zu verlangen</li>
              <li>der Verarbeitung Ihrer Daten zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
            <p>Darüber hinaus haben Sie ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.</p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-3">15. Cookie-Einwilligung (Consent Management)</h2>
            <p className="mb-2">
              Unsere Websites verwenden ein Consent-Management-Tool zur Einholung und Verwaltung von Einwilligungen für den Einsatz von Cookies und ähnlichen Technologien.
            </p>
            <p className="mb-2">
              Beim ersten Besuch unserer Websites wird Ihnen ein Cookie-Banner angezeigt, über das Sie Ihre Einwilligung zu verschiedenen Kategorien von Cookies erteilen oder ablehnen können.
            </p>
            <p>
              Ihre Auswahl wird gespeichert, damit Ihre Einstellungen bei zukünftigen Besuchen unserer Websites berücksichtigt werden. Sie können Ihre Einwilligung jederzeit ändern oder widerrufen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
