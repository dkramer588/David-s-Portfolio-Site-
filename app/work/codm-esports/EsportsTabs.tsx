"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./EsportsTabs.module.css";

const tabs = [
  { label: "The Story",    segment: null,           href: "/work/codm-esports" },
  { label: "Social",       segment: "social",       href: "/work/codm-esports/social" },
  { label: "Influencer",   segment: "influencer",   href: "/work/codm-esports/influencer" },
  { label: "Partnerships", segment: "partnerships", href: "/work/codm-esports/partnerships" },
];

export default function EsportsTabs() {
  const segment = useSelectedLayoutSegment();
  return (
    <div className={styles.tabRow}>
      {tabs.map((tab) =>
        tab.segment === segment ? (
          <span key={tab.label} className={`${styles.tabItem} ${styles.tabItemActive}`}>
            {tab.label}
          </span>
        ) : (
          <Link key={tab.label} href={tab.href} className={styles.tabItem}>
            {tab.label}
          </Link>
        )
      )}
    </div>
  );
}
