import React from "react";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import {
  StyledSectionContainer,
  StyledSectionHeader,
  StyledTech,
  StyledText,
  StyledLink,
} from "./styledcomponents";
import { experiences } from "../util/constants";

function Experience() {
  return (
    <StyledSectionContainer>
      <Row className="mx-auto">
        <StyledSectionHeader md={3}>
          <FadeInSection>EXPERIENCE</FadeInSection>
        </StyledSectionHeader>
        <Col md={9} className="p-0">
          {experiences.map((exp) => (
            <FadeInSection>
              {exp.name && (
                <Row className="mx-auto justify-content-between">
                  <Col sm="auto" className="p-0">
                    <StyledText size="20">
                      <StyledLink
                        href={exp.link}
                        color={exp.color}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.name}
                      </StyledLink>
                    </StyledText>
                  </Col>
                  <Col sm="auto" className="p-0">
                    <StyledText size="20">{exp.loc}</StyledText>
                  </Col>
                </Row>
              )}
              {exp.title && (
                <Row className="mx-auto justify-content-between mt-2">
                  <Col sm="auto" className="p-0">
                    <StyledText secondary size="18">
                      {exp.title}
                    </StyledText>
                  </Col>
                  <Col sm="auto" className="p-0">
                    <StyledText secondary size="18">
                      {exp.date}
                    </StyledText>
                  </Col>
                </Row>
              )}
              <Row className="mx-auto my-1">
                <StyledText size="16">{exp.description}</StyledText>
              </Row>
              <Row className="mx-auto mb-4">
                {exp.techs.map((tech) => (
                  <StyledTech>{tech}</StyledTech>
                ))}
              </Row>
            </FadeInSection>
          ))}
        </Col>
      </Row>
    </StyledSectionContainer>
  );
}

export default Experience;
