import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        gap: "40px",
        color: "white",
        minHeight: "100vh",
      }}
      className="hero-section"
    >
      {/* Text Side */}
      <motion.div
        style={{ flex: 1 }}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Eyebrow label */}
        <motion.div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#22c55e",
            padding: "6px 16px",
            borderRadius: "50px",
            fontSize: "0.85rem",
            fontWeight: "600",
            marginBottom: "28px",
            letterSpacing: "0.5px",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }}></span>
          Open to Internship & Freelance
        </motion.div>

        {/* Main headline */}
        <h1 style={{
          fontSize: "clamp(3rem, 7vw, 6rem)",
          fontWeight: "900",
          lineHeight: 1.05,
          letterSpacing: "-2px",
          marginBottom: "20px",
        }}>
          Hi, I'm<br />
          <span style={{ color: "#22c55e" }}>Akpong Victory</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          fontWeight: "300",
          color: "rgba(255,255,255,0.75)",
          marginBottom: "28px",
          minHeight: "50px",
        }}>
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React Developer",
                "Healthcare Tech Enthusiast",
                "UI/UX Minded Builder",
                "Solution Driven",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </div>

        {/* Bio */}
        <p style={{
          fontSize: "1rem",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "480px",
          lineHeight: 1.8,
          marginBottom: "40px",
        }}>
          Building responsive, user-friendly web experiences with a unique edge —
          a healthcare background that brings analytical thinking and
          attention to detail to every project.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              style={{
                padding: "14px 32px",
                border: "none",
                background: "#22c55e",
                color: "#000",
                borderRadius: "6px",
                fontSize: "0.95rem",
                fontWeight: "700",
                cursor: "pointer",
                letterSpacing: "0.3px",
              }}
              whileHover={{ scale: 1.05, background: "#16a34a" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              View My Work
            </motion.button>
          </Link>

          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              style={{
                padding: "14px 32px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "white",
                borderRadius: "6px",
                fontSize: "0.95rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
              whileHover={{ borderColor: "#22c55e", color: "#22c55e", scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </div>

        {/* Social row */}
        <motion.div
          style={{ display: "flex", gap: "20px", marginTop: "48px", alignItems: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            { icon: "fa-brands fa-github", href: "https://github.com/akpongvictory" },
            { icon: "fa-brands fa-linkedin", href: "https://linkedin.com/in/victoryakpong" },
            { icon: "fa-brands fa-whatsapp", href: "https://wa.me/2349048249675" },
          ].map((s) => (
            <motion.a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.3rem", textDecoration: "none" }}
              whileHover={{ color: "#22c55e", y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <i className={s.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        <div style={{ position: "relative" }}>
          {/* Glow behind image */}
          <div style={{
            position: "absolute",
            inset: "-20px",
            background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            zIndex: 0,
          }} />

          <motion.img
            src="/pictures/Professional-dp.png"
            alt="Akpong Victory"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid rgba(34,197,94,0.5)",
              position: "relative",
              zIndex: 1,
            }}
            whileHover={{ scale: 1.03, borderColor: "#22c55e" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
}