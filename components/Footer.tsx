import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Modernisierungskredite.com</h3>
            <p className="text-sm leading-relaxed mb-4">
              Ihr zuverlässiger Partner für die Finanzierung Ihrer Wohnträume. 
              Ohne Grundbucheintrag, fair und transparent.
            </p>
            <div className="flex items-center gap-2 text-brand-green">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-medium text-sm">SSL-Verschlüsselte Übertragung</span>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>0800 123 456 78</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>service@modernisierungskredite.com</span>
              </li>
              <li className="text-slate-400 pt-2">
                Mo - Fr: 09:00 - 18:00 Uhr
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">Cookie Einstellungen</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Modernisierungskredite.com. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;