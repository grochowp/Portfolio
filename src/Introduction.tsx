import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Introduction: React.FC = () => {
  const moveUser = () => {
    const sectionHeight = window.innerHeight;

    const currentIndex = Math.floor(window.scrollY / sectionHeight);

    const targetScrollPosition = (currentIndex + 1) * sectionHeight - 100;

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
          <FontAwesomeIcon icon={faCircleDown} />
        </MoveDown>
      </Section>
    </>
  );
};

export default Introduction;

const Section = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  height: 100vh;
  min-height: 960px;
  transition: 1s;
  max-width: 2440px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const Image = styled.div`
  background-image: url("../images/ja.png");
  border-radius: 300px 120px 300px 120px;
  background-size: cover;
  background-position: center;
  height: 30rem;
  width: 40rem;
  margin-left: 5rem;
  background-color: red;
`;

const Intro = styled.div`
  color: ${(props) => props.theme.color};
  height: 28rem;
  width: 40rem;
  margin-right: 5rem;
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
  left: 20rem;
  top: 5rem;
  transition: 1s;

  &:hover {
    top: 4.5rem;
    left: 20.5rem;
    box-shadow: -4px 4px 8px ${(props) => props.theme.bodyColor};
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-family: "Inika", serif;
`;

const Description = styled.h3`
  font-family: "Istok Web", sans-serif;
  font-weight: 100;
  font-size: 1.3rem;
`;

const MoveDown = styled.span`
  position: absolute;
  top: 92.5%;
  left: 49%;
  height: 3rem;
  width: 3rem;
  font-size: 3rem;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.color};
  cursor: pointer;
`;
