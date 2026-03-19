import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Background Animated Elements */}
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      <main className={styles.main}>
        <h1 className={`${styles.title} animate-fade-in`}>
          Welcome to <span className="text-gradient">BraSvar</span>
        </h1>
        
        <p className={`${styles.subtitle} animate-fade-in delay-1`}>
          A magnificent aesthetic foundation for your next great Next.js application.
          Fast, beautiful, and exceptionally crafted.
        </p>

        <button className={`${styles.cta} animate-fade-in delay-2 animate-float`}>
          Get Started
        </button>

        <div className={styles.cards}>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className={`glass ${styles.card} animate-fade-in delay-3`}>
            <h2 className={styles.cardTitle}>
              <span>✨</span> Glassmorphism
            </h2>
            <p className={styles.cardText}>
              Beautifully frosted components that blend perfectly with standard CSS variables. Wait till you see the hover state.
            </p>
          </a>
          
          <a href="https://nextjs.org/docs/app/building-your-application/routing" target="_blank" rel="noopener noreferrer" className={`glass ${styles.card} animate-fade-in delay-3`}>
            <h2 className={styles.cardTitle}>
              <span>🚀</span> Modern Stack
            </h2>
            <p className={styles.cardText}>
              Next.js App Router, TypeScript, and clean CSS modules. Pure, vanilla standards without framework bloat.
            </p>
          </a>
          
          <a href="https://bra-svar.no" target="_blank" rel="noopener noreferrer" className={`glass ${styles.card} animate-fade-in delay-3`}>
            <h2 className={styles.cardTitle}>
              <span>⚡️</span> Animated UI
            </h2>
            <p className={styles.cardText}>
              Smooth micro-animations, text-gradients, floating elements, and a dynamic color palette.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
