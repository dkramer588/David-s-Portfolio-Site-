import Link from "next/link";
import Image from "next/image";
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
  title?: string;
  body: ReactNode;
  caption?: string;           // appears below the image
  imagePlaceholder: string;
  imageBg?: string;           // custom gradient for placeholder bg
  imageSrc?: string;          // real image/gif path — overrides placeholder
  imageIcon?: "image" | "video" | "chart";
  imageContent?: ReactNode;   // replaces placeholder with custom component
  imagePosition?: string;     // object-position for the image, default "center"
  captionOverlay?: number;    // pulls caption up by this many px to overlap bottom of image
  reverse?: boolean;          // image on right
  altBg?: boolean;            // text column uses --bg-2
  compact?: boolean;          // shorter block height for graphs/charts
  textOnly?: boolean;         // no image column — text spans full width
  customRow?: ReactNode;      // arbitrary content injected after this block
}

export interface TabItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface CaseStudyProps {
  tags: string[];
  title: string;
  meta: string;
  metaColor?: string;
  subtitle?: string;
  heroBg: string;
  heroImage?: string;
  metrics: Metric[];
  metricsSubline?: string;         // optional centered text row below metrics
  blocks: ContentBlock[];
  tabs?: TabItem[];                // optional tab row below metrics bar
  positioningStatement?: string;   // dark full-width bar inserted after block[1]
  graphImage?: string;             // full-width image inserted after block[1]
  creatorSpotlight?: ReactNode;    // section inserted after block index creatorSpotlightAfterBlock
  creatorSpotlightAfterBlock?: number; // default 3
  videoPanel?: { label: string; url?: string; image?: string }; // section before footer nav
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
  tags, title, meta, metaColor, subtitle, heroBg, heroImage, metrics, metricsSubline, blocks, tabs,
  positioningStatement, graphImage, creatorSpotlight, creatorSpotlightAfterBlock = 3, videoPanel,
  prevSlug, nextSlug,
}: CaseStudyProps) {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            background: heroBg,
            ...(heroImage ? {
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            } : {}),
          }}
        />
        <div className={styles.heroFade} />
        {!heroImage && <div className={styles.heroWatermark}>{title}</div>}
        <div className={styles.heroContent}>
          <div className={styles.heroTags}>
            {tags.map((t) => (
              <span key={t} className={styles.heroTag}>{t}</span>
            ))}
          </div>
          <p className={styles.heroMeta} style={metaColor ? { color: metaColor } : undefined}>{meta}</p>
          <h1 className={styles.heroTitle}>{title}</h1>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        </div>
      </section>

      {/* Metrics */}
      <MetricsBar metrics={metrics} subline={metricsSubline} />

      {/* Tab Row */}
      {tabs && tabs.length > 0 && (
        <div className={styles.tabRow}>
          {tabs.map((tab) =>
            tab.active
              ? <span key={tab.label} className={`${styles.tabItem} ${styles.tabItemActive}`}>{tab.label}</span>
              : <Link key={tab.label} href={tab.href} className={styles.tabItem}>{tab.label}</Link>
          )}
        </div>
      )}

      {/* Content Blocks */}
      <div className={styles.blocks}>
        {blocks.map((block, i) => (
          <div key={block.number}>
          <div
            className={[
              styles.block,
              block.reverse ? styles.reverse : "",
              block.compact ? styles.blockCompact : "",
              i === 1 && positioningStatement ? styles.blockNoBorder : "",
            ].join(" ")}
          >
            {/* Visual column: image (or custom) + caption below */}
            <div className={styles.blockVisual}>
              <div
                className={`${styles.blockImage} ${block.imageContent ? styles.blockImageCustom : ""}`}
                style={
                  block.imageBg && !block.imageContent && !block.imageSrc
                    ? { background: block.imageBg }
                    : { background: "var(--bg)" }
                }
              >
                {block.imageContent ?? (block.imageSrc ? (
                  <div className={styles.blockImageFrame}>
                    {block.imageSrc.endsWith(".gif")
                      ? <img src={block.imageSrc} alt={block.imagePlaceholder} className={styles.realImage} style={block.imagePosition ? { objectPosition: block.imagePosition } : undefined} />
                      : <Image src={block.imageSrc} alt={block.imagePlaceholder} fill unoptimized className={styles.realImage} style={block.imagePosition ? { objectPosition: block.imagePosition } : undefined} />}
                  </div>
                ) : (
                  <>
                    <PlaceholderIcon type={block.imageIcon} />
                    <span className={styles.placeholderLabel}>{block.imagePlaceholder}</span>
                  </>
                ))}
              </div>
              {block.caption && (
                <p
                  className={`${styles.blockCaption} ${block.captionOverlay ? styles.blockCaptionOverlay : ""}`}
                  style={block.captionOverlay ? { marginTop: `-${block.captionOverlay}px` } : undefined}
                >{block.caption}</p>
              )}
            </div>

            {/* Text column */}
            <div className={`${styles.blockText} ${block.altBg ? styles.altBg : ""}`}>
              <div className={styles.blockNumber}>{block.number} — {block.label}</div>
              {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
              <div className={styles.blockBody}>{block.body}</div>
            </div>
          </div>
          {/* Positioning bar after block index 1 */}
          {i === 1 && positioningStatement && (
            <div className={styles.positioningBar}>
              <p className={styles.positioningText}>{positioningStatement}</p>
            </div>
          )}
          {/* Graph image after block index 1 */}
          {i === 1 && graphImage && (
            <div className={styles.graphPanel}>
              <div className={styles.graphInner}>
                <Image src={graphImage} alt="Supporting chart" fill unoptimized className={styles.graphImg} />
              </div>
            </div>
          )}
          {/* Creator spotlight after specified block index */}
          {i === creatorSpotlightAfterBlock && creatorSpotlight && (
            <div>{creatorSpotlight}</div>
          )}
          </div>
        ))}
      </div>

      {/* Video panel */}
      {videoPanel && (
        <div className={styles.videoPanel}>
          <a
            href={videoPanel.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoCard}
            aria-label={videoPanel.label}
          >
            {/* Background image or placeholder */}
            {videoPanel.image
              ? <Image src={videoPanel.image} alt={videoPanel.label} fill className={styles.videoCardImg} sizes="(max-width: 768px) 100vw, 860px" />
              : <div className={styles.videoCardPlaceholder} />
            }
            {/* Overlay */}
            <div className={styles.videoCardOverlay} />
            {/* Label — top left */}
            <div className={styles.videoCardLabel}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{marginRight: 8, flexShrink: 0}}>
                <polygon points="6,4 20,12 6,20" />
              </svg>
              {videoPanel.label}
            </div>
          </a>
        </div>
      )}

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
