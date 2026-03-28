import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for acupuncturists | Bra Svar!',
  description:
    'Never lose new patients while you are treating. Bra Svar answers the phone when you have needles in the patient, and books appointments automatically.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Acupuncturists',
  intro:
    'The needles are placed and your patient needs stillness. You cannot pick up the phone right now. Bra Svar answers for you and makes sure new patients do not slip away.',
  situation:
    'You are sitting with a patient in the chair. The needles are placed and the treatment requires silence and concentration. The phone rings at the front desk, but you cannot leave the room. After the session you see two missed calls. No one left a message.',
  situationBullets: [
    'Treatment requires full presence and calm in the room',
    'Needles in the patient mean you cannot get up to answer',
    'Many acupuncturists work alone without a receptionist',
    'New patients often call at lunch, right when you are treating',
  ],
  consequence:
    'A person with chronic pain works up the courage to call for the first time. No one answers. The threshold to call back is high, especially for first-time patients who are already unsure. They choose another practitioner who picks up.',
  solutionIntro:
    'Bra Svar knows which treatments you offer, what they cost and when you have availability.',
  handles: [
    'Appointment booking for new and existing patients',
    'First-time inquiries with information about what to expect',
    'Pricing for different treatments and packages',
    'Treatment types you offer and what they help with',
    'Cancellations and rescheduling',
    'Practical information about preparing for a session',
  ],
  benefitsIntro:
    'Acupuncture is built on trust. New patients who get an answer right away feel cared for before the first treatment even begins.',
  benefits: [
    'New patients get a response even when you are mid-treatment',
    'You can give your full attention to the patient in front of you',
    'First-time inquiries are handled with relevant information',
    'Cancellations are managed without disrupting your workday',
    'Your schedule fills up without you spending evenings calling back',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I would like to try acupuncture. Are you taking new patients?' },
    { who: 'ai', text: 'Hi! Yes, we are accepting new patients. We recommend starting with an initial session where we get to know your situation and create a plan.' },
    { who: 'customer', text: 'What does it cost, and how long does it take?' },
    { who: 'ai', text: 'An initial session takes about 75 minutes and costs 950 kr. It includes a thorough consultation and your first treatment. Follow-up sessions are 60 minutes at 750 kr.' },
    { who: 'customer', text: 'That sounds great. Do you have any openings next week?' },
    { who: 'ai', text: 'I have Tuesday at 10:00 AM or Thursday at 2:30 PM available. Which works better for you?' },
    { who: 'customer', text: 'Thursday at 2:30 works.' },
    { who: 'ai', text: 'Wonderful. I have booked your initial session for Thursday at 2:30 PM. You will receive a confirmation by text. Avoid eating a large meal right before, and wear comfortable clothing.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
