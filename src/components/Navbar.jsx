import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiX,
  HiSun,
  HiMoon,
} from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";


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

  const {
    theme,
    toggleTheme
  } = useTheme();


  return (
    <>


<header
className="
fixed top-0 left-0 w-full z-50
backdrop-blur-xl
bg-[var(--nav-bg)]
border-b border-[var(--border)]
"
>

<div
className="
max-w-7xl mx-auto
h-20
flex items-center justify-between
px-6
"
>


{/* LOGO */}

<NavLink
to="/"
className="text-2xl font-black"
>

<span className="text-[var(--brand)]">
Akpong
</span>

<span className="text-[var(--text)]">
.Dev
</span>


</NavLink>



{/* DESKTOP LINKS */}

<nav
className="
hidden
lg:flex
items-center
gap-8
"
>

{links.map((item)=>(

<NavLink
key={item.path}
to={item.path}
className={({isActive}) =>
`
transition duration-300
${
isActive
?
"text-[var(--brand)]"
:
"text-[var(--text-muted)] hover:text-[var(--text)]"
}
`
}
>

{item.name}

</NavLink>

))}


</nav>





{/* RIGHT SIDE */}

<div
className="
flex
items-center
gap-4
"
>


{/* THEME BUTTON */}

<button

onClick={toggleTheme}

className="
flex
items-center
justify-center
w-10
h-10
rounded-xl
border
border-[var(--border)]
hover:border-[var(--brand)]
"

>

{
theme === "dark"
?
<HiSun className="text-xl text-[var(--brand)]"/>
:
<HiMoon className="text-xl text-[var(--brand)]"/>
}

</button>




{/* CTA */}

<NavLink
to="/contact"
className="
hidden
lg:flex
px-5
py-3
rounded-xl
bg-[var(--brand)]
hover:bg-[var(--brand-dark)]
text-[var(--bg)]
font-semibold
"
>

Let's Talk

</NavLink>





{/* MOBILE MENU */}

<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
text-3xl
text-[var(--text)]
"

>

{
open
?
<HiX/>
:
<HiOutlineMenuAlt3/>
}

</button>



</div>


</div>


</header>





{/* MOBILE MENU */}

<AnimatePresence>

{
open && (

<motion.div

initial={{
opacity:0,
y:-40
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-40
}}

transition={{
duration:.3
}}

className="
fixed
top-20
left-0
w-full
bg-[var(--bg)]
z-40
border-b
border-[var(--border)]
"

>


<div className="flex flex-col">


{
links.map((item)=>(


<NavLink

key={item.path}

to={item.path}

onClick={()=>setOpen(false)}

className={({isActive})=>
`
px-8
py-5
border-b
border-[var(--border)]
${
isActive
?
"text-[var(--brand)]"
:
"text-[var(--text)]"
}
`
}

>

{item.name}

</NavLink>


))

}


</div>


</motion.div>


)

}

</AnimatePresence>


</>

  );
}