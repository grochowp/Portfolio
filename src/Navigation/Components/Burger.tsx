import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

interface StyledBurgerProps {
  open: boolean;
}

const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 20;
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.color};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface BurgerProps {
  theme: string;
  toggleTheme: () => void;
}

const Burger: React.FC<BurgerProps> = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} toggleTheme={toggleTheme} theme={theme} />
    </>
  );
};

export default Burger;
