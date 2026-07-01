import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontSize: "0.7rem",
          fontFamily: "monospace",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--accent-light)",
          marginBottom: "1rem",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "1rem",
        }}
      >
        Page not found
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        style={{
          padding: "0.75rem 1.75rem",
          borderRadius: "999px",
          fontWeight: 600,
          fontSize: "0.9rem",
          background: "var(--accent)",
          color: "var(--text-primary)",
          textDecoration: "none",
        }}
      >
        Go home
      </Link>
    </div>
  );
}
