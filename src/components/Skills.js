import React from "react";
import styles from "./Skills.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import ProgressCircleContainer from "./ProgressCircleContainer";

function Skills() {
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <Row className={styles.education_content + " mx-auto flex-row-reverse"}>
        <Col md={3} className={styles.section_header + " p-0 d-flex"}>
          <span className="ml-auto">
            <FadeInSection>SKILLS</FadeInSection>
          </span>
        </Col>

        <Col md={9} className="p-0">
          <Row className="mx-auto">
            <span className={styles.skills_header + " mx-auto"}>
              <FadeInSection>Languages</FadeInSection>
            </span>
          </Row>
          <Row className="mx-auto my-4">
            <ProgressCircleContainer progress={0.9} text={"C/C++"} />
            <ProgressCircleContainer progress={0.87} text={"Python"} />
            <ProgressCircleContainer progress={0.85} text={"JavaScript"} />
            <ProgressCircleContainer progress={0.85} text={"HTML/CSS"} />
          </Row>
          <Row className="mx-auto my-4">
            <ProgressCircleContainer progress={0.7} text={"Java"} />
            <ProgressCircleContainer progress={0.65} text={"TypeScript"} />
            <ProgressCircleContainer progress={0.6} text={"SQL"} />
            <ProgressCircleContainer progress={0.55} text={"Swift"} />
          </Row>
          <Row className="mx-auto mt-4">
            <span className={styles.skills_header + " mx-auto"}>
              <FadeInSection>Frameworks/Libraries</FadeInSection>
            </span>
          </Row>
          <Row className="mx-auto my-4">
            <ProgressCircleContainer progress={0.85} text={"ReactJS"} />
            <ProgressCircleContainer progress={0.85} text={"Bootstrap"} />
            <ProgressCircleContainer progress={0.65} text={"jQuery"} />
            <ProgressCircleContainer progress={0.55} text={"UmiJS"} />
          </Row>
          <Row className="mx-auto mt-4">
            <span className={styles.skills_header + " mx-auto"}>
              <FadeInSection>Technologies/Concepts</FadeInSection>
            </span>
          </Row>
          <Row className="mx-auto my-4">
            <ProgressCircleContainer progress={0.9} text={"Git"} />
            <ProgressCircleContainer progress={0.9} text={"REST API"} />
            <ProgressCircleContainer progress={0.75} text={"AWS"} />
            <ProgressCircleContainer progress={0.65} text={"Docker"} />
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Skills;
