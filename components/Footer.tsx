import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>David Kramer</span>
      <div className={styles.links}>
        <a href="https://linkedin.com/in/davidkramer" className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:hello@davidkramer.com" className={styles.link}>Email</a>
        <a href="#" className={styles.link}>Resume</a>
      </div>
      <span className={styles.copy}>© 2026</span>
    </footer>
  );
}
