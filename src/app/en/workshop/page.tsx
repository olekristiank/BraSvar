import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for auto workshops | Bra Svar!',
  description:
    'Under the car with oily hands? Bra Svar answers your workshop calls and books service appointments automatically.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Auto workshops',
  intro:
    'You are lying under a car with oily hands and a wrench when the workshop phone starts ringing. Crawling out to answer means losing 15 minutes of productive work. But not answering means losing a customer.',
  situation: 'Workshop life means grease, noise, and non-stop work from morning to evening.',
  situationBullets: [
    'You are under a car on the lift with oily hands',
    'The compressor is running and you cannot hear the phone',
    'You are test-driving a vehicle after a repair',
    'You are explaining a repair to one customer while another calls',
  ],
  consequence:
    'Car owners who need urgent repairs will not wait for a callback. They call the next workshop and drive straight there. You lose the job before you even know about it.',
  solutionIntro:
    'Bra Svar answers the phone for your workshop so you can stay focused on the car in front of you.',
  handles: [
    'Book service appointments and tire changes',
    'Take details about vehicle problems and symptoms',
    'Provide information about services offered and opening hours',
    'Give updates on repair status when you set them up',
    'Route urgent breakdown calls directly to you',
  ],
  benefits: [
    'Never lose a service booking because you were under the hood',
    'Customers get professional answers even during your busiest hours',
    'Your hands stay on the tools, not the phone',
    'Organized messages with vehicle info ready when you take a break',
  ],
  benefitsIntro:
    'An AI assistant that speaks car and handles your customers like a proper front desk.',
  chat: [
    { who: 'customer', text: 'Hi, my car is making a grinding noise when I brake. Can I bring it in?' },
    { who: 'ai', text: 'That sounds like it could be the brake pads. We can take a look. What kind of car is it, and when would you like to come in?' },
    { who: 'customer', text: 'It is a 2019 VW Golf. Tomorrow morning if possible.' },
    { who: 'ai', text: 'We have an opening at 08:30 tomorrow. Should I book you in?' },
    { who: 'customer', text: 'Yes, please.' },
    { who: 'ai', text: 'Done! You are booked for 08:30 tomorrow with your VW Golf. See you then.' },
  ],
  related: [
    { href: '/en/car-detailing', label: 'Car Detailing' },
    { href: '/en/tradesperson', label: 'Tradesperson' },
    { href: '/en/electrician', label: 'Electrician' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
