// src/components/Projects.jsx
// Each card shows the project screenshot full-bleed.
// On hover, an overlay slides up revealing title, description,
// and Live Demo / View Code buttons. Pure Framer Motion.

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../data";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        height: "280px",
        cursor: "pointer",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Screenshot */}
      <motion.img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Dark base gradient — always visible at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
          pointerEvents: "none",
        }}
      />

      {/* Project title — always visible at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "20px",
          color: "white",
          fontWeight: "700",
          fontSize: "1.1rem",
          zIndex: 2,
        }}
      >
        {project.title}
      </div>

      {/* Hover Overlay — slides up from bottom */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.7))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "28px",
              zIndex: 3,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h3
              style={{
                color: "#22c55e",
                fontSize: "1.3rem",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              {project.description}
            </p>

            {/* Buttons row */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    background: "#22c55e",
                    color: "#000",
                    padding: "8px 18px",
                    borderRadius: "4px 14px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Live Demo
                </motion.a>
              )}

              {project.codeUrl && (
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    background: "transparent",
                    color: "white",
                    padding: "8px 18px",
                    borderRadius: "4px 14px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    border: "1px solid rgba(255,255,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  whileHover={{ borderColor: "#22c55e", color: "#22c55e", scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fa-brands fa-github"></i>
                  View Code
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 5%" }}>
      <motion.h2
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "16px",
          color: "wheat",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <p
        style={{
          textAlign: "center",
          color: "white",
          opacity: 0.85,
          maxWidth: "700px",
          margin: "0 auto 48px",
        }}
      >
        Explore a collection of projects that highlight my passion for building responsive, user-friendly web applications.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
        className="projects-grid"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}