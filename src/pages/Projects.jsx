import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[4px] text-[var(--brand)] font-semibold">
            Portfolio
          </p>

          <h1 className="text-5xl font-black mt-4">
            Featured
            <span className="text-[var(--brand)]"> Projects</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            From frontend interfaces to full-stack applications — projects
            focused on solving real-world problems through technology.
          </p>
        </motion.div>


        {/* PROJECT GRID */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="
              overflow-hidden
              rounded-3xl
              bg-[var(--card-bg)]
              border border-[var(--border)]
              hover:border-[var(--brand)]
              duration-300
              hover:-translate-y-2
              "
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                {project.image ? (

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    h-60
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                    "
                  />

                ) : (

                  <div className="h-60 flex items-center justify-center bg-[var(--bg-elevated)]">
                    <span className="px-4 py-2 rounded-full border border-[var(--brand)] text-[var(--brand)] text-sm font-semibold">
                      Screenshot Coming Soon
                    </span>
                  </div>

                )}


                {project.featured && (

                  <span className="
                  absolute
                  top-4
                  right-4
                  px-4
                  py-1
                  rounded-full
                  bg-[var(--brand)]
                  text-black
                  text-sm
                  font-semibold
                  ">
                    Featured
                  </span>

                )}

              </div>


              <div className="p-8">


                {/* CATEGORY */}

                <p className="text-sm uppercase tracking-wider text-[var(--brand)] font-semibold">
                  {project.category}
                </p>


                <h2 className="text-2xl font-bold mt-3">
                  {project.title}
                </h2>


                <p className="mt-4 leading-8 text-[var(--text-muted)]">
                  {project.description}
                </p>


                {/* TECH STACK */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.stack.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-[var(--bg-elevated)]
                      text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* BUTTONS */}

                <div className="flex flex-wrap gap-4 mt-8">


                  {project.github ? (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      border
                      border-[var(--border)]
                      hover:border-[var(--brand)]
                      duration-300
                      "
                    >
                      <FaGithub />
                      GitHub
                    </a>

                  ) : null}



                  {project.demo ? (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-[var(--brand)]
                      text-black
                      font-semibold
                      hover:opacity-90
                      duration-300
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                  ) : project.title === "HopeHill Claims Tracker" ? (

                    <span
                      className="
                      px-5
                      py-3
                      rounded-xl
                      bg-[var(--bg-elevated)]
                      text-[var(--text-muted)]
                      text-sm
                      font-semibold
                      "
                    >
                      Deployment Coming Soon
                    </span>

                  ) : null}


                </div>


              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}