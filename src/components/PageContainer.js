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
import { Fade } from "react-bootstrap";
import styled from "styled-components";
import ReactGA from "react-ga";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 0 0.5rem;
`;

const StyledScrollTop = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  color: rgb(189, 189, 189);
  transform: translateY(0px);
  padding-bottom: 10px;
  transition: 0.3s !important;

  &:hover {
    cursor: pointer;
    color: var(--blue-color);
    transform: translateY(-10px);
  }
`;

function PageContainer({ theme, toggleTheme }) {
  const [scroll, setScroll] = useState("");
  const { width, height } = useWindowDimensions();
  const is_mobile = width < 576;

  useEffect(() => {
    ReactGA.set({ page: "/" });
    ReactGA.pageview("/");
  }, []);

  useEffect(() => {
    if (scroll.length > 0) {
      scroller.scrollTo(scroll, {
        smooth: true,
        duration: 500,
        offset: is_mobile ? -200 : -50,
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
      <StyledContainer>
        <Element name="home">
          <Home />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="skills">
          <Skills theme={theme} />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects theme={theme} />
        </Element>
        <Footer />
      </StyledContainer>
      {!is_mobile && (
        <Fade in={scroll_visible} unmountOnExit={true}>
          <StyledScrollTop onClick={scrollTop}>
            <AiOutlineArrowUp size={25} />
          </StyledScrollTop>
        </Fade>
      )}
    </>
  );
}

export default PageContainer;
