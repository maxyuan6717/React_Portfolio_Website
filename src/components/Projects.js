import React from "react";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import { BsLink45Deg } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import { projects } from "../util/constants";
import {
  StyledLink,
  StyledSectionContainer,
  StyledSectionHeader,
  StyledTech,
  StyledText,
} from "./styledcomponents";
import styled from "styled-components";

const StyledSite = styled.a`
  display: flex;
  transition: color 0.1s;
  color: ${({ theme }) => theme.text[0]};
  margin: auto 0 auto 0.25rem;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.blue_color};
  }
`;

function Projects({ theme }) {
  /* 
  
  TO ADD:
  wybcpodcast.com
  nodicehelp.live
  capsule.yalewli.org
  orpheuspledge.org

  dcyphr coming soon

  
  */
  return (
    <StyledSectionContainer desktopBot="70" mobileBot="40">
      <Row className={" mx-auto"}>
        <StyledSectionHeader md={3}>
          <FadeInSection>PROJECTS</FadeInSection>
        </StyledSectionHeader>
        <Col md={9} className="p-0">
          {projects.map((proj) =>
            proj.description === "TBD" ? null : (
              <FadeInSection>
                <StyledText size="20">
                  <Row className="mx-auto">
                    <StyledLink
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      color={
                        theme === "dark"
                          ? "rgba(128, 35, 128, 0.6)"
                          : "rgba(114, 1, 114, 0.3)"
                      }
                    >
                      {proj.name}
                    </StyledLink>
                    {proj.site && (
                      <StyledSite
                        href={proj.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLink45Deg
                          className="m-auto"
                          style={{ display: "block" }}
                          size={23}
                        />
                      </StyledSite>
                    )}
                  </Row>
                  <Row className="mx-auto mt-2 mb-1">
                    <StyledText size="16">{proj.description}</StyledText>
                  </Row>
                  <Row className="mx-auto mb-4">
                    {proj.tech.map((tech) => (
                      <StyledTech>{tech}</StyledTech>
                    ))}
                  </Row>
                </StyledText>
              </FadeInSection>
            )
          )}
        </Col>
      </Row>
    </StyledSectionContainer>
  );
}

export default Projects;
