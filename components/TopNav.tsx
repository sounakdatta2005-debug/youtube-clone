export default function TopNav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "1rem 1.25rem",
        borderBottom: "1px solid var(--line)",
        backdropFilter: "blur(8px)",
        background: "color-mix(in oklab, var(--bg) 84%, transparent)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span
          style={{
            width: 28,
            height: 20,
            borderRadius: 5,
            background: "var(--accent)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 11,
          }}
        >
          ▶
        </span>
        <strong style={{ fontSize: 20, letterSpacing: 0.2 }}>ViewTube</strong>
      </div>
      <input
        type="search"
        placeholder="Search videos"
        style={{
          width: "min(620px, 100%)",
          borderRadius: 999,
          border: "1px solid var(--line)",
          background: "#0d0f15",
          color: "var(--text)",
          padding: "0.65rem 1rem",
          outline: "none",
        }}
      />
      <button
        style={{
          borderRadius: 999,
          border: "1px solid var(--line)",
          background: "#131620",
          color: "var(--text)",
          padding: "0.55rem 0.9rem",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Sign In
      </button>
    </header>
  );
}
