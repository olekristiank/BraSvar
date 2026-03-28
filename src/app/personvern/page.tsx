import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Personvern | Bra Svar!',
  description: 'Les om hvordan Bra Svar behandler personopplysninger i tråd med GDPR.',
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

export default function PersonvernPage() {
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
          Personvernerklæring
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#64748b',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Slik behandler Bra Svar personopplysningene dine.
        </p>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '2rem 2rem 4rem',
      }}>
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Behandlingsansvarlig</h2>
          <p style={textStyle}>
            Klevstrand Innovasjon er behandlingsansvarlig for personopplysninger som samles inn gjennom Bra Svar sine tjenester og nettsider.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hva vi samler inn</h2>
          <p style={textStyle}>Vi kan samle inn følgende personopplysninger:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Samtaledata fra telefonsamtaler med KI-assistenten, inkludert lydopptak og transkripsjoner.</li>
            <li style={{ marginBottom: '0.4rem' }}>Kontaktinformasjon du oppgir via skjemaer på nettsiden, som navn, e-post og telefonnummer.</li>
            <li style={{ marginBottom: '0.4rem' }}>Brukerdata fra nettsiden, som IP-adresse, nettlesertype og sidevisninger.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Formål</h2>
          <p style={textStyle}>Vi behandler personopplysninger for å:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Levere tjenesten og håndtere telefonsamtaler på vegne av bedriften din.</li>
            <li style={{ marginBottom: '0.4rem' }}>Forbedre produktet og brukeropplevelsen.</li>
            <li style={{ marginBottom: '0.4rem' }}>Kommunisere med deg om tjenesten.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Rettslig grunnlag</h2>
          <p style={textStyle}>
            Behandlingen av personopplysninger skjer på grunnlag av samtykke (GDPR art. 6 nr. 1 bokstav a) og avtale (GDPR art. 6 nr. 1 bokstav b). Når du bruker tjenesten vår eller sender oss en henvendelse, gir du samtykke til behandling av de opplysningene som er nødvendige for å levere tjenesten.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Lagring</h2>
          <p style={textStyle}>
            Alle personopplysninger lagres på servere innenfor EU/EØS-området. Data oppbevares så lenge det er nødvendig for å oppfylle formålet med behandlingen, og slettes når det ikke lenger er behov for dem.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Deling med tredjepart</h2>
          <p style={textStyle}>
            Vi deler ikke personopplysninger med tredjepart uten at det foreligger en databehandleravtale. Vi bruker underleverandører for å levere tjenesten, og disse er forpliktet til å behandle opplysningene i samsvar med GDPR.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Dine rettigheter</h2>
          <p style={textStyle}>Du har rett til:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Innsyn i hvilke personopplysninger vi har lagret om deg.</li>
            <li style={{ marginBottom: '0.4rem' }}>Retting av uriktige opplysninger.</li>
            <li style={{ marginBottom: '0.4rem' }}>Sletting av personopplysninger.</li>
            <li style={{ marginBottom: '0.4rem' }}>Dataportabilitet, det vil si å få utlevert opplysningene dine i et maskinlesbart format.</li>
            <li style={{ marginBottom: '0.4rem' }}>Å trekke tilbake samtykke når som helst.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Cookies</h2>
          <p style={textStyle}>
            Nettsiden bruker nødvendige cookies for å sikre funksjonalitet og en god brukeropplevelse. Vi bruker ikke sporings-cookies eller tredjeparts reklamecookies.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Kontakt</h2>
          <p style={textStyle}>
            Har du spørsmål om personvern, eller ønsker du å utøve rettighetene dine, kan du kontakte oss på <a href="mailto:kontakt@brasvar.no" style={{ color: '#ec4899', textDecoration: 'none' }}>kontakt@brasvar.no</a>.
          </p>
        </div>

        <div style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e2e8f0',
        }}>
          <p style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            color: '#94a3b8',
          }}>
            Sist oppdatert: Mars 2026
          </p>
        </div>
      </div>
    </main>
  );
}
