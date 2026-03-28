import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for chiropractors | Bra Svar!',
  description:
    'Mid-adjustment and cannot answer? Bra Svar handles calls for chiropractic clinics so you can focus on your patients.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Chiropractors',
  intro:
    'You are performing a spinal adjustment that requires precise positioning and timing. The phone ringing in reception is the last thing you need. Losing focus is not an option when you are working on someone\'s spine.',
  situation: 'Chiropractic sessions require your full presence and steady hands.',
  situationBullets: [
    'You are mid-adjustment and need total concentration',
    'A patient is on the table and you are palpating their spine',
    'You are reviewing X-rays with a patient and explaining their treatment plan',
    'Your receptionist is on lunch break and you are the only one in the office',
  ],
  consequence:
    'New patients researching chiropractors often call several clinics in a row. The first one that answers and sounds professional wins the booking. If you miss that call, they have already moved on.',
  solutionIntro:
    'Bra Svar answers calls for your chiropractic clinic with the professionalism your patients expect.',
  handles: [
    'Book initial consultations and follow-up sessions',
    'Answer questions about treatment approaches and what to expect',
    'Handle cancellations and rescheduling',
    'Provide information about insurance and payment options',
    'Forward urgent calls when a patient needs immediate attention',
  ],
  benefits: [
    'New patients always reach a professional, helpful voice',
    'Your treatment sessions stay uninterrupted',
    'After-hours calls are handled without you lifting a finger',
    'Patients feel cared for from the moment they call',
  ],
  benefitsIntro:
    'An AI assistant that represents your practice with the same attentiveness you show on the treatment table.',
  chat: [
    { who: 'customer', text: 'Hi, I have been having lower back pain for a few weeks. Do I need a referral to come in?' },
    { who: 'ai', text: 'No referral needed! You can book directly. We usually start with an initial consultation that includes an assessment. Would you like to schedule one?' },
    { who: 'customer', text: 'Yes, what do you have available next week?' },
    { who: 'ai', text: 'We have Tuesday at 10:00 or Thursday at 16:00. The initial visit takes about 45 minutes.' },
    { who: 'customer', text: 'Thursday at 16:00 works for me.' },
    { who: 'ai', text: 'Booked! Thursday at 16:00 for an initial consultation. Please wear comfortable clothing. See you then.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
