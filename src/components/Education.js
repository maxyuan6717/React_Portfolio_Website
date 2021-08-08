import React from "react";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import {
  StyledSectionContainer,
  StyledSectionHeader,
  StyledText,
} from "./styledcomponents";
import { educations } from "../util/constants";
import styled from "styled-components";

const StyledBubble = styled.span`
  color: ${({ theme }) => theme.text[1]};
  background-color: ${({ theme }) => theme.surface[1]};
  border-radius: 8px;
  padding: 6px;
  margin: 0.25rem 0.5rem 0.25rem 0;
  font-size: 13px;
  transition: 1s;
`;

function Education() {
  return (
    <StyledSectionContainer>
      {educations.map((ed, index) => (
        <FadeInSection key={index} section={index === 0 ? "education" : null}>
          <Row className="mx-auto mb-5">
            <StyledSectionHeader md={3}>
              {index === 0 ? "EDUCATION" : ""}
            </StyledSectionHeader>
            <Col md={9} className="p-0">
              <Row className="mx-auto justify-content-between">
                <Col sm="auto" className="p-0">
                  <StyledText size="20">{ed.name}</StyledText>
                </Col>
                <Col sm="auto" className="p-0">
                  <StyledText size="20">{ed.loc}</StyledText>
                </Col>
              </Row>
              <Row className="mx-auto justify-content-between">
                <Col sm="auto" className="p-0">
                  <StyledText
                    secondary
                  >{`${ed.degree} | GPA: ${ed.gpa}/4.0`}</StyledText>
                </Col>
                <Col sm="auto" className="p-0">
                  <StyledText secondary>{ed.date}</StyledText>
                </Col>
              </Row>
              <Row className="mt-2 mx-auto">
                <span style={{ borderBottom: "1px solid" }}>
                  Relevant Coursework
                </span>
              </Row>
              <Row className="mx-auto mt-1">
                {ed.courses.map((course, index) => (
                  <StyledBubble key={index}>{course}</StyledBubble>
                ))}
              </Row>
              <Row className="mt-2 mx-auto">
                <span style={{ borderBottom: "1px solid" }}>Activities</span>
              </Row>
              <Row className="mx-auto mt-1">
                {ed.activities.map((activity, index) => (
                  <StyledBubble key={index}>{activity}</StyledBubble>
                ))}
              </Row>
            </Col>
          </Row>
        </FadeInSection>
      ))}
    </StyledSectionContainer>
  );
}

export default Education;
