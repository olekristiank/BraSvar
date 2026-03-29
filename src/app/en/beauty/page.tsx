import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for beauty salons | Bra Svar!',
  description:
    'Mid-treatment and cannot pick up? Bra Svar answers calls for beauty salons, books appointments, and keeps your clients happy.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Beauty salons',
  intro:
    'You are halfway through a lash extension, hands steady and focused, when the phone rings. Picking up means breaking concentration and risking the work. Not picking up means losing a potential client.',
  situation: 'Beauty treatments demand precision and uninterrupted focus.',
  situationBullets: [
    'You are applying lash extensions and cannot move your hands',
    'A client is lying under a facial mask and you are mid-treatment',
    'You are doing detailed nail art that requires total concentration',
    'You are waxing and timing is everything',
  ],
  consequence:
    'Clients looking for beauty treatments often book on impulse. If they cannot reach you right away, they scroll to the next salon and book there. That split-second decision costs you real money.',
  solutionIntro:
    'Bra Svar handles your calls so you can deliver flawless treatments without interruption.',
  handles: [
    'Book appointments for all treatment types',
    'Answer questions about services, duration, and pricing',
    'Reschedule or cancel existing bookings',
    'Share aftercare instructions for common treatments',
    'Manage waitlist spots for popular time slots',
  ],
  benefits: [
    'Book more clients without breaking your focus',
    'Clients feel taken care of from the very first call',
    'No more sticky-fingered phone handling mid-treatment',
    'Your calendar fills up even while you work',
  ],
  benefitsIntro:
    'An AI assistant that knows your menu, your prices, and how to make clients feel welcome before they even walk in.',
  chat: [
    { who: 'customer', text: 'Hi! I would like to book a full set of lash extensions. What do you have available this week?' },
    { who: 'ai', text: 'Hi there! We have openings on Wednesday at 11:00 and Friday at 13:00. A full set takes about 90 minutes. Which day works for you?' },
    { who: 'customer', text: 'Friday at 13:00 sounds great.' },
    { who: 'ai', text: 'Lovely! Can I get your name to reserve the spot?' },
    { who: 'customer', text: 'Emma Collins.' },
    { who: 'ai', text: 'All booked, Emma! Friday at 13:00 for a full lash set. We look forward to seeing you.' },
  ],
  related: [
    { href: '/en/hairdresser', label: 'Hairdresser' },
    { href: '/en/skin-clinic', label: 'Skin Clinic' },
    { href: '/en/wellness-clinic', label: 'Wellness Clinic' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
