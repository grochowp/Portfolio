import React from "react";
import styled from "styled-components";

const AboutMe: React.FC = () => {
  return <Section>AboutMe</Section>;
};

export default AboutMe;

const Section = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  height: 90vh;
  min-height: 700px;
  transition: 1s;
  max-width: 2440px;
  margin: auto;
`;
