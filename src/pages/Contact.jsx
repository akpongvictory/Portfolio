import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook
} from "react-icons/fa";

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


          {/* HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true
            }}
          >

            <p className="
              uppercase
              tracking-[4px]
              text-[var(--brand)]
              font-semibold
            ">
              Contact
            </p>


            <h1 className="
              text-5xl
              font-black
              mt-4
            ">
              Let's build something 

              <span className="text-[var(--brand)]">
                {" "}Amazing 
              </span>

            </h1>


            <p className="
              mt-8
              text-lg
              max-w-3xl
              text-[var(--text-muted)]
              leading-8
            ">
              Whether it's software development, healthcare technology,
              collaboration or freelance work, I'm always open to discussing
              exciting opportunities.
            </p>


          </motion.div>




          <div className="
            grid
            lg:grid-cols-2
            gap-12
            mt-20
          ">



            {/* CONTACT INFO */}

            <div className="space-y-6">


              {[
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  text: "akpongvictory@gmail.com"
                },

                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  text: "+234 9048249675"
                },

                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  text: "Nigeria"
                }

              ].map((item) => (

                <div
                  key={item.title}
                  className="
                    bg-[var(--card-bg)]
                    border
                    border-[var(--border)]
                    rounded-3xl
                    p-6
                    flex
                    gap-5
                  "
                >

                  <div className="
                    text-3xl
                    text-[var(--brand)]
                    mt-1
                  ">
                    {item.icon}
                  </div>


                  <div>

                    <h3 className="
                      font-bold
                      text-xl
                      text-[var(--text)]
                    ">
                      {item.title}
                    </h3>


                    <p className="
                      text-[var(--text-muted)]
                    ">
                      {item.text}
                    </p>


                  </div>

                </div>

              ))}


              {/* SOCIAL LINKS */}

              <div className="
                flex
                gap-5
                pt-4
                text-[var(--text-muted)]
              ">


                <a
                  href="https://github.com/akpongvictory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-3xl
                    hover:text-[var(--brand)]
                    duration-300
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/victoryakpong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-3xl
                    hover:text-[var(--brand)]
                    duration-300
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://wa.me/2349048249675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-3xl
                    hover:text-[var(--brand)]
                    duration-300
                  "
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://web.facebook.com/people/Victory-Ben-official/61559050040768/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    text-3xl
                    hover:text-[var(--brand)]
                    duration-300
                  "
                >
                  <FaFacebook />
                </a>

              </div>

            </div>

            {/* MESSAGE FORM */}

            <form

              onSubmit={handleSubmit}

              className="
                bg-[var(--card-bg)]
                border
                border-[var(--border)]
                rounded-3xl
                p-8
                space-y-6
              "

            >

              {/* FORM HEADING */}

              <div>

                <h2 className="
                  text-3xl
                  font-black
                  text-[var(--text)]
                ">

                  Send Me a

                  <span className="text-[var(--brand)]">
                    {" "}Message
                  </span>

                </h2>

                <p className="
                  mt-3
                  text-[var(--text-muted)]
                  leading-7
                ">
                  Have a project, opportunity, or idea you'd like to discuss?
                  Feel free to reach out and I'll get back to you soon.
                </p>

              </div>

              {[
                {
                  type: "text",
                  placeholder: "Full Name"
                },

                {
                  type: "email",
                  placeholder: "Email Address"
                },

                {
                  type: "text",
                  placeholder: "Subject"
                }

              ].map((field) => (

                <input

                  key={field.placeholder}

                  type={field.type}

                  placeholder={field.placeholder}

                  required

                  className="
                    w-full
                    p-4
                    rounded-xl
                    bg-[var(--bg-elevated)]
                    text-[var(--text)]
                    placeholder:text-[var(--text-muted)]
                    outline-none
                    border
                    border-[var(--border)]
                    focus:border-[var(--brand)]
                  "

                />

              ))}

              <textarea

                rows="6"

                placeholder="Your Message"

                required

                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-[var(--bg-elevated)]
                  text-[var(--text)]
                  placeholder:text-[var(--text-muted)]
                  outline-none
                  border
                  border-[var(--border)]
                  focus:border-[var(--brand)]
                  resize-none
                "
              />

              <button

                className="
                  w-full
                  bg-[var(--brand)]
                  hover:bg-[var(--brand-dark)]
                  text-[var(--bg)]
                  font-bold
                  py-4
                  rounded-xl
                "
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