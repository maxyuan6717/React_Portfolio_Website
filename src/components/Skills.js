import React from "react";
import styles from "./Skills.module.css";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import ProgCircle from "./ProgCircle";
import { useWindowDimensions } from "./WindowDimensionsProvider";

function Skills({ theme, is_mobile }) {
  const { width } = useWindowDimensions();
  let num_cols = 4;
  if (width < 768) num_cols = 2;
  const skills = [
    [
      {
        text: "C/C++",
        progress: 0.9,
      },
      {
        text: "Python",
        progress: 0.87,
      },
      {
        text: "JavaScript",
        progress: 0.85,
      },
      {
        text: "HTML/CSS",
        progress: 0.85,
      },
      {
        text: "Java",
        progress: 0.7,
      },
      {
        text: "TypeScript",
        progress: 0.65,
      },
      {
        text: "SQL",
        progress: 0.6,
      },
      {
        text: "Swift",
        progress: 0.55,
      },
    ],
    [
      {
        text: "ReactJS",
        progress: 0.85,
      },
      {
        text: "Bootstrap",
        progress: 0.85,
      },
      {
        text: "jQuery",
        progress: 0.65,
      },
      {
        text: "UmiJS",
        progress: 0.55,
      },
    ],
    [
      {
        text: "Git",
        progress: 0.9,
      },
      {
        text: "REST API",
        progress: 0.9,
      },
      {
        text: "AWS",
        progress: 0.75,
      },
      {
        text: "Docker",
        progress: 0.65,
      },
    ],
  ];
  let html = [[], [], []];
  for (let i = 0; i < 3; i++) {
    const section = skills[i];
    for (let j = 0; j < section.length; j += num_cols) {
      let row_items = [];
      for (let k = j; k < j + num_cols; k++) {
        const skill = section[k];
        row_items.push(
          <ProgCircle
            key={k}
            progress={skill.progress}
            text={skill.text}
            indx={i}
            num_cols={num_cols}
            theme={theme}
          />
        );
      }
      html[i].push(
        <Row className="mx-auto my-4" key={section.length + j}>
          {row_items}
        </Row>
      );
    }
  }

  return (
    <Col
      className={styles.container + " p-0 mx-auto"}
      style={{ marginBottom: is_mobile ? "25px" : "" }}
    >
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
          {html[0]}
          <Row className="mx-auto mt-4">
            <span className={styles.skills_header + " mx-auto"}>
              <FadeInSection>Frameworks/Libraries</FadeInSection>
            </span>
          </Row>
          {html[1]}
          <Row className="mx-auto mt-4">
            <span className={styles.skills_header + " mx-auto"}>
              <FadeInSection>Technologies/Concepts</FadeInSection>
            </span>
          </Row>
          {html[2]}
        </Col>
      </Row>
    </Col>
  );
}

export default Skills;
