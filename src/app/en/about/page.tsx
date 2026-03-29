import type { Metadata } from 'next';
import Navbar from '@/components/NavbarEN/NavbarEN';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Bra Svar: AI for Norwegian businesses | Bra Svar!',
  description: 'Bra Svar is a service from Klevstrand Innovasjon, a Norwegian technology company. AI phone assistants for small and medium businesses.',
  openGraph: {
    title: 'About Bra Svar: AI for Norwegian businesses | Bra Svar!',
    description: 'AI phone assistants for small and medium businesses, built in Norway.',
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
            Bra Svar is a service from Klevstrand Innovasjon, a Norwegian technology company based in Akershus. We build software for small and medium-sized businesses, with a strong focus on usability. The team behind Bra Svar has a background in product development, user experience and artificial intelligence, and we are passionate about making advanced technology accessible to everyday businesses.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>What we do</h2>
          <p style={textStyle}>
            With Bra Svar, we build AI phone assistants that answer the phone for your business with a natural voice. The assistant books appointments, answers questions and sends you a summary afterwards. Each assistant is tailored to the individual business, with knowledge of services, prices, opening hours and common customer enquiries. The result is that your customers get help straight away, no matter when they call.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Our mission</h2>
          <p style={textStyle}>
            Small businesses deserve the same availability as large corporations, without the cost. A dentist treating patients, an electrician out on a job, or a lawyer in meetings all day, rarely has the chance to answer the phone. Yet customers expect an answer. We build the tools that make it possible for small teams to deliver big service.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Why AI for small businesses?</h2>
          <p style={textStyle}>
            Large companies have call centres and receptionists who answer around the clock. For a business with two to ten employees, that is simply not realistic. Artificial intelligence makes it possible to offer the same experience at a fraction of the cost. It is not about replacing people, but about making sure no customer enquiry disappears just because you are busy doing the work you are actually meant to do.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>What makes Bra Svar different?</h2>
          <p style={textStyle}>
            We are not a generic AI tool. Bra Svar is built specifically for Norwegian businesses, with Norwegian language understanding and adaptation to local working conditions. We set up the assistant together with you, test it thoroughly and adjust until it responds exactly the way you want. You do not need any technical expertise to get started, and we are available for support along the way.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Contact information</h2>
          <p style={textStyle}>
            Phone: <a href="tel:+4764006264" style={{ color: '#ec4899', textDecoration: 'underline' }}>64 00 62 64</a><br />
            Email: <a href="mailto:hei@klevstrand.no" style={{ color: '#ec4899', textDecoration: 'underline' }}>hei@klevstrand.no</a>
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
