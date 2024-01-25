import React from "react";
import styled from "styled-components";

interface IconWrapperProps {
  path: string;
  alt: string;
}

const Icon: React.FC<IconWrapperProps> = (props) => {
  return (
    <IconWrapper>
      <img src={`./Images/${props.path}.png`} alt={props.alt} />
    </IconWrapper>
  );
};

export default Icon;

const IconWrapper = styled.div`
  width: 8rem;
  height: 4rem;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;
