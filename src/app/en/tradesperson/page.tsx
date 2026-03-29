import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for tradespeople | Bra Svar!',
  description:
    'On a roof or driving between jobs? Bra Svar answers customer calls so you never lose a lead.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Tradespeople',
  intro:
    'You are three stories up on a roof when your phone buzzes in your pocket. Or you are driving between jobs with both hands on the wheel. Either way, answering is not happening right now.',
  situation: 'Your hands are always full, and your phone never stops ringing.',
  situationBullets: [
    'You are on a roof or up a ladder with tools in both hands',
    'You are driving the van between job sites',
    'You are in the middle of a time-sensitive installation',
    'You are covered in dust and your phone is in your jacket across the room',
  ],
  consequence:
    'Homeowners looking for a tradesperson call the next person on the list when you do not pick up. By the time you call back, the job is already taken. One missed call can mean thousands lost.',
  solutionIntro:
    'Bra Svar picks up calls the moment you cannot, so every lead gets captured.',
  handles: [
    'Take messages with job details, address, and contact info',
    'Answer questions about your services and availability',
    'Schedule site visits and estimates',
    'Provide basic pricing information you have set up',
    'Forward urgent calls directly to your phone',
  ],
  benefits: [
    'Capture every lead even when you are on the job',
    'Sound professional without hiring office staff',
    'Get organized messages instead of missed call notifications',
    'Spend evenings relaxing instead of returning calls',
  ],
  benefitsIntro:
    'An AI assistant that understands your trade and speaks to your customers the way you would.',
  chat: [
    { who: 'customer', text: 'Hi, I need some carpentry work done on my deck. Is that something you do?' },
    { who: 'ai', text: 'Absolutely! We handle all kinds of deck work, from repairs to full rebuilds. Can you describe what you need?' },
    { who: 'customer', text: 'A few boards are rotten and the railing is loose.' },
    { who: 'ai', text: 'Got it. I will pass this along so we can schedule a visit to take a look. What is your address and a good time to stop by?' },
    { who: 'customer', text: '14 Elm Street. Any morning this week works.' },
    { who: 'ai', text: 'Great, we will be in touch to confirm a morning visit this week. Thanks for calling!' },
  ],
  related: [
    { href: '/en/electrician', label: 'Electrician' },
    { href: '/en/plumber', label: 'Plumber' },
    { href: '/en/painter', label: 'Painter' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
