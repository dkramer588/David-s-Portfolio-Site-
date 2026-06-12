import styles from "./WorkGrid.module.css";
import WorkCard from "./WorkCard";

const works = [
  {
    slug: "codm-esports",
    tag: "Brand Building",
    title: "Activision's First Mobile Esports Program",
    desc: "Launched from zero to a licensed property spanning five regions.",
    thumbVariant: "esports" as const,
  },
  {
    slug: "seasons",
    tag: "Creative Strategy",
    title: "Train To Nowhere",
    desc: "A Bond-inspired spy universe. COD: Mobile's first Clio Award.",
    thumbVariant: "seasons" as const,
  },
  {
    slug: "brwi",
    tag: "Influencer",
    title: "Battle Royale Worlds Invitational",
    desc: "Cross-community influencer architecture. +30% DAU, 12M+ organic impressions.",
    thumbVariant: "brwi" as const,
  },
  {
    slug: "coeur-sports",
    tag: "Paid Media & Social",
    title: "Coeur Sports",
    desc: "Direct response video + community content strategy. 8.48x ROAS, 10.28% profit lift.",
    thumbVariant: "pending" as const,
  },
];

export default function WorkGrid() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.header}>
        <span className={styles.label}>Case Studies</span>
        <span className={styles.count}>Selected Work</span>
      </div>
      <div className={styles.grid}>
        {works.map((work, i) => (
          <WorkCard key={work.slug} {...work} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
