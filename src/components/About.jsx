// src/components/About.jsx
// whileInView triggers when the section scrolls into view.
// viewport={{ once: true }} means it only animates once, not every scroll.
// The stat cards use staggerChildren to cascade in one by one.

import { motion } from "framer-motion";
import { stats } from "../data";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "40px",
        padding: "80px 5%",
        color: "white",
      }}
      className="about-section"
    >
      {/* Bio text fades up from below */}
      <motion.div
        style={{ flex: 1 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#22c55e" }}>
          About Me
        </h2>
        <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
          I am a frontend developer passionate about transforming ideas into
          responsive, accessible, and user-friendly web experiences. My current
          toolkit includes HTML, CSS, JavaScript, React, Git, and GitHub, which
          I use to build practical projects that solve real-world problems.
          Coming from a healthcare background, I bring strong analytical
          thinking, attention to detail, and a continuous learning mindset to
          software development. I am actively expanding my skills in modern web
          technologies while building projects that showcase creativity,
          functionality, and clean design.
        </p>
      </motion.div>

      {/* Stat cards stagger in one by one */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#22c55e", fontSize: "3rem" }}>{stat.value}</h3>
            <p style={{ marginTop: "8px", opacity: 0.9 }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}