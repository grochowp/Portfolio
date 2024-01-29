import React from "react";
import styled from "styled-components";
import ChangeThemeIcon from "./ChangeTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

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
      <ChangeThemeIcon
        onClick={() => props.toggleTheme()}
        top="1.4rem"
        right="3rem"
      >
        {props.theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </ChangeThemeIcon>
      <div
        style={{
          marginTop: "5rem",
        }}
      >
        <Link to="/">
          <Button type="button">Home</Button>
        </Link>

        <Link to="/projects">
          <Button type="button">Projects</Button>
        </Link>

        <Link to="/contact">
          <Button type="button" style={{ marginRight: "5rem" }}>
            Contact
          </Button>
        </Link>
      </div>
    </Ul>
  );
};

export default RightNav;

const Ul = styled.ul<UlProps>`
  transition: 1s;
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
  background: none;
  // background-color: ${(props) => props.theme.componentsBackground};
  color: ${(props) => props.theme.color};
  // border: 1px solid ${(props) => props.theme.color};
  border-radius: 10px;
  border: none;
`;
