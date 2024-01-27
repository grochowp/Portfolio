import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Burger from "./Components/Burger";
import ChangeThemeIcon from "./Components/ChangeTheme";
import { Link } from "react-router-dom";

interface NavbarProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const toggleTheme = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };

  return (
    <Nav>
      <div>
        <Title>{"<grochowp.dev />"}</Title>
      </div>
      <div>
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

        <Burger toggleTheme={toggleTheme} theme={props.theme} />

        <ChangeThemeIcon
          onClick={() => toggleTheme()}
          top="0.4rem"
          right="3rem"
          display="none"
        >
          {props.theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </ChangeThemeIcon>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.componentsBackground};
  color: ${(props) => props.theme.color};
  display: flex;
  width: 100vw;
  height: 5.6rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid ${(props) => props.theme.pageBackground};
  z-index: 1;
  transition: background-color 1s, color 1s, border 1s;

  @media (min-width: 1920px) {
    justify-content: center;
    gap: 66rem;
  }
`;

const Title = styled.h1`
  position: relative;
  bottom: 0.1rem;
  margin-left: 2rem;
  font-size: 1.75rem;
  font-family: "Inter", sans-serif;
  transition: 1s;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  margin: 2rem;
  font-size: 1.25rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border: none;
  background-color: ${(props) => props.theme.componentsBackground};
  color: ${(props) => props.theme.color};
  cursor: pointer;
  transition: background-color 1s, color 1s;

  &:hover {
    color: ${(props) => props.theme.colorOnHover};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

// const Menu = styled.
