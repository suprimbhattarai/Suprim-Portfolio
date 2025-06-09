import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="overflow-x-hidden">
      <div className="snap-y snap-mandatory h-screen overflow-x-hidden scroll-smooth">
        <Navbar />
        <div className="snap-start" id="home">
          <Hero />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-start">
          <Projects />
        </div>
        <div className="snap-start" id="skills">
          <Skills />
        </div>
        <div className="snap-start" id="contact">
          <Contact />
        </div>
        <ScrollTopButton />
      </div>
    </div>
  );
}

export default App;
