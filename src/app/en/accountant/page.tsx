import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for accountants | Bra Svar!',
  description:
    'Stay focused during year-end close and tax season. Bra Svar answers the phone so you can meet every deadline. Available 24/7, free to try.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Accountants',
  intro:
    'It is tax season. Deadlines are stacking up. Every time the phone rings, you lose your place in the spreadsheet. Bra Svar handles calls so you can stay in the zone.',
  situation:
    'Accounting work requires deep concentration. A single interruption during year-end close or tax filing can cost you 20 minutes of refocusing time. Meanwhile, clients need answers and new prospects are calling.',
  situationBullets: [
    'You are deep in year-end close with numbers that must add up',
    'Tax deadlines are approaching and every hour counts',
    'A client meeting is running long and the phone keeps ringing',
    'You are a small firm handling it all yourself',
  ],
  consequence:
    'Unanswered calls during busy season mean missed opportunities. Existing clients get frustrated when they cannot reach you, and new prospects move on to someone who picks up.',
  solutionIntro:
    'Bra Svar takes your calls, gathers the details, and lets you call back when the numbers are done.',
  handles: [
    'Schedule client meetings and consultations',
    'Take messages with the caller\'s name and reason for calling',
    'Answer questions about your services and pricing',
    'Provide information about deadlines and required documents',
    'Route urgent tax matters to you immediately',
  ],
  benefitsIntro:
    'An AI assistant that keeps your phone covered so you can keep your head in the numbers.',
  benefits: [
    'Protect deep-focus time during critical deadlines',
    'Never lose a new client to an unanswered call',
    'Reduce the chaos of tax season with organized messages',
    'Save money compared to hiring a dedicated receptionist',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I need help with my annual tax return. Do you take new clients?' },
    {
      who: 'ai',
      text: 'Hi! Yes, we are accepting new clients. Would you like to schedule an introductory meeting?',
    },
    { who: 'customer', text: 'Yes, please. Sometime next week if possible.' },
    {
      who: 'ai',
      text: 'We have openings on Tuesday at 09:00 and Thursday at 13:00. Which works better for you?',
    },
    { who: 'customer', text: 'Thursday at 13:00 is great.' },
    {
      who: 'ai',
      text: 'Booked! Could I get your name and email so we can send you a confirmation along with a list of documents to bring?',
    },
  ],
  related: [
    { href: '/en/lawyer', label: 'Lawyer' },
    { href: '/en/insurance', label: 'Insurance' },
    { href: '/en/consultant', label: 'Consultant' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
