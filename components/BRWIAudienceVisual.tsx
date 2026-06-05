import Image from "next/image";
import styles from "./BRWIAudienceVisual.module.css";

const creators = [
  { name: "Mortal", region: "India", followers: "12.5M Followers", game: "PUBG: Mobile", img: "/creators/mortal.jpg" },
  { name: "iFerg",  region: "UK",    followers: "6.8M Followers",  game: "CODM",        img: "/creators/iferg.jpg"  },
  { name: "JoeWo",  region: "USA",   followers: "3.2M Followers",  game: "COD: Warzone", img: "/creators/joewo.jpg" },
];

const orgs = ["NRG", "Tribe Gaming", "Call of Duty League"];

export default function BRWIAudienceVisual() {
  return (
    <div className={styles.wrap}>
      <div className={styles.creators}>
        {creators.map((c) => (
          <div key={c.name} className={styles.creator}>
            <div className={styles.avatar}>
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="80px"
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.creatorInfo}>
              <div className={styles.creatorName}>{c.name}</div>
              <div className={styles.creatorRegion}>{c.region}</div>
              <div className={styles.creatorFollowers}>{c.followers}</div>
              <div className={styles.creatorGame}>{c.game}</div>
            </div>
          </div>
        ))}
      </div>

      <hr className={styles.divider} />

      <div>
        <div className={styles.orgsLabel}>Partner Organizations</div>
        <div className={styles.orgs}>
          {orgs.map((o) => (
            <span key={o} className={styles.org}>{o}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
