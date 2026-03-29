import type { Metadata } from 'next';
import Navbar from '@/components/NavbarEN/NavbarEN';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bra Svar!',
  description: 'Learn how Bra Svar processes personal data in accordance with GDPR.',
  openGraph: {
    title: 'Privacy Policy | Bra Svar!',
    description: 'Learn how Bra Svar processes personal data in accordance with GDPR.',
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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#64748b',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          How Bra Svar handles your personal data.
        </p>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '2rem 2rem 4rem',
      }}>
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Data controller</h2>
          <p style={textStyle}>
            Klevstrand Innovasjon is the data controller for personal data collected through Bra Svar&apos;s services and websites.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>What we collect</h2>
          <p style={textStyle}>We may collect the following personal data:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Call data from phone conversations with the AI assistant, including audio recordings and transcriptions.</li>
            <li style={{ marginBottom: '0.4rem' }}>Contact information you provide through forms on the website, such as name, email and phone number.</li>
            <li style={{ marginBottom: '0.4rem' }}>Usage data from the website, such as IP address, browser type and page views.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Purpose</h2>
          <p style={textStyle}>We process personal data in order to:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Deliver the service and handle phone calls on behalf of your business.</li>
            <li style={{ marginBottom: '0.4rem' }}>Improve the product and user experience.</li>
            <li style={{ marginBottom: '0.4rem' }}>Communicate with you about the service.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Legal basis</h2>
          <p style={textStyle}>
            The processing of personal data is based on consent (GDPR Art. 6(1)(a)) and contract (GDPR Art. 6(1)(b)). When you use our service or contact us, you consent to the processing of the data necessary to deliver the service.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Storage</h2>
          <p style={textStyle}>
            All personal data is stored on servers within the EU/EEA. Data is retained for as long as necessary to fulfil the purpose of the processing and is deleted when no longer needed.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Sharing with third parties</h2>
          <p style={textStyle}>
            We do not share personal data with third parties without a data processing agreement in place. We use sub-processors to deliver the service, and they are required to process data in accordance with GDPR.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Your rights</h2>
          <p style={textStyle}>You have the right to:</p>
          <ul style={{ ...textStyle, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>Access the personal data we hold about you.</li>
            <li style={{ marginBottom: '0.4rem' }}>Rectification of inaccurate data.</li>
            <li style={{ marginBottom: '0.4rem' }}>Erasure of personal data.</li>
            <li style={{ marginBottom: '0.4rem' }}>Data portability, meaning you can receive your data in a machine-readable format.</li>
            <li style={{ marginBottom: '0.4rem' }}>Withdraw consent at any time.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Cookies</h2>
          <p style={textStyle}>
            The website uses necessary cookies to ensure functionality and a good user experience. We do not use tracking cookies or third-party advertising cookies.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Contact</h2>
          <p style={textStyle}>
            If you have questions about privacy, or wish to exercise your rights, you can contact us at <a href="mailto:kontakt@brasvar.no" style={{ color: '#ec4899', textDecoration: 'none' }}>kontakt@brasvar.no</a>.
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
            Last updated: March 2026
          </p>
        </div>
      </div>
    </main>
  );
}
