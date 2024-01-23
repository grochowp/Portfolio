import React from "react";
import Introduction from "./Introduction";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

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
