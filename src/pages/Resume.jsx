// ================= IMPORTS =================

import { motion } from "framer-motion";
import {
  FaDownload,
  FaBriefcase,
  FaCode,
  FaRocket,
} from "react-icons/fa";


// ================= DATA =================

const stats = [
  {
    value: "5+",
    label: "Projects Built",
  },
  {
    value: "20+",
    label: "Reusable Components",
  },
  {
    value: "10+",
    label: "Core Technologies",
  },
  {
    value: "4+",
    label: "Certifications",
  },
];


const experiences = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    period: "2025 - Present",
    description: [
      "Building scalable full-stack applications using React, TypeScript, Node.js, Express.js, PostgreSQL and Prisma ORM.",
      "Developing secure REST APIs with authentication and structured backend architecture.",
      "Designing responsive user interfaces with Tailwind CSS and modern UI principles.",
      "Creating reusable React components and maintainable application structures.",
      "Building production-ready solutions including BestT and Certify+.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
  },

  {
    role: "Claims Manager",
    company: "Hopehill Specialist Hospital",
    period: "Healthcare Operations",
    description: [
      "Managed NHIA and HMO healthcare claims processes.",
      "Prepared operational and financial reports.",
      "Improved workflow efficiency through structured data management.",
      "Collaborated with healthcare providers and insurance partners.",
    ],
    technologies: [
      "Data Analysis",
      "Reporting",
      "Healthcare Systems",
    ],
  },
];


export default function Resume() {

  return (
    <section className="min-h-screen py-28 px-6">

      <div className="max-w-6xl mx-auto">


        {/* ================= HERO ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <p className="
            uppercase
            tracking-[5px]
            text-sm
            text-[var(--brand)]
            font-semibold
          ">
            Resume
          </p>


          <h1 className="
            text-5xl
            md:text-6xl
            font-black
            mt-5
            leading-tight
          ">

            My Professional

            <span className="
              text-[var(--brand)]
              block
            ">
              Journey
            </span>

          </h1>


          <p className="
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-[var(--text-muted)]
          ">

            Full Stack JavaScript Developer specializing in React,
            TypeScript, Node.js, Express.js, PostgreSQL, Prisma ORM,
            and Tailwind CSS. I build scalable digital solutions that
            combine modern software engineering with real-world
            healthcare and business challenges.

          </p>



          <a
            href="/pictures/Akpong_Victory_CV.pdf"
            download
            className="
              inline-flex
              items-center
              gap-3
              mt-10
              px-7
              py-4
              rounded-xl
              bg-[var(--brand)]
              text-black
              font-semibold
              hover:scale-105
              transition
            "
          >

            <FaDownload />

            Download Full Resume

          </a>


        </motion.div>





        {/* ================= STATS ================= */}


        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          mt-24
        ">


          {stats.map((item,index)=>(

            <motion.div

              key={item.label}

              initial={{
                opacity:0,
                y:20
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index * 0.1
              }}

              viewport={{
                once:true
              }}

              className="
                border
                border-[var(--border)]
                rounded-2xl
                p-6
                bg-[var(--card-bg)]
              "

            >

              <h3 className="
                text-4xl
                font-black
                text-[var(--brand)]
              ">
                {item.value}
              </h3>


              <p className="
                mt-2
                text-sm
                text-[var(--text-muted)]
              ">
                {item.label}
              </p>


            </motion.div>


          ))}


        </div>





        {/* ================= EXPERIENCE ================= */}



        <section className="mt-28">


          <div className="
            flex
            items-center
            gap-4
            mb-12
          ">

            <FaBriefcase
              className="
                text-3xl
                text-[var(--brand)]
              "
            />

            <h2 className="
              text-4xl
              font-bold
            ">
              Professional Experience
            </h2>


          </div>





          <div className="relative">


            {/* Timeline line */}

            <div className="
              absolute
              left-[11px]
              top-0
              bottom-0
              w-px
              bg-[var(--border)]
            "/>





            <div className="
              space-y-14
            ">


            {experiences.map((item)=>(


              <motion.div

                key={item.role}

                initial={{
                  opacity:0,
                  x:-20
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                viewport={{
                  once:true
                }}

                className="
                  relative
                  pl-10
                "

              >


                <div className="
                  absolute
                  left-0
                  top-2
                  w-6
                  h-6
                  rounded-full
                  bg-[var(--brand)]
                  border-4
                  border-[var(--background)]
                "/>



                <h3 className="
                  text-2xl
                  font-bold
                ">

                  {item.role}

                </h3>



                <p className="
                  mt-1
                  text-[var(--brand)]
                  font-medium
                ">

                  {item.company}
                  {" • "}
                  {item.period}

                </p>




                <ul className="
                  mt-5
                  space-y-3
                  text-[var(--text-muted)]
                  leading-7
                ">

                  {item.description.map((point)=>(

                    <li
                      key={point}
                      className="
                        flex
                        gap-3
                      "
                    >

                      <span>
                        •
                      </span>

                      {point}

                    </li>

                  ))}


                </ul>


                <div className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                ">

                  {item.technologies.map((tech)=>(

                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        bg-[var(--bg-elevated)]
                      "
                    >
                      {tech}

                    </span>
                  ))}

                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </section>

        {/* // ================= EDUCATION ================= */}


<section className="mt-28">


  <div className="
    flex
    items-center
    gap-4
    mb-10
  ">

    <FaCode
      className="
        text-3xl
        text-[var(--brand)]
      "
    />

    <h2 className="
      text-4xl
      font-bold
    ">
      Education
    </h2>

  </div>




  <div className="
    border-l
    border-[var(--border)]
    pl-8
  ">


    <h3 className="
      text-2xl
      font-bold
    ">
      B.Sc. Human Physiology
    </h3>


    <p className="
      mt-2
      text-[var(--brand)]
      font-medium
    ">
      University of Calabar
    </p>


    <p className="
      mt-1
      text-sm
      text-[var(--text-muted)]
    ">
      Graduated
    </p>


    <p className="
      mt-6
      max-w-3xl
      leading-8
      text-[var(--text-muted)]
    ">

      Developed strong analytical thinking, research methodology,
      problem-solving ability, and data interpretation skills.
      These skills continue to support my approach to building
      structured and practical software solutions.

    </p>


  </div>


</section>





{/* // ================= CURRENTLY BUILDING ================= */}


<section className="mt-28">


  <div className="
    flex
    items-center
    gap-4
    mb-10
  ">


    <FaRocket
      className="
        text-3xl
        text-[var(--brand)]
      "
    />


    <h2 className="
      text-4xl
      font-bold
    ">
      Currently Building
    </h2>


  </div>





  <div className="
    grid
    md:grid-cols-2
    gap-8
  ">


    {/* BestT */}


    <motion.div

      whileHover={{
        y:-8
      }}

      transition={{
        duration:0.3
      }}

      className="
        border
        border-[var(--border)]
        rounded-3xl
        p-8
        bg-[var(--card-bg)]
      "

    >


      <h3 className="
        text-2xl
        font-bold
      ">
        BestT
      </h3>


      <p className="
        mt-4
        leading-8
        text-[var(--text-muted)]
      ">

        AI-powered learning and assessment platform designed
        to improve education workflows through intelligent
        evaluation, personalized learning experiences,
        and modern web technologies.

      </p>



      <div className="
        flex
        flex-wrap
        gap-2
        mt-6
      ">


        {[
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Prisma ORM",
          "Tailwind CSS"
        ].map((tech)=>(

          <span
            key={tech}
            className="
              px-3
              py-1
              rounded-full
              text-sm
              bg-[var(--bg-elevated)]
            "
          >

            {tech}

          </span>


        ))}


      </div>


    </motion.div>


    <motion.div

      whileHover={{
        y:-8
      }}

      transition={{
        duration:0.3
      }}

      className="
        border
        border-[var(--border)]
        rounded-3xl
        p-8
        bg-[var(--card-bg)]
      "

    >


      <h3 className="
        text-2xl
        font-bold
      ">
        Certify+
      </h3>



      <p className="
        mt-4
        leading-8
        text-[var(--text-muted)]
      ">

        Enterprise Learning Management System focused on
        healthcare organizations, helping teams manage
        training, certifications, compliance tracking,
        and workforce development.

      </p>



      <div className="
        flex
        flex-wrap
        gap-2
        mt-6
      ">


        {[
          "React",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma",
          "TypeScript"
        ].map((tech)=>(

          <span
            key={tech}
            className="
              px-3
              py-1
              rounded-full
              text-sm
              bg-[var(--bg-elevated)]
            "
          >

            {tech}

          </span>


        ))}


      </div>


    </motion.div>



  </div>


</section>







{/* // ================= TECHNICAL SKILLS ================= */}



<section className="mt-28">


  <h2 className="
    text-4xl
    font-bold
    mb-10
  ">
    Technical Skills
  </h2>



  <div className="
    grid
    sm:grid-cols-2
    lg:grid-cols-3
    gap-4
  ">


    {[
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "Tailwind CSS",
      "Git & GitHub",
      "Responsive Design",
      "Software Architecture"
    ].map((skill)=>(


      <div
        key={skill}
        className="
          border
          border-[var(--border)]
          rounded-xl
          px-5
          py-4
          bg-[var(--card-bg)]
          hover:border-[var(--brand)]
          transition
        "
      >

        {skill}


      </div>


    ))}


  </div>


</section>








{/* // ================= CERTIFICATIONS ================= */}



<section className="mt-28">


  <h2 className="
    text-4xl
    font-bold
    mb-10
  ">
    Certifications
  </h2>




  <div className="
    grid
    md:grid-cols-2
    gap-5
  ">



    {[
      "3MTT Nigeria – Software Development (In Progress)",
      "Google Analytics Certification (GA4)",
      "HTML & CSS – Code with Mosh",
      "Deloitte Data Analytics Job Simulation",
      "Data Analysis – Data Science Nigeria"
    ].map((certificate)=>(


      <div
        key={certificate}
        className="
          flex
          items-center
          gap-4
          border
          border-[var(--border)]
          rounded-xl
          px-6
          py-5
          bg-[var(--card-bg)]
        "
      >


        <span className="
          text-[var(--brand)]
          text-xl
        ">
          ✓
        </span>


        <p>
          {certificate}
        </p>


      </div>


    ))}



  </div>


</section>







{/* // ================= FINAL CTA ================= */}  



<section className="
  mt-32
  mb-10
  text-center
">


  <div className="
    border
    border-[var(--border)]
    rounded-3xl
    p-10
    bg-[var(--card-bg)]
  ">


    <h2 className="
      text-4xl
      font-black
    ">

      Let's Build Something Great

    </h2>



    <p className="
      mt-5
      max-w-xl
      mx-auto
      text-[var(--text-muted)]
      leading-8
    ">

      Interested in creating scalable digital products,
      solving complex problems, or collaborating on
      innovative ideas? Let's connect.

    </p>



    <a
      href="/contact"
      className="
        inline-flex
        mt-8
        px-8
        py-4
        rounded-xl
        bg-[var(--brand)]
        text-black
        font-semibold
        hover:scale-105
        transition
      "
    >

      Contact Me

    </a>


  </div>


</section>


      </div>

    </section>
  );
}