import cssVariables from "constants/css";
import styled from "styled-components";

// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html { 
    font-size: 62.5%;
  }
  body {
    font-size: 1.4rem;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyles;

interface IButton {
  width?: string;
  bg?: string;
  color?: string;
  shadow?: string;
}

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  width: ${(props: IButton) => props.width || "20rem"};
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props: IButton) =>
    props.bg || `${cssVariables.colors.yellow}`};
  color: ${(props: IButton) =>
    props.color || `${cssVariables.colors["bg-light"]}`};
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 6px 0
    ${(props: IButton) =>
      props.shadow || `${cssVariables.colors["yellow-dark"]}`};
  transition: 0.2s;

  &:hover {
    box-shadow: 0 8px 0
      ${(props: IButton) =>
        props.shadow || `${cssVariables.colors["yellow-dark"]}`};
    transform: translateY(-2px);
  }
`;
