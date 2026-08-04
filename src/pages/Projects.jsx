import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="min-h-screen bg-[var(--bg)] py-28 px-6">
      <div className="max-w-7xl mx-auto">


        {/* ========================= HEADER ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] font-semibold text-[var(--brand)]">
            Software Projects
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mt-5 text-[var(--text)]">
            Products,
            <span className="text-[var(--brand)]"> Digital Solutions</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            A collection of software applications built with modern technologies
            to solve practical business, healthcare and educational challenges.
          </p>
        </motion.div>


        {/* ========================= FEATURED PROJECT ========================= */}

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card-bg)]"
          >

            {/* Image */}
            <div className="relative">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-[260px] md:h-[340px] lg:h-[380px] object-cover"
              />

              <div className="absolute top-6 left-6 flex gap-3">
                <span className="px-4 py-2 rounded-full bg-[var(--brand)] text-black font-semibold text-sm">
                  Featured
                </span>
                {featuredProject.status && (
                  <span className="px-4 py-2 rounded-full bg-black/70 text-white text-sm">
                    {featuredProject.status}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-10">

              {/* Category → Name → Role → Description (reviewer's correct order) */}
              <p className="uppercase tracking-[3px] text-sm font-semibold text-[var(--brand)]">
                {featuredProject.category}
              </p>

              <h2 className="text-4xl font-black mt-4 text-[var(--text)]">
                {featuredProject.title}
              </h2>

              {featuredProject.role && (
                <p className="mt-3 text-[var(--text-muted)]">
                  Role:{" "}
                  <span className="font-semibold text-[var(--text)]">
                    {featuredProject.role}
                  </span>
                </p>
              )}

              <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
                {featuredProject.description}
              </p>

              {/* Tech stack — comma separated (reviewer's correction) */}
              <p className="mt-8 text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text)]">Stack: </span>
                {featuredProject.stack.join(", ")}
              </p>

              {/* Problem & Solution */}
              {(featuredProject.problem || featuredProject.solution) && (
                <div className="mt-10 grid lg:grid-cols-2 gap-8">
                  {featuredProject.problem && (
                    <div>
                      <h3 className="text-xl font-bold text-[var(--brand)]">Problem</h3>
                      <p className="mt-4 leading-8 text-[var(--text-muted)]">
                        {featuredProject.problem}
                      </p>
                    </div>
                  )}
                  {featuredProject.solution && (
                    <div>
                      <h3 className="text-xl font-bold text-[var(--brand)]">Solution</h3>
                      <p className="mt-4 leading-8 text-[var(--text-muted)]">
                        {featuredProject.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* CTA buttons — centered (reviewer's correction) */}
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 rounded-xl border border-[var(--border)] hover:border-[var(--brand)] duration-300 flex items-center gap-3 text-[var(--text)]"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {featuredProject.demo && (
                  <a
                    href={featuredProject.demo}
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
        )}


        {/* ========================= OTHER PROJECTS ========================= */}

        <div className="mt-28">

          <div className="mb-10">
            <p className="uppercase tracking-[3px] text-[var(--brand)] font-semibold">
              More Projects
            </p>
            <h2 className="text-4xl font-black mt-3 text-[var(--text)]">
              Additional Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--brand)] hover:-translate-y-2 duration-300 flex flex-col"
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">

                  {/* Name → Category → Description (reviewer's order) */}
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

                  <p className="mt-4 leading-7 text-[var(--text-muted)] flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack — comma separated (reviewer's correction) */}
                  <p className="mt-5 text-sm text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text)]">Stack: </span>
                    {project.stack.join(", ")}
                  </p>

                  {/* CTA buttons — centered (reviewer's correction) */}
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border)] hover:border-[var(--brand)] duration-300 text-[var(--text)]"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--brand)] text-black font-semibold hover:opacity-90 duration-300"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    ) : (
                      <span className="px-5 py-3 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-muted)] text-sm font-semibold">
                        Coming Soon
                      </span>
                    )}
                  </div>

                </div>
              </motion.article>
            ))}
          </div>

        </div>


        {/* ========================= END CTA (reviewer's correction) ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-[var(--text-muted)] mb-6 text-lg">
            Interested in what i do?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[var(--brand)] text-black font-bold hover:opacity-90 duration-300"
            >
             Let's Connect
            </Link>
            <a
              href="/pictures/Akpong_Victory_CV.pdf"
              download
              className="px-8 py-4 rounded-xl border border-[var(--border)] hover:border-[var(--brand)] text-[var(--text)] duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>


      </div>
    </section>
  )
}