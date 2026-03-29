import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for cleaning companies | Bra Svar!',
  description:
    'Never miss a client call while you are on site. Bra Svar answers the phone for cleaning businesses. Books jobs and sends you messages automatically.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Cleaning companies',
  intro:
    'You are on-site in full PPE, scrubbing floors or cleaning windows three stories up. Your phone is in your pocket and there is no way to answer it. Bra Svar handles it for you.',
  situation:
    'Cleaning work happens on location. You are wearing gloves, operating equipment, or working in spaces where taking a call is impractical or impossible.',
  situationBullets: [
    'You are on-site at a client location with gloves and PPE on',
    'Industrial equipment is running and you cannot hear the phone',
    'You are cleaning a home while the owner is away',
    'Your team is spread across multiple jobs and you are coordinating on the go',
  ],
  consequence:
    'Property managers and homeowners who need a cleaner want someone who responds quickly. If they reach voicemail, they move on to the next company in the search results.',
  solutionIntro:
    'Bra Svar answers your calls, takes job details, and books estimates so your pipeline stays full.',
  handles: [
    'Book cleaning appointments and free estimates',
    'Answer questions about services like deep cleaning, move-out cleaning, and office cleaning',
    'Provide pricing information for standard jobs',
    'Take details about property size and special requirements',
    'Share your availability and service area',
  ],
  benefitsIntro:
    'An AI assistant that keeps new jobs coming in while you focus on the job in front of you.',
  benefits: [
    'Win more contracts without stopping mid-job to answer the phone',
    'Give potential clients an instant professional response',
    'Keep your schedule organized with detailed booking messages',
    'Scale your business without hiring office staff',
  ],
  chat: [
    { who: 'customer', text: 'Hi, we need a move-out cleaning for a three-bedroom apartment. Are you available next week?' },
    {
      who: 'ai',
      text: 'Hi! Yes, we can fit that in. What day works best, and what is the approximate size of the apartment?',
    },
    { who: 'customer', text: 'Around 85 square meters. Wednesday or Thursday would be ideal.' },
    {
      who: 'ai',
      text: 'We have Wednesday afternoon open. A move-out cleaning for 85 square meters typically takes about 4-5 hours. Would you like to book that?',
    },
    { who: 'customer', text: 'Yes, Wednesday afternoon works perfectly.' },
    {
      who: 'ai',
      text: 'Great! Can I get the address, your name, and a phone number so we can confirm the details?',
    },
  ],
  related: [
    { href: '/en/car-detailing', label: 'Car Detailing' },
    { href: '/en/tradesperson', label: 'Tradesperson' },
    { href: '/en/consultant', label: 'Consultant' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
