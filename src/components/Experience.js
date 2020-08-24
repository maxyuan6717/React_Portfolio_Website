import React from "react";
import styles from "./Experience.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

function Experience() {
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <FadeInSection>
        <Row className={styles.experience_content + " mx-auto"}>
          <Col md={3} className={styles.section_header + " p-0"}>
            EXPERIENCE
          </Col>
          <Col md={9} className="p-0">
            Experience stuff
          </Col>
        </Row>
      </FadeInSection>
    </Col>
  );
}

export default Experience;
