// src/components/Contact.jsx
// Contact buttons fan in with a stagger. Clean and professional.

import { motion } from "framer-motion";
import { contactLinks } from "../data";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 5%", textAlign: "center", color: "wheat" }}>
      <motion.h2
        style={{ fontSize: "2.5rem", marginBottom: "16px" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <p style={{ color: "white", opacity: 0.85, marginBottom: "40px" }}>
        Let's work together on your next project.
      </p>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {contactLinks.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            style={{ textDecoration: "none", background: "#15803d", color: "white", padding: "10px 18px", borderRadius: "8px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ background: "#111", y: -4 }}
          >
            <i className={item.icon}></i>
            {item.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}