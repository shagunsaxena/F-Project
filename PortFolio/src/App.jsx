import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import ScrollToTop from "./components/ScrollToTop";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Certifications />
      </main>

      <ScrollToTop />
      
      <Footer />
    </>
  );
}

export default App;