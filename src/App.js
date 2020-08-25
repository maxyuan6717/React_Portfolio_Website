import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import PortfolioNavbar from "./components/Navbar";
import { Element, scroller } from "react-scroll";

function App() {
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    let offset;
    if (scroll === "education") offset = -150;
    else if (scroll === "skills") offset = -50;
    else if (scroll === "experience") offset = -150;
    else if (scroll === "projects") offset = -50;
    scroller.scrollTo(scroll, {
      smooth: true,
      duration: 500,
      offset: offset,
    });
    if (scroll != "") setScroll("");
  }, [scroll]);

  return (
    <div id="base">
      <PortfolioNavbar setScroll={setScroll} />
      <Home />
      <Element name="education">
        <Education />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
