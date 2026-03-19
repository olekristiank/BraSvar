import styles from "./page.module.css";
import FrequencyWave from "@/components/FrequencyWave/FrequencyWave";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <main className={styles.main}>
          
          <div className={styles.logoGroupWrapper}>
            <FrequencyWave />
            
            <div className={`${styles.logoGroup} animate-fade-in`}>
              <h1 className={`${styles.title} display-font`}>
                Bra
              </h1>
              <svg
                className={styles.middleIcon}
                viewBox="0 0 100 100"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" /> {/* Vibrant Orange */}
                    <stop offset="100%" stopColor="#ec4899" /> {/* Deep Pink */}
                  </linearGradient>
                </defs>
                <rect x="12" y="32" width="14" height="36" rx="7" fill="url(#iconGradient)"/>
                <rect x="34" y="10" width="14" height="80" rx="7" fill="url(#iconGradient)"/>
                <rect x="56" y="24" width="14" height="52" rx="7" fill="url(#iconGradient)"/>
                <rect x="78" y="32" width="14" height="36" rx="7" fill="url(#iconGradient)"/>
              </svg>
              <h1 className={`${styles.title} display-font`}>
                Svar<span className={styles.exclamation}>!</span>
              </h1>
            </div>
          </div>
          
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            Den neste generasjons AI-taleassistenten som svarer på telefoner, håndterer bookinger, og løfter hele kundeopplevelsen din.
          </p>

          <div className={`${styles.actions} animate-fade-in delay-2`}>
            <button className={styles.ctaPrimary}>
              Kom i gang
            </button>
            <button className={styles.ctaSecondary}>
              Hør den i aksjon
            </button>
          </div>
        </main>
      </section>

      <Pricing />
    </div>
  );
}
