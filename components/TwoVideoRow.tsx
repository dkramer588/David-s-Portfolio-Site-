import YouTubeEmbed from "./YouTubeEmbed";
import styles from "./TwoVideoRow.module.css";

interface VideoItem {
  videoId: string;
  caption: string;
}

export default function TwoVideoRow({ videos }: { videos: VideoItem[] }) {
  return (
    <div className={styles.row}>
      {videos.map(({ videoId, caption }) => (
        <div key={videoId} className={styles.videoWrap}>
          <div className={styles.videoBox}>
            <YouTubeEmbed videoId={videoId} />
          </div>
          <p className={styles.caption}>{caption}</p>
        </div>
      ))}
    </div>
  );
}
