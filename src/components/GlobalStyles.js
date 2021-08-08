import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.surface[0]};
    color: ${({ theme }) => theme.text[0]};
    --blue-color: ${({ theme }) => theme.blue};    
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
