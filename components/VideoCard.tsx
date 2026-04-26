import Link from "next/link";
import type { Video } from "@/lib/data";

type VideoCardProps = {
  video: Video;
};

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article style={{ display: "grid", gap: 10 }}>
      <Link
        href={`/watch/${video.id}`}
        className="surface"
        style={{
          display: "block",
          aspectRatio: "16/9",
          overflow: "hidden",
          position: "relative",
          background: video.thumbnailGradient,
        }}
      >
        <span
          style={{
            position: "absolute",
            right: 10,
            bottom: 10,
            background: "rgba(0,0,0,.7)",
            borderRadius: 6,
            padding: "2px 6px",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {video.duration}
        </span>
      </Link>
      <div style={{ display: "grid", gap: 3 }}>
        <Link href={`/watch/${video.id}`} style={{ fontWeight: 700, lineHeight: 1.25 }}>
          {video.title}
        </Link>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>{video.channel}</p>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>
          {video.views} • {video.uploaded}
        </p>
      </div>
    </article>
  );
}
