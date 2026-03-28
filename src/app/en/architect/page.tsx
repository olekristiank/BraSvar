import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for architects | Bra Svar!',
  description:
    'Do not let new projects slip away while you are in design review. Bra Svar answers the phone and captures inquiries from potential clients.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Architects',
  intro:
    'In the middle of a design review or on a site visit with the planning authority, you cannot take the phone. Bra Svar makes sure new projects do not pass you by.',
  situation:
    'You are sitting in a project review with the structural engineer. Drawings are spread across the table and you are discussing load-bearing elements. The phone rings, but you cannot break your concentration. After that you have a site visit, then a meeting about the zoning plan. The whole day passes without you checking missed calls.',
  situationBullets: [
    'Design reviews and project meetings require full concentration',
    'Site visits take you away from the office for hours',
    'Meetings with planning authorities cannot be interrupted',
    'Creative work with drawings and models does not tolerate disruptions',
  ],
  consequence:
    'A homeowner planning an extension calls three architecture firms. The one that answers and asks good questions gets the invitation to a kickoff meeting. The others are forgotten. Architecture projects are often large, and a single missed call can mean significant lost revenue.',
  solutionIntro:
    'Bra Svar takes the inquiry, maps the need and gives you a clear summary.',
  handles: [
    'New project inquiries with a description of the scope',
    'Requests for an initial consultation',
    'Booking site visits at available times',
    'Questions about zoning plans and building permits',
    'Pricing inquiries and information about services',
    'Follow-up on ongoing projects and timelines',
  ],
  benefitsIntro:
    'Architecture projects start with a phone call. The firm that answers professionally and quickly builds trust from the first second.',
  benefits: [
    'New clients get a great first impression even when you are busy',
    'You do not lose large projects because the phone went to voicemail',
    'Site visits are scheduled directly without you needing to call back',
    'You can focus on design work without interruptions',
    'Inquiries arrive as tidy summaries you can review when it suits you',
  ],
  chat: [
    { who: 'customer', text: 'Hi, we are considering an extension on our house and need an architect. Is that something you work with?' },
    { who: 'ai', text: 'Hi! Yes, extensions are something we have a lot of experience with. Could you tell me a bit more about what you have in mind? For example how large the extension should be and what it will be used for.' },
    { who: 'customer', text: 'We need an extra bedroom and a new bathroom. The house is from 1985 and is in a zoned area.' },
    { who: 'ai', text: 'That sounds like a great project. Since the house is in a zoned area, we should review the zoning plan early on. We usually start with a site visit where we look at the possibilities and discuss the framework.' },
    { who: 'customer', text: 'What does a site visit like that cost?' },
    { who: 'ai', text: 'An initial site visit with a walkthrough takes about 1.5 hours and costs 3,500 kr. You will get a verbal assessment of the possibilities, limitations and next steps. Shall I set up a time?' },
    { who: 'customer', text: 'Yes, please. We are available next week.' },
    { who: 'ai', text: 'Great! We have availability on Wednesday morning or Friday after lunch. Which day works best? I will send a confirmation with the address and what to have ready.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
