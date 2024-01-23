import React from "react";
import styled from "styled-components";

const Introduction: React.FC = () => {
  return <Section>Introduction</Section>;
};

export default Introduction;

const Section = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  height: 100vh;
  transition: 1s;
`;
