import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Intelligent telefonsvarer for bedrift | Bra Svar!',
  description: 'Aldri gå glipp av et viktig anrop. Bra Svar er en KI-telefonsvarer som fører naturlige samtaler, tar beskjeder og booker timer. Norsk språk, ingen binding.',
  openGraph: {
    title: 'Intelligent telefonsvarer for bedrift | Bra Svar!',
    description: 'En KI-telefonsvarer som fører naturlige samtaler og booker timer for bedriften din.',
    url: 'https://brasvar.no/telefonsvarer-bedrift',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630 }],
  },
};

const comparison = [
  { feature: 'Svarer på samtaler', traditional: 'Etter pipetone', brasvar: 'Med én gang, naturlig samtale' },
  { feature: 'Tilgjengelig', traditional: 'Alltid', brasvar: 'Alltid' },
  { feature: 'Tar imot beskjed', traditional: 'Talemelding', brasvar: 'Strukturert oppsummering' },
  { feature: 'Booker timer', traditional: 'Nei', brasvar: 'Ja, direkte i kalenderen' },
  { feature: 'Svarer på spørsmål', traditional: 'Nei', brasvar: 'Ja, basert på din bedriftsinfo' },
  { feature: 'Videresender', traditional: 'Nei', brasvar: 'Ja, etter dine regler' },
  { feature: 'Kunden legger igjen beskjed', traditional: 'Sjelden', brasvar: 'Alltid (samtale fullføres)' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bra Svar Telefonsvarer',
  description: 'KI-telefonsvarer for norske bedrifter som fører naturlige samtaler og booker timer.',
  image: 'https://brasvar.no/icon.svg',
  brand: { '@type': 'Organization', name: 'Bra Svar' },
  offers: [
    { '@type': 'Offer', name: 'Mini', price: '1490', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Basis', price: '2990', priceCurrency: 'NOK', availability: 'https://schema.org/InStock' },
  ],
};

export default function Telefonsvarer() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '4rem', textAlign: 'center', background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', paddingRight: 'clamp(1.5rem, 4vw, 3rem)' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Telefonsvarer for bedrift</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.25rem', maxWidth: '750px', marginLeft: 'auto', marginRight: 'auto' }}>
          Ikke en telefonsvarer.<br />En <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>samtale.</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
          De fleste som ringer en bedrift legger ikke igjen beskjed på en vanlig telefonsvarer. De ringer neste alternativ. Bra Svar fører en ekte samtale, svarer på spørsmål og tar imot bestillinger. Kunden får hjelp, og du mister ingen.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Prøv gratis</Link>
          <a href="tel:+4764006264" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#db2777', background: '#fff', border: '1.5px solid rgba(236,72,153,0.3)', borderRadius: '12px', textDecoration: 'none' }}>Ring 64 00 62 64</a>
        </div>
      </div>

      {/* Comparison table */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2rem' }}>Hva skjer egentlig når kunden ringer?</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#0f172a' }}></th>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#94a3b8' }}>Vanlig telefonsvarer</th>
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

      {/* How it differs */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '1.5rem' }}>Hvorfor bytter bedrifter fra telefonsvarer?</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            { title: 'Færre kunder som ringer konkurrenten', text: 'En vanlig telefonsvarer ber kunden ringe tilbake. De fleste gjør det ikke. Bra Svar gir svar der og da, så kunden blir hos deg.' },
            { title: 'Full oversikt uten talepost', text: 'Etter hver samtale får du en kort oppsummering. Hvem ringte, hva de trengte, og hva som ble avtalt. Ingen talepost å lytte gjennom.' },
            { title: 'Avtaler som booker seg selv', text: 'Kunden booker time direkte i samtalen. Ingen ekstra steg, ingen «ring tilbake i åpningstiden».' },
          ].map((item) => (
            <div key={item.title}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.35rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vanlige spørsmål */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem clamp(1.5rem, 4vw, 3rem) 4rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2rem' }}>Vanlige spørsmål</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { q: 'Hva skjer om kunden stiller et spørsmål assistenten ikke kan svare på?', a: 'Assistenten er ærlig og sier at den ikke har svaret, men tilbyr å ta en beskjed slik at du kan ringe tilbake. Du får en oppsummering med spørsmålet og kontaktinformasjon, slik at du kan følge opp raskt. Ingen kunder blir hengende i løse luften.' },
            { q: 'Kan jeg fortsatt svare telefonen selv når jeg er tilgjengelig?', a: 'Absolutt. De fleste kunder bruker Bra Svar som en backup. Du kan sette opp viderekobling slik at assistenten kun tar over når du ikke svarer innen et visst antall ring, eller etter arbeidstid. Du bestemmer selv når AI-assistenten skal være aktiv.' },
            { q: 'Hvor lang tid tar det å komme i gang?', a: 'De fleste bedrifter er oppe og kjører i løpet av én til to virkedager. Vi trenger litt informasjon om tjenestene dine og hvordan du vil at samtaler skal håndteres. Deretter setter vi opp og tester assistenten sammen med deg før den aktiveres.' },
          ].map((item) => (
            <div key={item.q}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.35rem' }}>{item.q}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '3rem 2rem 5rem', background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Bytt fra telefonsvarer til samtale</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Gratis å prøve. Ingen binding, ingen oppstartskostnad.</p>
        <Link href="/" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '14px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>Prøv Bra Svar gratis</Link>
      </div>
    </main>
  );
}
