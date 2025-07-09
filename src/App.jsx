import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollTopButton from "./components/ScrollTopButton";
import bgimg from "./assets/bgone.png";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="overflow-x-hidden bg-cover bg-center bg-opacity-35 text-gray-800 " style={{ backgroundImage: `url(${bgimg})` }} >
      <div className="snap-y snap-mandatory h-screen bg-cover bg-center bg-opacity-35 overflow-x-hidden text-gray-800 scroll-smooth"  style={{ backgroundImage: `url(${bgimg})` }} >
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
