import Image from "next/image";
import styles from "./BRWICreatorCards.module.css";

const creators = [
  { name: "Mortal", region: "India", followers: "12.5M Followers", game: "PUBG: Mobile", img: "/creators/mortal.jpg" },
  { name: "iFerg",  region: "UK",    followers: "6.8M Followers",  game: "CODM",         img: "/creators/iferg.jpg"  },
  { name: "JoeWo",  region: "USA",   followers: "3.2M Followers",  game: "COD: Warzone", img: "/creators/joewo.jpg"  },
];

export default function BRWICreatorCards() {
  return (
    <div className={styles.wrap}>
      {creators.map((c) => (
        <div key={c.name} className={styles.card}>
          <div className={styles.photo}>
            <Image
              src={c.img}
              alt={c.name}
              fill
              unoptimized
              className={styles.img}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{c.name}</div>
            <div className={styles.region}>{c.region.toUpperCase()}</div>
            <div className={styles.followers}>{c.followers}</div>
            <div className={styles.game}>{c.game}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
