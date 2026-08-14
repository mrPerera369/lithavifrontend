import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        gap: "1rem",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: 0, color: "#ffffff", }}>404</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        style={{
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          background: "#0070f3",
          color: "white",
          textDecoration: "none",
        }}
      >
        Go back home
      </Link>
    </div>
  );
}