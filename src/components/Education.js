import React from "react";
import styles from "./Education.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

function Education({ theme, is_mobile }) {
  return (
    <Col
      className={styles.container + " p-0 mx-auto"}
      style={{ marginBottom: is_mobile ? "75px" : "" }}
    >
      <FadeInSection>
        <Row className={styles.education_content + " mx-auto"}>
          <Col md={3} className={"section_header p-0"}>
            EDUCATION
          </Col>
          <Col md={9} className="p-0">
            <Row
              className={
                styles.school_name + " mx-auto justify-content-between"
              }
            >
              <Col sm="auto" className="p-0">
                Yale University
              </Col>
              <Col sm="auto" className="p-0">
                New Haven, CT
              </Col>
            </Row>
            <Row
              className={
                (theme === "dark" ? styles.degree_dark : styles.degree) +
                " mx-auto justify-content-between"
              }
            >
              <Col sm="auto" className="p-0">
                B.S. in Computer Science and Economics | GPA: 4.0/4.0
              </Col>
              <Col sm="auto" className="p-0">
                May 2023
              </Col>
            </Row>
            <Row className={"mt-2 mx-auto justify-content-between"}>
              <span className={styles.coursework}>Relevant Coursework</span>
            </Row>
            <Row className={"mx-auto mt-1 pl-0 "}>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Data Structures
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Systems Programming
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Discrete Math
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Linear Algebra
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Microeconomics
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Unsupervised Learning
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Economics & Computation
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Probability & Statistics
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Macroeconomics
              </span>
            </Row>
            <Row className={"mt-2 mx-auto"}>
              <span className={styles.coursework}>Activities</span>
            </Row>
            <Row className={"mx-auto mt-1 pl-0 "}>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-1 my-1"
                }
              >
                Yale Computer Society (Dev Team)
              </span>
            </Row>
          </Col>
        </Row>
      </FadeInSection>
      <FadeInSection>
        <Row className={styles.education_content + " mx-auto my-5"}>
          <Col md={3} className={styles.section_header + " p-0"}></Col>
          <Col md={9} className="p-0">
            <Row
              className={
                styles.school_name + " mx-auto justify-content-between"
              }
            >
              <Col sm="auto" className="p-0">
                The Seven Hills School
              </Col>
              <Col sm="auto" className="p-0">
                Cincinnati, OH
              </Col>
            </Row>
            <Row
              className={
                (theme === "dark" ? styles.degree_dark : styles.degree) +
                " mx-auto justify-content-between"
              }
            >
              <Col sm="auto" className="p-0">
                High School Diploma | GPA: 4.72/4.0
              </Col>
              <Col sm="auto" className="p-0">
                June 2019
              </Col>
            </Row>
            <Row className={"mt-2 mx-auto"}>
              <span className={styles.coursework}>Relevant Coursework</span>
            </Row>
            <Row className={"mx-auto mt-1 pl-0 "}>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-1 my-1"
                }
              >
                AP Computer Science A
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                AP Calculus BC
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Multivariable Calculus
              </span>
            </Row>
            <Row className={"mt-2 mx-auto"}>
              <span className={styles.coursework}>Activities</span>
            </Row>
            <Row className={"mx-auto mt-1 pl-0 "}>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-1 my-1"
                }
              >
                Math Club (Head)
              </span>
              <span
                className={
                  (theme === "dark" ? styles.course_dark : styles.course) +
                  " mr-2 my-1"
                }
              >
                Science Olympiad (Head)
              </span>
            </Row>
          </Col>
        </Row>
      </FadeInSection>
    </Col>
  );
}

export default Education;
