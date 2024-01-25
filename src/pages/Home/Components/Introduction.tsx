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
          <Title>Front-end React Developer</Title>
          <Description>
            Hello, i`m Patryk Grochowski aspiring front-end React Developer from
            Warsaw in Poland
          </Description>

          <Button>Contact me</Button>
        </Intro>

        <MoveDown onClick={moveUser}>
          <FontAwesomeIcon icon={faChevronDown} />
        </MoveDown>
      </Section>
    </>
  );
};

export default Introduction;

const Section = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  height: max-content;
  min-height: calc(100vh - 5.6rem);
  transition: 1s;
  max-width: 2440px;
  margin: auto;
  margin-top: 5.6rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    min-height: 0;
  }
`;

const Image = styled.div`
  background-image: url("../images/ja.png");
  border-radius: 300px 120px 300px 120px;
  background-size: cover;
  background-position: center;
  height: 30rem;
  width: 30vw;
  min-width: 30rem;
  max-width: 45rem;
  background-color: red;
  margin: 2rem;

  @media (max-width: 500px) {
    margin: 2rem 0 -2rem; 0;
    min-width: 18rem;
    width: 80vw;
    height: 25vh;
    max-height: 15rem;
  }
`;

const Intro = styled.div`
  color: ${(props) => props.theme.color};
  height: 30rem;
  width: 33vw;
  min-width: 30rem;
  max-width: 40rem;
  margin: 3rem;

  @media (max-width: 500px) {
    min-width: 20rem;
    height: max-content;
    margin: 1rem;
    min-width: 18rem;
    width: 80vw;
  }
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.componentsBackground};
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
  font-family: "Inter", serif;
  font-weight: 600;
  width: 13rem;
  height: 4rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  float: right;
  right: 1rem;
  top: 5rem;
  transition: 1s;

  &:hover {
    top: 4.5rem;
    box-shadow: 0 4px 8px ${(props) => props.theme.bodyColor};
  }

  @media (max-width: 500px) {
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

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-family: "Inika", serif;
  font-weight: 200;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Description = styled.h3`
  font-family: "Istok Web", sans-serif;
  font-weight: 100;
  font-size: 1.3rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const MoveDown = styled.span`
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

  @media (max-width: 1217px) {
    display: none;
  }
`;
