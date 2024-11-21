import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MY_DATA } from "../../../../public/utils";

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

  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };
  return (
    <>
      <Section>
        <Intro>
          <h1>Hi!</h1>
          <h2>
            I`m <strong>{MY_DATA.name}</strong>,<br /> a Frontend Developer
          </h2>
          <h3>{MY_DATA.introduction}</h3>

          <div className="buttons">
            <button
              className="button-fill"
              onClick={() => handleNavigation("projects")}
            >
              Projects
            </button>

            <button
              className="button-outline"
              onClick={() => handleNavigation("contact")}
            >
              Contact me
            </button>
          </div>
        </Intro>

        <span onClick={moveUser}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
        <Image />
      </Section>
    </>
  );
};

export default Introduction;

const Section = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  min-height: 50rem;
  height: 100vh;
  max-height: 65rem;
  transition: 1s;

  max-width: 2130px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 6rem 0 2rem 0;
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

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const Image = styled.div`
  background-image: url("../images/meEg.webp");
  border-radius: 300px;
  background-size: cover;
  background-position: center;
  height: 35rem;
  aspect-ratio: 1/1.5;

  @media (max-width: 900px) {
    height: 25rem;
  }
`;

const Intro = styled.div`
  color: ${(props) => props.theme.color};
  max-width: 40rem;
  font-family: "Poppins", sans-serif;

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

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 400;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    strong {
      color: #f1460b;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .buttons {
    display: flex;
    margin-top: 1rem;
    gap: 1rem;
  }

  button {
    padding: 0 1.5rem;
    height: 2.75rem;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme.color};
    cursor: pointer;

    transition: 1s;
    &:hover {
      transform: scale(1.05);
    }

    &.button-fill {
      background-color: #f1460b;
      border: none;
    }
    &.button-outline {
      border: 1px solid ${(props) => props.theme.color};
      background-color: transparent;
    }
  }
`;
