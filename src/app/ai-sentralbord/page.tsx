import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'AI Sentralbord for bedrifter | Bra Svar!',
  description: 'Et intelligent AI-sentralbord som svarer telefonen for bedriften din døgnet rundt. Håndterer samtaler, booker timer og videresender anrop. Norsk, ingen binding.',
  openGraph: {
    title: 'AI Sentralbord for bedrifter | Bra Svar!',
    description: 'Et intelligent AI-sentralbord som svarer telefonen for bedriften din døgnet rundt.',
    url: 'https://brasvar.no/ai-sentralbord',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630 }],
  },
};

const features = [
  { title: 'Svarer umiddelbart', desc: 'Ingen ventetid. Kunden som ringer klokken ni på kvelden booker time før de legger seg.' },
  { title: 'Forstår naturlig norsk', desc: 'Flytende norsk med forståelse for dialekter og aksenter. Fungerer også på engelsk.' },
  { title: 'Booker timer direkte', desc: 'Koblet til kalendersystemet ditt. Kunden velger tid, og avtalen dukker opp i kalenderen din.' },
  { title: 'Videresender ved behov', desc: 'Når kunden trenger deg personlig, setter assistenten samtalen over. Du bestemmer reglene.' },
  { title: 'Sender oppsummering', desc: 'Etter hver samtale får du en kort oppsummering. Du vet alltid hva kundene spurte om.' },
  { title: 'Tilpasses din bedrift', desc: 'Vi bygger assistenten rundt dine tjenester, priser og rutiner. Den svarer som en del av teamet.' },
];

const useCases = [
  'Tannleger som mister nye pasienter mens de står i behandling',
  'Håndverkere som er ute på oppdrag og ikke kan ta telefonen',
  'Advokater og rådgivere som sitter i møter hele dagen',
  'Frisører og treningssentre der ingen har tid til å svare',
  'Små kontorer som trenger profesjonelt mottak uten å ansette',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bra Svar AI Sentralbord',
  description: 'AI-sentralbord som svarer telefonen for norske bedrifter døgnet rundt.',
  image: 'https://brasvar.no/icon.svg',
  brand: { '@type': 'Organization', name: 'Bra Svar' },
  offers: [
    { '@type': 'Offer', name: 'Mini', price: '1490', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Basis', price: '2990', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
  ],
};

export default function AISentralbord() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '4rem', textAlign: 'center', background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', paddingRight: 'clamp(1.5rem, 4vw, 3rem)' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>AI Sentralbord</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.25rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          Et sentralbord som aldri tar <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>pause</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
          Svarer telefonen din med en naturlig norsk stemme. Døgnet rundt, uten ventetid. Du mister aldri et anrop igjen.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Prøv gratis</Link>
          <a href="tel:+4764006264" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#db2777', background: '#fff', border: '1.5px solid rgba(236,72,153,0.3)', borderRadius: '12px', textDecoration: 'none' }}>Ring 64 00 62 64</a>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2.5rem' }}>Hva kan et AI-sentralbord gjøre?</h2>
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
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '1.5rem' }}>Hvem bruker AI-sentralbord?</h2>
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
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Klar til å aldri miste et anrop igjen?</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Gratis å prøve. Ingen binding, ingen oppstartskostnad.</p>
        <Link href="/" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '14px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Prøv Bra Svar gratis</Link>
      </div>
    </main>
  );
}
