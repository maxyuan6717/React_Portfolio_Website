import React from "react";
import styles from "./Experience.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

function Experience() {
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <Row className={styles.experience_content + " mx-auto"}>
        <Col md={3} className={styles.section_header + " p-0"}>
          <FadeInSection>EXPERIENCE</FadeInSection>
        </Col>
        <Col md={9} className="p-0">
          <FadeInSection>
            <Row
              className={
                styles.company_name + " mx-auto justify-content-between"
              }
            >
              <Col sm="auto" className="p-0">
                Golden Section Technology
              </Col>
              <Col sm="auto" className="p-0">
                Houston, TX
              </Col>
            </Row>
            <Row
              className={
                styles.position + " mx-auto justify-content-between mt-2"
              }
            >
              <Col sm="auto" className="p-0">
                Part-Time Software Engineer
              </Col>
              <Col sm="auto" className="p-0">
                August 2020 - Present
              </Col>
            </Row>
            <Row className={styles.description + " mx-auto mb-2 mt-1"}>
              Implementing OpenID Connect (OIDC) Authentication in custom web
              and mobile apps for client and internal use. Managing AWS resource
              access, Okta Single Sign-on policies, and advising clients with
              any software or database related issues
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-1"}>ReactJS</div>
              <div className={"technology mx-1"}>HTML/CSS</div>
              <div className={"technology mx-1"}>TypeScript</div>
              <div className={"technology mx-1"}>Java</div>
              <div className={"technology mx-1"}>AWS (RDS)</div>
              <div className={"technology mx-1"}>Okta OIDC SDK</div>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <Row
              className={
                styles.position + " mx-auto justify-content-between mt-4"
              }
            >
              <Col sm="auto" className="p-0">
                Software Engineer Intern
              </Col>
              <Col sm="auto" className="p-0">
                May 2020 - August 2020
              </Col>
            </Row>
            <Row className={styles.description + " mx-auto mb-2 mt-1"}>
              Built a proprietary Business Intelligence (BI) Dashboard to view
              performance and sales data for each client project. Leveraged Web
              API’s to fetch metric data from various software (Github, Jira,
              Harvest, SonarQube, PipeDrive, AWS, etc.)
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-1"}>ReactJS</div>
              <div className={"technology mx-1"}>Python</div>
              <div className={"technology mx-1"}>HTML/CSS</div>
              <div className={"technology mx-1"}>TypeScript</div>
              <div className={"technology mx-1"}>Java</div>
              <div className={"technology mx-1"}>
                AWS (S3, RDS, Lambda, QuickSight)
              </div>
            </Row>
          </FadeInSection>
        </Col>
      </Row>
    </Col>
  );
}

export default Experience;
