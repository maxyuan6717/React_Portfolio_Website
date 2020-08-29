import React from "react";
import styles from "./Experience.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

function Experience({ theme, is_mobile }) {
  return (
    <Col
      className={styles.container + " p-0 mx-auto"}
      style={{ marginBottom: is_mobile ? "75px" : "" }}
    >
      <Row className={styles.experience_content + " mx-auto"}>
        <Col md={3} className={"section_header p-0"}>
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
                <a
                  href="https://www.gstdev.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.highlight_link}
                >
                  Golden Section Technology
                </a>
              </Col>
              <Col sm="auto" className="p-0">
                Houston, TX
              </Col>
            </Row>
            <Row
              className={
                (theme === "dark" ? styles.position_dark : styles.position) +
                " mx-auto justify-content-between mt-2"
              }
            >
              <Col sm="auto" className="p-0">
                Part-Time Software and DevOps Engineer
              </Col>
              <Col sm="auto" className="p-0">
                August 2020 - Present
              </Col>
            </Row>
            <Row className={styles.description + " mx-auto my-1"}>
              Building a proprietary Business Intelligence (BI) Dashboard to
              view performance and sales data for client projects. Implementing
              OpenID Connect (OIDC) Authentication in custom web and mobile apps
              for convenient single sign-on functionality. Continuing all
              responsibilities held during the previous internship as well.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-2 my-1"}>ReactJS</div>
              <div className={"technology mr-2 my-1"}>UmiJS</div>
              <div className={"technology mr-2 my-1"}>HTML/CSS</div>
              <div className={"technology mr-2 my-1"}>TypeScript</div>
              <div className={"technology mr-2 my-1"}>Java</div>
              <div className={"technology mr-2 my-1"}>AWS</div>
              <div className={"technology mr-2 my-1"}>OIDC</div>
              <div className={"technology mr-2 my-1"}>Docker</div>
              <div className={"technology mr-2 my-1"}>CI/CD</div>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <Row
              className={
                (theme === "dark" ? styles.position_dark : styles.position) +
                " mx-auto justify-content-between mt-4"
              }
            >
              <Col sm="auto" className="p-0">
                16-Week DevOps Engineer Intern
              </Col>
              <Col sm="auto" className="p-0">
                May 2020 - August 2020
              </Col>
            </Row>
            <Row className={styles.description + " mx-auto my-1"}>
              Leveraged Web API’s to fetch metric data from various software
              (AWS, Github, New Relic, SonarQube, PipeDrive, Asana, PandaDocs,
              Jira). Worked with CI/CD platforms like CircleCI, SonarQube, and
              New Relic APM to streamline the agile scrum development process.
              Managed AWS cloud resources and root accounts, Okta Single Sign-on
              policies, and IT Helpdesk requests.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-2 my-1"}>Python</div>
              <div className={"technology mr-2 my-1"}>REST API</div>
              <div className={"technology mr-2 my-1"}>
                AWS (IAM, EC2, S3, RDS, Lambda, QuickSight)
              </div>
              <div className={"technology mr-2 my-1"}>CI/CD</div>
            </Row>
          </FadeInSection>
        </Col>
      </Row>
    </Col>
  );
}

export default Experience;
