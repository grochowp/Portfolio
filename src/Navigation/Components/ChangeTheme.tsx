import React from "react";
import styled from "styled-components";

interface IconProps {
  top?: string;
  right?: string;
  display?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const StyledIcon = styled.span<IconProps>`
  position: relative;
  width: 1rem;
  top: ${(props) => props.top || "0.4rem"};
  font-size: 2.25rem;
  margin-left: 50px;
  right: ${(props) => props.right || "3rem"};
  cursor: pointer;
  @media (max-width: 900px) {
    display: ${(props) => props.display || ""};
  }
`;

const ChangeThemeIcon: React.FC<IconProps> = ({
  top,
  right,
  display,
  children,
  onClick,
}) => {
  return (
    <StyledIcon top={top} right={right} display={display} onClick={onClick}>
      {children}
    </StyledIcon>
  );
};

export default ChangeThemeIcon;
