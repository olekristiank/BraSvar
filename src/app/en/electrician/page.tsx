import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for electricians | Bra Svar!',
  description:
    'Wrist-deep in a fuse box? Bra Svar answers your calls, captures leads, and handles urgent requests while you work safely.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Electricians',
  intro:
    'You are inside a fuse box with live wires inches from your fingers. Reaching for your phone is not just inconvenient. It is dangerous. But that ringing phone might be the biggest job of the month.',
  situation: 'Electrical work demands complete focus and both hands free at all times.',
  situationBullets: [
    'You are working in a fuse box and touching your phone is a safety risk',
    'You are pulling cable through walls and your hands are occupied',
    'You are on a ladder wiring a ceiling fixture',
    'You are testing circuits and need to concentrate on the readings',
  ],
  consequence:
    'Homeowners with electrical problems want them fixed now. If you do not answer, they call the next electrician on Google. Emergency jobs, which are your highest-margin work, go to whoever picks up first.',
  solutionIntro:
    'Bra Svar captures every call so you never lose a job because your hands were busy keeping people safe.',
  handles: [
    'Take detailed messages about electrical issues and urgency level',
    'Book estimates and inspection appointments',
    'Answer questions about services and availability',
    'Prioritize and flag emergency calls like power outages',
    'Provide your service area and basic pricing information',
  ],
  benefits: [
    'Emergency calls are flagged so you can respond fast when you finish',
    'Routine inquiries are handled without interrupting your work',
    'You look professional and organized to every caller',
    'Leads are captured with all the details you need to quote',
  ],
  benefitsIntro:
    'An AI assistant that sorts the urgent from the routine and makes sure no job slips through the cracks.',
  chat: [
    { who: 'customer', text: 'Half the power in my house just went out. I need an electrician today if possible.' },
    { who: 'ai', text: 'I understand that is stressful. Let me take your details and flag this as urgent so the electrician can get back to you as soon as possible. What is your address?' },
    { who: 'customer', text: '27 Oak Lane, Apartment 3B.' },
    { who: 'ai', text: 'Got it. And can you tell me which areas of the house are affected?' },
    { who: 'customer', text: 'The kitchen and living room. The bedrooms still have power.' },
    { who: 'ai', text: 'That helps narrow it down. I have flagged this as urgent with your address and details. You should hear back very shortly. In the meantime, avoid using the affected outlets.' },
  ],
  related: [
    { href: '/en/plumber', label: 'Plumber' },
    { href: '/en/tradesperson', label: 'Tradesperson' },
    { href: '/en/contractor', label: 'Contractor' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
