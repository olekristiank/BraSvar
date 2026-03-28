import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for medical offices | Bra Svar!',
  description:
    'End phone queues and missed calls at your medical office. Bra Svar handles patient calls, bookings, and inquiries around the clock.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Medical offices',
  intro:
    'Monday morning at 08:01 and the phone queue already has 15 people waiting. Your receptionist is handling one call while four more lines ring. Patients get frustrated, hang up, and call back, making the queue even longer.',
  situation: 'Medical offices face relentless call volumes, especially early in the week.',
  situationBullets: [
    'The phone queue builds up the moment the office opens',
    'Patients call for prescriptions, test results, and sick notes',
    'The doctor is in consultations and cannot take calls',
    'Reception is juggling walk-ins, check-ins, and phone lines simultaneously',
  ],
  consequence:
    'Long hold times frustrate patients and damage trust in your practice. Some stop trying and switch doctors entirely. Your staff burns out from the constant pressure of an overloaded phone system.',
  solutionIntro:
    'Bra Svar eliminates the phone queue by answering every call instantly and handling routine inquiries.',
  handles: [
    'Book, cancel, or reschedule consultations',
    'Handle prescription renewal requests',
    'Answer questions about opening hours and lab results pickup',
    'Route urgent medical concerns to the right person',
    'Provide pre-appointment instructions and preparation info',
  ],
  benefits: [
    'Zero wait time for patients calling your office',
    'Receptionist workload drops dramatically',
    'Doctors can focus on the patient in the room',
    'Consistent, accurate answers every single time',
  ],
  benefitsIntro:
    'An AI phone assistant built for the demands of a medical practice, reliable, patient, and available around the clock.',
  chat: [
    { who: 'customer', text: 'I need to renew my blood pressure medication. My doctor is Dr. Larsen.' },
    { who: 'ai', text: 'Of course. I will send a renewal request to Dr. Larsen. Can I have your name and date of birth?' },
    { who: 'customer', text: 'Anne Williams, July 3, 1968.' },
    { who: 'ai', text: 'Thank you, Anne. The request has been submitted. You should hear back within one business day. Is there anything else?' },
    { who: 'customer', text: 'No, that is all. Thank you.' },
    { who: 'ai', text: 'You are welcome. Have a good day, Anne.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
