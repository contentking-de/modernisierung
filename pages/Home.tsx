import React from 'react';
import LoanCalculator from '../components/LoanCalculator';
import Accordion from '../components/ui/Accordion';
import { CheckCircle, Zap, Shield, Percent, Home as HomeIcon, ArrowRight, Banknote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      {/* HERO SECTION */}
      <section className="relative bg-brand-dark pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800/30 to-transparent"></div>
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Hero Text */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                </span>
                <span className="text-xs font-medium text-brand-green uppercase tracking-wider">Aktuelle Konditionen verfügbar</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Modernisierungs&shy;kredite ohne <span className="text-brand-green">Grundbucheintrag</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Verwirklichen Sie Ihre Wohnträume schnell und unkompliziert. 
                Bis zu 50.000 € für Ihre Renovierung – zur freien Verwendung.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                  <span>Schnelle Auszahlung</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                  <span>Keine Grundschuld</span>
                </div>
              </div>
            </div>

            {/* Calculator Widget */}
            <div id="calculator" className="w-full max-w-md lg:max-w-lg">
              <LoanCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* USP SECTION */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Warum Modernisierungskredite.com?</h2>
            <p className="text-slate-600">
              Wir haben den Prozess vereinfacht. Kein Papierkram-Chaos, keine langen Wartezeiten bei der Bank.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* USP 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                <Zap className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Schnelle Auszahlung</h3>
              <p className="text-slate-600 leading-relaxed">
                Dank digitaler Prozesse erhalten Sie Ihre Kreditzusage oft innerhalb von 24 Stunden. Das Geld ist schnell auf Ihrem Konto.
              </p>
            </div>

            {/* USP 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                <Shield className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Ohne Grundbucheintrag</h3>
              <p className="text-slate-600 leading-relaxed">
                Sparen Sie sich die Notarkosten. Unser Modernisierungskredit wird ohne Eintragung einer Grundschuld vergeben.
              </p>
            </div>

            {/* USP 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                <Percent className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Top Konditionen</h3>
              <p className="text-slate-600 leading-relaxed">
                Profitieren Sie von unseren exklusiven Sonderkonditionen für Immobilienbesitzer mit bonitätsabhängigen Zinsen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
               {/* Image Placeholder */}
               <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                     <div className="text-center">
                       <HomeIcon className="w-16 h-16 text-slate-400 mx-auto mb-2" />
                       <span className="text-slate-500 font-medium">Bild: Renoviertes Wohnzimmer</span>
                     </div>
                  </div>
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                 <div className="flex items-center gap-4">
                   <div className="bg-brand-green/10 p-3 rounded-full">
                     <Banknote className="w-6 h-6 text-brand-green" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500">Kreditsummen bis</p>
                     <p className="text-xl font-bold text-brand-dark">50.000 €</p>
                   </div>
                 </div>
               </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Was ist ein Modernisierungskredit?</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Ein Modernisierungskredit ist ein zweckgebundenes Darlehen, das speziell für Immobilienbesitzer konzipiert ist. Anders als bei einer klassischen Baufinanzierung ist hierbei <strong>kein Grundbucheintrag</strong> notwendig.
                </p>
                <p>
                  Dies macht den Prozess nicht nur deutlich schneller, sondern auch günstiger, da Notar- und Grundbuchkosten entfallen.
                </p>
                <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">Wofür kann ich den Kredit nutzen?</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {['Neues Bad & Sanitär', 'Dachsanierung', 'Neue Heizungsanlage', 'Fenster & Türen', 'Photovoltaik & Solar', 'Wärmedämmung'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <button onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})} className="text-brand-green font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Jetzt Rate berechnen <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Häufig gestellte Fragen</h2>
            <p className="text-slate-600">Alles, was Sie über Ihren Modernisierungskredit wissen müssen.</p>
          </div>
          
          <Accordion 
            items={[
              {
                question: "Brauche ich einen Grundbucheintrag?",
                answer: "Nein. Bis zu einer Kreditsumme von 50.000 € (bei manchen Partnern auch höher) verzichten wir komplett auf die Eintragung einer Grundschuld. Das spart Ihnen Notarkosten und Zeit."
              },
              {
                question: "Wer kann einen Modernisierungskredit beantragen?",
                answer: "Der Kredit richtet sich an Eigentümer von selbstgenutzten oder vermieteten Immobilien. Sie müssen seit mindestens 2-3 Jahren im Besitz der Immobilie sein und über ein regelmäßiges Einkommen verfügen."
              },
              {
                question: "Wie schnell erfolgt die Auszahlung?",
                answer: "Nach Einreichung aller erforderlichen Unterlagen erfolgt die Kreditentscheidung oft noch am selben Tag. Die Auszahlung geschieht in der Regel innerhalb von 2 bis 5 Werktagen direkt auf Ihr Girokonto."
              },
              {
                question: "Muss ich Rechnungen vorlegen?",
                answer: "In den meisten Fällen reicht der Nachweis des Immobilieneigentums. Ob Verwendungsnachweise (Rechnungen der Handwerker) im Nachgang eingereicht werden müssen, hängt von der gewählten Partnerbank ab. Wir suchen für Sie das Angebot mit den wenigsten bürokratischen Hürden."
              }
            ]}
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-6">Bereit für Ihr Projekt?</h2>
           <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
             Starten Sie jetzt Ihre Anfrage und sichern Sie sich die günstigen Zinsen für Ihre Modernisierung.
           </p>
           <button 
             onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}
             className="bg-brand-green hover:bg-brand-greenHover text-white font-bold py-4 px-12 rounded-xl shadow-lg shadow-green-900/20 transform transition hover:-translate-y-1 inline-block"
           >
             Kostenloses Angebot anfordern
           </button>
        </div>
      </section>
    </main>
  );
};

export default Home;