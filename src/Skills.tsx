import React from "react";
import styled from "styled-components";

const Skills: React.FC = () => {
  return <Section>Skills</Section>;
};

export default Skills;

const Section = styled.section`
  background-color: ${(props) => props.theme.componentsBackground};
  height: 35vh;
  transition: 1s;
`;
