import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Personvernerklæring og GDPR | Bra Svar!',
  description: 'Les om hvordan brasvar.no behandler personopplysninger i tråd med GDPR. Dekker datainnsamling, lagring, dine rettigheter og kontaktinfo.',
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
          Slik behandler vi personopplysninger på brasvar.no.
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
            Klevstrand Innovasjon er behandlingsansvarlig for personopplysninger som samles inn gjennom nettsiden brasvar.no.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hva gjelder denne erklæringen</h2>
          <p style={textStyle}>
            Denne personvernerklæringen gjelder for nettsiden brasvar.no og beskriver hvordan vi behandler opplysninger om deg som besøkende. Hvis du er kunde av tjenesten Bra Svar, gjelder en egen personvernerklæring og databehandleravtale som du får tilgang til som en del av kundeavtalen.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hva vi samler inn</h2>
          <p style={textStyle}>Når du besøker brasvar.no kan vi samle inn følgende:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Kontaktinformasjon du oppgir via skjemaer på nettsiden, som navn, e-post, telefonnummer og firmanavn.</li>
            <li style={{ marginBottom: '0.4rem' }}>Anonymisert bruksdata, som sidevisninger, klikkhandlinger og navigasjonsmønstre. Denne informasjonen samles inn uten bruk av cookies og kan ikke knyttes til deg som person.</li>
            <li style={{ marginBottom: '0.4rem' }}>Teknisk informasjon som nettlesertype og enhet, brukt for å sikre at nettsiden fungerer riktig.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Formål</h2>
          <p style={textStyle}>Vi behandler personopplysninger for å:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Besvare henvendelser du sender gjennom kontaktskjemaet.</li>
            <li style={{ marginBottom: '0.4rem' }}>Sende deg bekreftelse og oppfølging på e-post etter at du har fylt ut kontaktskjemaet.</li>
            <li style={{ marginBottom: '0.4rem' }}>Forstå hvordan nettsiden brukes, slik at vi kan forbedre innhold og brukeropplevelse.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Rettslig grunnlag</h2>
          <p style={textStyle}>
            Når du sender oss en henvendelse via kontaktskjemaet, behandler vi opplysningene dine på grunnlag av samtykke (GDPR art. 6 nr. 1 bokstav a). Anonymisert analyse av nettside-bruk skjer på grunnlag av berettiget interesse (GDPR art. 6 nr. 1 bokstav f), da dette ikke involverer personopplysninger.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Cookies</h2>
          <p style={textStyle}>
            Nettsiden bruker kun teknisk nødvendige cookies for å sikre funksjonalitet. Vi bruker ikke sporings-cookies, reklamecookies eller tredjeparts-cookies. Vår analyseløsning fungerer uten cookies.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Lagring og sikkerhet</h2>
          <p style={textStyle}>
            Kontaktinformasjon du oppgir lagres så lenge det er nødvendig for å følge opp henvendelsen din, og slettes deretter. Anonymisert bruksdata kan ikke knyttes til enkeltpersoner.
          </p>
          <p style={{ ...textStyle, marginTop: '0.75rem' }}>
            Nettsiden hostes i Europa. Enkelte av våre underleverandører er basert utenfor EU/EØS-området. I slike tilfeller er overføring av data sikret gjennom EUs standardavtaler for dataoverføring (Standard Contractual Clauses) eller EU-US Data Privacy Framework.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Underleverandører</h2>
          <p style={textStyle}>
            Vi bruker et begrenset antall underleverandører for å drifte nettsiden:
          </p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Hostingleverandør for drift av nettsiden.</li>
            <li style={{ marginBottom: '0.4rem' }}>Analysetjeneste for anonymisert bruksstatistikk (uten cookies, data lagres i EU).</li>
            <li style={{ marginBottom: '0.4rem' }}>E-posttjeneste for utsending av skjemadata (data behandles i EU).</li>
          </ul>
          <p style={{ ...textStyle, marginTop: '0.5rem' }}>
            Alle underleverandører er forpliktet til å behandle opplysninger i samsvar med GDPR, og vi har databehandleravtaler der dette er påkrevd.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Dine rettigheter</h2>
          <p style={textStyle}>Du har rett til:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Innsyn i hvilke personopplysninger vi har lagret om deg.</li>
            <li style={{ marginBottom: '0.4rem' }}>Retting av uriktige opplysninger.</li>
            <li style={{ marginBottom: '0.4rem' }}>Sletting av personopplysninger.</li>
            <li style={{ marginBottom: '0.4rem' }}>Å trekke tilbake samtykke når som helst.</li>
            <li style={{ marginBottom: '0.4rem' }}>Å klage til Datatilsynet dersom du mener behandlingen er i strid med GDPR.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Personvern for tjenesten Bra Svar</h2>
          <p style={textStyle}>
            Denne erklæringen dekker kun nettsiden brasvar.no. Kunder som bruker tjenesten Bra Svar (KI-telefonassistenten) får en egen personvernerklæring og databehandleravtale som en del av kundeavtalen. Spørsmål om dette kan rettes til oss på e-post.
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
