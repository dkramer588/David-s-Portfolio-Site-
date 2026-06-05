import styles from "./BRWIAudienceVisual.module.css";

const creators = [
  { name: "Mortal", region: "India", followers: "12.5M Followers", game: "PUBG: Mobile", img: "/creators/mortal.jpg" },
  { name: "iFerg",  region: "UK",    followers: "6.8M Followers",  game: "CODM",        img: "/creators/iferg.jpg"  },
  { name: "JoeWo",  region: "USA",   followers: "3.2M Followers",  game: "COD: Warzone", img: "/creators/joewo.jpg" },
];

const orgs = ["NRG", "Tribe Gaming", "Call of Duty League"];

function PersonIcon() {
  return (
    <svg className={styles.avatarPlaceholder} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export default function BRWIAudienceVisual() {
  return (
    <div className={styles.wrap}>
      <div className={styles.creators}>
        {creators.map((c) => (
          <div key={c.name} className={styles.creator}>
            <div className={styles.avatar}>
              {/* swap src for real photo when available */}
              <PersonIcon />
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
