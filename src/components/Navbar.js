import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import ThemeToggle from "./ThemeToggle";

function PortfolioNavbar({ theme, toggleTheme, setScroll, is_mobile }) {
  const [nav_expanded, setExpand] = useState(false);

  return (
    <div>
      <div className={styles.navbar}>
        <Container fluid className="p-0">
          <FadeInSection>
            <Navbar
              expanded={nav_expanded}
              onToggle={(expanded) => setExpand(expanded)}
              variant={theme === "dark" ? "dark" : "light"}
              // fixed="top"
              expand="sm"
              className={styles.navbar}
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
                  <div
                    className={styles.navbar_links}
                    onClick={() => setScroll("education")}
                  >
                    Education
                  </div>
                  <div
                    className={styles.navbar_links}
                    onClick={() => setScroll("skills")}
                  >
                    Skills
                  </div>
                  <div
                    className={styles.navbar_links}
                    onClick={() => setScroll("experience")}
                  >
                    Experience
                  </div>
                  <div
                    className={styles.navbar_links}
                    onClick={() => setScroll("projects")}
                  >
                    Projects
                  </div>
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
