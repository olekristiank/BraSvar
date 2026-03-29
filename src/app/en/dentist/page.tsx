import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for dentists | Bra Svar!',
  description:
    'Drilling, scaling, or deep in concentration? Bra Svar answers your dental practice calls and books patients seamlessly.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Dentists',
  intro:
    'You are mid-drill with a patient in the chair, both hands occupied and full concentration required. The reception phone rings for the fifth time today and there is nobody free to pick up.',
  situation: 'Dental procedures demand total focus and sterile conditions.',
  situationBullets: [
    'You are drilling a cavity and cannot pause mid-procedure',
    'Your hands are in a patient\'s mouth during a scaling',
    'The hygienist and assistant are both chairside with you',
    'Reception is helping a patient check out while another line rings',
  ],
  consequence:
    'Patients in pain do not leave voicemails. They call the next dentist they find. And patients calling for routine checkups will simply book elsewhere if nobody answers.',
  solutionIntro:
    'Bra Svar acts as your virtual receptionist, answering calls with the same care your team provides in person.',
  handles: [
    'Book new patient appointments and routine checkups',
    'Handle cancellations and rescheduling',
    'Answer questions about treatments, insurance, and pricing',
    'Triage urgent calls for dental emergencies',
    'Send appointment confirmations and reminders',
  ],
  benefits: [
    'No patient call goes unanswered, even during procedures',
    'Emergency calls get flagged and routed immediately',
    'Your front desk can focus on the patients in the office',
    'New patients get a professional first impression every time',
  ],
  benefitsIntro:
    'An AI receptionist that understands dental practice and speaks to patients with the calm professionalism they expect.',
  chat: [
    { who: 'customer', text: 'I have a terrible toothache and need to see someone as soon as possible.' },
    { who: 'ai', text: 'I am sorry to hear that. Let me check the earliest available slot. Can you describe the pain briefly?' },
    { who: 'customer', text: 'Sharp pain on the lower left side, started last night.' },
    { who: 'ai', text: 'We can fit you in today at 14:00 as an emergency appointment. Can I get your name?' },
    { who: 'customer', text: 'David Chen.' },
    { who: 'ai', text: 'You are booked for today at 14:00, David. Please arrive 10 minutes early to fill out a form. See you soon.' },
  ],
  related: [
    { href: '/en/clinic', label: 'Clinic' },
    { href: '/en/medical-office', label: 'Medical Office' },
    { href: '/en/chiropractor', label: 'Chiropractor' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
