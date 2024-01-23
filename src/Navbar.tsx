import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const icon = theme === "light" ? 1 : 2;

  return (
    <Nav>
      <div>
        <h1>{"<grochowp.dev />"}</h1>
      </div>
      <div>
        <button type="button">Home</button>
        <button type="button">Projects</button>
        <button type="button">Contact</button>
        <button type="button" onClick={toggleTheme}>
          {icon}
        </button>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.titleColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
