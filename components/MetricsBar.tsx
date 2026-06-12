import styles from "./MetricsBar.module.css";

interface Metric {
  value: string;
  label: string;
  accent?: boolean;
}

interface MetricsBarProps {
  metrics: Metric[];
  subline?: string;
}

export default function MetricsBar({ metrics, subline }: MetricsBarProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        {metrics.map((m) => (
          <div key={m.label} className={styles.item}>
            <span className={`${styles.value} ${m.accent ? styles.accent : ""}`}>{m.value}</span>
            <span className={styles.label}>{m.label}</span>
          </div>
        ))}
      </div>
      {subline && <p className={styles.subline}>{subline}</p>}
    </div>
  );
}
