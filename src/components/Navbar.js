import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";

function PortfolioNavbar() {
  const [nav_expanded, setExpand] = useState(false);

  return (
    <div>
      <div className={styles.navbar}>
        <Container fluid className="p-0">
          <Navbar
            expanded={nav_expanded}
            onToggle={(expanded) => setExpand(expanded)}
            // sticky="top"
            expand="md"
            className={styles.navbar}
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav onClick={() => setExpand(false)}>
                <div className={styles.navbar_links}>Education</div>
                <div className={styles.navbar_links}>Skills</div>
                <div className={styles.navbar_links}>Experience</div>
                <div className={styles.navbar_links}>Projects</div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}

export default PortfolioNavbar;
