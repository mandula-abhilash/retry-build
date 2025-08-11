export default function RetryTile() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Retry logo"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "hsl(var(--primary))" }} />
          <stop offset="1" style={{ stopColor: "hsl(var(--secondary))" }} />
        </linearGradient>
      </defs>

      {/* rounded square; transparent outside */}
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="12"
        fill="url(#g)"
        filter="url(#shadow)"
      />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial"
        fontSize="28"
        fontWeight="800"
        fill="hsl(var(--primary-foreground))"
      >
        R
      </text>
    </svg>
  );
}
