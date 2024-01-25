import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

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
        <Button type="button">Home</Button>
        <Button type="button">Projects</Button>
        <Button type="button">Contact</Button>

        <Icon onClick={toggleTheme}>
          {props.theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </Icon>
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
`;

const Title = styled.h1`
  position: relative;
  bottom: 0.1rem;
  margin-left: 2rem;
  font-size: 1.75rem;
  font-family: "Inter", sans-serif;
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
`;

const Icon = styled.span`
  position: relative;
  top: 0.4rem;
  font-size: 2.25rem;
  margin-left: ${(props) => (props.theme.name === "light" ? "59px" : "50px")};
  margin-right: 3rem;
  cursor: pointer;
`;
