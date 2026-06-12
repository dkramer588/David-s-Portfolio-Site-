export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
