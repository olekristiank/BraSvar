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
          <p className="animate-fade-in delay-3" style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 500, marginTop: '0.75rem' }}>
            Gratis å prøve — ingen binding.
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
      {/* Footer */}
      <footer className={styles.footer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span className="display-font" style={{ fontWeight: 800, fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
            Bra Svar<span style={{ color: '#ec4899' }}>!</span>
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', marginBottom: '1.5rem' }}>
          {/* Løsninger */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
              Løsninger
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <a href="/ai-sentralbord" className={styles.footerLink}>AI sentralbord</a>
              <a href="/telefonsvarer-bedrift" className={styles.footerLink}>Telefonsvarer</a>
              <a href="/virtuell-resepsjonist" className={styles.footerLink}>Virtuell resepsjonist</a>
              <a href="/hvordan-det-fungerer" className={styles.footerLink}>Slik fungerer det</a>
            </nav>
          </div>

          {/* Ressurser */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
              Ressurser
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <a href="/blog" className={styles.footerLink}>Blogg</a>
              <a href="/ofte-stilte-sporsmal" className={styles.footerLink}>Ofte stilte spørsmål</a>
            </nav>
          </div>

          {/* Om oss */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
              Om oss
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <a href="#" className={styles.footerLink}>Personvern</a>
              <a href="#" className={styles.footerLink}>Vilkår</a>
              <a href="#" className={styles.footerLink}>Kontakt</a>
            </nav>
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: '600px', height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 auto 1rem' }} />
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)', fontWeight: 500, textAlign: 'center' }}>
          © 2026 by Klevstrand Innovasjon
        </p>
      </footer>
    </div>
  );
}
