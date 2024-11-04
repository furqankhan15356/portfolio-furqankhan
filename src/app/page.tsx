import About from "./(routes)/about/page";
import Contact from "./(routes)/contact/page";
import Hireme from "./(routes)/hireme/page";
import Skills from "./(routes)/skills/page";
import Hero from "./componenets/hero";


export default function Mainpage() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Hireme/>
    </div>    
  );
}
