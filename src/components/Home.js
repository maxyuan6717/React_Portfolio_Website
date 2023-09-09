import React from "react";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "react-typist/dist/Typist.css";
import avatar from "../images/avatar.jpeg";
import WaterWave from "react-water-wave";
import styled, { keyframes } from "styled-components";
import { StyledLink } from "./styledcomponents";
import { getSocials } from "../util/constants";
import { trackGA } from "../util/functions";

const StyledContainer = styled(Col)`
  padding: 0;
  margin: 0 auto;
  min-height: calc(100vh - 54px);

  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: null;
  }
`;

const StyledContent = styled(Row)`
  padding-top: 23vh;
  margin: 0 auto;

  @media (max-width: 576px) {
    padding-top: 0px;
  }
`;

const StyledName = styled(Row)`
  margin: 0 auto;
  font-size: 80px;
  line-height: 1.2;
  cursor: default;
  font-family: rig-solid-bold-inline, sans-serif;
  font-weight: 700;
  font-style: normal;

  @media (max-width: 576px) {
    justify-content: center;
    font-size: 52px;
  }
`;

export const StyledAnimation = keyframes`
  0% {    
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {    
    transform: translateY(-10px);
    transform-origin: 50% 50%;
    text-shadow: 0 30px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledAnimationRev = keyframes`
  100% {    
    transform: translateY(0);    
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  0% {    
    transform: translateY(-10px);    
    transform-origin: 50% 50%;
    text-shadow: 0 30px 15px rgba(0, 0, 0, 0.3);
  }
`;

const StyledLetter = styled.span`
  -webkit-animation: ${StyledAnimationRev} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${StyledAnimationRev} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  transition: color 0.3s;

  &:hover {
    -webkit-animation: ${StyledAnimation} 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${StyledAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const StyledRoles = styled(Row)`
  margin: 0 auto;
  font-size: 32px;
  @media (max-width: 576px) {
    justify-content: center;
    font-size: 24px;
  }
`;

const StyledAbout = styled.div`
  margin: 0 auto;
  font-size: 24px;
  padding: 1rem 0;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

const StyledIconRow = styled(Row)`
  margin: 0 auto;
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const StyledIcon = styled.a`
  transition: 0.3s;
  padding: 0.5rem 1rem 0.5rem 0;
  color: ${({ theme }) => theme.text[0]};

  &:hover {
    transform: translateY(-6px);
    cursor: pointer;
    color: ${({ color, theme }) => theme[color]};
  }
`;

const StyledAvatar = styled.div`
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
`;

function Home() {
  const letters = ["M", "A", "X", "", "Y", "U", "A", "N"];
  return (
    <StyledContainer>
      <FadeInSection section="home">
        <StyledContent>
          <Col md={8} className="p-0 mb-4">
            <StyledName>
              {letters.map((letter, index) =>
                letter === "" ? (
                  <React.Fragment key={index}>&nbsp;</React.Fragment>
                ) : (
                  <StyledLetter key={index}>{letter}</StyledLetter>
                )
              )}
            </StyledName>

            <StyledRoles>
              I do&nbsp;
              <TypistLoop interval={500}>
                {[
                  "Software Development",
                  "Competitive Programming",
                  "Robotics",
                ].map((text) => (
                  <Typist key={text}>
                    <span style={{ color: "#ff7c7c" }}>{text}</span>
                    .
                    <Typist.Delay ms={1000} />
                    <Typist.Backspace count={text.length + 1} />
                  </Typist>
                ))}
              </TypistLoop>
            </StyledRoles>

            <StyledAbout>
              Hi! I'm a senior studying CS/Econ at Yale. If you want to connect,
              chat, or collaborate on a project, reach out to me at&nbsp;
              <StyledLink
                href="mailto: max.yuan@yale.edu"
                email
                color="rgba(50, 115, 220, 0.2)"
                onClick={() => trackGA("Socials", "Send Email")}
              >
                max.yuan@yale.edu
              </StyledLink>
              .
            </StyledAbout>
            <StyledIconRow>
              {getSocials(32).map((social, index) =>
                index === 0 ? null : (
                  <StyledIcon
                    color={social.color}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    key={index}
                    onClick={() => trackGA("Socials", `Viewed ${social.title}`)}
                  >
                    {social.icon}
                  </StyledIcon>
                )
              )}
            </StyledIconRow>
          </Col>
          <Col md={4} style={{ minHeight: "200px" }}>
            <StyledAvatar>
              <WaterWave
                imageUrl={avatar}
                perturbance={0.02}
                dropRadius={5}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </StyledAvatar>
          </Col>
        </StyledContent>
      </FadeInSection>
    </StyledContainer>
  );
}

export default Home;
