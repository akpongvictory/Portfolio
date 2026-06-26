import { motion } from "framer-motion";
import { contactLinks } from "../data";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 5%", textAlign: "center" }}>
      <motion.div
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
          Let's Work Together
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.5)",
          maxWidth: "480px",
          margin: "0 auto 56px",
          lineHeight: 1.8,
        }}>
          Open to frontend internships, freelance projects, and healthcare-tech collaborations.
          Let's build something meaningful.
        </p>
      </motion.div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        {contactLinks.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
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
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{
              background: "rgba(34,197,94,0.1)",
              borderColor: "rgba(34,197,94,0.4)",
              color: "#22c55e",
              y: -4,
            }}
          >
            <i className={item.icon}></i>
            {item.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}