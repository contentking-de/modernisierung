import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../../types';

interface AccordionProps {
  items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-slate-200 rounded-lg bg-white overflow-hidden transition-all duration-200"
        >
          <button
            className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span>{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-brand-green" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;