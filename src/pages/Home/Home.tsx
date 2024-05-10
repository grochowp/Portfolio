import React, { useEffect } from "react";
import Introduction from "./Components/Introduction";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls up after subpage changes
  }, [pathname]);

  return (
    <>
      <Introduction />
      <Skills />
      <AboutMe />
    </>
  );
};

export default Home;
