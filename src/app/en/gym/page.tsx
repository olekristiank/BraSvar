import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for gyms | Bra Svar!',
  description:
    'Never miss a new member. Bra Svar answers the phone when the front desk is busy, and helps with sign-ups, pricing and opening hours.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Gyms',
  intro:
    'When the front desk is packed and the trainers are on the floor, new members call in vain. Bra Svar picks up the call and gives answers right away.',
  situation:
    'The morning starts with rush hour at the front desk. Members scan their cards, ask about group classes and need help with lockers. Trainers are busy with personal training sessions and coaching on the floor. The phone rings, but no one has their hands free.',
  situationBullets: [
    'The front desk is busy with check-ins and member questions',
    'Trainers are in the middle of PT sessions or leading group classes',
    'Morning and afternoon rush hours make it impossible to answer the phone',
    'New membership inquiries end up on voicemail',
  ],
  consequence:
    'A person who calls to ask about a membership is ready to sign up. When no one answers, they check the competitor down the street. Most people do not call back. That means lost monthly revenue, time after time.',
  solutionIntro:
    'Bra Svar knows your prices, opening hours and what you offer.',
  handles: [
    'New sign-ups and membership activations',
    'Pricing for different memberships and add-on services',
    'Opening hours, including weekends and holidays',
    'Booking personal training sessions and trial workouts',
    'Freezing and changing subscriptions',
    'Information about group classes and training options',
  ],
  benefitsIntro:
    'A gym lives on recurring members. Every unanswered call is a potential monthly subscriber who disappears.',
  benefits: [
    'New members get answers even in the middle of rush hour',
    'Trainers can focus on the people already on the floor',
    'The front desk no longer has to choose between the queue and the phone',
    'Fewer lost sign-ups, especially in January and after summer',
    'Open for inquiries even outside staffed hours',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I am thinking about joining. What does it cost?' },
    { who: 'ai', text: 'Hi! Great that you are interested. We have three memberships: Basic at 349 kr/month, Plus with group classes at 449 kr/month, and Premium with PT included at 699 kr/month. All are without a commitment period.' },
    { who: 'customer', text: 'Plus sounds good. Can I come in and try it first?' },
    { who: 'ai', text: 'Absolutely! I will set up a free trial session for you. What time works best?' },
    { who: 'customer', text: 'Tomorrow after work, around 5 PM?' },
    { who: 'ai', text: 'That works. I have you down for a trial session tomorrow at 5:00 PM. You will get a confirmation by text. Just bring workout clothes and we will show you around!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
