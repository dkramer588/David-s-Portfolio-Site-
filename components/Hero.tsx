import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroFade}></div>
      <div className={styles.heroImgLabel}>Hero image — campaign key art</div>

      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>Gaming &amp; Entertainment Marketing</div>
        <h1 className={styles.name}>David<br />Kramer</h1>
        <p className={styles.logline}>Builds franchise brands, launches live services, and turns cultural moments into business outcomes.</p>
        <div className={styles.actions}>
          <Link href="/#work" className={styles.btnSolid}>Case Studies</Link>
          <Link href="/library" className={styles.btnLine}>Browse Library</Link>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollTick}></div>
      </div>
    </section>
  );
}
