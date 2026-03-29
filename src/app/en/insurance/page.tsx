import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for insurance advisors | Bra Svar!',
  description:
    'Never miss a client call during meetings or policy reviews. Bra Svar answers the phone for insurance professionals. Available 24/7, free to try.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Insurance advisors',
  intro:
    'You are reviewing a client\'s full policy portfolio. The phone rings. Another client needs to report a claim. You cannot be in two places at once, but Bra Svar can.',
  situation:
    'Insurance advisory is built on trust and availability. Clients call when they need you most, often at the worst possible time. Balancing policy reviews, claims, and new inquiries without missing a call is nearly impossible.',
  situationBullets: [
    'You are in a policy review meeting with a client',
    'Multiple claims come in at the same time after a storm',
    'You are presenting options to a new prospect',
    'You are out of the office at a networking event',
  ],
  consequence:
    'A prospect who reaches voicemail will call the next advisor. An existing client who cannot report a claim quickly may feel abandoned. Trust erodes fast when calls go unanswered.',
  solutionIntro:
    'Bra Svar answers every call with professionalism, captures the details, and keeps your clients feeling looked after.',
  handles: [
    'Take initial claim reports with key details',
    'Schedule consultations and policy review meetings',
    'Answer general questions about coverage options',
    'Provide office hours and callback information',
    'Forward urgent calls directly to you when needed',
  ],
  benefitsIntro:
    'An AI assistant that gives your clients the responsiveness they expect from their insurance advisor.',
  benefits: [
    'Be available to clients around the clock without working around the clock',
    'Capture every new lead while you focus on existing clients',
    'Reduce stress during peak claim periods',
    'Deliver a premium client experience without premium overhead',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I need to report a water damage claim. Who do I talk to?' },
    {
      who: 'ai',
      text: 'Hi! I can help you get started. Could you tell me your name and policy number?',
    },
    { who: 'customer', text: 'It is Mark Hansen, policy number 4521-889.' },
    {
      who: 'ai',
      text: 'Thank you, Mark. Can you briefly describe what happened and when the damage occurred?',
    },
    { who: 'customer', text: 'A pipe burst in the kitchen last night. There is water damage to the floor and cabinets.' },
    {
      who: 'ai',
      text: 'I have noted the details. Your advisor will call you back within the hour to guide you through the next steps. In the meantime, please take photos of the damage if you can.',
    },
  ],
  related: [
    { href: '/en/lawyer', label: 'Lawyer' },
    { href: '/en/accountant', label: 'Accountant' },
    { href: '/en/real-estate', label: 'Real Estate' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
