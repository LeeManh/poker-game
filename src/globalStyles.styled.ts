import { motion } from "framer-motion";
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
    background-color: black;
  }
`;

export default GlobalStyles;

interface IButton {
  width?: string;
  bg?: string;
  color?: string;
  shadow?: string;
  disabled?: boolean;
}

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  width: ${(props: IButton) => props.width || "20rem"};

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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    box-shadow: 0 8px 0
      ${(props: IButton) =>
        props.shadow || `${cssVariables.colors["yellow-dark"]}`};
    transform: translateY(-2px);
  }
`;
export const Point = styled(motion.div)`
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5,
    -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5,
    -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
`;
export const MoneyBets = styled(motion.div)`
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5,
    -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5,
    -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
`;
