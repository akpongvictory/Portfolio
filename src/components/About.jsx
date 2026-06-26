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
        gap: "60px",
        padding: "120px 5%",
      }}
      className="about-section"
    >
      {/* Text Side */}
      <motion.div
        style={{ flex: 1 }}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-line" />
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "800",
          letterSpacing: "-1px",
          marginBottom: "24px",
          color: "white",
        }}>
          About Me
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: "20px" }}>
  I am a frontend developer passionate about transforming ideas into
  responsive, accessible, and user-friendly web experiences. My toolkit
  includes HTML, CSS, JavaScript, React, Git, and GitHub.
</p>

<p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9 }}>
  Coming from a <span style={{ color: "#22c55e", fontWeight: "600" }}>healthcare background</span>,
  with hands-on experience in HMO claims management, medical billing, and
  health data analytics, I bring strong analytical thinking, attention to
  detail, and a user-focused approach to building digital experiences.
</p>

        <motion.a
          href="/pictures/Akpong_Victory_CV.pdf"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "32px",
            padding: "12px 28px",
            border: "1px solid rgba(34,197,94,0.4)",
            color: "#22c55e",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "0.9rem",
            transition: "all 0.3s ease",
          }}
          whileHover={{ background: "rgba(34,197,94,0.1)", scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <i className="fa-solid fa-download"></i>
          Download CV
        </motion.a>
      </motion.div>

      {/* Stats Side */}
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "16px",
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "32px 24px",
              borderRadius: "12px",
              textAlign: "center",
              transition: "border-color 0.3s ease",
            }}
            whileHover={{ borderColor: "rgba(34,197,94,0.4)" }}
          >
            <h3 style={{ color: "#22c55e", fontSize: "2.8rem", fontWeight: "800" }}>
              {stat.value}
            </h3>
            <p style={{ marginTop: "8px", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}