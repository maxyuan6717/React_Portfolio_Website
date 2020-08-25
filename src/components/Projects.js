import React from "react";
import styles from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import ProgCircle from "./ProgCircle";

function Projects() {
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <Row className={" mx-auto flex-row-reverse"}>
        <Col md={3} className={styles.section_header + " p-0 d-flex"}>
          <span className="ml-auto">
            <FadeInSection>Projects</FadeInSection>
          </span>
        </Col>
        <Col md={9} className="p-0">
          <FadeInSection>
            <Row
              className={
                styles.project_name + " mx-auto justify-content-between"
              }
            >
              CourseTable
            </Row>
            <Row className={styles.description + " mx-auto my-2"}>
              Collaborating with 10 other members to maintain CourseTable, an
              intuitive website that processes 1.5 million requests per semester
              to help over 6,000 Yale students discover and choose from the
              university’s myriad of courses. I contributed to the back-end
              crawler that keeps the database populated with updated course
              data, and I am leading the development of the ReactJS front-end
              web application (175+ commits and 6,000+ lines of code)
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-1"}>ReactJS</div>
              <div className={"technology mx-1"}>HTML/CSS</div>
              <div className={"technology mx-1"}>Python</div>
              <div className={"technology mx-1"}>GraphQL</div>
              <div className={"technology mx-1"}>Hasura</div>
              <div className={"technology mx-1"}>Docker</div>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <Row
              className={
                styles.project_name + " mx-auto justify-content-between mt-4"
              }
            >
              React Portfolio Website
            </Row>
            <Row className={styles.description + " mx-auto my-2"}>
              I built this portfolio website from scratch using ReactJS,
              HTML/CSS, and Bootstrap. CI/CD is implemented through Github
              Pages.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-1"}>ReactJS</div>
              <div className={"technology mx-1"}>HTML/CSS</div>
              <div className={"technology mx-1"}>Bootstrap</div>
              <div className={"technology mx-1"}>CI/CD</div>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <Row
              className={
                styles.project_name + " mx-auto justify-content-between mt-4"
              }
            >
              GoodWork
            </Row>
            <Row className={styles.description + " mx-auto my-2"}>
              Collaborated with one other developer to build GoodWork, an
              application that finds local volunteer opportunities involving
              physical exercise to benefit both the community and the user. I
              developed the back-end infrastructure that crawls the web for
              volunteer opportunities, incorporates machine learning to select
              opportunities that involve physical exercise, and then uses a
              Firebase realtime database to store the results.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-1"}>Python</div>
              <div className={"technology mx-1"}>Java</div>
              <div className={"technology mx-1"}>Pandas</div>
              <div className={"technology mx-1"}>NumPy</div>
              <div className={"technology mx-1"}>Google Firebase</div>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <Row
              className={
                styles.project_name + " mx-auto justify-content-between mt-4"
              }
            >
              Competitive Programming
            </Row>
            <Row className={styles.description + " mx-auto my-2"}>
              Over the course of 3 years, I learned and drilled various data
              structures and algorithms in order to solve complex coding
              challenges. I am a USACO Platinum Division contestant, 2-time
              Google Code Jam Round 2 Qualifier, and 5th place finisher at the
              International ACSL All-Star Competition. These 2 repositories hold
              my solutions to 600+ coding problems.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-1"}>C/C++</div>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <Row
              className={
                styles.project_name + " mx-auto justify-content-between mt-4"
              }
            >
              6 DOF Robot Arm
            </Row>
            <Row className={styles.description + " mx-auto my-2"}>
              I designed, built, wired, and programmed a 6 DOF robot arm from
              scratch. The robot arm mimics the movements of a smaller replica
              arm and can be programmed to repeat a sequence of movements.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-1"}>CAD Modeling</div>
              <div className={"technology mx-1"}>Arduino (C/C++)</div>
              <div className={"technology mx-1"}>Circuitry</div>
              <div className={"technology mx-1"}>3D Printing</div>
            </Row>
          </FadeInSection>
        </Col>
      </Row>
    </Col>
  );
}

export default Projects;
