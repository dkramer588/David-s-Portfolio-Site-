import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WorkGrid />

      {/* Library stub */}
      <section className={`${styles.stub} ${styles.stubAlt}`} id="library">
        <div className={styles.stubInner}>
          <div>
            <div className={styles.stubLabel}>Asset Library</div>
            <div className={styles.stubTitle}>Campaigns, Trailers &amp; More</div>
            <div className={styles.stubNote}>In progress — coming soon.</div>
          </div>
          <Link href="/library" className={styles.btnGhost}>Browse Library</Link>
        </div>
      </section>

      {/* About stub */}
      <section className={styles.stub} id="about">
        <div className={styles.stubInner}>
          <div>
            <div className={styles.stubLabel}>About</div>
            <div className={styles.stubTitle}>David Kramer</div>
            <div className={styles.stubNote}>Lionsgate → NBCU → Lemonlight → Activision → JadeInferno</div>
          </div>
          <Link href="/about" className={styles.btnGhost}>Learn More</Link>
        </div>
      </section>

      {/* Contact stub */}
      <section className={`${styles.stub} ${styles.stubAlt}`} id="contact">
        <div className={styles.stubInner}>
          <div>
            <div className={styles.stubLabel}>Contact</div>
            <div className={styles.stubTitle}>Get In Touch</div>
            <div className={styles.stubNote}>hello@davidkramer.com · LinkedIn · Resume available on request</div>
          </div>
          <a href="mailto:hello@davidkramer.com" className={styles.btnSolid}>Send Email</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
