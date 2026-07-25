import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
  FaFacebook
} from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer() {

  return (

    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">

      <div className="max-w-7xl mx-auto px-6 py-14">


        {/* =========================
            FOOTER TOP
        ========================== */}

        <div className="grid md:grid-cols-3 gap-10">


          {/* BRAND */}

          <div>

            <h2 className="text-3xl font-black">

              <span className="text-[var(--brand)]">
            Akpong
          </span>

          <span className="text-[var(--text)]">
            .Dev
          </span> 

            </h2>


            <p className="mt-5 text-[var(--text-muted)] leading-7">

              Software Developer combining modern web
              development with healthcare operations
              experience.

            </p>


          </div>



          {/* QUICK LINKS */}

          <div>

            <h3 className="font-bold text-xl mb-5 text-[var(--text)]">
              Quick Links
            </h3>


            <div className="flex flex-col gap-3 text-[var(--text-muted)]">


              <Link
                to="/about"
                className="hover:text-[var(--brand)]"
              >
                About
              </Link>


              <Link
                to="/software"
                className="hover:text-[var(--brand)]"
              >
                Software
              </Link>


              <Link
                to="/healthcare"
                className="hover:text-[var(--brand)]"
              >
                Healthcare
              </Link>


              <Link
                to="/projects"
                className="hover:text-[var(--brand)]"
              >
                Projects
              </Link>


            </div>


          </div>



         {/* SOCIAL */}

<div>

  <h3 className="font-bold text-xl mb-5 text-[var(--text)]">
    Connect
  </h3>


      <div className="flex gap-5 text-2xl text-[var(--text-muted)]">


        <a
          href="https://github.com/akpongvictory"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--brand)] duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>


        <a
          href="https://linkedin.com/in/victoryakpong"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--brand)] duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>


        <a
          href="mailto:akpongvictory@gmail.com"
          className="hover:text-[var(--brand)] duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
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
          href="https://facebook.com/victoryben"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook">
          <FaFacebook className="text-[var(--text-muted)] hover:text-[var(--brand)] duration-300" />
        </a>


      </div>


    </div>

        </div>



        {/* =========================
            FOOTER BOTTOM
        ========================== */}


        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-5">


          <p className="text-[var(--text-muted)] text-sm">

            © {new Date().getFullYear()} Akpong Victory.
            All rights reserved.

          </p>



          <motion.button

            whileHover={{
              scale:1.1
            }}

            onClick={() =>
              window.scrollTo({
                top:0,
                behavior:"smooth"
              })
            }

            className="
            w-12
            h-12
            rounded-full
            bg-[var(--brand)]
            text-black
            flex
            items-center
            justify-center
            "

          >

            <FaArrowUp />

          </motion.button>


        </div>


      </div>


    </footer>

  );

} 