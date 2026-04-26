import Link from "next/link";

const items = [
  ["Home", "/"],
  ["Shorts", "#"],
  ["Subscriptions", "#"],
  ["Library", "#"],
  ["History", "#"],
  ["Watch Later", "#"],
] as const;

export default function Sidebar() {
  return (
    <aside
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        borderRight: "1px solid var(--line)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
      }}
    >
      {items.map(([label, href], idx) => (
        <Link
          key={label}
          href={href}
          style={{
            borderRadius: 10,
            padding: "0.7rem 0.8rem",
            color: idx === 0 ? "white" : "var(--muted)",
            fontWeight: idx === 0 ? 700 : 500,
            background: idx === 0 ? "#252839" : "transparent",
            border: idx === 0 ? "1px solid #3a3f59" : "1px solid transparent",
          }}
        >
          {label}
        </Link>
      ))}
    </aside>
  );
}
