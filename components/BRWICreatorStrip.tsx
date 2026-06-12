import Image from "next/image";
import styles from "./BRWICreatorStrip.module.css";

const creators = [
  { name: "Mortal", region: "India", followers: "12.5M followers", game: "PUBG: Mobile", img: "/creators/mortal.jpg" },
  { name: "iFerg",  region: "UK",    followers: "6.8M followers",  game: "CODM",         img: "/creators/iferg.jpg"  },
  { name: "JoeWo",  region: "USA",   followers: "3.2M followers",  game: "COD: Warzone",  img: "/creators/joewo.jpg" },
];

export default function BRWICreatorStrip() {
  return (
    <div className={styles.wrap}>
      <div className={styles.label}>Creator Spotlight</div>
      <div className={styles.grid}>
        {creators.map((c) => (
          <div key={c.name} className={styles.card}>
            <div className={styles.photo}>
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 80vw, 25vw"
                className={styles.photoImg}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{c.name}</div>
              <div className={styles.meta}>{c.followers} · {c.game} · {c.region}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
