import React from "react";
import Introduction from "./Components/Introduction";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";

const Home: React.FC = () => {
  return (
    <>
      <Introduction />
      <Skills />
      <AboutMe />
    </>
  );
};

export default Home;
