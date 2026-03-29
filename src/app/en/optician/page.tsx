import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for opticians | Bra Svar!',
  description:
    'Let your customers get answers while you are fitting glasses. Bra Svar answers the phone when you have a patient in the chair.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Opticians',
  intro:
    'Your customer is in the chair and you are in the middle of an eye exam. The lights are dimmed and the instruments are ready. The phone rings in the shop, but you cannot interrupt right now. It could be someone whose vision has been getting worse and they need an appointment.',
  situation:
    'Eye exams require calm and concentration. The phone never comes at a good time.',
  situationBullets: [
    'You are conducting an eye exam and cannot step away',
    'You are fitting frames and adjusting down to the millimeter',
    'The shop is full of customers who need help choosing glasses',
    'You are alone in the store and your colleague is off',
  ],
  consequence:
    'Customers who need a new eye exam often call only once. If they do not get through, they book with the optician in the next shopping street. And with the eye exam goes the glasses sale.',
  solutionIntro:
    'Bra Svar answers the phone for you and books eye exams, so you never lose a customer to the queue.',
  handles: [
    'Booking eye exam appointments',
    'Questions about contact lenses and fittings',
    'Letting customers know their glasses are ready for pickup',
    'Pricing for eye exams, lenses and frames',
    'Opening hours and shop information',
  ],
  benefitsIntro:
    'An AI assistant that knows your offerings and makes sure your customers always get through.',
  benefits: [
    'Eye exams are booked in without you needing to pick up the phone',
    'Customers get quick help and do not have to call multiple times',
    'You can give full attention to the customer in front of you',
    'Fewer missed eye exams means more glasses and lens sales',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I think I need a new eye exam. It has been a while since my last one.' },
    { who: 'ai', text: 'Hi! It is a good idea to check your vision regularly. Do you remember when you last had an exam?' },
    { who: 'customer', text: 'It must be three or four years ago now.' },
    { who: 'ai', text: 'Then it is definitely time. We have availability on Monday at 11:00 AM or Wednesday at 2:00 PM. Which works best for you?' },
    { who: 'customer', text: 'Monday at 11 works.' },
    { who: 'ai', text: 'Great! Can I get your name?' },
    { who: 'customer', text: 'Lisa Eriksen.' },
    { who: 'ai', text: 'You are all set for Monday at 11:00 AM, Lisa. Remember to bring any glasses you are currently using. Welcome!' },
  ],
  related: [
    { href: '/en/clinic', label: 'Clinic' },
    { href: '/en/dentist', label: 'Dentist' },
    { href: '/en/skin-clinic', label: 'Skin Clinic' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
