import styles from "./page.module.css";
import FrequencyWave from "@/components/FrequencyWave/FrequencyWave";

export default function Home() {
  return (
    <div className={styles.container}>
      <FrequencyWave />

      <main className={styles.main}>
        <div className={`${styles.logoGroup} animate-fade-in`}>
          <svg
            className={styles.logoIcon}
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="12" y="30" width="14" height="40" rx="7" />
            <rect x="34" y="10" width="14" height="80" rx="7" />
            <rect x="56" y="20" width="14" height="60" rx="7" />
            <rect x="78" y="30" width="14" height="40" rx="7" />
          </svg>
          <h1 className={`${styles.title} display-font`}>
            Bra Svar.
          </h1>
        </div>
        
        <p className={`${styles.subtitle} animate-fade-in delay-1`}>
          The next-generation AI voice assistant that answers your phones, handles your bookings, and elevates your entire customer experience.
        </p>

        <div className={`${styles.actions} animate-fade-in delay-2`}>
          <button className={styles.ctaPrimary}>
            Get Started
          </button>
          <button className={styles.ctaSecondary}>
            Hear it in Action
          </button>
        </div>
      </main>
    </div>
  );
}
