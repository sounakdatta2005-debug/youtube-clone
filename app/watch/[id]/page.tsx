import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { getVideoById, videos } from "@/lib/data";

type WatchPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return videos.map((video) => ({ id: video.id }));
}

export default async function WatchPage({ params }: WatchPageProps) {
  const { id } = await params;
  const video = getVideoById(id);

  if (!video) {
    notFound();
  }

  const related = videos.filter((item) => item.id !== video.id).slice(0, 4);

  return (
    <div className="page-shell">
      <Sidebar />
      <main className="main-pane">
        <TopNav />
        <section
          style={{
            padding: "1.1rem 1.2rem 2rem",
            display: "grid",
            gap: 18,
            gridTemplateColumns: "minmax(0, 1fr) 320px",
          }}
        >
          <article style={{ display: "grid", gap: 12 }}>
            <div
              className="surface"
              style={{
                aspectRatio: "16/9",
                background: video.thumbnailGradient,
                display: "grid",
                placeItems: "center",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              Now Playing
            </div>
            <h1 style={{ margin: 0, fontSize: 27 }}>{video.title}</h1>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>
              {video.views} • {video.uploaded}
            </p>
            <div className="surface" style={{ padding: "0.95rem" }}>
              <p style={{ margin: "0 0 8px", fontWeight: 700 }}>{video.channel}</p>
              <p style={{ margin: "0 0 8px", color: "var(--muted)", fontSize: 14 }}>
                {video.subscribers}
              </p>
              <p style={{ margin: 0, lineHeight: 1.45 }}>{video.description}</p>
            </div>
          </article>
          <aside style={{ display: "grid", gap: 10, alignContent: "start" }}>
            <h2 style={{ margin: 0, fontSize: 17 }}>Up Next</h2>
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/watch/${item.id}`}
                className="surface"
                style={{ display: "grid", gap: 8, padding: 10 }}
              >
                <div
                  style={{
                    aspectRatio: "16/9",
                    borderRadius: 10,
                    background: item.thumbnailGradient,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      right: 8,
                      bottom: 8,
                      background: "rgba(0,0,0,.75)",
                      borderRadius: 4,
                      padding: "1px 5px",
                      fontSize: 11,
                    }}
                  >
                    {item.duration}
                  </span>
                </div>
                <strong style={{ fontSize: 14, lineHeight: 1.3 }}>{item.title}</strong>
                <span style={{ color: "var(--muted)", fontSize: 13 }}>{item.channel}</span>
              </Link>
            ))}
          </aside>
        </section>
      </main>
    </div>
  );
}
