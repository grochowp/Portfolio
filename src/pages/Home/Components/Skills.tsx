import React from "react";
import styled from "styled-components";
import Icon from "./IconWrapper";
import { Link } from "react-router-dom";
import { SKILLS_KNOW, SKILLS_LEARN } from "../../../../public/utils";

const Skills: React.FC = () => {
  return (
    <Container>
      <Section>
        <article>
          <h1>Technologies I`ve used</h1>

          <Technologies>
            {SKILLS_KNOW.map((skill) => (
              <Link
                to={`/projects?proj=${skill.path}`}
                aria-label="project path"
              >
                <Icon
                  key={skill.path}
                  path={skill.path}
                  alt={skill.alt}
                  haveProjects={skill.haveProjects}
                />
              </Link>
            ))}
          </Technologies>

          <h2>Click on icon to go to projects</h2>
        </article>
        <article>
          <h1>Technologies I want to learn</h1>
          <Technologies>
            {SKILLS_LEARN.map((skill) => (
              <Icon
                key={skill.path}
                path={skill.path}
                alt={skill.alt}
                haveProjects={skill.haveProjects}
              />
            ))}
          </Technologies>
        </article>
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
  max-width: 2130px;
  margin: auto;
`;

const Section = styled.section`
  background-color: ${(props) => props.theme.componentsBackground};
  height: max-content;
  min-height: 20rem;
  transition: 1s;
  width: 96%;
  max-width: 1920px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  gap: 1rem;


  h2 {
    color: ${(props) => props.theme.color};
    font-family: "Istok Web", sans-serif;
    font-weight: 100;
    font-size: 0.75rem;
    margin: 1rem 0 1rem 0;
  }

  @media (max-width: 900px) {
    background-color: transparent;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 1s;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 35%;
      left: 101%;
      height: 30%;
      width: 1px;
      background-color: ${(props) => props.theme.color};
    }

    &:not(:first-child)::before {
      display: none;
    }

    @media (max-width: 900px) {
      background-color: ${(props) => props.theme.componentsBackground};
      border-radius: 10px;

      &::before {
        content: none;
      }
    }
  }


  h1{
    font-family: "Istok Web", sans-serif;
    font-size: 1.75rem;

    text-align: center;
    margin: 3rem 1rem 2.5rem 1rem;
    color: ${(props) => props.theme.color};

    @media (max-width: 900px) {
      margin: 2rem 0 1rem 0;
  }
`;

const Technologies = styled.div`
  width: 75%;
  justify-content: center;
  height: max-content;
  display: flex;
  color: ${(props) => props.theme.color};
  flex-wrap: wrap;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
