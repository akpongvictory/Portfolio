export default function Footer() {
  const socials = [
    { icon: "fa-brands fa-github", href: "https://github.com/akpongvictory" },
    { icon: "fa-brands fa-linkedin", href: "https://linkedin.com/in/victoryakpong" },
    { icon: "fa-brands fa-x-twitter", href: "https://x.com/" },
  ];
  return (
    <footer style={{ textAlign: "center", padding: "30px 10px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", color: "white" }}>
      <p>2026 Akpong Victory. All rights reserved.</p>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        {socials.map((s) => (
          <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5rem", transition: "0.3s ease", display: "inline-block" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#22c55e"; e.currentTarget.style.transform = "translateY(-5px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <i className={s.icon}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}