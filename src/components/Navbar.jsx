// src/components/Navbar.jsx
// Sticky glassmorphism navbar with a React-powered mobile toggle.
// Replaces your vanilla JS classList.toggle() with useState.

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu automatically if user resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 5%",
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)",
        borderBottom: "2px ridge white",
      }}
    >
      {/* Logo */}
      <div>
        <img
          src="/pictures/favorite.png"
          alt="Gifted Hands"
          style={{ height: "60px", width: "auto" }}
        />
      </div>

      {/* Desktop Nav Links */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "32px",
          }}
          className="desktop-links"
        >
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                textTransform: "capitalize",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#22c55e";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
              }}
            >
              {section === "skills" ? "Services" : section}
            </Link>
          ))}
        </div>

        {/* Book a Session button — hidden on mobile */}
        <Link to="contact" smooth={true} duration={500}>
          <button
            style={{
              padding: "12px 20px",
              border: "none",
              backgroundColor: "#15803d",
              color: "white",
              borderRadius: "4px 18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            className="desktop-only-btn"
          >
            Book a Session
          </button>
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          fontSize: "1.5rem",
          color: "white",
          cursor: "pointer",
          zIndex: 1001,
        }}
        className="hamburger"
      >
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "5%",
            background: "#111",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 1000,
          }}
          className="mobile-menu"
        >
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
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