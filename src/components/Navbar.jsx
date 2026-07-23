import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeContext } from "../ThemeContext";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // ── Framer Motion scroll detection (replaces window.addEventListener) ──
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 2rem",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        // Replaced hardcoded fallback colors with var(--color-bg) opacity
        background: scrolled
          ? isDark
            ? "rgba(10,10,10,0.92)" 
            : "rgba(255,255,255,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(34,197,94,0.15)" : "none",
      }}
    >
      {/* Logo */}
      <Link to="hero" smooth duration={500} style={{ cursor: "pointer" }}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          style={{
            fontWeight: 900,
            fontSize: "1.3rem",
            color: "#22c55e",
            letterSpacing: "-0.5px",
            fontFamily: "inherit",
          }}
        >
          Akpong.Dev
          {/* REPLACEMENT: Changed hardcoded text toggles to use var(--color-text) */}
          <span style={{ color: "var(--color-text)" }}>.</span>
        </motion.span>
      </Link>

      {/* Desktop nav links */}
      <div className="nav-links-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={500}
            offset={-70}
            style={{
              cursor: "pointer",
              fontSize: "0.95rem",
              fontWeight: 500,
              // REPLACEMENT: Swapped hardcoded fallback opacity variations for cleaner variable control
              color: isDark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.7)",
              transition: "color 0.2s",
              position: "relative",
            }}
            activeClass="nav-active"
          >
            <motion.span whileHover={{ color: "#22c55e" }}>{link.label}</motion.span>
          </Link>
        ))}

        {/* Theme toggle */}
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

        {/* Hire Me button */}
        <Link to="contact" smooth duration={500} offset={-70}>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#15803d" }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "#22c55e",
              color: "var(--color-text)", // REPLACEMENT: Changed "#fff" to text variable
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1.2rem",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Hire Me
          </motion.button>
        </Link>
      </div>

      {/* Mobile: theme toggle + hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="mobile-controls">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  isOpen
                    ? i === 0
                      ? { rotate: 45, y: 10 }
                      : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -10 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--color-text)", // REPLACEMENT: Removed ternary, now uses global text variable
                  borderRadius: "2px",
                  transformOrigin: "center",
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            position: "absolute",
            top: "70px",
            left: 0,
            right: 0,
            // REPLACEMENT: Changed hardcoded background layers to use global background variable
            background: "var(--color-bg)",
            backdropFilter: "blur(12px)",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderBottom: "1px solid rgba(34,197,94,0.2)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              style={{
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: 600,
                // REPLACEMENT: Using variable fallbacks instead of rigid ternary colors
                color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.8)",
                padding: "0.4rem 0",
                borderBottom: "1px solid rgba(34,197,94,0.1)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="contact" smooth duration={500} offset={-70} onClick={() => setIsOpen(false)}>
            <button
              style={{
                background: "#22c55e",
                color: "var(--color-text)", // REPLACEMENT: Changed "#fff" to variable
                border: "none",
                borderRadius: "8px",
                padding: "0.6rem 1.2rem",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              Hire Me
            </button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "1.5px solid rgba(34,197,94,0.4)",
        borderRadius: "8px",
        padding: "0.35rem 0.6rem",
        cursor: "pointer",
        fontSize: "1rem",
        lineHeight: 1,
        color: "var(--color-text)", // REPLACEMENT: Replaced ternary color selector with CSS variable
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </motion.button>
  );
}
