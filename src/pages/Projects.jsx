// src/pages/Projects.jsx
// Orchestrator only — no card markup lives here.
// To change how a card looks, edit the component, not this file.

import { motion } from "framer-motion";
import projects from "../data/projects";
import SectionTitle from "../components/SectionTitle";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import ProjectCard from "../components/ProjectCard";
import CTABlock from "../components/CTABlock";

export default function Projects() {

  // Both HopeHill and Portfolio are featured — show them both
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects    = projects.filter(p => !p.featured);

  return (
    <section className="min-h-screen bg-[var(--bg)] py-28 px-6">
      <div className="max-w-7xl mx-auto">


        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            eyebrow="Software Projects"
            title="Products, Digital Solutions"
            highlight="Digital Solutions"
            subtitle="A collection of software applications built with modern technologies to solve practical business, healthcare and educational challenges."
          />
        </motion.div>


        {/* ── Featured Projects ── */}
        {featuredProjects.length > 0 && (
          <div className="mt-16 flex flex-col gap-16">
            {featuredProjects.map(project => (
              <FeaturedProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        )}


        {/* ── Other Projects Grid ── */}
        {otherProjects.length > 0 && (
          <div className="mt-28">

            <div className="mb-10">
              <p className="uppercase tracking-[3px] text-[var(--brand)] font-semibold text-sm">
                More Projects
              </p>
              <h2 className="text-4xl font-black mt-3 text-[var(--text)]">
                Additional Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>

          </div>
        )}


        {/* ── End CTA ── */}
        <CTABlock
          message="Seen enough? Let's build something together."
          primaryLabel="Hire Me"
          primaryHref="/contact"
          secondaryLabel="Download CV"
          secondaryHref="/pictures/Akpong_Victory_CV.pdf"
          secondaryExternal={true}
        />


      </div>
    </section>
  );
}