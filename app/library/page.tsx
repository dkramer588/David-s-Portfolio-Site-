import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Asset Library — David Kramer",
};

export default function Library() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.label}>Asset Library</div>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.note}>Campaigns, trailers, and more — in progress.</p>
      </main>
      <Footer />
    </>
  );
}
