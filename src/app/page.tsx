import About from "./(routes)/about/page";
import Contact from "./(routes)/contact/page";
import Home from "./(routes)/home/page";
import Skills from "./(routes)/skills/page";


export default function Mainpage() {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>    
  );
}
