import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Virtual receptionist for business | Bra Svar!',
  description: 'A digital receptionist that answers the phone, books appointments and helps your customers. No waiting, no holidays, no sick leave.',
  openGraph: {
    title: 'Virtual receptionist for business | Bra Svar!',
    description: 'A digital receptionist that answers, books and helps your customers.',
    url: 'https://brasvar.no/en/virtual-receptionist',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630 }],
  },
};

const benefits = [
  { title: 'Always on duty', desc: 'No sick leave, no holidays, no lunch break. The virtual receptionist is there every time the phone rings.' },
  { title: 'Knows your business', desc: 'The assistant is trained on your services, prices, opening hours and common customer enquiries. It responds as part of your team.' },
  { title: 'Handles most things on its own', desc: 'Appointment booking, common questions, messages and call forwarding. Most enquiries are resolved without you having to do anything.' },
  { title: 'Costs a fraction', desc: 'A physical receptionist costs 400,000+ NOK per year. Bra Svar starts at 1,490 NOK per month, without employer taxes and holiday pay.' },
];

const whoItsFor = [
  { title: 'Clinics and healthcare professionals', desc: 'Focus on your patients. Let the receptionist take the phone.' },
  { title: 'Tradespeople and service companies', desc: 'Be out on jobs without losing customers.' },
  { title: 'Lawyers and consultants', desc: 'Be in meetings without missing new enquiries.' },
  { title: 'Small offices', desc: 'Professional customer reception without hiring anyone.' },
];

export default function VirtualReceptionist() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Product',
        name: 'Bra Svar Virtual Receptionist',
        description: 'Virtual receptionist that answers calls, books appointments and helps your customers.',
        image: 'https://brasvar.no/icon.svg',
        brand: { '@type': 'Organization', name: 'Bra Svar' },
        offers: [
          { '@type': 'Offer', name: 'Mini', price: '1490', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Basis', price: '2990', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
        ],
      }) }} />
      <Navbar />

      <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '4rem', textAlign: 'center', background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', paddingRight: 'clamp(1.5rem, 4vw, 3rem)' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Virtual Receptionist</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.25rem', maxWidth: '750px', marginLeft: 'auto', marginRight: 'auto' }}>
          The receptionist who{`'`}s always <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>there</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
          Bra Svar is a virtual receptionist that answers the phone for your business with a natural voice. The assistant books appointments, answers questions and makes sure every call is answered.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/en/contact" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Try for free</Link>
          <a href="tel:+4764006264" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#db2777', background: '#fff', border: '1.5px solid rgba(236,72,153,0.3)', borderRadius: '12px', textDecoration: 'none' }}>Call 64 00 62 64</a>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2.5rem' }}>Why choose a virtual receptionist?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {benefits.map((b) => (
            <div key={b.title} style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.5rem' }}>{b.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who it's for */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2rem' }}>Customers expect professional reception. You do not need to hire to deliver it.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {whoItsFor.map((w) => (
            <div key={w.title} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', marginBottom: '0.2rem' }}>{w.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cost comparison */}
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem clamp(1.5rem, 4vw, 3rem) 4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>The cost in perspective</h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ padding: '1.5rem 2rem', borderRadius: '16px', border: '1px solid #f1f5f9', flex: 1, minWidth: '200px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Physical receptionist</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>~35,000 NOK</p>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>per month</p>
          </div>
          <div style={{ padding: '1.5rem 2rem', borderRadius: '16px', border: '2px solid #ec4899', background: 'rgba(253,242,248,0.3)', flex: 1, minWidth: '200px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Bra Svar</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>1,490 NOK</p>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>per month</p>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>A fraction of the cost.</p>
      </div>

      <div style={{ textAlign: 'center', padding: '3rem 2rem 5rem', background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Professional customer reception, without hiring</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Free to try. No commitment.</p>
        <Link href="/en/contact" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '14px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Try Bra Svar for free</Link>
      </div>
    </main>
  );
}
