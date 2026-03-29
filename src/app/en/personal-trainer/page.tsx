import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for personal trainers | Bra Svar!',
  description:
    'Get more clients without losing focus on the session. Bra Svar answers the phone while you are on the gym floor. Books sessions automatically.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Personal trainers',
  intro:
    'You are spotting your client on the bench press. Your phone vibrates in your shorts. You cannot let go of the bar to answer. But it could be someone who has been thinking about starting PT and finally worked up the courage to call.',
  situation:
    'As a personal trainer you are always busy with a client when new potential customers call.',
  situationBullets: [
    'You are mid-session and cannot take a break',
    'Your hands are full of weights or you are demonstrating an exercise',
    'You are sweaty and the phone is back in the locker room',
    'You have sessions back to back from morning to evening',
  ],
  consequence:
    'People considering personal training rarely reach out more than once. If you do not answer, they pick another trainer or drop the idea altogether. Every missed call could be a client you never get.',
  solutionIntro:
    'Bra Svar catches interested customers and gives them the information they need to make a decision.',
  handles: [
    'Booking trial sessions or initial consultations',
    'Information about package pricing and subscriptions',
    'Questions about training programs and specializations',
    'Availability and session times',
    'Practical information about the training location and equipment',
  ],
  benefitsIntro:
    'An AI assistant that sells you in and books trial sessions, while you do what you are best at.',
  benefits: [
    'Potential clients get a response while their motivation is at its peak',
    'You can fully focus on the client you are training right now',
    'More trial sessions mean more long-term clients over time',
    'You come across as professional even as a solo operator',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I would like to try personal training. Do you have any availability this week?' },
    { who: 'ai', text: 'Hi! Great that you are reaching out. We offer a no-commitment trial session where we map out your goals. Have you trained with a PT before?' },
    { who: 'customer', text: 'No, never. I am a bit unsure what to expect, honestly.' },
    { who: 'ai', text: 'Nothing to worry about! The trial session lasts one hour and is completely non-binding. We have Thursday at 5:00 PM or Friday at 9:00 AM available. Does either of those work?' },
    { who: 'customer', text: 'Thursday at 5 works for me.' },
    { who: 'ai', text: 'Perfect! Can I get your name?' },
    { who: 'customer', text: 'Alex Martin.' },
    { who: 'ai', text: 'All set, Alex. You are booked for Thursday at 5:00 PM. Bring workout clothes and a water bottle. Looking forward to seeing you!' },
  ],
  related: [
    { href: '/en/gym', label: 'Gym' },
    { href: '/en/physiotherapist', label: 'Physiotherapist' },
    { href: '/en/wellness-clinic', label: 'Wellness Clinic' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
