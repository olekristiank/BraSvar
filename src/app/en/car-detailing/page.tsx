import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for car detailing | Bra Svar!',
  description:
    'Never miss a customer while you polish and coat. Bra Svar answers the phone for car detailing businesses. Books jobs automatically, 24/7.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Car detailing',
  intro:
    'You are halfway through a ceramic coating application. Timing is everything. The phone rings, but stopping now could ruin the finish. Bra Svar takes the call so your work stays flawless.',
  situation:
    'Car detailing demands precision and uninterrupted focus. Whether you are polishing paint, applying coatings, or doing a full interior detail, stepping away mid-job is not an option.',
  situationBullets: [
    'You are applying ceramic coating and the timing is critical',
    'A paint correction job requires your undivided attention',
    'Your hands are covered in compound and polish',
    'You are working inside a vehicle with the vacuum running',
  ],
  consequence:
    'Car owners looking for detailing want to book fast. If you do not answer, they will find someone who does. One missed call on a high-value job can cost you hundreds.',
  solutionIntro:
    'Bra Svar books jobs and answers questions while you deliver showroom-quality results.',
  handles: [
    'Book detailing appointments for different service levels',
    'Answer questions about packages, pricing, and duration',
    'Provide information about coatings, polishing, and interior cleaning',
    'Take vehicle details like make, model, and condition',
    'Share your location and drop-off instructions',
  ],
  benefitsIntro:
    'An AI assistant that sells your services while you focus on the craft.',
  benefits: [
    'Fill your calendar without putting down the polisher',
    'Capture every lead, including after-hours inquiries',
    'Give customers instant answers about your services',
    'Spend less time on the phone and more time detailing',
  ],
  chat: [
    { who: 'customer', text: 'Hi, what does a full exterior detail cost for an SUV?' },
    {
      who: 'ai',
      text: 'Hi! A full exterior detail for an SUV starts at 3,500 kr and includes wash, clay bar, polish, and sealant. Would you like to book?',
    },
    { who: 'customer', text: 'Yes. Do you also do ceramic coating?' },
    {
      who: 'ai',
      text: 'We do! Ceramic coating is available as an add-on or standalone service. I can book you in for a consultation where we assess the paint condition first. When works for you?',
    },
    { who: 'customer', text: 'Next Monday if possible.' },
    {
      who: 'ai',
      text: 'Monday at 09:00 works. Can I get your name and the make and model of the vehicle?',
    },
  ],
  related: [
    { href: '/en/workshop', label: 'Workshop' },
    { href: '/en/dog-grooming', label: 'Dog Grooming' },
    { href: '/en/cleaning', label: 'Cleaning' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
