import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';

const INTEREST_RATE = 5.99; // Annual interest rate in percent

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(25000);
  const [duration, setDuration] = useState<number>(60); // Months
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    // Annuity Formula: R = P * (i / (1 - (1+i)^-n))
    // i = monthly interest rate (annual / 12 / 100)
    // n = number of months
    const i = INTEREST_RATE / 12 / 100;
    const n = duration;
    
    const payment = (amount * i) / (1 - Math.pow(1 + i, -n));
    setMonthlyPayment(payment);
  }, [amount, duration]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val);
  };

  const handleApply = () => {
    alert(`Vielen Dank! Ihre Anfrage über ${formatCurrency(amount)} mit einer Laufzeit von ${duration} Monaten wurde simuliert.`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 transform transition-all hover:shadow-2xl">
      <div className="bg-brand-dark p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Calculator className="w-5 h-5 text-brand-green" />
          <h3 className="font-semibold text-lg">Modernisierungs-Rechner</h3>
        </div>
        <p className="text-slate-400 text-sm">Berechnen Sie Ihre Wunschrate in Sekunden.</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Amount Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label htmlFor="amount" className="text-sm font-medium text-slate-600">Nettodarlehensbetrag</label>
            <div className="text-2xl font-bold text-brand-dark">{formatCurrency(amount)}</div>
          </div>
          <input
            id="amount"
            type="range"
            min="5000"
            max="50000"
            step="1000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>5.000 €</span>
            <span>50.000 €</span>
          </div>
        </div>

        {/* Duration Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label htmlFor="duration" className="text-sm font-medium text-slate-600">Laufzeit</label>
            <div className="text-2xl font-bold text-brand-dark">{duration} Monate</div>
          </div>
          <input
            id="duration"
            type="range"
            min="12"
            max="120"
            step="12"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>12 Mon.</span>
            <span>120 Mon.</span>
          </div>
        </div>

        {/* Result Area */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-500">Effektiver Jahreszins</span>
            <span className="font-semibold text-brand-dark">{INTEREST_RATE.toFixed(2)} %</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">Monatliche Rate</span>
            <span className="text-3xl font-bold text-brand-green">
              {formatCurrency(monthlyPayment)}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleApply}
          className="w-full bg-brand-green hover:bg-brand-greenHover text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-600/20"
        >
          Jetzt unverbindlich anfragen
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-2 text-xs text-slate-400 leading-tight">
          <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
          <p>Repräsentatives Beispiel gem. § 6a PAngV: 2/3 aller Kunden erhalten bei genannter Laufzeit diesen Effektivzins. Bonität vorausgesetzt.</p>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;