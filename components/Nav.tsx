"use client";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo} onClick={scrollToTop}>DK</Link>
      <div className={styles.links}>
        <Link href="/#about" className={styles.link}>About</Link>
        <Link href="/#work" className={styles.link}>Case Studies</Link>
        <a href="#contact" className={styles.link}>Contact</a>
      </div>
    </nav>
  );
}
