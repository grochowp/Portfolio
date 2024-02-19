import React from "react";
import styled from "styled-components";

interface IconWrapperProps {
  path: string;
  alt: string;
  haveProjects: boolean;
  onClick?: () => void;
  isSelected?: boolean;
  margin?: string;
}

const Icon: React.FC<IconWrapperProps> = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  const isSelected = props.isSelected === undefined ? true : props.isSelected;
  const margin = props.margin === undefined ? "" : props.margin;

  return (
    <IconWrapper
      projects={props.haveProjects.toString()}
      isSelected={isSelected.toString()}
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
}

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
    width: 100%;
    height: 100%;
  }
`;
