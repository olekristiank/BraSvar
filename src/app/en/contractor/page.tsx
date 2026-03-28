import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for contractors | Bra Svar!',
  description:
    'Catch every new project inquiry. Bra Svar answers the phone when you are on the construction site, and collects what you need to send a quote.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Contractors',
  intro:
    'When you are standing on the construction site with ear protection and safety responsibilities, you cannot answer the phone. Bra Svar catches new projects before the competitor does.',
  situation:
    'You are on the construction site. The excavator is running, formwork needs to go up, and the subcontractor needs a decision. Your phone vibrates in your pocket, but you cannot hear it over the noise. After lunch you see three missed calls from unknown numbers.',
  situationBullets: [
    'Noise from machinery and tools makes it impossible to hear the phone',
    'Safety regulations mean you cannot use a phone in work zones',
    'Meetings with subcontractors and suppliers take up the entire morning',
    'Site inspections and project management keep you away from the office',
  ],
  consequence:
    'A homeowner who needs a garage, extension or groundwork calls three firms. The one who answers first and seems professional gets the site visit. The other two never hear from the customer again. In a competitive industry, response time is everything.',
  solutionIntro:
    'Bra Svar takes the inquiry, asks the right questions and sends you a summary.',
  handles: [
    'New project inquiries with details about what the customer needs',
    'Requests for quotes and estimates',
    'Booking site visits at available times',
    'Questions about availability and start dates',
    'Follow-up on existing projects and timelines',
    'Forwarding urgent matters to the right person',
  ],
  benefitsIntro:
    'In contracting you win the job before you lift a hammer. Fast response and a professional first impression decide who gets the contract.',
  benefits: [
    'New inquiries are captured even in the middle of the workday',
    'You get a ready-made summary with the customer\'s needs and contact info',
    'The customer experiences a professional firm that answers immediately',
    'You avoid spending the evening calling back unknown numbers',
    'Site visits are booked directly without back-and-forth on the phone',
  ],
  chat: [
    { who: 'customer', text: 'Hi, we want to build a garage and are wondering if you can give us a quote.' },
    { who: 'ai', text: 'Hi! Yes, we can definitely help with that. Do you have any plans or drawings already, or do you need help from the ground up?' },
    { who: 'customer', text: 'We have a rough sketch but no approved drawings yet. It should be a double garage with a flat roof.' },
    { who: 'ai', text: 'Noted. To give you a good estimate we need to see the site. Can we set up a visit? It is completely non-binding.' },
    { who: 'customer', text: 'Sure. We are located just outside the city.' },
    { who: 'ai', text: 'Great! We have availability for a site visit on Thursday or Friday this week. What works for you? I will send details and confirmation afterwards.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
