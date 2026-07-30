import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import projects from "../data/projects";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const showcase = featured.length ? featured : projects.slice(0, 3);

  return (
    <section className="bg-[var(--bg)]">
      {/* ================= HERO ================= */}
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">

          {/* NAME + ROLE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-start-1 lg:row-start-1"
          >
            <p className="text-[var(--brand)] uppercase tracking-[4px] font-semibold mb-4">
              Welcome...
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[var(--text)]">
              I'm
              <span className="text-[var(--brand)]">
                {" "}Victory <br /> Akpong
              </span>
            </h1>

            <div className="text-2xl mt-6 font-semibold h-10 text-[var(--text-muted)]">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 25,
                  strings: [
                    "Software Developer",
                    "Healthcare Technology Professional",
                    "Full Stack Engineer",
                    "Claims Management Specialist",
                  ],
                }}
              />
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[var(--brand)] blur-[90px] opacity-20"></div>

              <div className="w-80 h-80 rounded-full border-4 border-[var(--brand)] overflow-hidden bg-[var(--bg-surface)] shadow-2xl">
                <img
                  src="/pictures/Professional-dp.png"
                  alt="Akpong Victory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-start-1 lg:row-start-2"
          >
            <p className="max-w-xl text-lg leading-8 text-[var(--text-muted)]">
              I build modern web applications and combine software engineering
              with practical healthcare operations experience to solve
              real-world problems.
            </p>

            {/* FEATURED PROJECTS */}
            {showcase.length > 0 && (
              <div className="mt-10">
                <p className="uppercase tracking-[3px] text-sm font-semibold text-[var(--brand)] mb-4">
                  Featured Projects
                </p>

                <div className="grid sm:grid-cols-3 gap-6 mt-6">
                  {showcase.map((project) => (
                    <Link
                      key={project.title}
                      to="/projects"
                      className="
rounded-2xl
overflow-hidden
border
border-[var(--border)]
bg-[var(--card-bg)]
hover:border-[var(--brand)]
hover:-translate-y-1
transition-all
duration-300
shadow-sm
hover:shadow-lg
block
"
                    >
                      <div className="h-44 lg:h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      <div className="p-6">
                        <p className="text-xs uppercase tracking-wider text-[var(--brand)] font-semibold">
                          {project.category}
                        </p>

                        <h3 className="mt-2 text-lg font-bold text-[var(--text)] leading-snug">
                          {project.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  to="/projects"
                  className="inline-block mt-6 text-sm font-semibold text-[var(--brand)] hover:underline"
                >
                  See all projects →
                </Link>
              </div>
            )}

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/projects"
                className="px-7 py-4 rounded-xl border border-[var(--border)] hover:border-[var(--brand)] text-[var(--text)]"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-7 py-4 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-black font-semibold flex items-center gap-2"
              >
                Hire Me
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="max-w-[90rem] mx-auto px-6 pb-16">
        <Testimonials />
      </div>
    </section>
  );
}