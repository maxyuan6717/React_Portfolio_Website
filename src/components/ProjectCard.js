import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { StyledTech } from "./styledcomponents";
import { trackGA } from "../util/functions";

const StyledCard = styled.div`
  width: ${({ width }) => `${width}px`};
  border-radius: 8px;
  padding: 0px;
  ${({ theme }) =>
    theme.theme === "light"
      ? "box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;"
      : ""}
  background-color: ${({ theme }) => theme.surface[2]};
  margin: 0px 0px 50px 0px;
  overflow: hidden;

  .image-container {
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  .bg-img {
    transition: transform 0.4s, filter 0.2s linear;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    transition: opacity 0.3s;
    color: white;
  }

  &:hover {
    .bg-img {
      transition: transform 0.4s, filter 0.2s linear;
      transform: scale(1.2);
      filter: grayscale(100%) blur(5px) brightness(60%);
    }
    .content {
      transition: opacity 0.5s ease-in-out 0.1s;
      opacity: 1;
    }
  }
`;

const StyledTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 40px;
`;

const StyledBtn = styled.span`
  padding: 5px;
  margin-right: 5px;
  border: 1px solid black;
  border-radius: 20px;
  transition: 0.3s;
  height: 30px;
  width: 30px;
  display: flex;
  color: ${({ color, theme }) => theme[color]};
  border-color: ${({ color, theme }) => theme[color]};
  transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
`;

const StyledMeta = styled.div`
  padding: 20px;
`;

const ProjectCard = ({ img_src, name, github, site, techs, description }) => {
  const width = 550;
  return (
    <StyledCard src={img_src} width={width} height={(width * 10.5) / 20}>
      {/* <div className="flipcard">
        <div className="front" />
        <div className="back">
          <div className="content">{description}</div>
        </div>
      </div> */}
      <div className="image-container">
        <img className="bg-img" src={img_src} width="100%" alt={name} />
        <div className="content">{description}</div>
      </div>
      <StyledMeta>
        <Row className="mx-auto">
          <StyledTitle className="mr-2">{name}</StyledTitle>
          <a
            style={{ margin: "auto 2px" }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGA("Project", `Viewed ${name} Github`)}
          >
            <StyledBtn color="purple">
              <FaGithub className="m-auto" style={{ display: "block" }} />
            </StyledBtn>
          </a>
          <a
            style={{ margin: "auto 2px" }}
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGA("Project", `Viewed ${name} Site`)}
          >
            <StyledBtn color="blue">
              <BsLink45Deg
                className="m-auto"
                style={{ display: "block" }}
                size={18}
              />
            </StyledBtn>
          </a>
        </Row>
        <Row className="mx-auto">
          {techs.map((tech, index) => (
            <StyledTech key={index}>{tech}</StyledTech>
          ))}
        </Row>
      </StyledMeta>
    </StyledCard>
  );
};

export default ProjectCard;
