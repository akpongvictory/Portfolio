import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="min-h-screen bg-[var(--bg)] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[4px] font-semibold text-[var(--brand)]">
            About Me
          </p>

          <h1 className="text-5xl font-black mt-4 leading-tight text-[var(--text)]">
            Full-Stack Developer 
            <span className="text-[var(--brand)]">
             <br/>Building Digital Solutions in Healthcare and Beyond
            </span>
          </h1>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="w-68 h-68 rounded-full border-4 border-[var(--brand)] overflow-hidden bg-[var(--bg-surface)] shadow-2xl">
            <img
              src="/pictures/Professional-dp.png"
              alt="Akpong Victory"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-[var(--text-muted)]">
              I'm a software developer with a background in Human Physiology
              from the University of Calabar and hands-on experience in
              healthcare operations. My time in claims processing, NHIA
              operations, and provider support sharpened the analytical
              thinking and attention to detail I now bring to building
              software.
            </p>

            <p className="mt-8 text-lg leading-9 text-[var(--text-muted)]">
              That background led me into software development, where I
              focus on building responsive, accessible, user-focused web
              applications — combining technical skill with a real
              understanding of operational workflows.
            </p>

            <p className="mt-8 text-lg leading-9 text-[var(--text-muted)]">
              I continuously improve through hands-on projects and I'm
              passionate about building software that delivers measurable
              value for businesses, healthcare organizations, and end users.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-10 px-7 py-4 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-black font-semibold"
            >
              Stay Connected
            </Link>
          </motion.div>

          {/* QUICK FACTS — plain sectioned list, no boxed/clickable styling */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
             {
              title: "My Expertise",
              text: "React • JavaScript • Tailwind CSS • Node.js • Supabase • PostgreSQL • REST APIs • Git",
              },
              {
                title: "Healthcare Background",
                text: "Claims Processing • NHIA Operations • Healthcare Administration • Provider Relations",
              },
              {
                title: "Professional Focus",
                text: "Building clean, scalable, maintainable software that solves real-world problems through thoughtful design and modern web technologies.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="section-line" />
                <h3 className="text-2xl font-bold text-[var(--brand)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[var(--text-muted)]">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}