export default function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <pattern id="bp-grid-sm" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <pattern id="bp-grid-lg" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="url(#bp-grid-sm)" />
          <path d="M120 0H0V120" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#bp-grid-lg)" />
    </svg>
  );
}
