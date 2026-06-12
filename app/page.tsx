import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* About */}
      <section className={styles.stub} id="about">
        <div className={styles.stubInner}>
          <div>
            <div className={styles.stubLabel}>About</div>
            <p className={styles.aboutPara}>I&apos;m a marketing strategist with over 10 years of experience across brand, creative, social, influencer, product marketing, and partnerships.</p>
            <p className={styles.aboutPara} style={{ marginTop: '16px' }}>I started in entertainment working on film and TV sets, then moving into international distribution, positioning the libraries of Lionsgate and NBCUniversal to global markets. Moving into the agency world, I developed content strategy and campaigns for brands across multiple industries. At Activision I spent five years leading marketing for Call of Duty: Mobile and Warzone. In that time I built the company&apos;s first mobile esports program, led over 30 campaign launches, secured and activated major brand partnerships, and was a part of new game launches.</p>
            <p className={styles.aboutPara} style={{ marginTop: '16px' }}>I have continued working across gaming, entertainment, and helping define brands through independent consulting and my agency partnerships.</p>
          </div>
        </div>
      </section>

      <WorkGrid />

      {/* Contact stub */}
      <section className={`${styles.stub} ${styles.stubAlt}`} id="contact">
        <div className={styles.stubInner}>
          <div>
            <div className={styles.stubLabel}>Contact</div>
            <div className={styles.stubTitle}>Get In Touch</div>
            <div className={styles.stubNote}>
              <a href="mailto:dkramer588@gmail.com" className={styles.contactLink}>dkramer588@gmail.com</a>
              {" · "}
              <a href="https://www.linkedin.com/in/david-alex-krame" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
              {" · "}<span style={{ color: "var(--text-2)" }}>Resume available upon request</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
