import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Vorteile', href: '/#benefits' },
    { label: 'Rechner', href: '/#calculator' },
    { label: 'Ablauf', href: '/#process' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const scrollToSection = (id: string) => {
    if (!isHome) return;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center text-white">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-brand-dark tracking-tight">
              Modernisierung<span className="text-brand-green">skredite</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {isHome ? (
              navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.replace('/', ''))}
                  className="text-slate-600 hover:text-brand-green font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))
            ) : (
              <Link to="/" className="text-slate-600 hover:text-brand-green font-medium transition-colors">
                Zurück zur Startseite
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-dark p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {isHome ? (
              navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.replace('/', ''))}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-brand-green hover:bg-slate-50"
                >
                  {link.label}
                </button>
              ))
            ) : (
               <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-brand-green hover:bg-slate-50"
              >
                Zurück zur Startseite
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;