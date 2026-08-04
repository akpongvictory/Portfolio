// src/components/ProjectCard.jsx
// Reusable card for non-featured projects in the grid.
// Pass the full project object + animation index as props.

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index = 0 }) {
  // Guard: treat empty string github as no github
  const hasGithub = project.github && project.github.trim() !== "";
  const hasDemo   = project.demo   && project.demo.trim()   !== "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className="
        overflow-hidden rounded-3xl
        bg-[var(--card-bg)] border border-[var(--border)]
        hover:border-[var(--brand)] hover:-translate-y-2
        duration-300 flex flex-col
      "
    >

      {/* ── Image ── */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* ── Body ── */}
      <div className="p-7 flex flex-col flex-1">

        {/* Order: Name → Category → Status → Role → Description (per reviewer) */}
        <h3 className="text-2xl font-bold text-[var(--text)]">
          {project.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <p className="uppercase tracking-[2px] text-xs font-semibold text-[var(--brand)]">
            {project.category}
          </p>
          {project.status && (
            <span className="text-xs px-3 py-1 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)]">
              {project.status}
            </span>
          )}
        </div>

        {project.role && (
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Role:{" "}
            <span className="text-[var(--text)] font-medium">
              {project.role}
            </span>
          </p>
        )}

        {/* Description grows to fill available space */}
        <p className="mt-4 leading-7 text-[var(--text-muted)] flex-1">
          {project.description}
        </p>

        {/* Tech stack — comma separated (per reviewer: no bubbles) */}
        <p className="mt-5 text-sm text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text)]">Stack: </span>
          {project.stack.join(", ")}
        </p>

        {/* CTA buttons — centered (per reviewer) */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-5 py-3 rounded-xl
                border border-[var(--border)] hover:border-[var(--brand)]
                duration-300 text-[var(--text)] text-sm font-medium
              "
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-5 py-3 rounded-xl
                bg-[var(--brand)] text-black font-semibold
                hover:opacity-90 duration-300 text-sm
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          ) : (
            <span className="
              px-5 py-3 rounded-xl text-sm font-semibold
              bg-[var(--bg-elevated)] text-[var(--text-muted)]
            ">
              Coming Soon
            </span>
          )}
        </div>

      </div>
    </motion.article>
  );
}