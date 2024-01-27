import styled from "styled-components";
import { SKILLS_KNOW, PROJECTS } from "../../services/utils";
import Icon from "../Home/Components/IconWrapper";
import { Link, useSearchParams } from "react-router-dom";

const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get("proj");

  const showProjects = () => {};

  const showAllProjects = () => {
    setSearchParams({ proj: "all" });
  };

  return (
    <Container>
      <article>
        {SKILLS_KNOW.map((skill) => (
          <Link to={`/projects?proj=${skill.path}`}>
            <Icon
              key={skill.path}
              path={skill.path}
              alt={skill.alt}
              haveProjects={skill.haveProjects}
              onClick={showProjects}
              isSelected={skill.path === selected}
            />
          </Link>
        ))}

        <h3 onClick={showAllProjects}>Show all</h3>
      </article>

      {PROJECTS.map((project, index) =>
        index % 2 === 0 ? (
          <ProjectLeft key={index}>
            <div>{project.image.path}</div>
            <div>
              <div>{project.name}</div>
            </div>
          </ProjectLeft>
        ) : (
          <ProjectRight key={index}>
            <div>
              <div>{project.name}</div>
            </div>
            <div>{project.image.path}</div>
          </ProjectRight>
        )
      )}
    </Container>
  );
};

export default Projects;

const Container = styled.section`
  margin-top: 5.6rem;
  height: 100vh;
  width: 100vw;
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

    div {
      margin: -1rem;

      &:hover {
        filter: none;
      }
    }

    div:first-child {
      margin-left: 3rem;
    }

    h3 {
      margin: 0 3rem 0 5rem;
      font: 500 1.5rem "Inter", sans-serif;
      cursor: pointer;
    }
  }
`;

const ProjectLeft = styled.article`
  width: 100vw;
  display: flex;
  gap: 3rem;
`;

const ProjectRight = styled.article`
  width: 100vw;
  display: flex;
  gap: 3rem;
`;
