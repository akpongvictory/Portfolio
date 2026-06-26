import { motion } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 5%" }}>
      <motion.div
        style={{ textAlign: "center", marginBottom: "64px" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-line" style={{ margin: "0 auto 24px" }} />
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "800",
          letterSpacing: "-1px",
          color: "white",
          marginBottom: "16px",
        }}>
          Skills & Tools
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto" }}>
          Technologies I use to build responsive, interactive web experiences.
        </p>
      </motion.div>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
      }}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.id}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.8)",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "default",
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{
              background: "rgba(34,197,94,0.1)",
              borderColor: "rgba(34,197,94,0.4)",
              color: "#22c55e",
              y: -4,
            }}
          >
            {skill.icon && <i className={skill.icon} style={{ fontSize: "1rem" }}></i>}
            {skill.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}