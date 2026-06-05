import styles from "./WorkGrid.module.css";
import WorkCard from "./WorkCard";

const works = [
  {
    slug: "codm-esports",
    tag: "Community",
    title: "COD:M Esports",
    desc: "Launched Activision's first mobile esports program — from zero to a licensed property spanning five regions.",
    thumbVariant: "esports" as const,
  },
  {
    slug: "season-launches",
    tag: "Social",
    title: "Season Launches",
    desc: "Social strategy at scale across 30+ seasons of COD: Mobile live service.",
    thumbVariant: "seasons" as const,
  },
  {
    slug: "brwi",
    tag: "Influencer",
    title: "BRWI",
    desc: "Cross-community influencer architecture. +30% DAU, 12M+ organic impressions.",
    thumbVariant: "brwi" as const,
  },
  {
    slug: "beneath-the-rust",
    tag: "Brand Strategy",
    title: "Beneath The Rust",
    desc: "Brand built from zero outside gaming — social-first community flywheel from launch to film release.",
    thumbVariant: "rust" as const,
  },
  {
    slug: "coming-soon",
    tag: "Pending",
    title: "Cour Sports",
    desc: "",
    thumbVariant: "pending" as const,
  },
];

export default function WorkGrid() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.header}>
        <span className={styles.label}>Selected Work</span>
        <span className={styles.count}>4 Case Studies</span>
      </div>
      <div className={styles.grid}>
        {works.map((work, i) => (
          <WorkCard key={work.slug} {...work} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
