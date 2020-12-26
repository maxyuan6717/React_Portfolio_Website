import React from "react";
import styles from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import { BsLink45Deg } from "react-icons/bs";

function Projects({ theme, is_mobile }) {
  return (
    <Col
      className={styles.container + " p-0 mx-auto"}
      style={{ marginBottom: is_mobile ? "40px" : "" }}
    >
      <Row className={" mx-auto"}>
        <Col md={3} className={"section_header p-0 d-flex"}>
          <FadeInSection>PROJECTS</FadeInSection>
        </Col>
        <Col md={9} className="p-0">
          <FadeInSection>
            <Row className={styles.project_name + " mx-auto"}>
              <a
                href="https://github.com/coursetable/coursetable"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.highlight_link +
                  " " +
                  (theme === "dark"
                    ? styles.github_link_dark
                    : styles.github_link)
                }
              >
                CourseTable
              </a>
              <a
                href="https://coursetable.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link_container + " my-auto ml-1"}
              >
                <BsLink45Deg
                  className={styles.link_icon}
                  style={{ display: "block" }}
                  size={23}
                />
              </a>
            </Row>
            <Row className={styles.description + " mx-auto mt-2 mb-1"}>
              Collaborating with 11 other members to maintain and rebuild
              CourseTable, an intuitive course discovery platform that processes
              1.5 million requests from 6,000+ Yale students every semester.
              Leading the development of the ReactJS front-end web application
              with 500+ commits. Redesigned the website’s UI and UX to
              significantly enhance its aesthetics and functionality.
              Contributed to the back-end crawler that keeps the database
              populated with updated course data.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-2 my-1"}>ReactJS</div>
              <div className={"technology mr-2 my-1"}>HTML/CSS</div>
              <div className={"technology mr-2 my-1"}>Python</div>
              <div className={"technology mr-2 my-1"}>Node.js</div>
              <div className={"technology mr-2 my-1"}>Bootstrap</div>
              <div className={"technology mr-2 my-1"}>GraphQL</div>
              <div className={"technology mr-2 my-1"}>Hasura</div>
              <div className={"technology mr-2 my-1"}>Docker</div>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <Row className={styles.project_name + " mx-auto mt-4"}>
              <a
                href="https://github.com/kevinz917/holiday2020"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.highlight_link +
                  " " +
                  (theme === "dark"
                    ? styles.github_link_dark
                    : styles.github_link)
                }
              >
                YPost
              </a>
              <a
                href="https://ypost.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link_container + " my-auto ml-1"}
              >
                <BsLink45Deg
                  className={styles.link_icon}
                  style={{ display: "block" }}
                  size={23}
                />
              </a>
            </Row>
            <Row className={styles.description + " mx-auto mt-2 mb-1"}>
              Collaborated with 2 other developers to build YPost, a platform
              where you can send virtual holiday postcards to other Yalies. Over
              800 postcards were sent within just the first 2 hours after
              launching, and over 10,000 postcards have been sent since.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-2 my-1"}>ReactJS</div>
              <div className={"technology mr-2 my-1"}>HTML/CSS</div>
              <div className={"technology mr-2 my-1"}>Node.js</div>
              <div className={"technology mr-2 my-1"}>MongoDB</div>
              <div className={"technology mr-2 my-1"}>REST API</div>
              <div className={"technology mr-2 my-1"}>Heroku</div>
              <div className={"technology mr-2 my-1"}>CI/CD</div>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <Row
              className={
                styles.project_name + " mx-auto justify-content-between mt-4"
              }
            >
              <a
                href="https://github.com/maxyuan6717/React_Portfolio_Website/tree/master"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.highlight_link +
                  " " +
                  (theme === "dark"
                    ? styles.github_link_dark
                    : styles.github_link)
                }
              >
                React Portfolio Website
              </a>
            </Row>

            <Row className={styles.description + " mx-auto mt-2 mb-1"}>
              Built this portfolio website from scratch using ReactJS, HTML/CSS,
              and Bootstrap. CI/CD is implemented through Travis CI.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-2 my-1"}>ReactJS</div>
              <div className={"technology mr-2 my-1"}>HTML/CSS</div>
              <div className={"technology mr-2 my-1"}>Bootstrap</div>
              <div className={"technology mr-2 my-1"}>CI/CD</div>
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
                className={
                  styles.highlight_link +
                  " " +
                  (theme === "dark"
                    ? styles.github_link_dark
                    : styles.github_link)
                }
              >
                GoodWork
              </a>
            </Row>
            <Row className={styles.description + " mx-auto mt-2 mb-1"}>
              Collaborated with 1 other developer to build GoodWork, an
              application that finds local volunteer opportunities involving
              physical exercise to benefit both the community and the user.
              Developed the back-end infrastructure that crawls the web for
              volunteer opportunities, incorporates natural language processing
              to select opportunities that involve physical exercise, and then
              uses a Firebase realtime database to store the results.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-2 my-1"}>Python</div>
              <div className={"technology mr-2 my-1"}>Java</div>
              <div className={"technology mr-2 my-1"}>Pandas</div>
              <div className={"technology mr-2 my-1"}>NumPy</div>
              <div className={"technology mr-2 my-1"}>Google Firebase</div>
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
                className={
                  styles.highlight_link +
                  " " +
                  (theme === "dark"
                    ? styles.github_link_dark
                    : styles.github_link)
                }
              >
                Competitive Programming
              </a>
            </Row>
            <Row className={styles.description + " mx-auto mt-2 mb-1"}>
              Learned and drilled various data structures and algorithms in
              order to solve complex coding challenges over the course of 3
              years. Currently a USACO Platinum Division contestant, 2-time
              Google Code Jam Round 2 Qualifier, and 5th place finisher at the
              International ACSL All-Star Competition. This repository contains
              my solutions to 600+ practice coding problems.
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-2 my-1"}>C/C++</div>
              <div className={"technology mr-2 my-1"}>Java</div>
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
                className={
                  styles.highlight_link +
                  " " +
                  (theme === "dark"
                    ? styles.github_link_dark
                    : styles.github_link)
                }
              >
                6 DOF Robot Arm
              </a>
            </Row>
            <Row className={styles.description + " mx-auto mt-2 mb-1"}>
              <span>
                Designed, built, wired, and programmed a 6 DOF robot arm from
                scratch. The robot arm mimics the movements of a smaller
                controller arm and can be programmed to repeat a sequence of
                movements. The entire design and build process is documented in
                these 2 YouTube videos:
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
                .
              </span>
            </Row>
            <Row className="mx-auto">
              <div className={"technology mr-2 my-1"}>CAD Modeling</div>
              <div className={"technology mr-2 my-1"}>Arduino (C/C++)</div>
              <div className={"technology mr-2 my-1"}>Circuitry</div>
              <div className={"technology mr-2 my-1"}>3D Printing</div>
            </Row>
          </FadeInSection>
        </Col>
      </Row>
    </Col>
  );
}

export default Projects;
