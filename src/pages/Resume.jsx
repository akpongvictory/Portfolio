import { motion } from "framer-motion";
import {
  FaDownload,
  FaGraduationCap,
  FaCertificate,
  FaBriefcase,
  FaGlobeAfrica,
} from "react-icons/fa";

const certifications = [
  "Responsive Web Design",
  "JavaScript Essentials",
  "React Development",
  "Git & GitHub",
];

const competencies = [
  "Frontend Development",
  "Responsive UI Design",
  "Healthcare Claims Management",
  "NHIA Operations",
  "Problem Solving",
  "Team Collaboration",
];

export default function Resume() {
  return (
    <section className="min-h-screen py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[4px] text-[var(--brand)] font-semibold">
            Resume
          </p>

          <h1 className="text-5xl font-black mt-4">
            Education, Experience &
            <span className="text-[var(--brand)]"> Certifications</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            My professional background combines software engineering with
            healthcare operations, enabling me to solve technical and
            operational challenges effectively.
          </p>

          <a
            href="/Akpong-Victory-CV.pdf"
            download
            className="inline-flex items-center gap-3 mt-10 bg-[var(--brand)] text-black px-6 py-4 rounded-xl font-semibold hover:bg-[var(--brand-dark)]"
          >
            <FaDownload />
            Download Resume
          </a>

        </motion.div>

        {/* ================= GRID ================= */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {/* Education */}

          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-6">
              <FaGraduationCap className="text-3xl text-[var(--brand)]" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold">
                  Bachelor's Degree
                </h3>

                <p className="text-[var(--text-muted)] mt-2">
                  Human Physiology,
                  University Of Calabar, Calabr.
                </p>
              </div>

            </div>

          </div>

          {/* Experience */}

          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-6">
              <FaBriefcase className="text-3xl text-[var(--brand)]" />
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>

            <div className="space-y-6">

              <div>

                <h3 className="text-xl font-semibold">
                  Software Developer
                </h3>

                <p className="text-[var(--text-muted)] mt-2">
                  Building responsive React applications using modern frontend
                  technologies.
                </p>

              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  HMO / NHIA Desk Officer
                </h3>

                <p className="text-[var(--text-muted)] mt-2">
                  Claims management, provider support, documentation and NHIA
                  operations.
                </p>

              </div>

            </div>

          </div>

          {/* Certifications */}

          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-6">
              <FaCertificate className="text-3xl text-[var(--brand)]" />
              <h2 className="text-2xl font-bold">
                Certifications
              </h2>
            </div>

            <div className="grid gap-4">

              {certifications.map((item) => (

                <div
                  key={item}
                  className="rounded-xl bg-[var(--bg-elevated)] p-4"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* Core Competencies */}

          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-6">
              <FaGlobeAfrica className="text-3xl text-[var(--brand)]" />
              <h2 className="text-2xl font-bold">
                Core Competencies
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">

              {competencies.map((item) => (

                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-[var(--bg-elevated)]"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}