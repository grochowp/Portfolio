import React from "react";
import styled from "styled-components";

interface IconWrapperProps {
  path: string;
  alt: string;
  haveProjects: boolean;
}

const Icon: React.FC<IconWrapperProps> = (props) => {
  const MoveToProjects = (path: string) => {
    console.log(path);
  };

  return (
    <IconWrapper projects={props.haveProjects.toString()}>
      <img
        onClick={
          props.haveProjects ? () => MoveToProjects(props.path) : undefined
        }
        src={`./Images/${props.path}.png`}
        alt={props.alt}
      />
    </IconWrapper>
  );
};

export default Icon;

interface StyledIconWrapperProps {
  projects: string;
}

const IconWrapper = styled.div<StyledIconWrapperProps>`
  transition: 1s;
  margin: 1rem 2.5rem;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.projects === "true" ? "pointer" : "default")};
`;
