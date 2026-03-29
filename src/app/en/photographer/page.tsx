import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for photographers | Bra Svar!',
  description:
    'Never miss a booking again. Bra Svar takes calls while you are on a shoot, at a wedding or editing with a deadline.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Photographers',
  intro:
    'You are in the middle of a wedding ceremony with the camera in your hands. The light is perfect right now. Your phone rings. A potential client wants to book a portrait session next week. You cannot answer. Bra Svar can.',
  situation:
    'As a photographer your hands are always occupied. You are holding a camera, adjusting lights, posing people or spending hours in front of the screen editing.',
  situationBullets: [
    'In the middle of a wedding ceremony where every second counts',
    'Portrait session where you need to stay connected with the person in front of you',
    'Editing with a tight deadline and hundreds of photos left',
    'Outdoor shoot where the gear requires both hands',
    'Delivering a finished gallery while the next job is calling in',
  ],
  consequence:
    'Every missed call is a lost booking. Couples looking for a wedding photographer call the next one on the list. Businesses that need product photos choose whoever answers first.',
  solutionIntro:
    'Bra Svar answers professionally on your behalf, collects the details you need and sends you a summary when you are done with the shoot.',
  handles: [
    'Pricing inquiries for different types of photography',
    'Booking portrait, wedding and event photography',
    'Checking availability and suggesting times',
    'Providing information about packages and what is included',
    'Agreements on image delivery and timelines',
  ],
  benefitsIntro:
    'With Bra Svar you can focus on what you do best, taking amazing photos.',
  benefits: [
    'Never lose a wedding booking because you were behind the camera',
    'Clients feel taken care of from the very first contact',
    'You get a clear overview of inquiries after each shoot',
    'A professional first impression that matches the quality of your images',
  ],
  chat: [
    { who: 'customer', text: 'Hi, we are getting married on June 14th next year and are looking for a wedding photographer.' },
    { who: 'ai', text: 'How wonderful, and congratulations on your engagement! Let me help you further. Where will the wedding take place?' },
    { who: 'customer', text: 'At a countryside estate. The ceremony is in the chapel and the reception is in the main hall.' },
    { who: 'ai', text: 'What a beautiful setting! Would you like photography just for the ceremony, or would you like to include preparations and the reception as well?' },
    { who: 'customer', text: 'We want the full day, from preparations to the first dance.' },
    { who: 'ai', text: 'Noted. I will pass on the date, venue and your wishes to the photographer, and they will get in touch to discuss packages and pricing. May I have your email address?' },
  ],
  related: [
    { href: '/en/tattoo-artist', label: 'Tattoo Artist' },
    { href: '/en/real-estate', label: 'Real Estate' },
    { href: '/en/consultant', label: 'Consultant' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
