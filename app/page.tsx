import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="page-shell">
      <Sidebar />
      <main className="main-pane">
        <TopNav />
        <section style={{ padding: "1.1rem 1.2rem 2rem" }}>
          <h1 style={{ margin: "0 0 0.8rem", fontSize: 24 }}>Recommended</h1>
          <div className="feed-grid">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
