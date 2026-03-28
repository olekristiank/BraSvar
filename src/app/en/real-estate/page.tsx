import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for real estate agents | Bra Svar!',
  description:
    'Never miss a buyer call during viewings or bidding rounds. Bra Svar answers the phone for real estate agents.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Real estate agents',
  intro:
    'You are showing a property to a group of eager buyers. Your phone buzzes with another interested caller. You cannot pause a viewing to take the call. Bra Svar can.',
  situation:
    'Real estate moves fast. You spend your days at viewings, in contract negotiations, and managing bidding rounds. Every missed call could be the buyer who tips the deal in your favor.',
  situationBullets: [
    'You are hosting a property viewing with a full group',
    'A bidding round is live and you are coordinating between parties',
    'You are in a contract meeting with buyers and sellers',
    'You are driving between properties with no hands free',
  ],
  consequence:
    'A buyer who cannot reach you will contact another agent. A seller who sees missed calls may question your availability. Speed wins in real estate, and silence loses.',
  solutionIntro:
    'Bra Svar picks up every call and makes sure no lead slips through while you close deals.',
  handles: [
    'Capture inquiries about listed properties',
    'Schedule private viewings and open-house visits',
    'Answer questions about property details and pricing',
    'Take messages with full contact information',
    'Forward urgent bidding-related calls directly to you',
  ],
  benefitsIntro:
    'An AI assistant that works like a personal secretary, keeping your pipeline full while you are face-to-face with clients.',
  benefits: [
    'Capture every buyer lead, even during back-to-back viewings',
    'Give sellers confidence that their agent is always reachable',
    'Free up your evenings by letting the AI handle after-hours calls',
    'Stay focused on the deal in front of you without distractions',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I saw the listing on Elm Street. Is it still available?' },
    {
      who: 'ai',
      text: 'Hi! Yes, the Elm Street property is still on the market. Would you like to schedule a viewing?',
    },
    { who: 'customer', text: 'Yes, sometime this weekend would be ideal.' },
    {
      who: 'ai',
      text: 'We have a private viewing slot on Saturday at 12:00 or Sunday at 15:00. Which do you prefer?',
    },
    { who: 'customer', text: 'Saturday at 12 works for me.' },
    {
      who: 'ai',
      text: 'Great! Can I get your name and phone number so the agent can confirm the details with you?',
    },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
