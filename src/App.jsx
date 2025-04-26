import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-900 text-white font-mono">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
