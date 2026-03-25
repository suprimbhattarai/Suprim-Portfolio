import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollTopButton from "./components/ScrollTopButton";
import SkyBackground from "./components/Skybackground ";

// Section order must match SUN_POSITIONS in SkyBackground
const SECTION_IDS = ["home", "about", "projects", "skills", "contact"];

function App() {
  const [loading, setLoading] = useState(true);
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const pairs = [];

    SECTION_IDS.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setSectionIndex(index);
        },
        {
          root: document.getElementById("scroll-container"),
          threshold: 0.45,
        },
      );

      observer.observe(el);
      pairs.push({ observer, el });
    });

    return () => pairs.forEach(({ observer, el }) => observer.unobserve(el));
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <div className="relative overflow-x-hidden">
      <SkyBackground sectionIndex={sectionIndex} />

      <div
        id="scroll-container"
        className="relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth"
      >
        <Navbar sectionIndex={sectionIndex} />

        <div className="snap-start" id="home">
          <Hero />
        </div>

        <div className="snap-start" id="about">
          <About />
        </div>

        <div className="snap-start mt-8" id="projects">
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
