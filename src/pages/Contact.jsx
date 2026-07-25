import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <>
      <Toaster position="top-right" />

      <section className="min-h-screen py-28 px-6">

        <div className="max-w-7xl mx-auto">

          {/* ================= HEADER ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[4px] text-[var(--brand)] font-semibold">
              Contact
            </p>

            <h1 className="text-5xl font-black mt-4">
              Let's Build Something
              <span className="text-[var(--brand)]"> Amazing</span>
            </h1>

            <p className="mt-8 text-lg max-w-3xl text-[var(--text-muted)] leading-8">
              Whether it's software development, healthcare technology,
              collaboration or freelance work, I'm always open to discussing
              exciting opportunities.
            </p>

          </motion.div>

          {/* ================= CONTENT ================= */}

          <div className="grid lg:grid-cols-2 gap-12 mt-20">

            {/* CONTACT INFO */}

            <div className="space-y-6">

              <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-6 flex gap-5">

                <FaEnvelope className="text-3xl text-[var(--brand)] mt-1"/>

                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-[var(--text-muted)]">
                    akpongvictory@gemail.com
                  </p>
                </div>

              </div>

              <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-6 flex gap-5">

                <FaPhoneAlt className="text-3xl text-[var(--brand)] mt-1"/>

                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-[var(--text-muted)]">
                    +234 7031517558
                  </p>
                </div>

              </div>

              <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-6 flex gap-5">

                <FaMapMarkerAlt className="text-3xl text-[var(--brand)] mt-1"/>

                <div>
                  <h3 className="font-bold text-xl">Location</h3>
                  <p className="text-[var(--text-muted)]">
                    Nigeria
                  </p>
                </div>

              </div>

              {/* SOCIALS */}

              <div className="flex gap-5 pt-4">

                <a href="https://github.com/akpongvictory" className="text-3xl hover:text-[var(--brand)]">
                  <FaGithub />
                </a>

                <a href="https://linkedin.com/in/victoryakpong" className="text-3xl hover:text-[var(--brand)]">
                  <FaLinkedin />
                </a>

              </div>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8 space-y-6"
            >

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl bg-[var(--bg-elevated)] outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl bg-[var(--bg-elevated)] outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-[var(--bg-elevated)] outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-[var(--bg-elevated)] outline-none resize-none"
              ></textarea>

              <button
                className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-black font-bold py-4 rounded-xl"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}