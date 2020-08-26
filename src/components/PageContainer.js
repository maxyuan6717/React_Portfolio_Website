import React, { useState, useEffect } from "react";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import PortfolioNavbar from "./Navbar";
import { Element, scroller, animateScroll } from "react-scroll";
import { useWindowDimensions } from "./WindowDimensionsProvider";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./PageContainer.module.css";
import { Fade } from "react-bootstrap";

function PageContainer() {
  const [scroll, setScroll] = useState("");
  const { width, height } = useWindowDimensions();
  const is_mobile = width <= 425;

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
    if (scroll !== "") setScroll("");
  }, [scroll]);

  const [scroll_visible, setScrollVisible] = useState(false);
  // Render scroll-up button after scrolling a lot
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > height && !scroll_visible)
        setScrollVisible(true);
      if (window.pageYOffset < height && scroll_visible)
        setScrollVisible(false);
    };
  });

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <PortfolioNavbar setScroll={setScroll} />
      <div className={styles.container + " mx-auto px-2"}>
        <Element name="home">
          <Home is_mobile={is_mobile} />
        </Element>
        <Element name="education">
          <Education is_mobile={is_mobile} />
        </Element>
        <Element name="skills">
          <Skills is_mobile={is_mobile} />
        </Element>
        <Element name="experience">
          <Experience is_mobile={is_mobile} />
        </Element>
        <Element name="projects">
          <Projects is_mobile={is_mobile} />
        </Element>
        <Footer />
      </div>
      <Fade in={scroll_visible} unmountOnExit={true}>
        <div className={styles.scroll_to} onClick={scrollTop}>
          <AiOutlineArrowUp size={25} />
        </div>
      </Fade>
    </>
  );
}

export default PageContainer;
