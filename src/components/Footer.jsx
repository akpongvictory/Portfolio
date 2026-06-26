export default function Footer() {
  const socials = [
    {
      icon: "fa-brands fa-github",
      href: "https://github.com/akpongvictory",
    },
    {
      icon: "fa-brands fa-linkedin",
      href: "https://linkedin.com/in/victoryakpong",
    },
    {
      icon: "fa-brands fa-x-twitter",
      href: "https://x.com/",
    },
  ];

  return (
    <footer
      style={{
        padding: "40px 5%",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <p
        style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: "0.85rem",
        }}
      >
        © 2026 Akpong Victory. Built with React & Framer Motion.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        {socials.map((s) => (
          <a
            key={s.icon}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "1.2rem",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#22c55e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.35)";
            }}
          >
            <i className={s.icon}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}