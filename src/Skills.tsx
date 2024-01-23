import React from "react";
import styled from "styled-components";

const Skills: React.FC = () => {
  return (
    <Container>
      <Section>Skills</Section>
    </Container>
  );
};

export default Skills;

const Container = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  height: max-content;
  transition: 1s;
  width: 100%;
  max-width: 2440px;
  margin: auto;
`;

const Section = styled.article`
  background-color: ${(props) => props.theme.componentsBackground};
  height: 25rem;
  transition: 1s;
  width: 95%;
  max-width: 1920px;
  margin: auto;
`;
