import { motion } from "framer-motion";

import {
  FaHeartbeat,
  FaFileInvoiceDollar,
  FaHospital,
  FaUserCheck,
} from "react-icons/fa";

import {
  healthcareSkills,
  professionalStrengths,
} from "../data/healthcare";


const icons = {
  claims: (
    <FaFileInvoiceDollar className="text-5xl text-[var(--brand)]" />
  ),

  nhia: (
    <FaHeartbeat className="text-5xl text-[var(--brand)]" />
  ),

  provider: (
    <FaHospital className="text-5xl text-[var(--brand)]" />
  ),

  support: (
    <FaUserCheck className="text-5xl text-[var(--brand)]" />
  ),
};



export default function Healthcare() {

  return (

    <section className="min-h-screen py-28 px-6">


      <div className="max-w-7xl mx-auto">


        {/* ================= HEADER ================= */}


        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

        >


          <p className="uppercase tracking-[4px] text-[var(--brand)] font-semibold">

            Healthcare Experience

          </p>



          <h1 className="text-5xl font-black mt-4">


            Healthcare Operations &

            <span className="text-[var(--brand)]">

              {" "}Claims Management

            </span>


          </h1>




          <p className="mt-8 text-lg text-[var(--text-muted)] leading-8 max-w-3xl">


            My healthcare background has strengthened my analytical thinking,
            documentation practices, compliance awareness and communication
            skills. These experiences complement my work as a software
            developer and help me build practical digital solutions.


          </p>


        </motion.div>





        {/* ================= HEALTHCARE SKILLS ================= */}



        <div className="grid md:grid-cols-2 gap-8 mt-20">



          {healthcareSkills.map((item, index) => (



            <motion.div


              key={item.title}


              initial={{
                opacity: 0,
                y: 30
              }}


              whileInView={{
                opacity: 1,
                y: 0
              }}


              transition={{
                delay: index * .1
              }}


              viewport={{
                once: true
              }}


              className="
              bg-[var(--card-bg)]
              border border-[var(--border)]
              rounded-3xl
              p-8
              hover:border-[var(--brand)]
              duration-300
              "


            >



              {icons[item.icon]}




              <h2 className="text-2xl font-bold mt-6">

                {item.title}

              </h2>




              <p className="mt-4 text-[var(--text-muted)] leading-8">

                {item.description}

              </p>



            </motion.div>


          ))}



        </div>


        {/* ================= PROFESSIONAL STRENGTHS ================= */}


        <div className="mt-24">



          <h2 className="text-4xl font-black">

            Professional Strengths

          </h2>

          <div className="grid lg:grid-cols-3 gap-6 mt-10">

            {professionalStrengths.map((skill, index) => (

              <motion.div
                key={skill}



                initial={{
                  opacity: 0,
                  scale: .95
                }}



                whileInView={{
                  opacity: 1,
                  scale: 1
                }}



                transition={{
                  delay: index * .08
                }}



                viewport={{
                  once: true
                }}



                className="
                rounded-2xl
                bg-[var(--card-bg)]
                border border-[var(--border)]
                p-6
                text-center
                text-xl
                font-semibold
                hover:border-[var(--brand)]
                duration-300
                "



              >



                {skill}



              </motion.div>




            ))}




          </div>




        </div>






      </div>



    </section>



  );

}