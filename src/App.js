import React from "react";
import Home from "./components/Home";
import Education from "./components/Education";
import PortfolioNavbar from "./components/Navbar";

function App() {
  return (
    <div id="base">
      <PortfolioNavbar />
      <Home />
      <Education />
    </div>
  );
}

export default App;
