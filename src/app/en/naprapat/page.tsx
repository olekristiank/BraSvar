import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for naprapaths | Bra Svar!',
  description:
    'Focus on the patient on the table. Bra Svar answers the phone while you are treating, and makes sure new patients get an appointment.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Naprapaths',
  intro:
    'Your patient is on the table and you are performing a manipulation that requires full concentration. The phone rings in your pocket. You cannot take it right now. But it could be a new patient who has been dealing with pain for weeks and is finally reaching out.',
  situation:
    'Naprapaths and manual therapists work one-on-one with the patient, often without a reception or secretary.',
  situationBullets: [
    'You are manipulating the neck or spine and cannot stop midway',
    'The patient is undressed on the table and deserves privacy',
    'You have treatments back to back with no break in between',
    'You run the clinic alone and are your own receptionist',
  ],
  consequence:
    'New patients who call for the first time rarely give you a second chance. If no one answers, they find another practitioner. And a first-time patient who does not call back is lost revenue for months to come.',
  solutionIntro:
    'Bra Svar takes new patients on the phone and books them in, while you do your work on the table.',
  handles: [
    'Booking appointments for new or existing patients',
    'First-time inquiries with information about what to expect',
    'Changing or cancelling appointments',
    'Questions about pricing and treatment types',
    'Information about waiting times and availability',
  ],
  benefitsIntro:
    'An AI assistant that gives new patients a great first impression and keeps the appointment book full.',
  benefits: [
    'New patients are greeted professionally right away',
    'You no longer need to call back between treatments',
    'Full concentration on the patient in front of you',
    'Your schedule fills up without you lifting a finger',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I would like to book an appointment with a naprapath. Is that possible?' },
    { who: 'ai', text: 'Hi! Of course. Have you been to our clinic before?' },
    { who: 'customer', text: 'No, this is my first time.' },
    { who: 'ai', text: 'Welcome! The first consultation is 45 minutes and includes both an examination and treatment. We have availability on Tuesday at 10:00 AM or Wednesday at 3:30 PM. Which works best?' },
    { who: 'customer', text: 'Wednesday at 3:30 works great.' },
    { who: 'ai', text: 'Can I get your name and phone number?' },
    { who: 'customer', text: 'James Anderson, 555-0142.' },
    { who: 'ai', text: 'You are all set for Wednesday at 3:30 PM, James. Wear comfortable clothing that is easy to move in. See you then!' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
