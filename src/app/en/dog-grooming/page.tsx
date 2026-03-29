import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for dog groomers | Bra Svar!',
  description:
    'Never miss a booking while you groom. Bra Svar answers the phone when your hands are full of wet dog.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Dog grooming salons',
  intro:
    'You are elbow-deep in a sudsy golden retriever. The phone rings. You cannot exactly put the dog on hold. Bra Svar picks up so you can keep grooming.',
  situation:
    'Dog grooming is hands-on work from the moment the dog arrives until it leaves looking its best. Between bathing, clipping, and drying, there is no good moment to answer the phone.',
  situationBullets: [
    'You are washing a large dog and your hands are soaking wet',
    'Clippers are running and a nervous dog needs your full attention',
    'The dryer is on and you cannot hear the phone',
    'A dog is barking loud enough to drown out any conversation',
  ],
  consequence:
    'Pet owners who cannot get through will book at the groomer who answers first. Regulars who fail to reach you may try somewhere new and not come back.',
  solutionIntro:
    'Bra Svar handles bookings and questions while you focus on making every dog look and feel great.',
  handles: [
    'Book grooming appointments for different breeds and sizes',
    'Answer questions about services, pricing, and duration',
    'Reschedule or cancel existing appointments',
    'Provide information about opening hours and location',
    'Note special requirements like allergies or temperament',
  ],
  benefitsIntro:
    'An AI receptionist that books appointments while you focus on the dogs.',
  benefits: [
    'Fill your schedule without stopping mid-groom',
    'Never lose a booking to a competitor because you were busy',
    'Keep pet owners happy with instant answers',
    'Reduce end-of-day admin by having organized booking messages',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I would like to book a grooming session for my cockapoo. Do you have anything this week?' },
    {
      who: 'ai',
      text: 'Hi! We have openings on Wednesday at 10:00 and Friday at 13:00. How old and how large is your cockapoo?',
    },
    { who: 'customer', text: 'She is two years old and about 10 kg. Friday at 13 works.' },
    {
      who: 'ai',
      text: 'Perfect. Would you like a full groom with bath, cut, and nail trim?',
    },
    { who: 'customer', text: 'Yes, the full package please.' },
    {
      who: 'ai',
      text: 'Booked! Friday at 13:00 for a full groom. Can I get your name and phone number to confirm?',
    },
  ],
  related: [
    { href: '/en/veterinarian', label: 'Veterinarian' },
    { href: '/en/car-detailing', label: 'Car Detailing' },
    { href: '/en/hairdresser', label: 'Hairdresser' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
