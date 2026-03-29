import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for hairdressers | Bra Svar!',
  description:
    'Never miss a booking again. Bra Svar answers the phone while you cut, color, and style.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Hairdressers',
  intro:
    'The phone rings mid-cut. You have scissors in one hand and a comb in the other. The client in your chair deserves your full attention, not a hairdresser chatting on the phone.',
  situation: 'A busy salon means your hands are never free when the phone rings.',
  situationBullets: [
    'You are mid-cut with scissors in hand and a client in the chair',
    'Color is processing and the timing is critical',
    'The salon is fully booked and you are working alone',
    'You are grabbing lunch in the five minutes between clients',
  ],
  consequence:
    'Every unanswered call is a lost booking. Clients who cannot get through will book at the salon down the street instead. Over time, you feel it in your revenue.',
  solutionIntro:
    'Bra Svar picks up your calls and makes sure no clients disappear while you work.',
  handles: [
    'Book appointments for cuts, coloring, or other treatments',
    'Change or reschedule existing appointments',
    'Answer questions about prices and services',
    'Provide opening hours and location details',
    'Add clients to a waitlist when the day is fully booked',
  ],
  benefits: [
    'More bookings without interrupting your work',
    'Clients get an answer right away, even when the salon is full',
    'No more returning calls after closing time',
    'More time for the work that actually earns you money',
  ],
  benefitsIntro:
    'An AI assistant that knows your salon and talks to clients as if they are calling you directly.',
  chat: [
    { who: 'customer', text: 'Hi, do you have any availability for a haircut on Thursday?' },
    { who: 'ai', text: 'Hi! Yes, we have openings at 10:00 and 14:30 on Thursday. Would either of those work?' },
    { who: 'customer', text: '14:30 would be perfect.' },
    { who: 'ai', text: 'Great! Can I get your name so I can book you in?' },
    { who: 'customer', text: 'Sarah Thompson.' },
    { who: 'ai', text: 'You are all set for Thursday at 14:30, Sarah. See you then!' },
  ],
  related: [
    { href: '/en/beauty', label: 'Beauty Salon' },
    { href: '/en/skin-clinic', label: 'Skin Clinic' },
    { href: '/en/tattoo-artist', label: 'Tattoo Artist' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
