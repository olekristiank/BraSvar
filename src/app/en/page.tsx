import type { Metadata } from 'next';
import styles from '../page.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bra Svar! - AI Switchboard and Intelligent Customer Service',
  description: 'Bra Svar is your AI switchboard and customer service agent. It answers the phone, books appointments and helps your customers. Around the clock.',
  openGraph: {
    title: 'Bra Svar! - AI Switchboard and Intelligent Customer Service',
    description: 'AI switchboard that answers the phone, books appointments and helps your customers around the clock.',
    url: 'https://brasvar.no/en',
    siteName: 'Bra Svar',
    locale: 'en_US',
    type: 'website',
  },
};

const steps = [
  {
    num: '1',
    title: 'Customer calls',
    desc: 'Your phone rings as usual. If you cannot answer, the call is forwarded to Bra Svar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Bra Svar answers',
    desc: 'Within one second, your customer gets a friendly, professional response. No hold music, no waiting.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Customer gets help',
    desc: 'The AI books appointments, answers questions or takes a message. You get a summary afterwards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function EnglishHome() {
  return (
    <div id="main" className={styles.container}>
      <Navbar />

      {/* Hero */}
      <section className={styles.heroSection}>
        <main className={styles.main}>
          <h1 className={styles.heroHeadline}>
            When you don&apos;t answer,<br />
            your competitor does.
          </h1>
          <p className={styles.heroSubheadline}>
            <span className="display-font" style={{ fontWeight: 800, color: '#0f172a' }}>Bra Svar<span style={{ color: '#ec4899' }}>!</span></span> is your AI switchboard and customer service agent.<br />
            It answers the phone, books appointments and helps your customers. Around the clock.
          </p>

          <div className={styles.actions}>
            <Link href="/en/contact" className={styles.ctaPrimary}>
              Try Bra Svar for free
            </Link>
            <Link href="/" className={styles.ctaSecondary}>
              Listen to a call
            </Link>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 500, marginTop: '0.75rem' }}>
            Free to try. No commitment.
          </p>
        </main>
      </section>

      {/* How it works */}
      <section style={{
        width: '100%',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
        background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
          fontWeight: 800,
          color: '#0f172a',
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          How it works
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          maxWidth: '960px',
          margin: '0 auto',
        }}>
          {steps.map((step) => (
            <div key={step.num} style={{
              textAlign: 'center',
              padding: '2rem 1.5rem',
              borderRadius: '20px',
              border: '1px solid #f1f5f9',
              background: '#fff',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(253,242,248,0.8), rgba(255,241,242,0.8))',
                border: '1px solid rgba(236,72,153,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}>
                {step.icon}
              </div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '0.8rem',
                color: '#ec4899',
                marginBottom: '0.5rem',
              }}>
                Step {step.num}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#0f172a',
                marginBottom: '0.5rem',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#64748b',
                lineHeight: 1.6,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        width: '100%',
        textAlign: 'center',
        padding: 'clamp(3rem, 6vw, 5rem) 2rem',
        background: 'linear-gradient(180deg, #f8fafc 0%, #fdf2f8 100%)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: 800,
          color: '#0f172a',
          marginBottom: '1rem',
        }}>
          Ready to never miss a call again?
        </h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '1rem' }}>
          Free to try. No commitment, no setup fee.
        </p>
        <Link href="/en/contact" style={{
          display: 'inline-flex',
          padding: '1rem 2.5rem',
          fontWeight: 700,
          fontSize: '1rem',
          color: '#fff',
          background: 'linear-gradient(135deg, #db2777, #be185d)',
          borderRadius: '14px',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(236,72,153,0.3)',
        }}>
          Try Bra Svar for free
        </Link>
        <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#94a3b8' }}>
          Looking for the full Norwegian site? <Link href="/" style={{ color: '#ec4899', textDecoration: 'none' }}>Visit brasvar.no</Link>
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span className="display-font" style={{ fontWeight: 800, fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
            Bra Svar<span style={{ color: '#ec4899' }}>!</span>
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', marginBottom: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
              Solutions
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <Link href="/en/ai-switchboard" className={styles.footerLink}>AI Switchboard</Link>
              <Link href="/en/phone-answering-service" className={styles.footerLink}>Phone Answering Service</Link>
              <Link href="/en/virtual-receptionist" className={styles.footerLink}>Virtual Receptionist</Link>
              <Link href="/en/how-it-works" className={styles.footerLink}>How It Works</Link>
            </nav>
          </div>

          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
              About
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <Link href="/en/privacy" className={styles.footerLink}>Privacy Policy</Link>
              <Link href="/en/about" className={styles.footerLink}>About Us</Link>
              <Link href="/en/contact" className={styles.footerLink}>Contact</Link>
            </nav>
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: '600px', height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 auto 1rem' }} />
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)', fontWeight: 500, textAlign: 'center' }}>
          &copy; 2026 by Klevstrand Innovasjon
        </p>
      </footer>
    </div>
  );
}
