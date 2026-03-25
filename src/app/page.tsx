import styles from "./page.module.css";
import WaveAdmin from "@/components/FrequencyWave/WaveAdmin";
import Navbar from "@/components/Navbar/Navbar";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ/FAQ";
import Recognition from "@/components/Recognition/Recognition";
import Integrations from "@/components/Integrations/Integrations";
import ContactButton from "@/components/ContactModal/ContactButton";
import AudioButton from "@/components/AudioModal/AudioButton";


export default function Home() {
  return (
    <div className={styles.container}>
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
              Ta kontakt for en hyggelig prat!
            </ContactButton>
            <AudioButton className={styles.ctaSecondary}>
              Hør en samtale
            </AudioButton>
          </div>
          <p className="animate-fade-in delay-3" style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 500, marginTop: '0.75rem' }}>
            Gratis å prøve — ingen binding.
          </p>
        </main>
      </section>

      <Recognition />
      <HowItWorks />
      <Pricing />
      <Integrations />
      <FAQ />
      {/* Footer */}
      <footer className={styles.footer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="display-font" style={{ fontWeight: 800, fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
            Bra Svar<span style={{ color: '#ec4899' }}>!</span>
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Personvern', 'Vilkår', 'Kontakt'].map((link) => (
            <a key={link} href="#" className={styles.footerLink}>{link}</a>
          ))}
        </nav>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)', fontWeight: 500, textAlign: 'center' }}>
          © 2026 by Klevstrand Innovasjon
        </p>
      </footer>
    </div>
  );
}
