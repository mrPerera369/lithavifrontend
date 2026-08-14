export default function LogoPlaceholder({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";
  return (
    <div
      className="flex items-center gap-3"
      role="img"
      aria-label="Lithavi International logo placeholder"
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-sm "
        
      >
        
        <img
          src="assets/images/logoonly.svg"
          alt="Lithavi International logo"
          className="h-10 w-10 object-contain bg-amber-50 rounded-sm"
        />

      </span>
      <span
        className="leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span
          className="block font-semibold tracking-tight"
          style={{
            fontSize: "1.05rem",
            color: isLight ? "var(--color-white)" : "var(--color-navy-950)",
          }}
        >
          LITHAVI
        </span>
        <span
          className="block"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            color: isLight ? "var(--color-gold-500)" : "var(--color-gold-600)",
          }}
        >
          INTERNATIONAL
        </span>
      </span>
    </div>
  );
}
