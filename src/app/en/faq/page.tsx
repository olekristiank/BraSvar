import type { Metadata } from 'next';
import NavbarEN from '@/components/NavbarEN/NavbarEN';
import { getFAQsByCategory } from '@/lib/faqs-en';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Bra Svar!',
  description: 'Find answers to common questions about Bra Svar, the AI phone assistant for Norwegian businesses. Pricing, setup, privacy and more.',
};

export default function FAQPage() {
  const categories = getFAQsByCategory();

  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <NavbarEN />

      <div style={{
        paddingTop: 'clamp(6rem, 12vw, 9rem)',
        paddingBottom: '3rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>FAQ</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1rem' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '550px', margin: '0 auto', lineHeight: 1.6 }}>
          Everything you need to know about Bra Svar.
        </p>
      </div>

      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
        {categories.map((cat) => (
          <div key={cat.title} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #f1f5f9' }}>
              {cat.title}
            </h2>
            {cat.faqs.map((faq) => (
              <div key={faq.q} style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
