import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for painters | Bra Svar!',
  description:
    'Win more jobs without climbing down from the scaffolding. Bra Svar handles quotes and schedules site visits while you paint.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Painters',
  intro:
    'You are up on the scaffolding with a roller in hand. The facade is halfway done and the paint is drying fast. Your phone buzzes in your pocket. Someone wants a quote for the whole house. You cannot answer. Bra Svar can.',
  situation:
    'As a painter you rarely have your hands free. You are either up on scaffolding, spray-painting, hanging wallpaper or driving between jobs.',
  situationBullets: [
    'Up on scaffolding with roller and paint',
    'Spray-painting with a mask and full protective gear',
    'Wallpapering where the adhesive dries and timing is everything',
    'Driving between two jobs and unable to pick up the phone safely',
    'Filling and sanding walls with dust everywhere',
  ],
  consequence:
    'Customers who need a painter often compare several quotes. The one who responds fastest and appears most professional usually gets the job. A missed call means the competitor wins the contract.',
  solutionIntro:
    'Bra Svar takes the inquiry, asks what the customer needs and schedules a site visit on your behalf.',
  handles: [
    'Pricing inquiries for interior and exterior painting',
    'Scheduling site visits to assess the scope',
    'Checking availability and suggesting start dates',
    'Answering questions about interior or exterior work',
    'Noting preferences for colors and surface treatment',
  ],
  benefitsIntro:
    'With Bra Svar you can focus on the brush while new jobs keep coming in.',
  benefits: [
    'Never lose a job because you were up on the scaffolding',
    'Customers get a fast and professional response, even in peak season',
    'You get all the job details collected after the workday',
    'More site visits on the calendar without lifting a finger',
  ],
  chat: [
    { who: 'customer', text: 'Hi, we need a painter for the living room and hallway. Can you give us a quote?' },
    { who: 'ai', text: 'Hi! Absolutely. To give you a good estimate we need a bit more info. How large is the area roughly, and what kind of work is needed? Just painting, or do the walls need filling first?' },
    { who: 'customer', text: 'The living room is about 30 square meters and the hallway maybe 10. The walls are in decent shape but probably need a round of sanding.' },
    { who: 'ai', text: 'Got it. Have you decided on a color, or would you like advice on that as well?' },
    { who: 'customer', text: 'We are not sure yet. Some guidance would be great.' },
    { who: 'ai', text: 'Great. Then I suggest a site visit where the painter can see the walls and help with color choices. Can I get your name and address so we can find a time that works?' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
