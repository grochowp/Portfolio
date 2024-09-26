import React from "react";
import styled from "styled-components";
import ChangeThemeIcon from "../../Components/ChangeTheme";
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
    <BurgerMenu open={props.open}>
      <div style={{ marginTop: "2.45rem", marginLeft: "1.5rem" }}>
        <ChangeThemeIcon toggleTheme={props.toggleTheme} theme={props.theme} />
      </div>
      <div
        style={{
          marginTop: "5rem",
        }}
      >
        <Link to="/" aria-label="home path">
          <Button type="button">Home</Button>
        </Link>

        <Link to="/projects" aria-label="project path">
          <Button type="button">Projects</Button>
        </Link>

        <Link to="/contact" aria-label="contact path">
          <Button type="button" style={{ marginRight: "5rem" }}>
            Contact
          </Button>
        </Link>
      </div>
    </BurgerMenu>
  );
};

export default RightNav;

const BurgerMenu = styled.div<UlProps>`
  transition: 1s;
  flex-flow: row nowrap;
  display: none;
  border-left: 1px solid ${(props) => props.theme.color};

  @media (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.componentsBackground};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -1rem;
    right: 0;
    height: 100vh;
    width: 200px;
  }
`;

const Button = styled.button`
  margin: 1rem 1rem;
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  height: 3rem;
  width: 80%;
  transition: 1s;
  background: none;
  color: #f5f5f5;
  border-radius: 10px;
  border: none;
`;
