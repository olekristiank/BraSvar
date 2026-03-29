import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for lawyers | Bra Svar!',
  description:
    'Never miss a client call while you are in court or in meetings. Bra Svar answers the phone for law firms and solo practitioners.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Lawyers',
  intro:
    'You are in court, in a client meeting, or deep in case preparation. The phone keeps ringing. Bra Svar makes sure every caller is heard, even when you are unavailable.',
  situation:
    'Legal work demands uninterrupted focus. Whether you are presenting in court, advising a client, or reviewing documents against a deadline, a ringing phone breaks your concentration and costs you time.',
  situationBullets: [
    'You are in a courtroom and cannot take calls',
    'A sensitive client meeting requires your full attention',
    'You are reviewing case files against a tight deadline',
    'You are a solo practitioner with no secretary',
  ],
  consequence:
    'A potential client who reaches voicemail will often call the next firm on the list. Existing clients who feel ignored may take their business elsewhere.',
  solutionIntro:
    'Bra Svar answers professionally, gathers the relevant details, and makes sure you can follow up at the right time.',
  handles: [
    'Take messages with case details and contact information',
    'Book initial consultations based on your availability',
    'Answer general questions about your areas of practice',
    'Provide office hours and directions',
    'Forward urgent matters to you or a colleague',
  ],
  benefitsIntro:
    'An AI assistant that handles calls with the professionalism your clients expect from a law firm.',
  benefits: [
    'Focus on court and client work without interruptions',
    'Capture every potential client inquiry, day or night',
    'Reduce overhead compared to a full-time receptionist',
    'Return calls on your own terms with full context in hand',
  ],
  chat: [
    { who: 'customer', text: 'Hello, I need legal advice regarding a contract dispute. Is the lawyer available?' },
    {
      who: 'ai',
      text: 'Hello! The lawyer is currently in a meeting. I can schedule a consultation for you. Could you briefly describe the matter?',
    },
    { who: 'customer', text: 'A supplier has breached our delivery agreement and we want to know our options.' },
    {
      who: 'ai',
      text: 'Understood. We have availability for an initial consultation on Wednesday at 10:00 or Thursday at 14:00. Which works for you?',
    },
    { who: 'customer', text: 'Wednesday at 10 works.' },
    {
      who: 'ai',
      text: 'Perfect. Can I get your name, phone number, and email so we can send you a confirmation?',
    },
  ],
  related: [
    { href: '/en/accountant', label: 'Accountant' },
    { href: '/en/real-estate', label: 'Real Estate' },
    { href: '/en/insurance', label: 'Insurance' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
