import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for skin clinics | Bra Svar!',
  description:
    'Bra Svar takes calls while you are treating. Consultations, skin analysis and aftercare bookings are handled automatically. Free to try.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Skin clinics',
  intro:
    'Your hands are in sterile gloves and the laser is running. The phone rings. Bra Svar takes the call so you can keep your focus on the patient.',
  situation:
    'Skin clinics work with precision. Laser treatments, injections and sterile procedures require full attention. Interrupting mid-treatment is not an option.',
  situationBullets: [
    'Mid-laser treatment with protective equipment on',
    'Injections that demand pinpoint accuracy',
    'A sterile environment where you cannot touch the phone',
    'Consultations where the patient deserves your undivided attention',
  ],
  consequence:
    'Every unanswered call could be a new patient wanting to book a consultation. They call the next clinic instead.',
  solutionIntro:
    'Bra Svar knows your clinic\'s services and answers as part of your team.',
  handles: [
    'Booking consultations for new and existing patients',
    'Providing information about skin analysis and what it involves',
    'Presenting treatment packages and pricing',
    'Answering questions about aftercare and skincare routines',
  ],
  benefitsIntro:
    'With Bra Svar your skin clinic gets a reception that never takes a break.',
  benefits: [
    'Treat patients without interruptions',
    'Capture every new inquiry, even after closing time',
    'Reduce wait times for patients who call in',
    'Free up the front desk to take care of those already at the clinic',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I am wondering if you offer Botox treatments?' },
    { who: 'ai', text: 'Hi! Yes, we do. The first step is a consultation where the practitioner assesses your goals and creates a plan. Shall I book you in?' },
    { who: 'customer', text: 'Yes, please. What does a consultation cost?' },
    { who: 'ai', text: 'The consultation is free and takes about 20 minutes. We have availability on Thursday at 2:00 PM and Friday at 10:30 AM. Does either of those work?' },
    { who: 'customer', text: 'Friday at 10:30 works great.' },
    { who: 'ai', text: 'Wonderful. I have you down for Friday at 10:30 AM. Can I get your name and a phone number?' },
  ],
  related: [
    { href: '/en/beauty', label: 'Beauty Salon' },
    { href: '/en/wellness-clinic', label: 'Wellness Clinic' },
    { href: '/en/podiatrist', label: 'Podiatrist' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
