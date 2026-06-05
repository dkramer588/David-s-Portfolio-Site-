"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  thumbVariant: "esports" | "seasons" | "brwi" | "rust" | "pending";
  delay?: number;
}

const thumbClass: Record<string, string> = {
  esports: styles.thumbEsports,
  seasons: styles.thumbSeasons,
  brwi: styles.thumbBrwi,
  rust: styles.thumbRust,
  pending: styles.thumbPending,
};

export default function WorkCard({ slug, tag, title, desc, thumbVariant, delay = 0 }: WorkCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isPending = slug === "coming-soon";
  const href = isPending ? "#" : `/work/${slug}`;

  return (
    <Link
      href={href}
      ref={ref}
      className={`${styles.item} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={`${styles.thumb} ${thumbClass[thumbVariant]}`}>
        {isPending ? (
          <span className={styles.pendingLabel}>Coming Soon</span>
        ) : (
          <div className={styles.overlay}>
            <span className={styles.overlayCta}>View Case Study</span>
          </div>
        )}
      </div>
      <span className={`${styles.tag} ${isPending ? styles.tagPending : ""}`}>{tag}</span>
      <div className={`${styles.title} ${isPending ? styles.titlePending : ""}`}>{title}</div>
      {desc && <div className={styles.desc}>{desc}</div>}
    </Link>
  );
}
