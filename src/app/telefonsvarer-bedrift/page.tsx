import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Telefonsvarer for bedrift | Bra Svar!',
  description: 'Aldri gå glipp av et viktig anrop. Vår KI-telefonsvarer tar imot samtaler når du ikke kan.',
};

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <Navbar />
      <div style={{
        paddingTop: 'clamp(6rem, 12vw, 9rem)',
        paddingBottom: '4rem',
        textAlign: 'center',
        padding: 'clamp(6rem, 12vw, 9rem) 2rem 4rem',
      }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
          Telefonsvarer for bedrift
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '550px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          Aldri gå glipp av et viktig anrop. Vår KI-telefonsvarer tar imot samtaler når du ikke kan.
        </p>
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem',
          color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)',
          borderRadius: '12px', textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(236,72,153,0.3)',
        }}>
          Prøv Bra Svar gratis
        </Link>
      </div>
    </main>
  );
}
