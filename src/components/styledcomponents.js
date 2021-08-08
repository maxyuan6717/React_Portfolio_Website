import styled from "styled-components";
import { Col } from "react-bootstrap";

export const StyledSectionContainer = styled(Col)`
  margin: 25px auto ${({ desktopbot }) => (desktopbot ? desktopbot : "250")}px
    auto;
  padding: 0;

  @media (max-width: 576px) {
    margin: 25px auto ${({ mobilebot }) => (mobilebot ? mobilebot : "75")}px
      auto;
  }
`;

export const StyledSectionHeader = styled(Col)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.blue};
  padding: 0;
`;

export const StyledText = styled.span`
  font-size: ${({ size }) => (size ? `${size}px` : "1rem")};
  color: ${({ secondary, theme }) =>
    secondary ? theme.text[1] : theme.text[0]};
`;

export const StyledLink = styled.a`
  color: ${({ theme, email }) => (email ? theme.blue : theme.text[0])};
  padding: 0px 2px;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: inset 0 -4px 0 ${({ color }) => color};

  &:hover {
    color: ${({ theme, email }) => (email ? theme.blue : theme.text[0])};
    text-decoration: none !important;
    cursor: pointer;
    box-shadow: inset 0 -55px 0 0 ${({ color }) => color};
  }
`;

export const StyledTech = styled.div`
  border: 1px solid ${({ theme }) => theme.blue};
  margin: 0.25rem 0.5rem 0.25rem 0;
  padding: 5px;
  color: ${({ theme }) => theme.blue};
  font-size: 13px;
  border-radius: 5px;
`;
