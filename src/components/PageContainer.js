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

function PageContainer({ theme, toggleTheme }) {
  const [scroll, setScroll] = useState("");
  const { width, height } = useWindowDimensions();
  const is_mobile = width < 576;

  useEffect(() => {
    if (scroll.length > 0) {
      scroller.scrollTo(scroll, {
        smooth: true,
        duration: 500,
        offset: is_mobile ? -225 : -50,
      });
    }
    if (scroll !== "") setScroll("");
  }, [scroll, is_mobile]);

  const [scroll_visible, setScrollVisible] = useState(false);
  // Render scroll-up button after scrolling a lot
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > height && !scroll_visible)
        setScrollVisible(true);
      if (window.pageYOffset < height && scroll_visible)
        setScrollVisible(false);
    };
  }, [height, scroll_visible]);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <PortfolioNavbar
        theme={theme}
        toggleTheme={toggleTheme}
        setScroll={setScroll}
        is_mobile={is_mobile}
      />
      <div className={styles.container + " mx-auto px-2"}>
        <Element name="home">
          <Home theme={theme} is_mobile={is_mobile} />
        </Element>
        <Element name="education">
          <Education theme={theme} is_mobile={is_mobile} />
        </Element>
        <Element name="skills">
          <Skills theme={theme} is_mobile={is_mobile} />
        </Element>
        <Element name="experience">
          <Experience theme={theme} is_mobile={is_mobile} />
        </Element>
        <Element name="projects">
          <Projects theme={theme} is_mobile={is_mobile} />
        </Element>
        <Footer theme={theme} />
      </div>
      {!is_mobile && (
        <Fade in={scroll_visible} unmountOnExit={true}>
          <div className={styles.scroll_to} onClick={scrollTop}>
            <AiOutlineArrowUp size={25} />
          </div>
        </Fade>
      )}
    </>
  );
}

export default PageContainer;
