import styles from "./page.module.css";
import WaveAdmin from "@/components/FrequencyWave/WaveAdmin";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div className={styles.container}>
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
                <rect x="12" y="32" width="14" height="36" rx="7" fill="#ec4899"/>
                <rect x="34" y="10" width="14" height="80" rx="7" fill="#ec4899"/>
                <rect x="56" y="24" width="14" height="52" rx="7" fill="#ec4899"/>
                <rect x="78" y="32" width="14" height="36" rx="7" fill="#ec4899"/>
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
