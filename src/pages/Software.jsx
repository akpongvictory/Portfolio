{/* // ================= IMPORTS ================= */}

import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";



// ================= DATA =================


const engineeringDomains = [
  {
    title: "Frontend Engineering",

    icon: FaLaptopCode,

    description:
      "Building responsive, accessible and scalable user interfaces with modern frontend architecture.",

    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Component Architecture",
      "Responsive Design",
    ],
  },


  {
    title: "Backend Engineering",

    icon: FaServer,

    description:
      "Designing reliable backend systems, APIs and application logic that power modern products.",

    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Server Architecture",
    ],
  },


  {
    title: "Database & Architecture",

    icon: FaDatabase,

    description:
      "Creating structured data systems with focus on performance, scalability and maintainability.",

    technologies: [
      "PostgreSQL",
      "Prisma ORM",
      "Database Design",
      "Data Modeling",
    ],
  },


  {
    title: "Development Tools",

    icon: FaTools,

    description:
      "Using professional workflows and tools to build, manage and deliver quality software.",

    technologies: [
      "Git",
      "GitHub",
      "Deployment",
      "Version Control",
      "Testing",
    ],
  },
];




// ================= COMPONENT =================


export default function Software() {


return (

<section className="min-h-screen py-28 px-6">


<div className="max-w-7xl mx-auto">






{/* // ================= HERO ================= */}


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<p className="
uppercase
tracking-[5px]
text-sm
font-semibold
text-[var(--brand)]
">

Software Engineering

</p>

<h1 className="
text-5xl
md:text-6xl
font-black
leading-tight
mt-5
">


Engineering

<span className="
text-[var(--brand)]
block
">

Scalable Digital Products

</span>


</h1>


<p className="
mt-8
max-w-3xl
text-lg
leading-8
text-[var(--text-muted)]
">


Full Stack Developer building modern web applications
with React, TypeScript, Node.js, Express.js and PostgreSQL.
I focus on clean architecture, intuitive user experiences,
and solving real-world problems through software.


</p>


</motion.div>

{/* // ================= ENGINEERING DOMAINS ================= */}



<section className="mt-24">


<div className="
flex
items-center
gap-4
mb-12
">


<FaCode
className="
text-3xl
text-[var(--brand)]
"
/>

<h2 className="
text-4xl
font-black
">

Engineering Domains

</h2>


</div>


<div className="
grid
md:grid-cols-2
gap-8
">


{engineeringDomains.map((domain,index)=>{


const Icon = domain.icon;


return (


<motion.div


key={domain.title}


initial={{
opacity:0,
y:30
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
bg-[var(--card-bg)]
border
border-[var(--border)]
rounded-3xl
p-8
hover:border-[var(--brand)]
transition
"


>

<div className="
w-14
h-14
rounded-2xl
bg-[var(--brand)]
text-black
flex
items-center
justify-center
">


<Icon
className="
text-2xl
"
/>


</div>

<h3 className="
text-2xl
font-bold
mt-6
">

{domain.title}

</h3>

<p className="
mt-4
leading-7
text-[var(--text-muted)]
">

{domain.description}

</p>


<div className="
flex
flex-wrap
gap-3
mt-6
">


{domain.technologies.map((tech)=>(


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


)


})}


</div>



</section>


{/* // ================= PRODUCTS & SOLUTIONS ================= */}


<section className="mt-28">


<div className="
flex
items-center
gap-4
mb-12
">


<FaRocket
className="
text-3xl
text-[var(--brand)]
"
/>

<h2 className="
text-4xl
font-black
">

Products & Solutions

</h2>


</div>

<div className="
grid
md:grid-cols-2
gap-8
">



{[

{
title:"SaaS Applications",

description:
"Building scalable web products with authentication, dashboards, user management and modern application workflows."

},


{
title:"Healthcare Technology",

description:
"Creating digital solutions that improve healthcare operations, information management and workflow efficiency."

},


{
title:"Learning Platforms",

description:
"Developing education systems that support training, assessment and personalized learning experiences."

},


{
title:"Business Applications",

description:
"Building practical software tools that solve workflow, productivity and operational challenges."

}


].map((item,index)=>(


<motion.div


key={item.title}


initial={{
opacity:0,
y:30
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
rounded-3xl
p-8
bg-[var(--card-bg)]
"

>

<h3 className="
text-2xl
font-bold
">

{item.title}

</h3>

<p className="
mt-4
leading-8
text-[var(--text-muted)]
">

{item.description}

</p>

</motion.div>


))}

</div>

</section>


{/* // ================= DEVELOPMENT PROCESS ================= */}



<section className="mt-28">



<h2 className="
text-4xl
font-black
mb-12
">

My Development Process

</h2>




<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
">



{[

{
number:"01",
title:"Discovery",
text:"Understanding users, requirements and business objectives before development begins."
},

{
number:"02",
title:"Architecture",
text:"Planning application structure, database models, APIs and technical decisions."
},

{
number:"03",
title:"Development",
text:"Building clean, maintainable and scalable software with modern engineering practices."
},

{
number:"04",
title:"Testing & Deployment",
text:"Improving reliability, performance and delivering production-ready applications."
}


].map((step,index)=>(



<motion.div


key={step.title}


initial={{
opacity:0,
y:30
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
bg-[var(--card-bg)]
border
border-[var(--border)]
rounded-2xl
p-7
"


>


<div className="
w-14
h-14
rounded-full
bg-[var(--brand)]
text-black
flex
items-center
justify-center
font-black
text-lg
">

{step.number}


</div>

<h3 className="
text-xl
font-bold
mt-6
">

{step.title}

</h3>


<p className="
mt-4
leading-7
text-[var(--text-muted)]
">

{step.text}

</p>



</motion.div>


))}



</div>



</section>

{/* // ================= TECHNOLOGY STACK ================= */}

<section className="mt-28 mb-20">

<div className="
flex
items-center
gap-4
mb-12
">


<FaLaptopCode
className="
text-3xl
text-[var(--brand)]
"
/>

<h2 className="
text-4xl
font-black
">

Technology Stack

</h2>


</div>


<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
">

{[


{
category:"Frontend",
items:[
"React",
"TypeScript",
"JavaScript",
"Tailwind CSS"
]
},


{
category:"Backend",
items:[
"Node.js",
"Express.js",
"REST APIs",
"Authentication"
]
},


{
category:"Database",
items:[
"PostgreSQL",
"Prisma ORM",
"Database Design"
]
},


{
category:"Workflow",
items:[
"Git",
"GitHub",
"Deployment",
"Version Control"
]
}



].map((stack,index)=>(



<div

key={stack.category}


className="
border
border-[var(--border)]
rounded-2xl
p-6
bg-[var(--card-bg)]
"


>



<h3 className="
text-xl
font-bold
text-[var(--brand)]
">

{stack.category}

</h3>




<ul className="
mt-5
space-y-3
text-[var(--text-muted)]
">


{stack.items.map(item=>(


<li
key={item}
>

{item}

</li>


))}



</ul>



</div>


))}




</div>





</section>






</div>


</section>


);

}