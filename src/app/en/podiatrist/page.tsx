import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for podiatrists | Bra Svar!',
  description:
    'Never miss a patient call while you treat. Bra Svar answers the phone for podiatry clinics and foot care specialists. Available 24/7.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Podiatrists',
  intro:
    'You have gloves on, instruments in hand, and a patient in the chair. The phone rings in the other room. You cannot stop mid-treatment. Bra Svar answers so your patients get the care they deserve.',
  situation:
    'Podiatry is precise, hands-on work. Once you are gloved up and treating a patient, stepping away to answer the phone is not hygienic, not professional, and not an option.',
  situationBullets: [
    'You are mid-treatment with gloves on and instruments in hand',
    'A diabetic foot assessment requires your full concentration',
    'You are working alone with no receptionist',
    'Patients are booked back-to-back with no gaps',
  ],
  consequence:
    'Patients who need foot care often call when they are in pain. If they cannot get through, they will try another clinic. Regulars who struggle to rebook may not return.',
  solutionIntro:
    'Bra Svar takes calls and books appointments while you keep your gloves on and your focus where it belongs.',
  handles: [
    'Book appointments for foot care, nail treatment, and assessments',
    'Answer questions about treatments and pricing',
    'Reschedule or cancel existing appointments',
    'Provide information about what to expect at the first visit',
    'Note specific concerns like diabetic foot care or ingrown nails',
  ],
  benefitsIntro:
    'An AI receptionist that handles your phone so you can handle your patients.',
  benefits: [
    'Treat patients without interruptions from start to finish',
    'Fill your appointment book even during busy treatment hours',
    'Give callers an immediate professional response',
    'Save money compared to a part-time receptionist',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I have an ingrown toenail that is quite painful. Can I get an appointment soon?' },
    {
      who: 'ai',
      text: 'Hi! I am sorry to hear that. We have availability tomorrow at 11:00 or Thursday at 09:00. Which works better?',
    },
    { who: 'customer', text: 'Tomorrow at 11 please. Is there anything I should do before the appointment?' },
    {
      who: 'ai',
      text: 'Just make sure the area is clean and wear open or loose footwear if possible. The podiatrist will assess the nail and discuss treatment options with you.',
    },
    { who: 'customer', text: 'Great, thank you.' },
    {
      who: 'ai',
      text: 'You are welcome! Can I get your name and phone number so we can confirm the booking?',
    },
  ],
  related: [
    { href: '/en/skin-clinic', label: 'Skin Clinic' },
    { href: '/en/wellness-clinic', label: 'Wellness Clinic' },
    { href: '/en/clinic', label: 'Clinic' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
