import React from "react";
import styled from "styled-components";

interface IconWrapperProps {
  path: string;
  alt: string;
  haveProjects: boolean;
  onClick?: () => void;
  isSelected?: boolean;
}

const Icon: React.FC<IconWrapperProps> = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  const isSelected = props.isSelected === undefined ? true : props.isSelected;

  return (
    <IconWrapper
      projects={props.haveProjects.toString()}
      isSelected={isSelected.toString()}
    >
      <img
        onClick={handleClick}
        src={`./Images/${props.path}.png`}
        alt={props.alt}
      />
    </IconWrapper>
  );
};

export default Icon;

interface StyledIconWrapperProps {
  projects: string;
  isSelected: string;
}

const IconWrapper = styled.div<StyledIconWrapperProps>`
  transition: 1s;
  margin: 1rem 2.5rem;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  filter: ${(props) =>
    props.isSelected === "true" ? "none" : "grayscale(100%)"};
  cursor: ${(props) => (props.projects === "true" ? "pointer" : "default")};
`;
