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
        {/* Floating missed call notification */}
        <div className="animate-fade-in delay-3 hero-notification" style={{
          position: 'absolute',
          top: 'clamp(5rem, 15vh, 8rem)',
          right: 'clamp(1rem, 8vw, 6rem)',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          boxShadow: '0 8px 32px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.04)',
          zIndex: 15,
          border: '1px solid rgba(241,245,249,0.8)',
          animation: 'fadeInScale 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both, floatY 3s ease-in-out 2.5s infinite',
        }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>Tapt anrop</p>
            <p style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: 500 }}>+47 932 XX XXX · 2 min siden</p>
          </div>
        </div>
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
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15em', color: '#334155' }}>Hver samtale du ikke svarer på, ringer en konkurrent.</span><br />
            Bra Svar er din AI-kundebehandler — svarer telefonen, booker avtaler og hjelper kundene dine. Døgnet rundt.
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
