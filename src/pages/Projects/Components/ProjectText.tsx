import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../../Home/Components/IconWrapper";
import { Project, SKILLS_KNOW } from "../../../services/utils";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { useState } from "react";

interface ProjectProps {
  project: Project;
}

const ProjectText: React.FC<ProjectProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Text isExpanded={isExpanded.toString()}>
      <div>
        <h2>{props.project.name}</h2>
        <button onClick={handleExpand}>Details</button>
      </div>
      <h4>{props.project.description}</h4>
      <Media isExpanded={isExpanded.toString()}>
        <span>
          {SKILLS_KNOW.map(
            (skill) =>
              props.project.tech.includes(skill.path) && (
                <Icon
                  key={skill.path}
                  path={skill.path}
                  alt={skill.alt}
                  haveProjects={false}
                  margin={"1rem 0rem"}
                />
              )
          )}
        </span>
        <span>
          <a
            href="https://github.com/grochowp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
      </Media>
    </Text>
  );
};

export default ProjectText;

interface StyledProps {
  isExpanded: string;
}

const Text = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;

  div {
    justify-content: space-between;
    width: 100%;
  }

  h2 {
    transition: 1s;
    font-size: 3rem;
    margin: 1rem 0 0 0;
    font: 600 2.55rem "Inter", serif;
    text-align: ;
    min-width: 10rem;

    @media (max-width: 550px) {
      font-size: 1.6rem;
    }
  }

  button {
    height: 3rem;
    width: 7rem;
    margin-top: 0.5rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme.componentsBackground};
    color: ${(props) => props.theme.color};
    border: none;

    font: 600 1.25rem "Inter", serif;

    @media (min-width: 551px) {
      display: none;
    }
  }

  h4 {
    font-size: 1.25rem;
    min-height: 12rem;
    width: 100%;
    display: flex;
    max-width: 40rem;
    font: 300 17px "Inter", serif;

    @media (max-width: 1200px) {
      font-size: 1.2vw;
    }
    @media (max-width: 900px) {
      font-size: 1rem;
    }
    @media (max-width: 550px) {
      display: ${(props) => (props.isExpanded === "true" ? "flex" : "none")};
      min-height: 0;
      font-size: 3vw;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    text-align: justify;
  }
`;

const Media = styled.section<StyledProps>`
  height: 3rem;
  align-items: center;
  display: flex;
  width: 85%;
  justify-content: space-between;
  transition: 1s;

  span {
    display: flex;
    @media (max-width: 550px) {
      display: ${(props) => (props.isExpanded === "true" ? "flex" : "none")};
      font-size: 3vw;
    }

    a {
      font-size: 2rem;
      background: transparent;
      border: none;

      color: ${(props) => props.theme.color};
      transition: 1s;
      cursor: pointer;

      @media (max-width: 500px) {
        font-size: 1.45rem;
      }
    }

    img {
      width: 2.5rem;
      aspect-ratio: 1/1;
      @media (max-width: 900px) {
        width: 6vw;
      }
      @media (max-width: 550px) {
        width: 8vw;
      }
    }
  }

  @media (max-width: 900px) {
    float: right;
    margin-right: 2rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  @media (max-width: 550px) {
    width: 95%;
    margin-bottom: 0.5rem;
  }
`;