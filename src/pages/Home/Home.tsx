import React, { useEffect } from "react";
import Introduction from "./Components/Introduction";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import show from "../../styles/show";

const Home: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Introduction />
      <Skills />
      <AboutMe />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  animation: ${show} 2s;
`;
