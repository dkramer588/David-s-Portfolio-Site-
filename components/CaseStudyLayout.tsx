import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "./Nav";
import MetricsBar from "./MetricsBar";
import Footer from "./Footer";
import styles from "./CaseStudyLayout.module.css";

export interface Metric {
  value: string;
  label: string;
  accent?: boolean;
}

export interface ContentBlock {
  number: string;
  label: string;
  title: string;
  body: string;
  caption?: string;           // appears below the image
  imagePlaceholder: string;
  imageBg?: string;           // custom gradient for placeholder bg
  imageIcon?: "image" | "video" | "chart";
  imageContent?: ReactNode;   // replaces placeholder with custom component
  reverse?: boolean;          // image on right
  altBg?: boolean;            // text column uses --bg-2
}

export interface CaseStudyProps {
  tags: string[];
  title: string;
  meta: string;
  subtitle?: string;
  heroBg: string;
  metrics: Metric[];
  blocks: ContentBlock[];
  prevSlug?: { href: string; label: string };
  nextSlug?: { href: string; label: string };
}

function PlaceholderIcon({ type }: { type?: "image" | "video" | "chart" }) {
  if (type === "video") {
    return (
      <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="3" y1="20" x2="21" y2="20" />
        <rect x="4" y="14" width="3" height="6" />
        <rect x="10" y="9" width="3" height="11" />
        <rect x="16" y="5" width="3" height="15" />
      </svg>
    );
  }
  return (
    <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21,15 16,10 5,21" />
    </svg>
  );
}

export default function CaseStudyLayout({
  tags, title, meta, subtitle, heroBg, metrics, blocks, prevSlug, nextSlug,
}: CaseStudyProps) {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ background: heroBg }} />
        <div className={styles.heroFade} />
        <div className={styles.heroWatermark}>{title}</div>
        <div className={styles.heroContent}>
          <div className={styles.heroTags}>
            {tags.map((t) => (
              <span key={t} className={styles.heroTag}>{t}</span>
            ))}
          </div>
          <h1 className={styles.heroTitle}>{title}</h1>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
          <p className={styles.heroMeta}>{meta}</p>
        </div>
      </section>

      {/* Metrics */}
      <MetricsBar metrics={metrics} />

      {/* Content Blocks */}
      <div className={styles.blocks}>
        {blocks.map((block) => (
          <div
            key={block.number}
            className={`${styles.block} ${block.reverse ? styles.reverse : ""}`}
          >
            {/* Visual column: image (or custom) + caption below */}
            <div className={styles.blockVisual}>
              <div
                className={`${styles.blockImage} ${block.imageContent ? styles.blockImageCustom : ""}`}
                style={block.imageBg && !block.imageContent ? { background: block.imageBg } : undefined}
              >
                {block.imageContent ?? (
                  <>
                    <PlaceholderIcon type={block.imageIcon} />
                    <span className={styles.placeholderLabel}>{block.imagePlaceholder}</span>
                  </>
                )}
              </div>
              {block.caption && (
                <p className={styles.blockCaption}>{block.caption}</p>
              )}
            </div>

            {/* Text column */}
            <div className={`${styles.blockText} ${block.altBg ? styles.altBg : ""}`}>
              <div className={styles.blockNumber}>{block.number} — {block.label}</div>
              <h2 className={styles.blockTitle}>{block.title}</h2>
              <p className={styles.blockBody}>{block.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Nav */}
      <div className={styles.footerNav}>
        {prevSlug
          ? <Link href={prevSlug.href} className={styles.footerNavLink}>← {prevSlug.label}</Link>
          : <span />}
        {nextSlug
          ? <Link href={nextSlug.href} className={styles.footerNavLink}>{nextSlug.label} →</Link>
          : <span />}
      </div>

      <Footer />
    </>
  );
}
