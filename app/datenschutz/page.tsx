import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutz | AK Crystal Clean',
  description: 'Datenschutzerklärung der AK Crystal Clean GMBH',
};

export default function DatenschutzPage() {
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="mx-auto w-full px-[5%] py-16 lg:w-[1071px] lg:px-[82px]">
        <h1 className="font-cooper-hewitt text-theme-text mb-4 text-4xl leading-tight font-semibold tracking-tight">
          Datenschutzerklärung
        </h1>
        <p className="font-instrument-sans text-theme-text/80 mb-12 text-sm leading-relaxed">
          Stand: Juli 2026
        </p>

        <div className="font-instrument-sans text-theme-text flex flex-col gap-10 text-base leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <address className="not-italic">
              AK Crystal Clean GMBH
              <br />
              Schießbergstraße 9A
              <br />
              63584 Gründau
              <br />
              Deutschland
            </address>
            <p>
              Kontakt über das{' '}
              <Link href="/#contact-form" className="underline hover:opacity-80">
                Kontaktformular
              </Link>{' '}
              auf dieser Website.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">2. Allgemeine Hinweise</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten
              personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur
              Bearbeitung Ihrer Anfragen und zur Erfüllung gesetzlicher Pflichten erforderlich ist.
              Die Rechtsgrundlagen ergeben sich insbesondere aus Art. 6 Abs. 1 DSGVO.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">
              3. Hosting und Server-Logfiles
            </h2>
            <p>
              Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch
              Informationen in sogenannten Server-Logfiles erfasst. Dazu können gehören:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>aufgerufene Seite / URL</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt zur Sicherstellung eines störungsfreien Betriebs, zur
              IT-Sicherheit und zur technischen Administration (Art. 6 Abs. 1 lit. f DSGVO). Die
              Logdaten werden nur so lange gespeichert, wie es für diese Zwecke erforderlich ist.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">4. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die von
              Ihnen angegebenen Daten, insbesondere:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (falls angegeben)</li>
              <li>Nachricht bzw. ausgewählte Leistungen</li>
              <li>technische Angaben zur Anfrage (z.&nbsp;B. Seitenpfad, Übermittlungs-ID)</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur möglichen Anbahnung
              eines Vertragsverhältnisses (Art. 6 Abs. 1 lit. b DSGVO) sowie auf Grundlage Ihrer
              Einwilligung, soweit Sie der Datenschutzrichtlinie im Formular zustimmen (Art. 6 Abs.
              1 lit. a DSGVO). Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die
              Zukunft widerrufen.
            </p>
            <p>
              Die Daten werden nur so lange gespeichert, wie es zur Bearbeitung der Anfrage und zur
              Dokumentation der Kommunikation erforderlich ist, sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">
              5. E-Mail-Versand (Resend)
            </h2>
            <p>
              Zur Übermittlung von Bestätigungs- und Anfrage-E-Mails nutzen wir den Dienst Resend
              (Resend, Inc.). Dabei werden die für den Versand erforderlichen Daten (insbesondere
              Name, E-Mail-Adresse und Inhalt Ihrer Anfrage) an Resend übermittelt.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung / Bearbeitung Ihrer
              Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen
              E-Mail-Zustellung). Weitere Informationen finden Sie in der Datenschutzerklärung von
              Resend:{' '}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                https://resend.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">
              6. Google reCAPTCHA
            </h2>
            <p>
              Zum Schutz unserer Kontaktformulare vor Spam und Missbrauch setzen wir Google
              reCAPTCHA v3 der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland („Google“) ein.
            </p>
            <p>
              reCAPTCHA analysiert das Verhalten von Website-Besuchern anhand verschiedener
              Informationen (z.&nbsp;B. IP-Adresse, Verweildauer, Mausbewegungen, Geräte- und
              Browserdaten). Dabei kann Google Cookies setzen bzw. Informationen auf Ihrem Endgerät
              speichern. Die Analyse beginnt bereits beim Laden der Seite, auf der reCAPTCHA
              eingebunden ist.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses am Schutz der
              Website vor automatisierten Angriffen und Spam (Art. 6 Abs. 1 lit. f DSGVO) sowie –
              soweit erforderlich – Ihrer Einwilligung im Kontaktformular (Art. 6 Abs. 1 lit. a
              DSGVO).
            </p>
            <p>
              Weitere Informationen:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Datenschutzbestimmungen von Google
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Nutzungsbedingungen von Google
                </a>
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">7. Cookies</h2>
            <p>
              Diese Website kann technisch notwendige Cookies sowie Cookies bzw. ähnliche
              Technologien im Zusammenhang mit Google reCAPTCHA verwenden. Soweit Cookies nicht für
              den Betrieb der Website zwingend erforderlich sind, setzen wir sie nur auf Grundlage
              einer Einwilligung bzw. unseres berechtigten Interesses gemäß Art. 6 Abs. 1 DSGVO ein.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">8. Ihre Rechte</h2>
            <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte können Sie uns über das{' '}
              <Link href="/#contact-form" className="underline hover:opacity-80">
                Kontaktformular
              </Link>{' '}
              erreichen. Zudem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
              beschweren.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">
              9. Speicherdauer
            </h2>
            <p>
              Sofern in den vorstehenden Abschnitten keine speziellere Speicherdauer genannt wurde,
              speichern wir personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke
              erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">
              10. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Website,
              eingesetzte Dienste oder rechtliche Anforderungen ändern. Die jeweils aktuelle Fassung
              finden Sie stets auf dieser Seite.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
