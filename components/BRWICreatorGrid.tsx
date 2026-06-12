import Image from "next/image";
import styles from "./BRWICreatorGrid.module.css";

const creators = [
  { name: "Mortal", region: "India", followers: "12.5M followers", game: "PUBG: Mobile", img: "/creators/mortal.jpg" },
  { name: "iFerg",  region: "UK",    followers: "6.8M followers",  game: "CODM",         img: "/creators/iferg.jpg"  },
  { name: "JoeWo",  region: "USA",   followers: "3.2M followers",  game: "COD: Warzone",  img: "/creators/joewo.jpg" },
];

const gridImages = [
  { src: "/cases/brwi-grid-1.jpg", alt: "Tournament moment 1" },
  { src: "/cases/brwi-grid-2.jpg", alt: "Tournament moment 2" },
  { src: "/cases/brwi-grid-3.jpg", alt: "Tournament moment 3" },
  { src: "/cases/brwi-grid-4.jpg", alt: "Tournament moment 4" },
  { src: "/cases/brwi-grid-5.jpg", alt: "Tournament moment 5" },
  { src: "/cases/brwi-grid-6.jpg", alt: "Tournament moment 6" },
  { src: "/cases/brwi-grid-7.jpg", alt: "Tournament moment 7" },
  { src: "/cases/brwi-grid-8.jpg", alt: "Tournament moment 8" },
];

export default function BRWICreatorGrid() {
  return (
    <div className={styles.wrap}>

      {/* Left: Creator spotlight */}
      <div className={styles.creatorsPanel}>
        <div className={styles.panelLabel}>Creator Spotlight</div>
        <div className={styles.creatorList}>
          {creators.map((c) => (
            <div key={c.name} className={styles.creatorCard}>
              <div className={styles.creatorPhoto}>
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="120px"
                  className={styles.creatorImg}
                />
              </div>
              <div className={styles.creatorInfo}>
                <div className={styles.creatorName}>{c.name}</div>
                <div className={styles.creatorGame}>{c.game}</div>
                <div className={styles.creatorMeta}>{c.followers} · {c.region}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: 4×2 image grid */}
      <div className={styles.imageGrid}>
        {gridImages.map((img, i) => (
          <div key={i} className={styles.gridCell}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 15vw"
              className={styles.gridImg}
            />
            <div className={styles.gridPlaceholder}>
              <span className={styles.gridPlaceholderNum}>{i + 1}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
