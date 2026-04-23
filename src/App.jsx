import { useState, useEffect } from "react";
import "./App.css";
import {
  Sidebar,
  Hero,
  About,
  Skills,
  Experience,
  Education,
  Projects,
  Hobbies,
  Contact,
  Foot,
} from "./sections";
import { Tweaks } from "./tweaks";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [cursor, setCursor] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-10% 0px -50% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />
      <div className="app">
        <Sidebar activeSection={activeSection} onNav={handleNav} />
        <main className="main">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Hobbies />
          <Contact />
          <Foot />
        </main>
      </div>
      <Tweaks />
    </>
  );
}

export default App;
