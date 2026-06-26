import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 5%",
      background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(34,197,94,0.15)" : "none",
      transition: "all 0.4s ease",
    }}>

      {/* Logo */}
      <div style={{
        fontSize: "1.4rem",
        fontWeight: "800",
        color: "white",
        letterSpacing: "-0.5px",
      }}>
        Akpong<span style={{ color: "#22c55e" }}>.</span>dev
      </div>

      {/* Desktop Links */}
      <nav style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <div style={{ display: "flex", gap: "36px" }} className="desktop-links">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "0.9rem",
                textTransform: "capitalize",
                cursor: "pointer",
                letterSpacing: "0.5px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => { e.target.style.color = "#22c55e"; }}
              onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.7)"; }}
            >
              {section === "skills" ? "Services" : section}
            </Link>
          ))}
        </div>

        <Link to="contact" smooth={true} duration={500} className="desktop-only-btn">
          <button style={{
            padding: "10px 24px",
            border: "1px solid #22c55e",
            background: "transparent",
            color: "#22c55e",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "0.9rem",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#22c55e";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#22c55e";
            }}
          >
            Hire Me
          </button>
        </Link>
      </nav>

      {/* Hamburger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "none", fontSize: "1.4rem", color: "white", cursor: "pointer", zIndex: 1001 }}
        className="hamburger"
      >
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: "absolute",
          top: "70px",
          left: 0,
          right: 0,
          background: "rgba(10,10,10,0.98)",
          backdropFilter: "blur(20px)",
          padding: "24px 5%",
          borderBottom: "1px solid rgba(34,197,94,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 1000,
        }}>
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              style={{
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              {section === "skills" ? "Services" : section}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}