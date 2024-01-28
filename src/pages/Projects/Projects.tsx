import styled from "styled-components";
import { SKILLS_KNOW, PROJECTS } from "../../services/utils";
import Icon from "../Home/Components/IconWrapper";
import { useSearchParams } from "react-router-dom";
import ProjectText from "./Components/ProjectText";
import { useEffect, useState } from "react";

const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isWindowWide, setIsWindowWide] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const selected = searchParams.get("proj");

  const showProjects = (skill: string) => {
    setSearchParams({ proj: skill });
  };

  const showAllProjects = () => {
    setSearchParams({ proj: "all" });
  };

  return (
    <Container>
      <article>
        {SKILLS_KNOW.map((skill) => (
          <Icon
            key={skill.path}
            path={skill.path}
            alt={skill.alt}
            haveProjects={skill.haveProjects}
            onClick={() => showProjects(skill.path)}
            isSelected={skill.path === selected}
            margin={"1rem 1.2rem"}
          />
        ))}

        <h3 onClick={showAllProjects}>Show all</h3>
      </article>

      {PROJECTS.filter(
        (project) =>
          selected === "all" ||
          !selected ||
          !isWindowWide ||
          project.tech.some((skill) => skill === selected)
      ).map((project, index) => (
        <Project key={project.name} className={index % 2 !== 0 ? "even" : ""}>
          {index % 2 ? (
            <>
              <ProjectText project={project}></ProjectText>
              <Image>
                <img src={`${project.image.path}`} alt="Opis obrazu" />
              </Image>
            </>
          ) : (
            <>
              <Image>
                <img src={`${project.image.path}`} alt="Opis obrazu" />
              </Image>
              <ProjectText project={project}></ProjectText>
            </>
          )}
        </Project>
      ))}
    </Container>
  );
};

export default Projects;

const Container = styled.section`
  margin-top: 5.6rem;
  height: max-content;
  min-height: calc(100vh - 9rem);
  width: 100vw;
  max-width: 2130px;
  margin: auto;
  margin-top: 5.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.pageBackground};
  transition: 1s;
  color: ${(props) => props.theme.color};

  article:first-child {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin: 5rem 0;
    background-color: ${(props) => props.theme.componentsBackground};
    position: relative;
    transition: 1s;
    max-width: 2130px;
    border-radius: 10px;

    &::before {
      content: "";
      position: absolute;
      top: 30%;
      left: 75%;
      height: 40%;
      width: 1px;
      background-color: ${(props) => props.theme.color};
      transition: 1s;
    }

    @media (max-width: 900px) {
      margin: 0.5rem 0;

      span,
      h3,
      &::before {
        display: none;
      }
    }
  }

  div {
    &:hover {
      filter: none;
    }
  }

  h3 {
    margin: 0 2rem 0 5rem;
    font: 500 1.5rem "Inter", sans-serif;
    cursor: pointer;
  }
`;

const Project = styled.article`
  max-width: 1920px;
  width: 90vw;
  display: flex;
  gap: 10rem;
  margin-bottom: 10rem;
  justify-content: center;
  div {
    display: flex;
    align-items-center;
    width: 90%;
    max-width: 700px;
    max-height: 25rem;
  }

  @media (max-width: 900px) {
    margin-bottom: 5rem;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    border-bottom: 2px solid ${(props) => props.theme.color};

    &.even {
      flex-direction: column-reverse;
      /* Dodaj resztę stylów specyficznych dla parzystych elementów */
    }
  
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  transition: 1s;
  img {
    min-width: 500px;
    width: 80%;
    height: 100%;
    min-height: 300px;

    @media (max-width: 1200px) {
      height: 80%;
      min-width: 400px;
      width: 100%;
    }

    @media (max-width: 600px) {
      min-width: 0;
      max-width: 100%;
      min-height: 0;
    }
  }
`;
