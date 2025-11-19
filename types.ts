export interface LoanState {
  amount: number;
  duration: number; // in months
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}