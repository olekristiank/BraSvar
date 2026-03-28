import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for plumbers | Bra Svar!',
  description:
    'Under the sink with a wrench in hand? Bra Svar answers your plumbing calls, triages emergencies, and captures every lead.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Plumbers',
  intro:
    'You are squeezed under a kitchen sink with water dripping on your face and a pipe wrench in your hand. Your phone is ringing in your back pocket. Someone probably has a burst pipe and needs help right now, but you literally cannot pick up.',
  situation: 'Plumbing jobs put you in tight spots where answering the phone is impossible.',
  situationBullets: [
    'You are under a sink with both hands on a leaking pipe',
    'You are soldering and cannot stop mid-join',
    'You are in a crawl space with no room to reach your phone',
    'You are driving to an emergency call and need both hands on the wheel',
  ],
  consequence:
    'Plumbing emergencies will not wait. A homeowner with a flooded basement calls three plumbers at once and goes with the first one who answers. That single emergency call can be worth hundreds or even thousands.',
  solutionIntro:
    'Bra Svar answers your calls instantly and sorts emergencies from routine jobs so you can prioritize.',
  handles: [
    'Triage emergency calls like burst pipes, leaks, and flooding',
    'Book routine appointments for installations and inspections',
    'Take detailed messages with address and problem description',
    'Provide your service area and after-hours availability',
    'Forward true emergencies directly to your phone',
  ],
  benefits: [
    'Emergency callers reach a helpful voice instead of voicemail',
    'You get organized details so you can quote before calling back',
    'No job is lost because you were on another job',
    'Your evenings are free because messages are already organized',
  ],
  benefitsIntro:
    'An AI assistant that understands the difference between a dripping faucet and a burst main, and handles both.',
  chat: [
    { who: 'customer', text: 'We have water pouring from the ceiling in our bathroom. I think a pipe burst upstairs!' },
    { who: 'ai', text: 'I\'m flagging this as urgent. Can I get your address so the plumber can reach you quickly?' },
    { who: 'customer', text: '8 River Road.' },
    { who: 'ai', text: 'Got it. I have marked this as an emergency at 8 River Road, possible burst pipe with ceiling leak. You will hear back within minutes.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
