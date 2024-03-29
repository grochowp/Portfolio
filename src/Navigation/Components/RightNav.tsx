import React from "react";
import styled from "styled-components";
import ChangeThemeIcon from "./ChangeTheme";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

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
      <ChangeThemeIcon
        onClick={() => props.toggleTheme()}
        top="2.5rem"
        right="1.5rem"
      >
        {props.theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
      </ChangeThemeIcon>
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
  border-left: 2px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};

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
  margin: 1rem 1rem;
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  height: 3rem;
  width: 80%;
  transition: 1s;
  background: none;
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  border: none;
`;
