import About from "./(routes)/about/page";
import Contact from "./(routes)/contact/page";
import Skills from "./(routes)/skills/page";
import Hero from "./componenets/hero";


export default function Mainpage() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
    </div>    
  );
}
