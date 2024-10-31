import Hero from "@/app/componenets/hero";
import About from "../about/page";
import Skills from "@/app/componenets/skills";
import Contact from "../contact/page";

export default function Home(){
    return(
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Contact/>
        </div>
    )
}