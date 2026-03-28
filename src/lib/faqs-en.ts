export interface FAQ {
  q: string;
  a: string;
  category: string;
}

export interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

export const faqs: FAQ[] = [
  // Getting started
  {
    q: 'How quickly can we get started?',
    a: 'Most are up and running within 1 week after the initial conversation. We need basic information about your business, build a trial version, and test together with you until you are satisfied.',
    category: 'Getting started',
  },
  {
    q: 'Can the assistant handle booking and calendars?',
    a: 'Yes, the assistant can connect to most systems. Appointment booking, calendars, CRM, order processing, and inventory management. It can check available times, book appointments, check stock status, and send confirmations. Fully automatic.',
    category: 'Getting started',
  },
  {
    q: 'Can I keep my existing phone number?',
    a: 'Yes, absolutely. You set up a simple call forwarding from your current number to the assistant. Your customers call the same number as before - they notice no difference.',
    category: 'Getting started',
  },

  // About the assistant
  {
    q: 'What happens if the AI assistant cannot answer?',
    a: 'If the assistant encounters a question it cannot answer, we can set up call forwarding to you.',
    category: 'About the assistant',
  },
  {
    q: 'Do you support languages other than Norwegian?',
    a: 'The AI assistant speaks fluent and natural Norwegian, but can also speak English. We add more languages as needed.',
    category: 'About the assistant',
  },
  {
    q: 'What does the assistant sound like?',
    a: 'The assistant speaks with a natural, human voice - not a typical robot voice. Most callers do not notice it is an AI. We adapt the tone and style to your business, so it fits your brand.',
    category: 'About the assistant',
  },
  {
    q: 'Does it work for my industry?',
    a: 'Bra Svar works for most industries - from tradespeople and healthcare professionals to lawyers, hairdressers, and auto repair shops. We customize the assistant to your business, your services, and your customers\' needs.',
    category: 'About the assistant',
  },
  {
    q: 'Can the assistant send SMS or email after a call?',
    a: 'Yes, with the Basis plan the assistant can send SMS automatically - for example appointment confirmation, directions, or follow-up information. It can also send email if desired.',
    category: 'About the assistant',
  },

  // Pricing and payment
  {
    q: 'What does it cost, and are there any extra charges?',
    a: 'We have fixed monthly prices with no hidden costs. Mini costs 1,490 NOK and Basis costs 2,990 NOK per month. Setup is completely free. If you exceed your minute quota, we notify you so you can choose to upgrade or stay on the same plan.',
    category: 'Pricing and payment',
  },
  {
    q: 'Is there a contract period?',
    a: 'No, no contract period and no hidden costs. You can upgrade, downgrade, or cancel at any time, no notice period and no fees.',
    category: 'Pricing and payment',
  },
  {
    q: 'What happens if I exceed the minute quota?',
    a: 'You will be notified well in advance before the quota is used up. Then you can either upgrade to a higher plan, or we can arrange a solution that suits you. The assistant will not stop answering in the middle of a call.',
    category: 'Pricing and payment',
  },

  // Other questions
  {
    q: 'What about privacy and GDPR?',
    a: 'We take privacy seriously. All data is processed in accordance with GDPR, and we have a data processing agreement based on the Norwegian Data Protection Authority\'s standard template. Call data is stored securely, and we never share information with third parties without an agreement. You have full control over what the assistant has access to.',
    category: 'Other questions',
  },
  {
    q: 'Can I listen to the calls afterwards?',
    a: 'Yes, you have access to a control panel with a full overview of all calls. There you can see summaries, listen to recordings, and monitor statistics - so you always know what customers are asking about.',
    category: 'Other questions',
  },
];

/** Group FAQs by category, preserving order of first appearance */
export function getFAQsByCategory(): FAQCategory[] {
  const map = new Map<string, FAQ[]>();
  for (const faq of faqs) {
    const existing = map.get(faq.category) || [];
    existing.push(faq);
    map.set(faq.category, existing);
  }
  return Array.from(map.entries()).map(([title, items]) => ({ title, faqs: items }));
}
