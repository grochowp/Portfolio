import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Introduction: React.FC = () => {
  const moveUser = (): void => {
    const sectionHeight: number = window.innerHeight;

    const currentIndex: number = Math.floor(window.scrollY / sectionHeight);

    const targetScrollPosition: number =
      (currentIndex + 1) * sectionHeight - 100;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Section>
        <Image />
        <Intro>
          <h1>Front-end React Developer</h1>
          <h3>
            Hello, i`m Patryk Grochowski, aspiring front-end React Developer
            from Warsaw in Poland
          </h3>

          <button>Contact me</button>
        </Intro>

        <span onClick={moveUser}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </Section>
    </>
  );
};

export default Introduction;

const Section = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  height: calc(100vh - 5.6rem);

  max-height: 88rem;
  transition: 1s;
  max-width: 2130px;
  margin: auto;
  margin-top: 5.6rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    min-height: 0;
  }

  span {
    position: absolute;
    top: 90.5%;
    left: 48.8%;
    height: 3rem;
    width: 3rem;
    font-size: 3rem;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.color};
    cursor: pointer;

    @media (max-width: 1071px) {
      display: none;
    }
  }
`;

const Image = styled.div`
  background-image: url("../images/ja.png");
  border-radius: 300px 120px 300px 120px;
  background-size: cover;
  background-position: center;
  height: 30rem;
  width: 33vw;
  min-width: 30rem;
  max-width: 45rem;
  background-color: red;
  margin: 2rem;
  transition:1s;
  
  @media (min-width: 501px) and (max-width: 1200px) {
    margin: 2rem 0 -2rem 0;
    width: 28rem;
    height: 40vw;
    max-height: 30rem;
    min-height: 20rem;
  }

  @media (max-width: 500px) {
    margin: 2rem 0 -2rem; 0;
    min-width: 18rem;
    width: 80vw;
    height: 30vh;
    max-height: 15rem;
  }
 
`;

const Intro = styled.div`
  color: ${(props) => props.theme.color};
  height: max-content;
  width: 33vw;
  min-width: 30rem;
  max-width: 40rem;
  margin: 3rem;

  @media (max-width: 1200px) {
    min-width: 28rem;
    max-width: 28rem;
    width: 50vw;
  }

  @media (max-width: 500px) {
    margin: 1rem;
    min-width: 18rem;
    width: 80vw;
  }

  h1 {
    font-size: 4rem;
    margin: -4rem 0 1rem 0;
    font-family: "Inika", serif;
    font-weight: 200;
    transition: 1s;

    @media (max-width: 500px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-family: "Istok Web", sans-serif;
    font-weight: 100;
    font-size: 1.3rem;
    transition: 1s;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

  button {
    background-color: ${(props) => props.theme.componentsBackground};
    color: ${(props) => props.theme.color};
     font: 600 1.5rem "Inter", serif;
     width: 13rem;
    height: 4rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    float: right;
    right: 1rem;
    top: 0rem;
    transition: 1s;
    margin-top: 2rem;

    &:hover {
      top: -0.3rem;
      box-shadow: 0 4px 8px ${(props) => props.theme.bodyColor};
    }

    @media (max-width: 500px) {
      margin-top: 0;
      width: 10rem;
      height: 3rem;
      top: 1rem;
      margin-bottom: 2rem;

      &:hover {
        top: 1rem;
        box-shadow: none;
      }
    }
`;
