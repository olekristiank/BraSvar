import styles from "./page.module.css";
import FrequencyWave from "@/components/FrequencyWave/FrequencyWave";

export default function Home() {
  return (
    <div className={styles.container}>
      <FrequencyWave />

      <main className={styles.main}>
        <h1 className={`${styles.title} animate-fade-in display-font`}>
          Bra Svar!
        </h1>
        
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
