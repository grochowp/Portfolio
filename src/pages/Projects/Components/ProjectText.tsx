import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../../Home/Components/IconWrapper";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { Project, SKILLS_KNOW } from "../../../../public/utils";
import { CiUser } from "react-icons/ci";

interface ProjectProps {
  project: Project;
}

const ProjectText: React.FC<ProjectProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Text isExpanded={isExpanded}>
      <div className="details">
        <h2>
          {props.project.name}{" "}
          {props.project.collaboration && (
            <a
              href={props.project.collaboration.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${props.project.collaboration.name} live link`}
            >
              <CiUser />
              <h3>{props.project.collaboration.name}</h3>
            </a>
          )}
        </h2>
        <button onClick={handleExpand}>Details</button>
      </div>
      <h4>{props.project.description}</h4>
      <Media isExpanded={isExpanded}>
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
          {props.project.links.live && (
            <a
              style={{ marginRight: "1rem" }}
              href={props.project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${props.project.name} live link`}
            >
              <FontAwesomeIcon icon={faEarthEurope} />
            </a>
          )}
          <a
            href={props.project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${props.project.name} github link`}
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
  isExpanded: boolean;
}

const Text = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;

  .details {
    justify-content: space-between;
    width: 100%;
  }

  h2 {
    transition: 1s;
    margin: 1rem 0 0 0;
    font: 500 2rem "Poppins", sans-serif;
    min-width: 10rem;
    display: flex;
    gap: 1rem;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: ${(props) => props.theme.color};

      h3 {
        font: 300 1rem "Poppins", sans-serif;
      }
      svg {
        height: 1.5rem;
        cursor: pointer;
      }
    }

    @media (max-width: 550px) {
      font-size: 1.4rem;
    }
  }

  button {
    height: 3rem;
    width: 7rem;
    margin-top: 0.5rem;
    border-radius: 10px;
    background-color: transparent;
    color: ${(props) => props.theme.color};
    border: 1px solid ${(props) => props.theme.color};
    transition: 1s;
    opacity: 1;
    font: 600 1rem "Poppins", serif;

    @media (min-width: 551px) {
      opacity: 0;
    }
  }

  h4 {
    font-size: 1.25rem;
    min-height: 10rem;
    height: max-content;
    width: 100%;
    display: flex;
    max-width: 45rem;
    font: 300 17px "Inter", serif;

    @media (max-width: 1200px) {
      font-size: 1.2vw;
    }
    @media (max-width: 900px) {
      font-size: 1.15rem;
    }
    @media (max-width: 550px) {
      display: ${(props) => (props.isExpanded ? "flex" : "none")};
      min-height: max-content;
      font-size: 1rem;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    text-align: justify;
  }

  @media (max-width: 550px) {
    margin-bottom: ${(props) => (props.isExpanded ? 0 : "1rem")};
  }
`;

const Media = styled.section<StyledProps>`
  height: 3rem;
  align-items: center;
  display: flex;
  width: 85%;
  justify-content: space-between;
  transition: 1s;

  @media (max-width: 550px) {
    display: ${(props) => (props.isExpanded ? "flex" : "none")};
    font-size: 2.5vw;
  }

  span {
    display: flex;

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
        width: 2rem;
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
