import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MetricsBar from "@/components/MetricsBar";
import EsportsTabs from "./EsportsTabs";
import styles from "@/components/CaseStudyLayout.module.css";

export default function EsportsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            background: "linear-gradient(135deg, #040810 0%, #0a1020 50%, #020608 100%)",
            backgroundImage: "url(/Esports/The%20Story/ES-banner.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={styles.heroFade} />
        <div className={styles.heroContent}>
          <div className={styles.heroTags}>
            {["Brand", "Community", "Social", "Influencer", "Partnerships"].map((t) => (
              <span key={t} className={styles.heroTag}>{t}</span>
            ))}
          </div>
          <p className={styles.heroMeta}>Activision · COD: Mobile</p>
          <h1 className={styles.heroTitle}>COD:M Esports</h1>
          <p className={styles.heroSubtitle}>
            I was handed a blank page and an untapped opportunity in a space I had to learn from scratch. What I built was a brand, a community, and a fandom that didn't exist before I arrived. Esports was the vehicle, but brand building, audience strategy, and creative direction were the engine. The first broadcast I watched from my living room at 5am soon became an award winning licensed global franchise.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <MetricsBar
        metrics={[
          { value: "15M+",  label: "Players Annually",        accent: true },
          { value: "3B+",   label: "Impressions Annually",    accent: true },
          { value: "97K+",  label: "Peak Concurrent Viewers", accent: true },
          { value: "600K+", label: "YouTube Subscribers",     accent: true },
        ]}
        subline="2x Tempest Awards · 3x Esports Awards Nominee"
      />

      {/* Tab row — client component for dynamic active state */}
      <EsportsTabs />

      {/* Tab content */}
      {children}

      <Footer />
    </>
  );
}
