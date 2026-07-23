import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data";

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function Projects() {
  const [[index, direction], setSlide] = useState([0, 0]);

  const paginate = (newDir) => {
    const next = (index + newDir + projects.length) % projects.length;
    setSlide([next, newDir]);
  };

  const project = projects[index];

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "3rem" }}
      >
        <div className="section-line" />
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 900,
            letterSpacing: "-1px",
            color: "var(--color-text, #ffffff)",
            margin: 0,
          }}
        >
          Projects
        </h2>
        <p style={{ color: "var(--color-muted, #6b7280)", marginTop: "0.5rem" }}>
          Things I've built — click the arrows or dots to explore.
        </p>
      </motion.div>

      {/* Carousel wrapper */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Prev button */}
        <NavButton dir="left" onClick={() => paginate(-1)} />

        {/* Card */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            borderRadius: "16px",
            position: "relative",
            minHeight: "420px",
          }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                background: "var(--color-card, rgba(255,255,255,0.04))",
                border: "1px solid rgba(34,197,94,0.15)",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Counter badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    padding: "4px 12px",
                    fontSize: "0.8rem",
                    color: "#22c55e",
                    fontWeight: 700,
                  }}
                >
                  {index + 1} / {projects.length}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem 2rem 2rem" }}>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#22c55e",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-muted, #9ca3af)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    margin: "0 0 1.2rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, backgroundColor: "#15803d" }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        background: "#22c55e",
                        color: "#fff",
                        padding: "0.5rem 1.2rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      Live Demo ↗
                    </motion.a>
                  )}
                  {project.codeUrl && (
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, borderColor: "#22c55e", color: "#22c55e" }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        background: "transparent",
                        color: "var(--color-text, #fff)",
                        padding: "0.5rem 1.2rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        display: "inline-block",
                        border: "1.5px solid rgba(255,255,255,0.2)",
                        transition: "all 0.2s",
                      }}
                    >
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <NavButton dir="right" onClick={() => paginate(1)} />
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginTop: "1.5rem",
        }}
      >
        {projects.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setSlide([i, i > index ? 1 : -1])}
            whileHover={{ scale: 1.3 }}
            style={{
              width: i === index ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === index ? "#22c55e" : "rgba(34,197,94,0.25)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function NavButton({ dir, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: "#22c55e", color: "#fff" }}
      whileTap={{ scale: 0.95 }}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "1.5px solid rgba(34,197,94,0.4)",
        background: "transparent",
        color: "#22c55e",
        fontSize: "1.1rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "background 0.2s, color 0.2s",
      }}
    >
      {dir === "left" ? "←" : "→"}
    </motion.button>
  );
}