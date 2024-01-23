import React from "react";
import styled from "styled-components";

const AboutMe: React.FC = () => {
  return <Section>AboutMe</Section>;
};

export default AboutMe;

const Section = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  height: 86vh;
  transition: 1s;
`;
