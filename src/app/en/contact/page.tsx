import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Contact us | Bra Svar!',
  description: 'Get in touch with Bra Svar. Call us at 64 00 62 64 or send us an email.',
  openGraph: {
    title: 'Contact us | Bra Svar!',
    description: 'Get in touch with Bra Svar. Call us at 64 00 62 64 or send us an email.',
    url: 'https://brasvar.no/en/contact',
  },
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <Navbar />

      {/* Header */}
      <div style={{
        paddingTop: 'clamp(6rem, 12vw, 9rem)',
        paddingBottom: '3rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}>
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1.15,
          marginBottom: '1rem',
        }}>
          Contact us
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#64748b',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Questions? Call or email us.
        </p>
      </div>

      {/* Contact details */}
      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        padding: '2rem 2rem 4rem',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
            fontWeight: 600,
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            Phone
          </p>
          <a href="tel:+4764006264" style={{
            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
            fontWeight: 700,
            color: '#0f172a',
            textDecoration: 'none',
          }}>
            64 00 62 64
          </a>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
            fontWeight: 600,
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            Email
          </p>
          <a href="mailto:kontakt@brasvar.no" style={{
            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
            fontWeight: 700,
            color: '#0f172a',
            textDecoration: 'none',
          }}>
            kontakt@brasvar.no
          </a>
        </div>

        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #e2e8f0',
        }}>
          <p style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
            fontWeight: 600,
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            Company
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#334155',
            lineHeight: 1.7,
          }}>
            Klevstrand Innovasjon
          </p>
        </div>
      </div>
    </main>
  );
}
