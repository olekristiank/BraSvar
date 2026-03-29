import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for consultants | Bra Svar!',
  description:
    'Stay focused on client work and workshops. Bra Svar answers the phone so you never miss a lead or a callback.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Consultants',
  intro:
    'You are leading a workshop with a room full of stakeholders. Your phone vibrates in your pocket. A new prospect is calling. Bra Svar handles the call so you can stay present.',
  situation:
    'Consulting means long stretches of focused client work. You are in workshops, at conferences, or deep in a deliverable. Picking up the phone mid-session is not an option, but letting it ring is not great either.',
  situationBullets: [
    'You are facilitating a client workshop and cannot step out',
    'You are at a conference and the room is too loud to take a call',
    'A deliverable deadline has you locked in for the day',
    'You are a solo consultant juggling multiple projects',
  ],
  consequence:
    'Missed calls from potential clients go to competitors who pick up. Existing clients expect responsiveness and start to wonder when calls go unanswered.',
  solutionIntro:
    'Bra Svar takes your calls professionally and gives you organized messages to follow up on your own schedule.',
  handles: [
    'Capture new business inquiries with project details',
    'Schedule meetings and discovery calls',
    'Answer questions about your services and approach',
    'Take detailed messages with context and urgency level',
    'Forward time-sensitive matters to you directly',
  ],
  benefitsIntro:
    'An AI assistant that keeps your pipeline healthy while you deliver for the clients you already have.',
  benefits: [
    'Never lose a lead while you are busy with client work',
    'Project professionalism even as a solo consultant',
    'Follow up with full context instead of guessing who called',
    'Reclaim focus time without sacrificing availability',
  ],
  chat: [
    { who: 'customer', text: 'Hi, we are looking for a consultant to help with our digital transformation. Is this the right number?' },
    {
      who: 'ai',
      text: 'Hi! Yes, you have reached the right place. The consultant is currently with a client. Can I take some details so they can get back to you?',
    },
    { who: 'customer', text: 'Sure. We are a mid-size logistics company and we need help modernizing our systems.' },
    {
      who: 'ai',
      text: 'Got it. Could I get your name, company name, and the best number to reach you?',
    },
    { who: 'customer', text: 'Lisa Berg, NordLog AS. You can reach me at 987 65 432.' },
    {
      who: 'ai',
      text: 'Thank you, Lisa. I have passed the details along. You can expect a callback within the day.',
    },
  ],
  related: [
    { href: '/en/accountant', label: 'Accountant' },
    { href: '/en/architect', label: 'Architect' },
    { href: '/en/insurance', label: 'Insurance' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
