import type { Metadata } from 'next';
import styles from '../page.module.css';
import WaveAdmin from '@/components/FrequencyWave/WaveAdmin';
import Navbar from '@/components/NavbarEN/NavbarEN';
import HowItWorks from '@/components/HowItWorksEN/HowItWorksEN';
import Pricing from '@/components/PricingEN/PricingEN';
import FAQ from '@/components/FAQEN/FAQEN';
import Recognition from '@/components/RecognitionEN/RecognitionEN';
import Integrations from '@/components/IntegrationsEN/IntegrationsEN';
import BlogPreview from '@/components/BlogPreviewEN/BlogPreviewEN';
import HowItWorksPreview from '@/components/HowItWorksPreviewEN/HowItWorksPreviewEN';
import ContactButton from '@/components/ContactModal/ContactButton';
import AudioButton from '@/components/AudioModal/AudioButton';

export const metadata: Metadata = {
  title: 'Bra Svar! - AI Switchboard and Intelligent Customer Service',
  description: 'Bra Svar is an AI switchboard built for Norwegian small businesses. It answers the phone, books appointments and helps your customers around the clock.',
  openGraph: {
    title: 'Bra Svar! - AI Switchboard and Intelligent Customer Service',
    description: 'AI switchboard that answers the phone, books appointments and helps your customers around the clock.',
    url: 'https://brasvar.no/en',
    siteName: 'Bra Svar',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bra Svar',
  url: 'https://brasvar.no/en',
  description: 'AI phone assistant for small businesses. Answers the phone, books appointments and helps your customers around the clock.',
  telephone: '+4764006264',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+47-64-00-62-64',
    contactType: 'sales',
    availableLanguage: ['Norwegian', 'English'],
  },
};

export default function EnglishHome() {
  return (
    <div id="main" className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className={styles.heroSection}>
        <WaveAdmin />
        <main className={styles.main}>
          <h1 className={`${styles.heroHeadline} animate-fade-in delay-1`}>
            When you don&apos;t answer,<br />
            your competitor does.
          </h1>
          <p className={`${styles.heroSubheadline} animate-fade-in delay-2`}>
            <span className="display-font" style={{ fontWeight: 800, color: '#0f172a' }}>Bra Svar<span style={{ color: '#ec4899' }}>!</span></span> is an AI switchboard built for Norwegian small businesses.<br />
            It answers the phone, books appointments and helps your customers. Around the clock.
          </p>

          <div className={`${styles.actions} animate-fade-in delay-3`}>
            <ContactButton className={styles.ctaPrimary}>
              Try Bra Svar for free!
            </ContactButton>
            <AudioButton className={styles.ctaSecondary}>
              Listen to a call
            </AudioButton>
          </div>
          <p className="animate-fade-in delay-3" style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 500, marginTop: '0.75rem' }}>
            Free to try - no commitment.
          </p>
        </main>
      </section>

      <Recognition />
      <HowItWorksPreview />
      <HowItWorks />
      <Pricing />
      <Integrations />
      <FAQ />
      <BlogPreview />
    </div>
  );
}
