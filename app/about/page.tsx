import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "../library/page.module.css";

export const metadata = {
  title: "About — David Kramer",
};

export default function About() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.label}>About</div>
        <h1 className={styles.title}>David Kramer</h1>
        <p className={styles.note}>Coming soon.</p>
      </main>
      <Footer />
    </>
  );
}
