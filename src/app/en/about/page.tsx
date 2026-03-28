import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Bra Svar | Bra Svar!',
  description: 'Bra Svar is a service from Klevstrand Innovasjon, a Norwegian technology company. AI phone assistants for small and medium businesses.',
  openGraph: {
    title: 'About Bra Svar | Bra Svar!',
    description: 'AI phone assistants for small and medium businesses, built in Norway.',
    url: 'https://brasvar.no/en/about',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630 }],
  },
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '2.5rem',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
  fontWeight: 700,
  color: '#0f172a',
  marginBottom: '0.75rem',
};

const textStyle: React.CSSProperties = {
  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
  color: '#334155',
  lineHeight: 1.7,
};

export default function AboutPage() {
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
          About Bra Svar
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#64748b',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          AI phone assistants for small and medium businesses.
        </p>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '2rem 2rem 4rem',
      }}>
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Who we are</h2>
          <p style={textStyle}>
            Bra Svar is a service from Klevstrand Innovasjon, a Norwegian technology company based in Akershus. We build software for small and medium-sized businesses.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>What we do</h2>
          <p style={textStyle}>
            With Bra Svar, we build AI phone assistants that answer the phone for your business with a natural voice. The assistant books appointments, answers questions and sends you a summary afterwards.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Why</h2>
          <p style={textStyle}>
            Because small businesses deserve the same availability as large corporations, without the cost.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Contact information</h2>
          <p style={textStyle}>
            Phone: <a href="tel:+4764006264" style={{ color: '#ec4899', textDecoration: 'none' }}>64 00 62 64</a><br />
            Email: <a href="mailto:kontakt@brasvar.no" style={{ color: '#ec4899', textDecoration: 'none' }}>kontakt@brasvar.no</a>
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Company</h2>
          <p style={textStyle}>
            Klevstrand Innovasjon<br />
            Org.nr. 937 361 157<br />
            www.klevstrand.no
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/en" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ec4899, #f472b6)',
            color: '#fff',
            fontWeight: 700,
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 14px rgba(236, 72, 153, 0.35)',
          }}>
            Try Bra Svar for free
          </Link>
        </div>
      </div>
    </main>
  );
}
