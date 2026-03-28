import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for clinics | Bra Svar!',
  description:
    'Let Bra Svar handle calls while you focus on patients. Book appointments, answer questions, and route urgent calls automatically.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Clinics',
  intro:
    'You are with a patient mid-treatment when the phone starts ringing. Stepping away is not an option. The patient in front of you needs your full focus, and the caller on the line needs an answer.',
  situation: 'Clinic days are packed with back-to-back treatments and consultations.',
  situationBullets: [
    'You are in the middle of a treatment and cannot step away',
    'The waiting room is full and reception is overwhelmed',
    'A patient needs your undivided attention during an examination',
    'You are between appointments with only minutes to prepare',
  ],
  consequence:
    'When patients cannot reach your clinic, they look elsewhere. Missed calls lead to empty appointment slots, frustrated patients, and lost trust in your practice.',
  solutionIntro:
    'Bra Svar answers every call to your clinic so patients always feel taken care of.',
  handles: [
    'Book, confirm, or reschedule patient appointments',
    'Answer frequently asked questions about services and preparation',
    'Provide directions, parking info, and opening hours',
    'Route urgent calls directly to you when needed',
    'Send appointment reminders and follow-up messages',
  ],
  benefits: [
    'Patients always reach a helpful voice, even outside office hours',
    'Your reception staff can focus on the people in front of them',
    'Fewer no-shows thanks to automated confirmations',
    'A professional first impression for every caller',
  ],
  benefitsIntro:
    'An AI receptionist trained on your clinic, giving patients the same care over the phone that you give in person.',
  chat: [
    { who: 'customer', text: 'Hello, I need to book a follow-up appointment with Dr. Hansen.' },
    { who: 'ai', text: 'Of course! Dr. Hansen has availability on Monday at 09:00 or Wednesday at 15:00. Which works better for you?' },
    { who: 'customer', text: 'Wednesday at 15:00, please.' },
    { who: 'ai', text: 'Perfect. Can I have your name and date of birth for the booking?' },
    { who: 'customer', text: 'James Porter, March 12, 1985.' },
    { who: 'ai', text: 'You are booked with Dr. Hansen on Wednesday at 15:00, James. We will send a confirmation shortly.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
