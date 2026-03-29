import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/NavbarEN/NavbarEN';

export const metadata: Metadata = {
  title: 'Phone answering for business | Bra Svar!',
  description: 'Never miss an important call. Bra Svar is an AI phone answering service that has natural conversations, takes messages and books appointments. No commitment.',
  openGraph: {
    title: 'Phone answering for business | Bra Svar!',
    description: 'An AI phone answering service that has natural conversations and books appointments for your business.',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630 }],
  },
};

const comparison = [
  { feature: 'Answers calls', traditional: 'After a beep', brasvar: 'Immediately, natural conversation' },
  { feature: 'Available', traditional: 'Always', brasvar: 'Always' },
  { feature: 'Takes messages', traditional: 'Voicemail', brasvar: 'Structured summary' },
  { feature: 'Books appointments', traditional: 'No', brasvar: 'Yes, directly in your calendar' },
  { feature: 'Answers questions', traditional: 'No', brasvar: 'Yes, based on your business info' },
  { feature: 'Forwards calls', traditional: 'No', brasvar: 'Yes, according to your rules' },
  { feature: 'Customer leaves a message', traditional: 'Rarely', brasvar: 'Always (conversation is completed)' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bra Svar Phone Answering Service',
  description: 'AI phone answering service that has real conversations and books appointments.',
  image: 'https://brasvar.no/icon.svg',
  brand: { '@type': 'Organization', name: 'Bra Svar' },
  offers: [
    { '@type': 'Offer', name: 'Mini', price: '1490', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Basis', price: '2990', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
  ],
};

export default function PhoneAnsweringService() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '4rem', textAlign: 'center', background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', paddingRight: 'clamp(1.5rem, 4vw, 3rem)' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Phone Answering Service</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.25rem', maxWidth: '750px', marginLeft: 'auto', marginRight: 'auto' }}>
          Not an answering machine.<br />A <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>conversation.</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
          Most people who call a business do not leave a message on a standard answering machine. They call the next option. Bra Svar has a real conversation, answers questions and takes bookings. The customer gets an answer. No one calls a competitor.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/en/contact" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Try for free</Link>
          <a href="tel:+4764006264" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#db2777', background: '#fff', border: '1.5px solid rgba(236,72,153,0.3)', borderRadius: '12px', textDecoration: 'none' }}>Call 64 00 62 64</a>
        </div>
      </div>

      {/* Comparison table */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2rem' }}>What actually happens when the customer calls?</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#0f172a' }}></th>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#94a3b8' }}>Traditional answering machine</th>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#db2777' }}>Bra Svar</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature}>
                  <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f1f5f9', fontWeight: 600, color: '#0f172a' }}>{row.feature}</td>
                  <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f1f5f9', color: '#94a3b8' }}>{row.traditional}</td>
                  <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f1f5f9', color: '#334155' }}>{row.brasvar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Why switch */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '1.5rem' }}>Why businesses are switching from answering machines</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            { title: 'Fewer customers calling the competitor', text: 'A traditional answering machine asks the customer to call back. Most never do. Bra Svar gives an answer right away, so the customer stays with you.' },
            { title: 'Full overview without voicemail', text: 'After every call you get a short summary. Who called, what they needed, and what was agreed. No voicemail to listen through.' },
            { title: 'Appointments that book themselves', text: 'The customer books an appointment directly during the call. No extra steps, no "call back during business hours".' },
          ].map((item) => (
            <div key={item.title}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.35rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '3rem 2rem 5rem', background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Switch from answering machine to conversation</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Free to try. No commitment, no setup fee.</p>
        <Link href="/en/contact" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '14px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Try Bra Svar for free</Link>
      </div>
    </main>
  );
}
