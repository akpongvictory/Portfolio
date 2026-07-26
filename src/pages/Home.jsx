import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
  FaFacebook
} from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="text-[var(--brand)] uppercase tracking-[4px] font-semibold mb-4">
            Welcome...
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[var(--text)]">
            Hi,
            <br />
            I'm
            <span className="text-[var(--brand)]">
              {" "} Victory <br />
               Akpong
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

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--text-muted)]">
            I build modern web applications and combine software engineering
            with practical healthcare operations experience to solve real-world
            problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="/projects"
              className="px-7 py-4 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-black font-semibold flex items-center gap-2"
            >
              View Projects
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="px-7 py-4 rounded-xl border border-[var(--border)] hover:border-[var(--brand)] text-[var(--text)]"
            >
              Hire Me
            </Link>

            <a
              href="/pictures/Akpong_Victory_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl border border-[var(--border)] hover:border-[var(--brand)] text-[var(--text)]"
            >
              Download CV
            </a>

          </div>


              {/* <!-- SOCIAL MEDIA LINKS AND ICONS --> */}
              
          <div className="flex gap-5 mt-10 text-2xl">

            <a
  href="https://github.com/akpongvictory"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
>
  <FaGithub className="text-[var(--text-muted)] hover:text-[var(--brand)] duration-300" />
</a>

<a
  href="https://linkedin.com/in/victoryakpong"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin className="text-[var(--text-muted)] hover:text-[var(--brand)] duration-300" />
</a>

<a
  href="mailto:akpongvictory@gmail.com"
  aria-label="Email"
>
  <FaEnvelope className="text-[var(--text-muted)] hover:text-[var(--brand)] duration-300" />
</a>

<a
  href="https://wa.me/2349048249675"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
>
  <FaWhatsapp className="text-[var(--text-muted)] hover:text-[var(--brand)] duration-300" />
</a>

              <a
  href="https://web.facebook.com/people/Victory-Ben-official/61559050040768/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook">
  <FaFacebook className="text-[var(--text-muted)] hover:text-[var(--brand)] duration-300" />
</a>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
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

      </div>
    </section>
  );
}