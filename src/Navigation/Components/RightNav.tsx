import React from "react";
import styled from "styled-components";
import Icon from "./ChangeTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

interface UlProps {
  open: boolean;
}

interface RightNavProps {
  open: boolean;
  theme: string;
  toggleTheme: () => void;
}

const RightNav: React.FC<RightNavProps> = (props) => {
  return (
    <Ul open={props.open}>
      <Icon onClick={() => props.toggleTheme()} top="1.4rem" right="3rem">
        {props.theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </Icon>
      <div
        style={{
          marginTop: "10rem",
        }}
      >
        <Button>Home</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
      </div>
    </Ul>
  );
};

export default RightNav;

const Ul = styled.ul<UlProps>`
  transition:1s;
  list-style: none;
  flex-flow: row nowrap;
  display: none;
  border-left: 2px solid ${(props) => props.theme.color};

  @media (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.pageBackground};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -1rem;
    right: 0;
    height: 100vh;
    width: 200px;
    width: 30%
    padding-top: 3.5rem;
  }
`;

const Button = styled.button`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  height: 3rem;
  width: 80%;
  transition: 1s;
  background-color: ${(props) => props.theme.componentsBackground};
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 10px;
`;
