import React from 'react';

const Imprint: React.FC = () => {
  return (
    <main className="flex-grow bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold text-brand-dark mb-8">Impressum</h1>
          
          <div className="space-y-6 text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-brand-dark mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                Musterfinanz GmbH<br />
                Finanzstraße 12<br />
                10115 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark mb-2">Vertreten durch</h2>
              <p>Max Mustermann (Geschäftsführer)</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark mb-2">Kontakt</h2>
              <p>
                Telefon: 0800 123 456 78<br />
                E-Mail: impressum@modernisierungskredite.com
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark mb-2">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Charlottenburg<br />
                Registernummer: HRB 123456
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark mb-2">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                DE 123 456 789
              </p>
            </section>
            
            <section className="pt-4 border-t border-slate-100">
              <p className="text-sm text-slate-400">
                Hinweis: Dies ist eine Demo-Seite für Designzwecke. Die genannten Daten sind fiktiv.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Imprint;