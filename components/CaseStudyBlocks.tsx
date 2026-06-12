import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./CaseStudyLayout.module.css";
import type { ContentBlock } from "./CaseStudyLayout";

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

export interface CaseStudyBlocksProps {
  blocks: ContentBlock[];
  positioningStatement?: string;
  graphImage?: string;
  creatorSpotlight?: ReactNode;
  creatorSpotlightAfterBlock?: number;
  videoPanel?: { label: string; url?: string; image?: string };
  prevSlug?: { href: string; label: string };
  nextSlug?: { href: string; label: string };
}

export default function CaseStudyBlocks({
  blocks,
  positioningStatement,
  graphImage,
  creatorSpotlight,
  creatorSpotlightAfterBlock = 3,
  videoPanel,
  prevSlug,
  nextSlug,
}: CaseStudyBlocksProps) {
  return (
    <>
      {/* Content Blocks */}
      <div className={styles.blocks}>
        {blocks.map((block, i) => (
          <div key={`${block.number}-${i}`}>
            {block.textOnly ? (
              /* Full-width text row — no image column */
              <div className={styles.blockTextOnlyRow}>
                <div className={styles.blockNumber}>{block.number} — {block.label}</div>
                {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
                <div className={styles.blockBody}>{block.body}</div>
              </div>
            ) : (
            <div
              className={[
                styles.block,
                block.reverse ? styles.reverse : "",
                block.compact ? styles.blockCompact : "",
                i === 1 && positioningStatement ? styles.blockNoBorder : "",
              ].join(" ")}
            >
              {/* Visual column */}
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
            )}
            {/* Custom row injected after this block */}
            {block.customRow}

            {i === 1 && positioningStatement && (
              <div className={styles.positioningBar}>
                <p className={styles.positioningText}>{positioningStatement}</p>
              </div>
            )}
            {i === 1 && graphImage && (
              <div className={styles.graphPanel}>
                <div className={styles.graphInner}>
                  <Image src={graphImage} alt="Supporting chart" fill unoptimized className={styles.graphImg} />
                </div>
              </div>
            )}
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
            {videoPanel.image
              ? <Image src={videoPanel.image} alt={videoPanel.label} fill className={styles.videoCardImg} sizes="(max-width: 768px) 100vw, 860px" />
              : <div className={styles.videoCardPlaceholder} />
            }
            <div className={styles.videoCardOverlay} />
            <div className={styles.videoCardLabel}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ marginRight: 8, flexShrink: 0 }}>
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
    </>
  );
}
