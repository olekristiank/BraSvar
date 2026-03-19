import styles from "./page.module.css";
import FrequencyWave from "@/components/FrequencyWave/FrequencyWave";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        <div className={styles.logoGroupWrapper}>
          <FrequencyWave />
          <h1 className={`${styles.title} animate-fade-in display-font`}>
            Bra
            <svg
              className={styles.middleIcon}
              viewBox="0 0 100 100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="12" y="30" width="14" height="40" rx="7" />
              <rect x="34" y="10" width="14" height="80" rx="7" />
              <rect x="56" y="20" width="14" height="60" rx="7" />
              <rect x="78" y="30" width="14" height="40" rx="7" />
            </svg>
            Svar<span className={styles.dot}>!</span>
          </h1>
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
    </div>
  );
}
