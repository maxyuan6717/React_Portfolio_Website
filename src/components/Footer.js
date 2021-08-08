import React from "react";
import { Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import styled from "styled-components";
import { getSocials } from "../util/constants";
import { StyledText } from "./styledcomponents";
import { trackGA } from "../util/functions";

const StyledContainer = styled(Col)`
  padding: 0;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const StyledIcon = styled.a`
  padding: 5px;
  border: 1px solid black;
  border-radius: 20px;
  transition: 0.3s;
  border-color: ${({ color, theme }) => theme[color]};
  color: ${({ color, theme }) => theme[color]};
  margin: 0 0.5rem;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
    color: ${({ color, theme }) => theme[color]};
  }
`;

const StyledName = styled.span`
  color: ${({ theme }) => theme.blue};
`;

function Footer() {
  return (
    <StyledContainer>
      <FadeInSection section="footer">
        <Row className="mx-auto justify-content-center">
          {getSocials(16).map((social, index) => (
            <StyledIcon
              href={social.href}
              color={social.color}
              title={social.title}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              onClick={() =>
                trackGA(
                  "Socials",
                  `${
                    social.title === "Email"
                      ? "Send Email"
                      : `Viewed ${social.title}`
                  }`
                )
              }
            >
              {social.icon}
            </StyledIcon>
          ))}
        </Row>
      </FadeInSection>
      <Row className="mx-auto mt-2 justify-content-center">
        <StyledText size="16">
          <FadeInSection>
            Designed and Developed by <StyledName>Max Yuan</StyledName>
          </FadeInSection>
        </StyledText>
      </Row>
    </StyledContainer>
  );
}

export default Footer;
