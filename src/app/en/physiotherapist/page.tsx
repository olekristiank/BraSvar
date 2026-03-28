import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for physiotherapists | Bra Svar!',
  description:
    'Patient on the bench and phone ringing? Bra Svar answers for physiotherapy clinics so your sessions stay uninterrupted.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Physiotherapists',
  intro:
    'Your patient is on the treatment bench mid-exercise, relying on your guidance and hands-on support. Walking away to answer the phone breaks the session and sends the wrong message about your priorities.',
  situation: 'Physiotherapy sessions are hands-on and demand your continuous presence.',
  situationBullets: [
    'You are guiding a patient through a rehab exercise on the bench',
    'You are performing manual therapy that requires sustained pressure',
    'You are assessing a new patient\'s range of motion',
    'Sessions run back to back with barely a minute in between',
  ],
  consequence:
    'Patients recovering from injuries or surgery are often anxious and want to speak to someone right away. If they reach voicemail, they may assume you are too busy to take on new patients and look elsewhere.',
  solutionIntro:
    'Bra Svar makes sure every caller gets a helpful response, even when you are fully booked with sessions.',
  handles: [
    'Book initial assessments and follow-up sessions',
    'Answer questions about treatment types and specializations',
    'Handle referrals from doctors and hospitals',
    'Manage cancellations and waitlist requests',
    'Provide information about what to bring to the first session',
  ],
  benefits: [
    'Treatment sessions stay uninterrupted from start to finish',
    'Referred patients are captured immediately, not lost to voicemail',
    'Your schedule fills up without you spending time on the phone',
    'Patients get clear, helpful information before they arrive',
  ],
  benefitsIntro:
    'An AI assistant that handles your clinic calls with the same care and attention your patients receive in person.',
  chat: [
    { who: 'customer', text: 'My doctor referred me for physiotherapy after knee surgery. How do I book?' },
    { who: 'ai', text: 'Welcome! We handle post-surgical rehab. I can book your first assessment right away. Do you have a referral letter?' },
    { who: 'customer', text: 'Yes, my doctor sent it electronically.' },
    { who: 'ai', text: 'Perfect. We have openings on Monday at 09:00 or Wednesday at 14:00 for initial assessments. Which works better?' },
    { who: 'customer', text: 'Monday morning, please.' },
    { who: 'ai', text: 'You are set for Monday at 09:00. Please wear shorts or loose pants so we can assess your knee. See you then!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
