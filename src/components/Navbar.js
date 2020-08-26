import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

function PortfolioNavbar({ setScroll }) {
  const [nav_expanded, setExpand] = useState(false);

  return (
    <div>
      <div className={styles.navbar}>
        <Container fluid className="p-0">
          <FadeInSection>
            <Navbar
              expanded={nav_expanded}
              onToggle={(expanded) => setExpand(expanded)}
              // fixed="top"
              expand="md"
              className={styles.navbar}
            >
              <Navbar.Brand></Navbar.Brand>
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
