// src/components/CTABlock.jsx
// Reusable end-of-section CTA strip.
// Use on Projects, About, Resume, Healthcare pages.
//
// Props:
//   message   — string shown above buttons
//   primaryLabel  — text for the green button
//   primaryHref   — link for the green button (internal route or URL)
//   secondaryLabel — text for the outlined button (optional)
//   secondaryHref  — link for the outlined button (optional)
//   isExternal    — if true, buttons open in new tab (default false)

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTABlock({
  message = "Interested in working together?",
  primaryLabel = "Hire Me",
  primaryHref = "/contact",
  secondaryLabel = null,
  secondaryHref = null,
  secondaryExternal = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 text-center"
    >
      <p className="text-[var(--text-muted)] mb-6 text-lg">
        {message}
      </p>

      <div className="flex flex-wrap justify-center gap-4">

        {/* Primary — always an internal route */}
        <Link
          to={primaryHref}
          className="
            px-8 py-4 rounded-xl
            bg-[var(--brand)] text-black font-bold
            hover:opacity-90 duration-300
          "
        >
          {primaryLabel}
        </Link>

        {/* Secondary — optional, can be external */}
        {secondaryLabel && secondaryHref && (
          secondaryExternal ? (
            <a
              href={secondaryHref}
              download
              className="
                px-8 py-4 rounded-xl
                border border-[var(--border)]
                hover:border-[var(--brand)]
                text-[var(--text)] duration-300
              "
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link
              to={secondaryHref}
              className="
                px-8 py-4 rounded-xl
                border border-[var(--border)]
                hover:border-[var(--brand)]
                text-[var(--text)] duration-300
              "
            >
              {secondaryLabel}
            </Link>
          )
        )}

      </div>
    </motion.div>
  );
}