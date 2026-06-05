import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>DK</Link>
      <div className={styles.links}>
        <Link href="/#work" className={styles.link}>Case Studies</Link>
        <Link href="/library" className={styles.link}>Library</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <a href="mailto:hello@davidkramer.com" className={styles.link}>Contact</a>
      </div>
    </nav>
  );
}
