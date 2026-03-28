import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Virtuell resepsjonist for bedrift | Bra Svar!',
  description: 'En digital resepsjonist som svarer telefonen, booker timer og hjelper kundene dine. Uten ventetid, uten ferie, uten sykefravær.',
  openGraph: {
    title: 'Virtuell resepsjonist for bedrift | Bra Svar!',
    description: 'En digital resepsjonist som svarer, booker og hjelper kundene dine.',
    url: 'https://brasvar.no/virtuell-resepsjonist',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630 }],
  },
};

const benefits = [
  { title: 'Alltid på plass', desc: 'Ingen sykefravær, ingen ferie, ingen lunsj. Den virtuelle resepsjonisten er der hver gang telefonen ringer.' },
  { title: 'Kjenner bedriften din', desc: 'Assistenten er opplært på dine tjenester, priser, åpningstider og vanlige kundehenvendelser. Den svarer som en del av teamet.' },
  { title: 'Håndterer det meste selv', desc: 'Timebestilling, vanlige spørsmål, beskjeder og viderekobling. De fleste henvendelser løses uten at du trenger å gjøre noe.' },
  { title: 'Koster en brøkdel', desc: 'En fysisk resepsjonist koster 400 000+ i året. Bra Svar starter på 1 490,- per måned, uten arbeidsgiveravgift og feriepenger.' },
];

const whoItsFor = [
  { title: 'Klinikker og helsepersonell', desc: 'Fokuser på pasientene. La resepsjonisten ta telefonen.' },
  { title: 'Håndverkere og servicebedrifter', desc: 'Vær ute på oppdrag uten å miste kunder.' },
  { title: 'Advokater og konsulenter', desc: 'Vær i møter uten å gå glipp av nye henvendelser.' },
  { title: 'Små kontorer', desc: 'Profesjonelt kundemottak uten å ansette noen.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bra Svar Virtuell Resepsjonist',
  description: 'Virtuell resepsjonist som svarer telefonen, booker timer og hjelper kundene dine.',
  image: 'https://brasvar.no/icon.svg',
  brand: { '@type': 'Organization', name: 'Bra Svar' },
  offers: [
    { '@type': 'Offer', name: 'Mini', price: '1490', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Basis', price: '2990', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
  ],
};

export default function VirtuellResepsjonist() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '4rem', textAlign: 'center', background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', paddingRight: 'clamp(1.5rem, 4vw, 3rem)' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Virtuell resepsjonist</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.25rem', maxWidth: '750px', marginLeft: 'auto', marginRight: 'auto' }}>
          Resepsjonisten som aldri er <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>borte</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
          Bra Svar er en virtuell resepsjonist som svarer telefonen for bedriften din med en naturlig norsk stemme. Assistenten booker timer, svarer på spørsmål og sørger for at ingen kunder faller mellom stolene.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Prøv gratis</Link>
          <a href="tel:+4764006264" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#db2777', background: '#fff', border: '1.5px solid rgba(236,72,153,0.3)', borderRadius: '12px', textDecoration: 'none' }}>Ring 64 00 62 64</a>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2.5rem' }}>Hvorfor velge en virtuell resepsjonist?</h2>
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
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2rem' }}>Kundene forventer profesjonelt mottak. Du trenger ikke ansette for å levere det.</h2>
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
        <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>Kostnaden i perspektiv</h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ padding: '1.5rem 2rem', borderRadius: '16px', border: '1px solid #f1f5f9', flex: 1, minWidth: '200px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Fysisk resepsjonist</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>~35 000,-</p>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>per måned</p>
          </div>
          <div style={{ padding: '1.5rem 2rem', borderRadius: '16px', border: '2px solid #ec4899', background: 'rgba(253,242,248,0.3)', flex: 1, minWidth: '200px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Bra Svar</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>1 490,-</p>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>per måned</p>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>Samme jobb. 96% lavere kostnad.</p>
      </div>

      <div style={{ textAlign: 'center', padding: '3rem 2rem 5rem', background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Profesjonelt kundemottak, uten å ansette</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Gratis å prøve. Ingen binding.</p>
        <Link href="/" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '14px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Prøv Bra Svar gratis</Link>
      </div>
    </main>
  );
}
