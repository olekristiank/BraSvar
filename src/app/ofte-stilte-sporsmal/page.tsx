import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import { faqs, getFAQsByCategory } from '@/lib/faqs';
import FAQPageContent from './FAQPageContent';

export const metadata: Metadata = {
  title: 'Ofte stilte spørsmål | Bra Svar!',
  description: 'Finn svar på vanlige spørsmål om Bra Svar — AI-telefonassistenten for norske bedrifter. Priser, personvern, integrasjoner og mer.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function OSSPage() {
  const categories = getFAQsByCategory();

  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <FAQPageContent categories={categories} />
    </main>
  );
}
