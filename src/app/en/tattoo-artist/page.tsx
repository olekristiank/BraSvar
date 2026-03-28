import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for tattoo artists | Bra Svar!',
  description:
    'Never lose a client while you are tattooing. Bra Svar takes bookings and design requests while the needle is in the skin.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Tattoo artists',
  intro:
    'You are in the middle of a detailed piece on someone\'s forearm. The needle is running. Your client is holding their breath. The phone rings. Someone wants to book a consultation for a sleeve design. You cannot stop. Bra Svar takes the call.',
  situation:
    'Tattooing demands total concentration. You work with a needle against skin, gloves on, and every interruption can affect the result.',
  situationBullets: [
    'Mid-tattoo where stopping could ruin the linework',
    'Consultation with a client going through design details',
    'Preparing stencils and setting up equipment between sessions',
    'Long sessions where you do not see your phone for hours',
    'Aftercare walkthrough with a client who just finished',
  ],
  consequence:
    'People who want a tattoo often call on impulse. If they do not get an answer, they book with another artist. Every missed call could be a major booking.',
  solutionIntro:
    'Bra Svar takes all inquiries, notes what the client wants and sends you an overview when you are ready between sessions.',
  handles: [
    'Booking consultations for new designs',
    'Pricing inquiries based on size and placement',
    'Collecting descriptions of design ideas and reference images',
    'Informing callers about available time slots',
    'Answering questions about aftercare and healing time',
  ],
  benefitsIntro:
    'With Bra Svar you can keep your focus on the needle while bookings keep rolling in.',
  benefits: [
    'No interruptions in the middle of a tattoo session',
    'Clients with design ideas are taken seriously right away',
    'You get all the details collected in one place after the session',
    'A professional impression that builds trust before the first consultation',
  ],
  chat: [
    { who: 'customer', text: 'Hi, I would like to book an appointment for a tattoo on my forearm.' },
    { who: 'ai', text: 'Hey! Great that you want to get tattooed. Do you have a design in mind, or do you need help with that?' },
    { who: 'customer', text: 'I am thinking a nature motif with mountains and forest wrapping around the whole forearm.' },
    { who: 'ai', text: 'That sounds like an awesome project. Do you have any reference images or a particular style you like? For example realistic, blackwork or fineline?' },
    { who: 'customer', text: 'Fineline with some dotwork. I have a few images I can send over.' },
    { who: 'ai', text: 'Perfect. I will book you in for a consultation where you can go through the design together. Can I get your name and email so the artist can send you available times?' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
