import Softskills from "./components/Softskills";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  return (

      <div className="bg-brown2">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experiences />
        <Softskills />
        <Footer />
      </div >

  )
}

export default App;