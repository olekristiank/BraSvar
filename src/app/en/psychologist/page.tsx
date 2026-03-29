import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for psychologists | Bra Svar!',
  description:
    'In session and cannot interrupt? Bra Svar answers calls for psychology practices with discretion and professionalism.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Psychologists',
  intro:
    'You are in the middle of a therapy session. Your client has just opened up about something deeply personal. The phone buzzing on your desk is not just a distraction. It is a breach of the safe space you have worked hard to create.',
  situation: 'Therapy sessions are sacred and interruptions are not acceptable.',
  situationBullets: [
    'You are in a session and your client needs your undivided attention',
    'Sessions run 45 to 60 minutes with no natural break to check messages',
    'You work alone without a receptionist',
    'New clients calling for the first time are often nervous and need a warm response',
  ],
  consequence:
    'People reaching out for mental health support have often taken a big step just by picking up the phone. If they get voicemail, many will not call back. That lost connection is not just a lost client. It is someone who needed help and did not get it.',
  solutionIntro:
    'Bra Svar gives every caller a calm, professional response, so nobody feels ignored when they reach out.',
  handles: [
    'Book initial consultations and regular sessions',
    'Answer questions about therapy approaches and specializations',
    'Provide information about fees and insurance coverage',
    'Handle cancellations and rescheduling with care',
    'Take messages with callback requests for sensitive inquiries',
  ],
  benefits: [
    'New clients feel welcomed and heard from the first call',
    'Your sessions stay completely uninterrupted',
    'After-hours callers get a helpful response instead of silence',
    'You control when and how you return calls',
  ],
  benefitsIntro:
    'An AI assistant that handles your practice calls with the discretion and warmth your work demands.',
  chat: [
    { who: 'customer', text: 'Hi, I have been struggling with anxiety and I am looking for a therapist. Do you have availability?' },
    { who: 'ai', text: 'Thank you for reaching out. Yes, we are currently accepting new clients. We offer a free 15-minute introductory call to make sure it is a good fit. Would you like to schedule one?' },
    { who: 'customer', text: 'That sounds good. What times are available?' },
    { who: 'ai', text: 'We have slots on Tuesday at 11:00 or Thursday at 15:30 for the intro call. Which would you prefer?' },
    { who: 'customer', text: 'Tuesday at 11:00.' },
    { who: 'ai', text: 'You are all set for Tuesday at 11:00. You will receive a brief form to fill out beforehand. Take care, and we look forward to speaking with you.' },
  ],
  related: [
    { href: '/en/clinic', label: 'Clinic' },
    { href: '/en/medical-office', label: 'Medical Office' },
    { href: '/en/naprapat', label: 'Naprapat' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
