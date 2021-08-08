import React from "react";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import ProgCircle from "./ProgCircle";
import { useWindowDimensions } from "./WindowDimensionsProvider";
import { skills } from "../util/constants";
import {
  StyledSectionContainer,
  StyledSectionHeader,
  StyledText,
} from "./styledcomponents";

function Skills({ theme }) {
  const { width } = useWindowDimensions();
  let num_cols = 4;
  if (width < 768) num_cols = 2;

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
  const headers = [
    "Languages",
    "Frameworks/Libraries",
    "Technologies/Concepts",
  ];

  return (
    <StyledSectionContainer>
      <Row className={"mx-auto"}>
        <StyledSectionHeader md={3}>
          <FadeInSection section="skills">SKILLS</FadeInSection>
        </StyledSectionHeader>

        <Col md={9} className="p-0">
          {headers.map((header, index) => (
            <React.Fragment key={index}>
              <Row className="mx-auto">
                <StyledText className="mx-auto" size="20">
                  <FadeInSection>{header}</FadeInSection>
                </StyledText>
              </Row>
              {html[index]}
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </StyledSectionContainer>
  );
}

export default Skills;
