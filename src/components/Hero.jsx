// src/components/Hero.jsx
// motion.div replaces plain div. initial= is the starting state,
// animate= is the end state, transition= controls timing.
// The text and image slide in from opposite sides on page load.

import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 5%",
        gap: "40px",
        color: "white",
        minHeight: "90vh",
      }}
      className="hero-section"
    >
      {/* Text slides in from the left */}
      <motion.div
        style={{ flex: 1 }}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Akpong Victory
          <br />
          <span style={{ color: "#22c55e" }}>Frontend Developer</span>
        </h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "30px", opacity: 0.9 }}>
          Frontend Developer | Building responsive websites with HTML, CSS,
          JavaScript, React, Git and GitHub.
        </p>

        <Link to="contact" smooth={true} duration={500}>
          <motion.button
            style={{
              padding: "14px 28px",
              border: "none",
              backgroundColor: "#15803d",
              color: "white",
              borderRadius: "4px 18px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            whileHover={{
              backgroundColor: "#ffffff",
              color: "#15803d",
              x: -5,
            }}
            transition={{ duration: 0.2 }}
          >
            Hire Me
          </motion.button>
        </Link>
      </motion.div>

      {/* Image slides in from the right */}
      <motion.div
        style={{ flex: 1, display: "flex", justifyContent: "center" }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.img
          src="/pictures/profile.jpeg"
          alt="Akpong Victory"
          style={{
            width: "70%",
            borderRadius: "200px",
            padding: "20px",
            border: "3px solid #22c55e",
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
}