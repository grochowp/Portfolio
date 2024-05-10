import React from "react";
import styled, { keyframes } from "styled-components";
import { JUMP_ANIMATION_DURATION } from "../../../../public/utils";

interface IconWrapperProps {
  path: string;
  alt: string;
  haveProjects: boolean;
  onClick?: () => void;
  isSelected?: boolean;
  margin?: string;
  delay?: number;
}

const Icon: React.FC<IconWrapperProps> = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  const isSelected: boolean =
    props.isSelected === undefined ? true : props.isSelected;
  const margin: string = props.margin === undefined ? "" : props.margin;

  return (
    <IconWrapper
      projects={props.haveProjects.toString()}
      isSelected={isSelected.toString()}
      delay={props.delay ?? JUMP_ANIMATION_DURATION}
      margin={margin}
    >
      <img
        onClick={handleClick}
        src={`images/${props.path}.png`}
        alt={props.alt}
      />
    </IconWrapper>
  );
};

export default Icon;

interface StyledIconWrapperProps {
  projects: string;
  isSelected: string;
  margin: string;
  delay: number;
}

const jump = keyframes`
0% {
  bottom: 0rem;
}
50%{
  bottom:1rem;
}
100% {
  bottom: 0rem;
  }
`;

const IconWrapper = styled.span<StyledIconWrapperProps>`
  transition: 1s;
  margin: ${(props) => (props.margin ? props.margin : "1rem 2.5rem")};
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  filter: ${(props) =>
    props.isSelected === "true" ? "none" : "grayscale(100%)"};
  cursor: ${(props) => (props.projects === "true" ? "pointer" : "default")};
  img {
    position: relative;
    animation: ${jump} 3s infinite ${(props) => props.delay}s;
    width: 100%;
    height: 100%;
  }
`;
