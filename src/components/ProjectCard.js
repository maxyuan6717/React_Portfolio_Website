import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { FaGithubAlt } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { StyledTech } from "./styledcomponents";

const StyledCard = styled.div`
  width: ${({ width }) => `${width}px`};
  border-radius: 8px;
  padding: 0px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  // background-color: white;
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
    // color: ${({ theme }) => theme.blue_color};
    color: white;
  }

  &:hover {
    .bg-img {
      transition: transform 0.4s, filter 0.2s linear;
      transform: scale(1.5);
      filter: grayscale(100%) blur(5px) brightness(60%);
    }
    .content {
      transition: opacity 0.5s ease-in-out 0.1s;
      opacity: 1;
    }
  }

  // .flipcard {
  //   position: relative;
  //   -webkit-perspective: 1000;
  //   perspective: 2000;
  //   width: 100%;
  //   height: ${({ height }) => `${height}px`};

  //   .back,
  //   .front {
  //     width: 100%;
  //     position: relative;
  //     -webkit-transition: all 0.8s cubic-bezier(0.5, 1.2, 0.5, 1.2);
  //     transition: all 0.8s cubic-bezier(0.5, 1.2, 0.5, 1.2);

  //     transform-style: preserve-3d;

  //     -webkit-backface-visibility: hidden;
  //     backface-visibility: hidden;
  //     border-radius: 8px;
  //   }

  //   .back {
  //     transform-style: preserve-3d;
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //     bottom: 0;
  //     z-index: -1;
  //     transform: rotateY(-180deg);
  //     background-color: #e0ecff;
  //   }

  //   .front {
  //     z-index: 10;
  //     background-image: url(${({ src }) => src});
  //     height: ${({ height }) => `${height}px`};
  //     background-size: cover;
  //     background-position: center;
  //   }

  //   .content {
  //     -webkit-transform: translateZ(50px);
  //     transform: translateZ(50px);
  //     padding: 15px;
  //   }
  // }
  // &:hover {
  //   .flipcard {
  //     .back {
  //       transform: rotateY(0deg);
  //       z-index: 10;
  //     }

  //     .front {
  //       transform: rotateY(180deg);
  //       z-index: -1;
  //     }
  //   }
  // }
`;

const StyledTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 40px;
`;

const StyledLink = styled.span`
  padding: 8px;
  border-radius: 30px;
  border: 1px solid;
  height: 30px;
  line-height: 14px;
  margin: auto 0;
`;

const StyledBtn = styled.span`
  padding: 5px;
  border: 1px solid black;
  border-radius: 20px;
  transition: 0.3s;
  height: 30px;
  width: 30px;
  display: flex;
  color: ${({ color, theme }) => (color === "blue" ? theme.blue_color : color)};
  border-color: ${({ color, theme }) =>
    color === "blue" ? theme.blue_color : color};
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
  const width = 600;
  return (
    <StyledCard src={img_src} width={width} height={(width * 10.5) / 20}>
      {/* <div className="flipcard">
        <div className="front" />
        <div className="back">
          <div className="content">{description}</div>
        </div>
      </div> */}
      <div className="image-container">
        <img className="bg-img" src={img_src} width="100%" />
        <div className="content">{description}</div>
      </div>
      <StyledMeta>
        <Row className="mx-auto">
          <StyledTitle className="mr-2">{name}</StyledTitle>
          <a style={{ margin: "auto 2px" }} href={github}>
            <StyledBtn color="purple">
              <FaGithubAlt className="m-auto" style={{ display: "block" }} />
            </StyledBtn>
          </a>
          <a style={{ margin: "auto 2px" }} href={site}>
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
          {techs.map((tech) => (
            <StyledTech>{tech}</StyledTech>
          ))}
        </Row>
      </StyledMeta>
    </StyledCard>
  );
};

export default ProjectCard;
