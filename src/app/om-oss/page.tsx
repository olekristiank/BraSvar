import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Om Bra Svar | Bra Svar!',
  description: 'Bra Svar leverer KI-telefonassistenter for norske småbedrifter. Vi hjelper deg å svare kundene dine, døgnet rundt.',
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

export default function OmOssPage() {
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
          Om Bra Svar
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#64748b',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          KI-telefonassistenter for norske småbedrifter.
        </p>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '2rem 2rem 4rem',
      }}>
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hvem vi er</h2>
          <p style={textStyle}>
            Bra Svar er en tjeneste fra Klevstrand Innovasjon, et norsk teknologiselskap med base i Akershus. Hovedfokus er utvikling av SaaS-løsninger og apper for SMB og konsumentmarkedet, med brukervennlighet i fokus.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hva vi gjør</h2>
          <p style={textStyle}>
            Med tjenesten Bra Svar lager vi KI-telefonassistenter som svarer telefonen for bedriften din med en naturlig norsk stemme. Assistenten booker timer, svarer på spørsmål og sender deg oppsummering etterpå.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hvorfor</h2>
          <p style={textStyle}>
            Fordi småbedrifter fortjener samme tilgjengelighet som store selskaper, uten kostnadene.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Kontaktinformasjon</h2>
          <p style={textStyle}>
            Telefon: <a href="tel:+4764006264" style={{ color: '#ec4899', textDecoration: 'none' }}>64 00 62 64</a><br />
            E-post: <a href="mailto:kontakt@brasvar.no" style={{ color: '#ec4899', textDecoration: 'none' }}>kontakt@brasvar.no</a>
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Selskap</h2>
          <p style={textStyle}>
            Klevstrand Innovasjon<br />
            Org.nr. 937 361 157<br />
            www.klevstrand.no
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/" style={{
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
            Prøv Bra Svar gratis
          </Link>
        </div>
      </div>
    </main>
  );
}
