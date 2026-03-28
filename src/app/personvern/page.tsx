import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Personvern | Bra Svar!',
  description: 'Les om hvordan brasvar.no behandler personopplysninger i tråd med GDPR.',
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
          Personvernerkl&aelig;ring
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#64748b',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Slik behandler vi personopplysninger p&aring; brasvar.no.
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
          <h2 style={sectionTitleStyle}>Hva gjelder denne erkl&aelig;ringen</h2>
          <p style={textStyle}>
            Denne personvernerkl&aelig;ringen gjelder for nettsiden brasvar.no og beskriver hvordan vi behandler opplysninger om deg som bes&oslash;kende p&aring; nettsiden. Hvis du er kunde av tjenesten Bra Svar, gjelder en egen personvernerkl&aelig;ring og databehandleravtale som du f&aring;r tilgang til som en del av kundeavtalen.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hva vi samler inn</h2>
          <p style={textStyle}>N&aring;r du bes&oslash;ker brasvar.no kan vi samle inn f&oslash;lgende:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Kontaktinformasjon du oppgir via skjemaer p&aring; nettsiden, som navn, e-post, telefonnummer og firmanavn.</li>
            <li style={{ marginBottom: '0.4rem' }}>Teknisk informasjon som IP-adresse, nettlesertype og sidevisninger.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Form&aring;l</h2>
          <p style={textStyle}>Vi behandler personopplysninger for &aring;:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Besvare henvendelser du sender gjennom kontaktskjemaet.</li>
            <li style={{ marginBottom: '0.4rem' }}>Forbedre nettsiden og brukeropplevelsen.</li>
            <li style={{ marginBottom: '0.4rem' }}>Sende deg informasjon om tjenesten dersom du har bedt om det.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Rettslig grunnlag</h2>
          <p style={textStyle}>
            Behandlingen skjer p&aring; grunnlag av samtykke (GDPR art. 6 nr. 1 bokstav a) n&aring;r du sender oss en henvendelse via kontaktskjemaet, og berettiget interesse (GDPR art. 6 nr. 1 bokstav f) for teknisk informasjon som er n&oslash;dvendig for &aring; drifte nettsiden.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Cookies</h2>
          <p style={textStyle}>
            Nettsiden bruker kun n&oslash;dvendige cookies for &aring; sikre funksjonalitet. Vi bruker ikke sporings-cookies eller tredjeparts reklamecookies.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Lagring</h2>
          <p style={textStyle}>
            Opplysninger du oppgir via kontaktskjemaet lagres s&aring; lenge det er n&oslash;dvendig for &aring; f&oslash;lge opp henvendelsen din. Teknisk informasjon om nettside-bes&oslash;k lagres ikke p&aring; en m&aring;te som identifiserer deg personlig.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Deling med tredjepart</h2>
          <p style={textStyle}>
            Vi deler ikke personopplysninger fra nettsiden med tredjepart, med unntak av tekniske leverand&oslash;rer som er n&oslash;dvendige for &aring; drifte nettsiden (for eksempel hosting). Disse er forpliktet til &aring; behandle opplysningene i samsvar med GDPR.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Dine rettigheter</h2>
          <p style={textStyle}>Du har rett til:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Innsyn i hvilke personopplysninger vi har lagret om deg.</li>
            <li style={{ marginBottom: '0.4rem' }}>Retting av uriktige opplysninger.</li>
            <li style={{ marginBottom: '0.4rem' }}>Sletting av personopplysninger.</li>
            <li style={{ marginBottom: '0.4rem' }}>Å trekke tilbake samtykke n&aring;r som helst.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Personvern for tjenesten Bra Svar</h2>
          <p style={textStyle}>
            Denne erkl&aelig;ringen dekker kun nettsiden brasvar.no. Kunder som bruker tjenesten Bra Svar (KI-telefonassistenten) f&aring;r en egen personvernerkl&aelig;ring og databehandleravtale som en del av kundeavtalen. Sp&oslash;rsm&aring;l om dette kan rettes til oss p&aring; e-post.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Kontakt</h2>
          <p style={textStyle}>
            Har du sp&oslash;rsm&aring;l om personvern, eller &oslash;nsker du &aring; ut&oslash;ve rettighetene dine, kan du kontakte oss p&aring; <a href="mailto:kontakt@brasvar.no" style={{ color: '#ec4899', textDecoration: 'none' }}>kontakt@brasvar.no</a>.
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
