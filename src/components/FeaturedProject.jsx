// src/components/FeaturedProjectCard.jsx
// Reusable card for any featured/highlight project.
// Pass the full project object as a prop.

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function FeaturedProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card-bg)]"
    >

      {/* ── Image ── */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover"
        />

        {/* Badges */}
        <div className="absolute top-6 left-6 flex gap-3">
          <span className="px-4 py-2 rounded-full bg-[var(--brand)] text-black font-semibold text-sm">
            Featured
          </span>
          {project.status && (
            <span className="px-4 py-2 rounded-full bg-black/70 text-white text-sm">
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-10">

        {/* Order: Category → Name → Role → Description (per reviewer) */}
        <p className="uppercase tracking-[3px] text-sm font-semibold text-[var(--brand)]">
          {project.category}
        </p>

        <h2 className="text-4xl font-black mt-3 text-[var(--text)]">
          {project.title}
        </h2>

        {project.role && (
          <p className="mt-3 text-[var(--text-muted)]">
            Role:{" "}
            <span className="font-semibold text-[var(--text)]">
              {project.role}
            </span>
          </p>
        )}

        <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
          {project.description}
        </p>

        {/* Tech stack — comma separated (per reviewer: no bubbles) */}
        <p className="mt-6 text-sm text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text)]">Stack: </span>
          {project.stack.join(", ")}
        </p>

        {/* Problem & Solution */}
        {(project.problem || project.solution) && (
          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            {project.problem && (
              <div>
                <h3 className="text-xl font-bold text-[var(--brand)]">
                  Problem
                </h3>
                <p className="mt-4 leading-8 text-[var(--text-muted)]">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div>
                <h3 className="text-xl font-bold text-[var(--brand)]">
                  Solution
                </h3>
                <p className="mt-4 leading-8 text-[var(--text-muted)]">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* CTA buttons — centered (per reviewer) */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl border border-[var(--border)] hover:border-[var(--brand)] duration-300 flex items-center gap-3 text-[var(--text)]"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[var(--brand)] text-black font-semibold hover:opacity-90 duration-300 flex items-center gap-3"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}