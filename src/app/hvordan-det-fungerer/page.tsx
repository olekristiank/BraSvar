import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import HowItWorksPageContent from './HowItWorksPageContent';

export const metadata: Metadata = {
  title: 'Slik fungerer Bra Svar | AI som svarer telefonen for deg',
  description: 'Se hvordan Bra Svar svarer telefonen, snakker med kundene dine og booker avtaler automatisk. Enkelt, effektivt og tilgjengelig døgnet rundt.',
};

export default function HowItWorksPage() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <Navbar />
      <HowItWorksPageContent />
    </main>
  );
}
