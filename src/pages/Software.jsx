import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";

import { technicalSkills } from "../data/skills";


const icons = {
  react: <FaReact className="text-sky-400 text-5xl" />,
  javascript: <FaJs className="text-yellow-400 text-5xl" />,
  tailwind: <RiTailwindCssFill className="text-cyan-400 text-5xl" />,
  html: <FaHtml5 className="text-orange-500 text-5xl" />,
  css: <FaCss3Alt className="text-blue-500 text-5xl" />,
  github: <FaGithub className="text-5xl" />,
};


export default function Software() {

  return (

    <section className="min-h-screen py-28 px-6">

      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >

          <p className="text-[var(--brand)] uppercase tracking-[4px] font-semibold">
            Software Engineering
          </p>


          <h1 className="text-5xl font-black mt-3">

            Designing &
            <span className="text-[var(--brand)]">
              {" "}Developing
            </span>

            <br />

            Modern Web Experiences

          </h1>


          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">

            I build responsive web applications focused on usability,
            performance and clean architecture using modern frontend
            technologies.

          </p>


        </motion.div>



        {/* SKILLS GRID */}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">


          {technicalSkills.map((skill,index)=>(


            <motion.div

              key={skill.name}

              initial={{opacity:0,y:40}}

              whileInView={{opacity:1,y:0}}

              transition={{
                delay:index * .08
              }}

              viewport={{once:true}}

              className="
              bg-[var(--card-bg)]
              border border-[var(--border)]
              rounded-3xl
              p-8
              hover:border-[var(--brand)]
              hover:-translate-y-2
              duration-300
              "

            >


              {icons[skill.icon]}


              <h3 className="text-2xl font-bold mt-6">

                {skill.name}

              </h3>


              <p className="text-[var(--brand)] mt-2 font-semibold">

                {skill.level}

              </p>


              <p className="mt-4 text-[var(--text-muted)] leading-7">

                {skill.description}

              </p>


            </motion.div>


          ))}


        </div>



        {/* DEVELOPMENT PROCESS */}

        <div className="mt-28">


          <h2 className="text-4xl font-black mb-10">

            My Development Process

          </h2>


          <div className="grid lg:grid-cols-4 gap-6">


            {
              [
                "Research",
                "Design",
                "Development",
                "Deployment"
              ].map((step,index)=>(


                <div

                key={step}

                className="
                bg-[var(--card-bg)]
                border border-[var(--border)]
                rounded-2xl
                p-8
                "

                >

                  <div className="
                  w-14 h-14
                  rounded-full
                  bg-[var(--brand)]
                  text-black
                  flex
                  items-center
                  justify-center
                  font-black
                  text-xl
                  ">

                    0{index+1}

                  </div>


                  <h3 className="mt-6 text-2xl font-bold">

                    {step}

                  </h3>


                  <p className="mt-4 text-[var(--text-muted)]">

                    Delivering quality software through a structured,
                    user-focused workflow.

                  </p>


                </div>


              ))
            }


          </div>


        </div>



      </div>


    </section>

  );
}