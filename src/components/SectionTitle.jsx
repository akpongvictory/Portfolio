// SectionTitle.jsx
// Reusable section heading used on every page.
// Usage: <SectionTitle eyebrow="About Me" title="Who I Am" highlight="I Am" />

export default function SectionTitle({ eyebrow, title, highlight, subtitle }) {
  // Split title to colour the highlight portion green
  const parts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <div className="mb-12">

      {/* Small uppercase label above the heading */}
      {eyebrow && (
        <p className="uppercase tracking-[4px] font-semibold text-[var(--brand)] mb-3 text-sm">
          {eyebrow}
        </p>
      )}

      {/* Main heading */}
      <h1 className="text-4xl lg:text-5xl font-black leading-tight text-[var(--text)]">
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-[var(--brand)]">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h1>

      {/* Optional subtitle paragraph */}
      {subtitle && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
          {subtitle}
        </p>
      )}

    </div>
  );
}