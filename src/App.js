import React from "react";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import PortfolioNavbar from "./components/Navbar";

function App() {
  return (
    <div id="base">
      <PortfolioNavbar />
      <Home />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
