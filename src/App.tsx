import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <About />
      <Footer />
    </div>
  )
}