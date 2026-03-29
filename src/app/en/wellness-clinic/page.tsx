import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for wellness clinics | Bra Svar!',
  description:
    'Never miss a booking while you treat. Bra Svar answers the phone during massages, spa treatments, and relaxation sessions.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Wellness clinics',
  intro:
    'Your client is on the table with their eyes closed. The phone rings at the front desk, but nobody is there. Bra Svar takes the call while you deliver a perfect treatment.',
  situation:
    'A wellness clinic lives and breathes atmosphere. Massage, spa treatments, and calming surroundings demand quiet. Running out to grab the phone ruins the experience for the client on the table.',
  situationBullets: [
    'You are mid-massage and cannot step away',
    'A spa treatment is underway and the mood is everything',
    'You are alone at the clinic with no receptionist',
    'Back-to-back treatments leave you with no breaks',
  ],
  consequence:
    'A client who cannot get through will book with a competitor. A missed gift card sale in December can mean thousands in lost revenue.',
  solutionIntro:
    'Bra Svar knows your treatments and books appointments as if someone were sitting at the front desk.',
  handles: [
    'Book massages, facials, and other treatments',
    'Sell and provide information about gift cards',
    'Present package deals and seasonal offers',
    'Answer questions about opening hours and availability',
  ],
  benefitsIntro:
    'An AI receptionist that matches the standard you set in the treatment room.',
  benefits: [
    'Give clients uninterrupted treatment from start to finish',
    'Never lose a booking, even in the evening',
    'Increase gift card sales by always being available',
    'Skip the stress of checking missed calls between treatments',
  ],
  chat: [
    { who: 'customer', text: 'Hi, do you have availability for a hot stone massage this week?' },
    {
      who: 'ai',
      text: 'Hi! Yes, we do. Would you like a 60- or 90-minute session?',
    },
    { who: 'customer', text: '90 minutes, preferably on Saturday.' },
    {
      who: 'ai',
      text: 'Saturday we have openings at 11:00 and 14:00 for the 90-minute hot stone. Which time works best?',
    },
    { who: 'customer', text: '14:00 sounds good. Can I also buy a gift card for my mom?' },
    {
      who: 'ai',
      text: 'Of course! We offer gift cards for any amount or for specific treatments. I will book you in at 14:00 on Saturday and send you gift card details by text. What is your name?',
    },
  ],
  related: [
    { href: '/en/skin-clinic', label: 'Skin Clinic' },
    { href: '/en/beauty', label: 'Beauty Salon' },
    { href: '/en/acupuncturist', label: 'Acupuncturist' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
