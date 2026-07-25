import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Software", path: "/software" },
  { name: "Healthcare", path: "/healthcare" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===========================
          NAVBAR
      ============================ */}

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[var(--nav-bg)] border-b border-[var(--border)]">

        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

          {/* Logo */}

          <NavLink
            to="/"
            className="text-2xl font-black tracking-tight"
          >
            <span className="text-[var(--brand)]">
              Akpong
            </span>

            <span>
              .
            </span>

            <span className="text-white">
              Dev
            </span>
          </NavLink>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {links.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? "text-[var(--brand)]"
                      : "text-[var(--text-muted)] hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

          </nav>

          {/* CTA */}

          <NavLink
            to="/contact"
            className="hidden lg:flex bg-[var(--brand)] hover:bg-[var(--brand-dark)] px-5 py-3 rounded-xl font-semibold transition"
          >
            Let's Talk
          </NavLink>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>
      </header>

      {/* ===========================
          MOBILE MENU
      ============================ */}

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{ opacity: 0, y: -40 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0, y: -40 }}

            transition={{ duration: .3 }}

            className="fixed top-20 left-0 w-full bg-[var(--bg)] z-40 border-b border-[var(--border)]"

          >

            <div className="flex flex-col">

              {links.map((item) => (

                <NavLink

                  key={item.path}

                  to={item.path}

                  onClick={() => setOpen(false)}

                  className={({ isActive }) =>
                    `px-8 py-5 border-b border-[var(--border)]
                    
                    ${
                      isActive
                        ? "text-[var(--brand)]"
                        : "text-[var(--text)]"
                    }`
                  }

                >

                  {item.name}

                </NavLink>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}