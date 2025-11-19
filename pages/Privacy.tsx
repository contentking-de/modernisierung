import React from 'react';

const Privacy: React.FC = () => {
  return (
    <main className="flex-grow bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold text-brand-dark mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-3">1. Zugriffsdaten und Hosting</h2>
              <p>
                Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-3">2. Datenerhebung und -verwendung</h2>
              <p>
                Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen einer Kontaktaufnahme (z.B. per Kontaktformular oder E-Mail) oder bei der Nutzung unseres Kreditrechners freiwillig mitteilen. Pflichtfelder werden als solche gekennzeichnet, da wir in diesen Fällen die Daten zwingend zur Bearbeitung Ihrer Kontaktaufnahme benötigen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-3">3. Cookies und Webanalyse</h2>
              <p>
                Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-3">4. Kontaktmöglichkeiten und Ihre Rechte</h2>
              <p>
                Als Betroffener haben Sie folgende Rechte:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Recht auf Auskunft</li>
                <li>Recht auf Berichtigung</li>
                <li>Recht auf Löschung</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;