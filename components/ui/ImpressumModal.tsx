'use client';

import { useEffect, useRef } from 'react';

interface ImpressumModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ open, onClose }: ImpressumModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="fixed inset-0 z-50 w-full max-w-2xl mx-auto my-8 md:my-16 p-0 rounded-2xl bg-white shadow-2xl backdrop:bg-black/60 open:flex open:flex-col max-h-[90vh]"
    >
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-ocean-deep">Impressum</h2>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Schließen"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="overflow-y-auto p-5 md:p-8 text-sm text-gray-700 leading-relaxed space-y-6">
        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Angaben gemäß § 5 TMG</h3>
          <p>
            Ost-West Logistik &amp; Travel e.K.<br />
            Franz-Xaver-Mauer-Str. 34<br />
            50374 Erftstadt<br />
            Deutschland
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Kontakt</h3>
          <ul className="space-y-1">
            <li>Telefon: <a href="tel:+4922127253591" className="text-gold hover:underline">+49 221 2725 3591</a></li>
            <li>Handy: <a href="tel:+491631759956" className="text-gold hover:underline">+49 163 175 9956</a></li>
            <li>WhatsApp: <a href="https://wa.me/491631759956" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">+49 163 175 9956</a></li>
            <li>E-Mail: <a href="mailto:info@ostwesttravel.de" className="text-gold hover:underline">info@ostwesttravel.de</a></li>
            <li>Instagram: <a href="https://instagram.com/touragent.de" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">@touragent.de</a></li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h3>
          <p>Vasilya Nigmatova</p>
        </section>

        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Registereintrag</h3>
          <p>
            Eintragung im Handelsregister<br />
            Registergericht: Amtsgericht Köln<br />
            Registernummer: HRA 27729<br />
            Steuernummer: 224/5185/5676
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Umsatzsteuer-ID</h3>
          <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE340001987</p>
        </section>

        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Berufsrechtliche Regelungen</h3>
          <p>
            Betriebsleiterin: Vasilya Nigmatova, Reiseverkehrskauffrau (Bundesrepublik Deutschland)<br />
            Zuständige Kammer: Industrie- und Handelskammer zu Köln, Unter Sachsenhausen 10–26, 50667 Köln
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Haftung für Inhalte</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Haftung für Links</h3>
          <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-ocean-deep mb-2">Urheberrecht</h3>
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
          <h3 className="font-semibold text-ocean-deep mb-2">Bildnachweise</h3>
          <p>
            Ein Teil der auf dieser Website verwendeten Bilder stammt von externen Bilddatenbanken (z.&nbsp;B. Adobe Stock) und unterliegt den jeweiligen Lizenzbedingungen der Anbieter.
          </p>
        </section>
      </div>
    </dialog>
  );
}
