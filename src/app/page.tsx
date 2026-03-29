import styles from "./page.module.css";
import WaveAdmin from "@/components/FrequencyWave/WaveAdmin";
import Navbar from "@/components/Navbar/Navbar";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ/FAQ";
import Recognition from "@/components/Recognition/Recognition";
import Integrations from "@/components/Integrations/Integrations";
import BlogPreview from "@/components/BlogPreview/BlogPreview";
import HowItWorksPreview from "@/components/HowItWorksPreview/HowItWorksPreview";
import ContactButton from "@/components/ContactModal/ContactButton";
import AudioButton from "@/components/AudioModal/AudioButton";


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bra Svar',
  url: 'https://brasvar.no',
  description: 'KI-telefonassistent for norske småbedrifter. Svarer telefonen, booker avtaler og hjelper kundene dine døgnet rundt.',
  telephone: '+4764006264',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+47-64-00-62-64',
    contactType: 'sales',
    availableLanguage: ['Norwegian', 'English'],
  },
};

export default function Home() {
  return (
    <div id="main" className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className={styles.heroSection}>
        <WaveAdmin />
        <main className={styles.main}>
          <h1 className={`${styles.heroHeadline} animate-fade-in delay-1`}>
            Når du ikke svarer,<br />
            svarer konkurrenten.
          </h1>
          <p className={`${styles.heroSubheadline} animate-fade-in delay-2`}>
            <span className="display-font" style={{ fontWeight: 800, color: '#0f172a' }}>Bra Svar<span style={{ color: '#ec4899' }}>!</span></span> er ditt AI-sentralbord og kundebehandler.<br />
            Den svarer telefonen, booker avtaler og hjelper kundene dine. Døgnet rundt.
          </p>

          <div className={`${styles.actions} animate-fade-in delay-3`}>
            <ContactButton className={styles.ctaPrimary}>
              Prøv Bra Svar gratis!
            </ContactButton>
            <AudioButton className={styles.ctaSecondary}>
              Hør en samtale
            </AudioButton>
          </div>
          <p className="animate-fade-in delay-3" style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 450, marginTop: '0.75rem' }}>
            Gratis å prøve – ingen binding.
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
