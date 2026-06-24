// src/components/Skills.jsx
// Renders skill pills from data.js. Icons are optional —
// skills without an icon render text-only cleanly.

import { skills } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "80px 5%", textAlign: "center" }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "16px",
          color: "wheat",
        }}
      >
        Skills
      </h2>

      <p
        style={{
          color: "white",
          opacity: 0.85,
          maxWidth: "700px",
          margin: "0 auto 48px",
        }}
      >
        Technologies and tools I currently use to build responsive and
        interactive web experiences.
      </p>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              padding: "15px 25px",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.2)",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#15803d";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {skill.icon && <i className={skill.icon}></i>}
            {skill.label}
          </div>
        ))}
      </div>
    </section>
  );
}