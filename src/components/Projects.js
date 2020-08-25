import React from "react";
import styles from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

function Projects() {
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <Row className={" mx-auto"}>
        <Col md={3} className={"section_header p-0 d-flex"}>
          <FadeInSection>PROJECTS</FadeInSection>
        </Col>
        <Col md={9} className="p-0">
          <FadeInSection>
            <Row
              className={
                styles.project_name + " mx-auto justify-content-between"
              }
            >
              <a
                href="https://github.com/coursetable/coursetable/tree/redesign"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlight_link + " " + styles.github_link}
              >
                CourseTable
              </a>
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
              <a
                href="https://github.com/maxyuan6717/React_Portfolio_Website"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlight_link + " " + styles.github_link}
              >
                React Portfolio Website
              </a>
            </Row>

            <Row className={styles.description + " mx-auto my-2"}>
              I built this portfolio website from scratch using ReactJS,
              HTML/CSS, and Bootstrap. CI/CD is implemented through Travis CI
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
              <a
                href="https://github.com/maxyuan6717/GoodWork"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlight_link + " " + styles.github_link}
              >
                GoodWork
              </a>
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
              <a
                href="https://github.com/maxyuan6717/Competitive_Programming"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlight_link + " " + styles.github_link}
              >
                Competitive Programming
              </a>
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
              <a
                href="https://github.com/maxyuan6717/6_DOF_Robot_Arm"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlight_link + " " + styles.github_link}
              >
                6 DOF Robot Arm
              </a>
            </Row>
            <Row className={styles.description + " mx-auto my-2"}>
              <span>
                I designed, built, wired, and programmed a 6 DOF robot arm from
                scratch. The robot arm mimics the movements of a smaller
                controller arm and can be programmed to repeat a sequence of
                movements. I document the process in these 2 YouTube videos:
                <a
                  href="https://www.youtube.com/watch?v=5SvWvZu7d08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    styles.highlight_link + " mx-2 " + styles.youtube_link
                  }
                >
                  Part 1
                </a>
                <a
                  href="https://www.youtube.com/watch?v=AhtPY5MsmAo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.highlight_link + " " + styles.youtube_link}
                >
                  Part 2
                </a>
              </span>
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
