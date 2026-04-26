import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <section className="surface" style={{ padding: "1.5rem", maxWidth: 500 }}>
        <h1 style={{ margin: "0 0 0.4rem" }}>Video not found</h1>
        <p style={{ margin: "0 0 1rem", color: "var(--muted)" }}>
          This page does not exist or the video was removed.
        </p>
        <Link
          href="/"
          style={{
            borderRadius: 10,
            background: "var(--accent)",
            padding: "0.55rem 0.9rem",
            display: "inline-block",
            fontWeight: 700,
          }}
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
