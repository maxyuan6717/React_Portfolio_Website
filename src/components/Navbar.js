import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";

const StyledNavbarLink = styled.div`
  margin: 0.5rem 0.5rem !important;
  /* color: rgb(87, 87, 87); */
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
  position: relative;
  display: block;
  transition: color 0.2s, background-color 0.2s;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: none !important;
    color: ${({ theme }) => theme.blue_color};
  }

  &:focus,
  &:active {
    color: ${({ theme }) => theme.blue_color};
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.blue_color};
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
    transition: color 0.2s, -webkit-transform 0.2s ease-out;
    transition: color 0.2s, transform 0.2s ease-out;
    transition: color 0.2s, transform 0.2s ease-out,
      -webkit-transform 0.2s ease-out;
  }

  &:active:before {
    background-color: ${({ theme }) => theme.blue_color};
  }

  &:hover:before,
  &:focus:before {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
`;

function PortfolioNavbar({ theme, toggleTheme, setScroll, is_mobile }) {
  const [nav_expanded, setExpand] = useState(false);
  const sections = ["education", "skills", "experience", "projects"];

  return (
    <div>
      <div>
        <Container fluid className="p-0">
          <FadeInSection>
            <Navbar
              expanded={nav_expanded}
              onToggle={(expanded) => setExpand(expanded)}
              variant={theme === "dark" ? "dark" : "light"}
              expand="sm"
            >
              {is_mobile && (
                <Navbar.Brand style={{ display: "flex" }}>
                  <div
                    style={{ marginLeft: "-.75rem", height: "24px" }}
                    className="my-auto"
                  >
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                  </div>
                </Navbar.Brand>
              )}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav onClick={() => setExpand(false)}>
                  {sections.map((section) => (
                    <StyledNavbarLink onClick={() => setScroll(section)}>
                      {section}
                    </StyledNavbarLink>
                  ))}
                  {!is_mobile && (
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </FadeInSection>
        </Container>
      </div>
    </div>
  );
}

export default PortfolioNavbar;
