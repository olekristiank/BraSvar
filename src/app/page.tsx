import styles from "./page.module.css";
import WaveAdmin from "@/components/FrequencyWave/WaveAdmin";
import Navbar from "@/components/Navbar/Navbar";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ/FAQ";
import Recognition from "@/components/Recognition/Recognition";
import BottomCTA from "@/components/BottomCTA/BottomCTA";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <section className={styles.heroSection}>
        <main className={styles.main}>
          
          <div className={styles.logoGroupWrapper}>
            <WaveAdmin />
            
            <div className={`${styles.logoGroup} animate-fade-in`}>
              <h1 className={`${styles.title} display-font`}>
                Bra
              </h1>
              <svg
                className={styles.middleIcon}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <rect x="12" y="32" width="14" height="36" rx="7" fill="#ec4899"/>
                  <rect x="34" y="10" width="14" height="80" rx="7" fill="#ec4899"/>
                  <rect x="56" y="24" width="14" height="52" rx="7" fill="#ec4899"/>
                  <rect x="78" y="32" width="14" height="36" rx="7" fill="#ec4899"/>
                </g>
              </svg>
              <h1 className={`${styles.title} display-font`}>
                Svar<span className={styles.exclamation}>!</span>
              </h1>
            </div>
          </div>
          
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            Hver samtale du ikke svarer på, ringer en konkurrent. Bra Svar er din AI-kundebehandler — svarer telefonen, booker avtaler og hjelper kundene dine. Døgnet rundt.
          </p>

          <div className={`${styles.actions} animate-fade-in delay-2`}>
            <button className={styles.ctaPrimary}>
              Prøv gratis
            </button>
            <button className={styles.ctaSecondary}>
              Hør en samtale
            </button>
          </div>
        </main>
      </section>

      <Recognition />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <BottomCTA />

      {/* Footer */}
      <footer className={styles.footer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="display-font" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a' }}>
            Bra Svar<span style={{ color: '#ec4899' }}>!</span>
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Personvern', 'Vilkår', 'Kontakt'].map((link) => (
            <a key={link} href="#" className={styles.footerLink}>{link}</a>
          ))}
        </nav>
        <p style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 400 }}>
          © {new Date().getFullYear()} by Klevstrand Innovasjon. Alle rettigheter reservert.
        </p>
      </footer>
    </div>
  );
}
