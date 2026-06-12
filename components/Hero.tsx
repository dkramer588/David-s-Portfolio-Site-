import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} style={{ backgroundImage: 'url(/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className={styles.heroFade}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.name}>David<br />Kramer</h1>
        <p className={styles.logline}>From positioning to creative execution, I build campaigns for brands and franchises that create memorable moments and deliver measurable results.</p>
        <div className={styles.actions}>
          <Link href="/#work" className={styles.btnSolid}>Case Studies</Link>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollTick}></div>
      </div>
    </section>
  );
}
