import React from "react";
import styled from "styled-components";
import Burger from "./Components/Burger";
import { Link, useLocation } from "react-router-dom";
import ChangeThemeIcon from "../Components/ChangeTheme";

interface NavbarProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const toggleTheme = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };
  const { pathname } = useLocation();

  return (
    <Container>
      <div>
        <Link to="/" aria-label="home path">
          <Title>{"<grochowp.dev />"}</Title>
        </Link>
      </div>
      <div className="navigation">
        <Link to="/" aria-label="home path">
          <Button type="button" className={pathname === "/" ? "active" : ""}>
            Home
          </Button>
        </Link>

        <Link to="/projects" aria-label="project path">
          <Button
            type="button"
            className={pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Button>
        </Link>

        <Link to="/contact" aria-label="contact path">
          <Button
            type="button"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Button>
        </Link>

        <div>
          <ChangeThemeIcon toggleTheme={toggleTheme} theme={props.theme} />
        </div>
      </div>
      <Burger toggleTheme={toggleTheme} theme={props.theme} />
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.componentsBackground};
  color: ${(props) => props.theme.color};
  display: flex;
  width: 100vw;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }

  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    div {
      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  @media (min-width: 2130px) {
    justify-content: center;
    gap: 85rem;
  }
`;

const Title = styled.h1`
  position: relative;
  bottom: 0.1rem;
  margin-left: 2rem;
  font-size: 1.75rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #f5f5f5;
  transition: 1s;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  border: none;
  opacity: 0.5;
  background-color: ${(props) => props.theme.componentsBackground};
  color: #f5f5f5;
  cursor: pointer;
  transition: background-color 1s, color 1s;

  &.active {
    font-weight: 400;
    opacity: 1;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
