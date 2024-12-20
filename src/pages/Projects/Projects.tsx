import styled, { keyframes } from "styled-components";
import Icon from "../Home/Components/IconWrapper";
import { useLocation, useSearchParams } from "react-router-dom";
import ProjectText from "./Components/ProjectText";
import { useEffect, useState } from "react";
import { PROJECTS, SKILLS_KNOW } from "../../../public/utils";
import show from "../../styles/show";

const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isWindowWide, setIsWindowWide] = useState(window.innerWidth > 900);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
  console.log(selected);
  const showProjects = (skill: string) => {
    setSearchParams({ proj: skill });
  };

  const showAllProjects = () => {
    setSearchParams({ proj: "all" });
  };

  return (
    <Container>
      <SelectBar>
        {SKILLS_KNOW.map((skill) => (
          <Icon
            key={skill.path}
            path={skill.path}
            alt={skill.alt}
            haveProjects={skill.haveProjects}
            onClick={() => showProjects(skill.path)}
            isSelected={skill.path === selected}
            margin={"1rem .75rem"}
          />
        ))}

        <h3
          onClick={showAllProjects}
          style={{ opacity: selected === "all" || !selected ? 1 : 0.25 }}
        >
          Show all
        </h3>
      </SelectBar>

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
              <ProjectText project={project} />
              <Image
                src={`./${project.image.path}`}
                alt={`Ikona ${project.name}`}
              />
            </>
          ) : (
            <>
              <Image
                src={`${project.image.path}`}
                alt={`Ikona ${project.image.path}`}
              />
              <ProjectText project={project} />
            </>
          )}
        </Project>
      ))}
    </Container>
  );
};

export default Projects;

const showProjectsLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const showProjectsRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const Container = styled.section`
  height: max-content;
  min-height: calc(100vh - 9rem);
  width: 100vw;
  overflow-x: hidden;
  max-width: 2130px;
  margin: auto;
  margin-top: 5rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.pageBackground};
  transition: 1s;
  color: ${(props) => props.theme.color};
  animation: ${show} 2s;
`;
const SelectBar = styled.article`
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

  span:hover {
    filter: none;
  }

  h3 {
    margin: 0 2rem 0 5rem;
    font: 500 1.5rem "Inter", sans-serif;
    cursor: pointer;
    color: #f5f5f5;
  }

  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 80%;
    height: 40%;
    width: 1px;
    background-color: #f5f5f5;
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
`;

const Project = styled.article`
  max-width: 1920px;
  width: 90vw;
  display: flex;
  gap: 10rem;
  margin-bottom: 10rem;
  justify-content: center;

  div,
  img {
    display: flex;
    width: 90%;
    max-width: 700px;
    max-height: max-content;
    animation: ${showProjectsLeft} 2s ease-in-out;
    @media (max-width: 900px) {
      animation: none;
    }
  }

  &.even {
    div,
    img {
      animation: ${showProjectsRight} 2s ease-in-out;
      @media (max-width: 900px) {
        animation: none;
      }
    }
  }
  @media (max-width: 900px) {
    margin-bottom: 5rem;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    border-bottom: 2px solid ${(props) => props.theme.color};

    &.even {
      flex-direction: column-reverse;
    }
  }
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  transition: 1s;

  margin-top: 2rem;
  min-width: 500px;
  width: 70%;
  height: 80%;
  min-height: 300px;
  transition: 1s;

  @media (max-width: 1200px) {
    height: 80%;
    min-width: 400px;
    width: 100%;
  }

  @media (max-width: 900px) {
    margin-top: 0rem;
  }

  @media (max-width: 550px) {
    margin-top: -1rem;
    min-width: 0;
    max-width: 100%;
    min-height: 0;
  }
`;
