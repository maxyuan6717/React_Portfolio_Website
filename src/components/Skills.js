import React from "react";
import styles from "./Skills.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import ProgCircle from "./ProgCircle";

function Skills() {
  return (
    <Col className={styles.container + " p-0 mx-auto"}>
      <Row className={styles.education_content + " mx-auto"}>
        <Col md={3} className={"section_header p-0 d-flex"}>
          <FadeInSection>SKILLS</FadeInSection>
        </Col>

        <Col md={9} className="p-0">
          <Row className="mx-auto">
            <span className={styles.skills_header + " mx-auto"}>
              <FadeInSection>Languages</FadeInSection>
            </span>
          </Row>
          <Row className="mx-auto my-4">
            <ProgCircle progress={0.9} text={"C/C++"} indx={0} />
            <ProgCircle progress={0.87} text={"Python"} indx={0} />
            <ProgCircle progress={0.85} text={"JavaScript"} indx={0} />
            <ProgCircle progress={0.85} text={"HTML/CSS"} indx={0} />
          </Row>
          <Row className="mx-auto my-4">
            <ProgCircle progress={0.7} text={"Java"} indx={0} />
            <ProgCircle progress={0.65} text={"TypeScript"} indx={0} />
            <ProgCircle progress={0.6} text={"SQL"} indx={0} />
            <ProgCircle progress={0.55} text={"Swift"} indx={0} />
          </Row>
          <Row className="mx-auto mt-4">
            <span className={styles.skills_header + " mx-auto"}>
              <FadeInSection>Frameworks/Libraries</FadeInSection>
            </span>
          </Row>
          <Row className="mx-auto my-4">
            <ProgCircle progress={0.85} text={"ReactJS"} indx={1} />
            <ProgCircle progress={0.85} text={"Bootstrap"} indx={1} />
            <ProgCircle progress={0.65} text={"jQuery"} indx={1} />
            <ProgCircle progress={0.55} text={"UmiJS"} indx={1} />
          </Row>
          <Row className="mx-auto mt-4">
            <span className={styles.skills_header + " mx-auto"}>
              <FadeInSection>Technologies/Concepts</FadeInSection>
            </span>
          </Row>
          <Row className="mx-auto my-4">
            <ProgCircle progress={0.9} text={"Git"} indx={2} />
            <ProgCircle progress={0.9} text={"REST API"} indx={2} />
            <ProgCircle progress={0.75} text={"AWS"} indx={2} />
            <ProgCircle progress={0.65} text={"Docker"} indx={2} />
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Skills;
