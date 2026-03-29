import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for veterinarians | Bra Svar!',
  description:
    'Never miss a pet owner call while you treat animals. Bra Svar answers the phone for veterinary clinics. Books appointments and triages urgency.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Veterinarians',
  intro:
    'You are mid-surgery on a cat. The front desk phone is ringing. A worried pet owner needs to get through. Bra Svar picks up so your patients get your full attention.',
  situation:
    'Veterinary work is urgent, physical, and unpredictable. You are treating animals that cannot wait, and every interruption carries a real cost to the patient on the table.',
  situationBullets: [
    'You are in surgery and scrubbed in',
    'An emergency case just came through the door',
    'You are examining a nervous animal that needs calm',
    'The clinic is short-staffed and the waiting room is full',
  ],
  consequence:
    'Pet owners in distress will call the next clinic if they cannot reach yours. Even routine check-up calls that go unanswered lead to lost revenue and empty appointment slots.',
  solutionIntro:
    'Bra Svar answers calls with care, triages urgency, and books appointments so your clinic runs smoothly.',
  handles: [
    'Book check-ups, vaccinations, and routine appointments',
    'Triage urgent calls and flag emergencies for immediate attention',
    'Answer questions about opening hours and services',
    'Provide pre-visit instructions for pet owners',
    'Take messages with pet details and symptoms',
  ],
  benefitsIntro:
    'An AI receptionist that pet owners trust, giving your clinic the availability it needs without pulling staff away from patients.',
  benefits: [
    'Focus on the animal in front of you without interruptions',
    'Never miss an emergency call, even outside office hours',
    'Fill appointment slots that would otherwise go empty',
    'Reduce front desk pressure during busy periods',
  ],
  chat: [
    { who: 'customer', text: 'Hi, my dog has been limping since this morning. Can I bring him in today?' },
    {
      who: 'ai',
      text: 'Hi! I am sorry to hear that. Is your dog able to put weight on the leg, or is he holding it up completely?',
    },
    { who: 'customer', text: 'He is limping but still walking on it.' },
    {
      who: 'ai',
      text: 'That is good. We have an appointment available at 15:30 today. Would that work?',
    },
    { who: 'customer', text: 'Yes, that works. His name is Baxter, he is a labrador.' },
    {
      who: 'ai',
      text: 'Noted. Baxter at 15:30 for a limp assessment. Can I get your name and phone number to confirm?',
    },
  ],
  related: [
    { href: '/en/clinic', label: 'Clinic' },
    { href: '/en/dog-grooming', label: 'Dog Grooming' },
    { href: '/en/medical-office', label: 'Medical Office' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
