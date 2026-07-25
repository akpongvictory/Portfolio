import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[var(--bg)] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* =========================
            SECTION TITLE
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[4px] font-semibold text-[var(--brand)]">
            About Me
          </p>

          <h1 className="text-5xl font-black mt-4 leading-tight">
            Building Digital Solutions with
            <span className="text-[var(--brand)]">
              {" "}Technology & Healthcare
            </span>
          </h1>
        </motion.div>

        {/* =========================
            CONTENT
        ========================== */}

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-[var(--text-muted)]">
              I am a software developer with a professional background in
              healthcare operations. My experience in claims processing,
              healthcare administration, and provider support strengthened my
              analytical thinking, attention to detail, and ability to solve
              complex operational problems.
            </p>

            <p className="mt-8 text-lg leading-9 text-[var(--text-muted)]">
              That experience naturally led me into software development, where
              I enjoy building responsive, accessible, and user-focused web
              applications. I combine technical skills with a strong
              understanding of real business workflows to create practical
              digital solutions.
            </p>

            <p className="mt-8 text-lg leading-9 text-[var(--text-muted)]">
              I continuously improve my skills through hands-on projects and am
              passionate about developing software that delivers measurable
              value for businesses, healthcare organizations, and end users.
            </p>
          </motion.div>

          {/* =========================
              QUICK FACTS
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-[var(--brand)]">
                Software Development
              </h3>

              <p className="mt-3 text-[var(--text-muted)]">
                React • JavaScript • Tailwind CSS • Git • Responsive Web Design
              </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-[var(--brand)]">
                Healthcare Background
              </h3>

              <p className="mt-3 text-[var(--text-muted)]">
                Claims Processing • NHIA Operations • Healthcare Administration
                • Provider Relations
              </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-[var(--brand)]">
                Professional Focus
              </h3>

              <p className="mt-3 text-[var(--text-muted)]">
                Building clean, scalable, and maintainable software that solves
                real-world problems through thoughtful design and modern web
                technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}