import React from "react";
import styled from "styled-components";
import Icon from "./IconWrapper";
import { SkillsKnow, SkillsLearn } from "./utils";

const Skills: React.FC = () => {
  return (
    <Container>
      <Section>
        <Article>
          <Title>Technologies I`ve used</Title>

          <Technologies>
            {SkillsKnow.map((skill) => (
              <Icon key={skill.path} path={skill.path} alt={skill.alt} />
            ))}
          </Technologies>
        </Article>
        <Article>
          <Title>Technologies I want to learn</Title>
          <Technologies>
            {SkillsLearn.map((skill) => (
              <Icon key={skill.path} path={skill.path} alt={skill.alt} />
            ))}
          </Technologies>
        </Article>
      </Section>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  height: max-content;
  transition: 1s;
  width: 100%;
  max-width: 2440px;
  margin: auto;
`;

const Section = styled.section`
  background-color: ${(props) => props.theme.componentsBackground};
  height: max-content;
  min-height: 20rem;
  transition: 1s;
  width: 95%;
  max-width: 1920px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;

  @media (max-width: 900px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

const Article = styled.article`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 40%;
    left: 100%;
    height: 30%;
    width: 1px;
    background-color: ${(props) => props.theme.color};
  }

  &:not(:first-child)::before {
    display: none;
  }

  @media (max-width: 900px) {
    &::before {
      content: "";
      position: absolute;
      top: 115%;
      left: 35%;
      height: 1px;
      width: 30%;
      background-color: #ccc;
    }
  }
`;

const Title = styled.h1`
  font-family: "Istok Web", sans-serif;
  font-size: 1.8rem;

  margin: 3rem 1rem 2.5rem 1rem;
  color: ${(props) => props.theme.color};
`;

const Technologies = styled.div`
  width: 75%;
  justify-content: center;
  height: max-content;
  display: flex;
  color: ${(props) => props.theme.color};
  flex-wrap: wrap;
`;
