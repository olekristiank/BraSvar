import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'AI Switchboard for businesses | Bra Svar!',
  description: 'An intelligent AI switchboard that answers the phone for your business around the clock. Handles calls, books appointments and forwards calls. No commitment.',
  openGraph: {
    title: 'AI Switchboard for businesses | Bra Svar!',
    description: 'An intelligent AI switchboard that answers the phone for your business around the clock.',
    url: 'https://brasvar.no/en/ai-switchboard',
  },
};

const features = [
  { title: 'Answers immediately', desc: 'No waiting time. The customer who calls at nine in the evening books an appointment before they go to bed.' },
  { title: 'Understands Norwegian and English', desc: 'Fluent Norwegian with understanding of dialects and accents. Also works in English.' },
  { title: 'Books appointments', desc: 'Connected to your calendar system. The customer picks a time, and the appointment appears in your calendar.' },
  { title: 'Forwards calls', desc: 'When the customer needs you personally, the assistant transfers the call. You set the rules.' },
  { title: 'Sends summaries', desc: 'After every call you get a short summary. You always know what customers asked about.' },
  { title: 'Customized to your business', desc: 'We build the assistant around your services, prices and routines. It responds as part of your team.' },
];

const useCases = [
  'Clinics and healthcare providers who miss calls during appointments',
  'Tradespeople out on jobs who cannot pick up the phone',
  'Lawyers and consultants in meetings all day',
  'Hairdressers and gyms where no one has time to answer',
  'Small offices that need professional reception without hiring',
];

export default function AISwitchboard() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <Navbar />

      <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '4rem', textAlign: 'center', background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', paddingRight: 'clamp(1.5rem, 4vw, 3rem)' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>AI Switchboard</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.25rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          A switchboard that never takes a <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>break</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
          Answers your phone with a natural voice. Around the clock, without waiting time. You never miss a call again.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/en/contact" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Try for free</Link>
          <a href="tel:+4764006264" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#db2777', background: '#fff', border: '1.5px solid rgba(236,72,153,0.3)', borderRadius: '12px', textDecoration: 'none' }}>Call 64 00 62 64</a>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2.5rem' }}>What can an AI switchboard do?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {features.map((f) => (
            <div key={f.title} style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '1.5rem' }}>Who uses an AI switchboard?</h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
          {useCases.map((uc) => (
            <li key={uc} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
              {uc}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: 'center', padding: '3rem 2rem 5rem', background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Ready to never miss a call again?</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Free to try. No commitment, no setup fee.</p>
        <Link href="/en/contact" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '14px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Try Bra Svar for free</Link>
      </div>
    </main>
  );
}
