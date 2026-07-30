import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="mt-16 lg:mt-20">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="uppercase tracking-[4px] text-[var(--brand)] font-semibold">
          Testimonials
        </p>

        <h2 className="text-4xl lg:text-5xl font-black mt-4 text-[var(--text)]">
          What People
          <span className="text-[var(--brand)]"> Say</span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[var(--text-muted)]">
          Feedback from clients, founders, and professionals I've had the
          opportunity to collaborate with throughout my software development
          journey.
        </p>
      </motion.div>

      {/* TESTIMONIAL CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        {testimonials.map((person, index) => {
          const initials = person.name
            .replace("Pst.", "")
            .replace("Pst", "")
            .trim()
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                bg-[var(--card-bg)]
                border
                border-[var(--border)]
                rounded-3xl
                p-8
                h-full
                flex
                flex-col
                shadow-lg
                hover:shadow-xl
                hover:border-[var(--brand)]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* QUOTE ICON */}
              <div className="text-[var(--brand)] text-3xl mb-6">
                <FaQuoteLeft />
              </div>

              {/* REVIEW */}
              <p className="leading-8 text-[var(--text-muted)] flex-1 max-w-[32ch]">
                "{person.review}"
                </p>

              {/* REVIEWER */}
              <div className="flex items-center gap-5 mt-10 pt-6 border-t border-[var(--border)]">
                {/* INITIALS */}
                <div className="w-16 h-16 rounded-full bg-[var(--brand)] text-black font-bold text-xl flex items-center justify-center shrink-0">
                  {initials}
                </div>

                {/* DETAILS */}
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight text-[var(--text)]">
                    {person.name}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)]">
                    {person.role}
                  </p>

                  <p className="text-sm font-medium text-[var(--brand)]">
                    {person.company}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}