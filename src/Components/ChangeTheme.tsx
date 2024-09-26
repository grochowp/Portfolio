import React from "react";
import styled from "styled-components";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

interface ThemeProps {
  toggleTheme: () => void;
  theme: string;
}

const ChangeThemeIcon: React.FC<ThemeProps> = ({ toggleTheme, theme }) => {
  return (
    <Theme onClick={toggleTheme}>
      <div className={`dot ${theme}`}>
        {theme === "light" ? <IoSunnyOutline /> : <IoMoonOutline />}
      </div>
    </Theme>
  );
};

export default ChangeThemeIcon;

const Theme = styled.div`
  width: 4.55rem;
  height: 2.25rem;
  background-color: ${(props) => props.theme.pageBackground};
  margin-right: 3rem;
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .dot {
    width: 1.9rem;
    height: 1.9rem;
    background-color: ${(props) => props.theme.color};
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s transform;

    svg {
      width: 1.45rem;
      height: 1.45rem;
      color: ${(props) => props.theme.pageBackground};
    }

    &.light {
      transform: translateX(-16px);
    }

    &.dark {
      transform: translateX(17px);
    }
  }
`;
