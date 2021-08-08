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
import { trackGA } from "../util/functions";

const StyledSite = styled.a`
  display: flex;
  transition: color 0.1s;
  color: ${({ theme }) => theme.text[0]};
  margin: auto 0 auto 0.25rem;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.blue};
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
    <StyledSectionContainer desktopbot="70" mobilebot="40">
      <Row className={" mx-auto"}>
        <StyledSectionHeader md={3}>
          <FadeInSection section="projects">PROJECTS</FadeInSection>
        </StyledSectionHeader>
        <Col md={9} className="p-0">
          {projects.map((proj, index) => (
            <FadeInSection key={index}>
              {proj.src ? (
                <ProjectCard
                  img_src={proj.src}
                  name={proj.name}
                  github={proj.github}
                  site={proj.site}
                  techs={proj.tech}
                  description={proj.description}
                />
              ) : (
                <StyledText size="20">
                  <Row className="mx-auto">
                    <StyledLink
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackGA("Project", `Viewed ${proj.name} Github`)
                      }
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
                        onClick={() =>
                          trackGA("Project", `Viewed ${proj.name} Site`)
                        }
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
                    {proj.tech.map((tech, index) => (
                      <StyledTech key={index}>{tech}</StyledTech>
                    ))}
                  </Row>
                </StyledText>
              )}
            </FadeInSection>
          ))}
        </Col>
      </Row>
    </StyledSectionContainer>
  );
}

export default Projects;
