import React from "react";
import styled from "styled-components";

const AboutMe: React.FC = () => {
  return (
    <Section>
      <article>
        <Description>
          <h2>ABOUT ME</h2>
          <h1>aspiring front-end React Developer from Warsaw in Poland</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor lacus luctus accumsan tortor. Neque viverra justo nec
            ultrices dui sapien eget. Vel pretium lectus quam id leo. In cursus
            turpis massa tincidunt dui ut.
          </h4>
        </Description>
        <Details>
          <div>
            <h3>NAME</h3>
            <p>Patryk Grochowski</p>
          </div>
          <div>
            <h3>EDUCATION</h3>
            <p>WIT Academy in Warsaw</p>
          </div>
          <div>
            <h3>EMAIL</h3>
            <p>patgro3@wp.pl</p>
          </div>
          <div>
            <h3>EMPLOYMENT</h3>
            <p>najak</p>
          </div>
        </Details>
      </article>
      <Photos>
        <img src="../images/ja.png" alt="Opis obrazu" />
        <img src="../images/ja.png" alt="Opis obrazu" />
        <img src="../images/ja.png" alt="Opis obrazu" />
      </Photos>
    </Section>
  );
};

export default AboutMe;

const Section = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.color};
  transition: 1s;
  height: max-content;
  min-height: 60rem;
  height: 66vh;
  max-width: 2130px;
  width: 100%;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;

  article {
    width: 40%;
    height: 30rem;
  }

  article:first-child {
    width: 40%;
    height: 50%;
    margin: 0 0 0 5vw;
  }

  article:last-child {
    display: flex;
    align-items: center;
    margin: 3rem 5vw 0 0;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;

    article {
      width: 100%;
    }

    article:first-child {
      width: 75%;
      height: 50%;

      div {
        margin-top: 2rem;
      }
    }
  }
`;

const Description = styled.div`
  h2 {
    color: blue;
    font: 100 1.5rem "Koulen", sans-serif;
    margin: 0;
    transition: 1s;
  }

  h1 {
    font: 700 2.25rem "Lalezan", sans-serif;
    margin: 0;
    width: 90%;
    transition: 1s;
  }

  h4 {
    width: 80%;
    font: 500 1rem "Inter", sans-serif;
    transition: 1s;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }

    h4 {
      font-size: 0.75rem;
    }
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-areas:
    "top-left top-right"
    "bottom-left bottom-right";

  div {
    width: 13rem;
    height: 6rem;

    font: 500 1rem "Kreon", serif;
  }

  div h3 {
    margin-bottom: 0.5rem;
    transition: 1s;
  }

  div p {
    margin-top: 0.5rem;
    transition: 1s;
  }

  @media (max-width: 900px) {
    div {
      height: 2.5rem;
    }

    div h3 {
      margin-bottom: 0rem;
    }

    div p {
      margin-top: 0rem;
    }
  }

  @media (max-width: 500px) {
    grid-template-areas:
      "top-left"
      "top-right"
      "bottom-left"
      "bottom-right";
  }
`;

const Photos = styled.article`
  img {
    &:first-child {
      object-fit: cover;
      object-position: left;
    }

    &:nth-child(2) {
      object-fit: cover;
      object-position: center;
    }

    &:last-child {
      object-fit: cover;
      object-position: right;
    }
    margin: 0 1%;
    width: 33%;
    min-width: 5rem;
    max-height: 35rem;
    height: 25vw;
    filter: blur(3px) opacity(25%);
    transition: 2s;
    border-radius: 10px;

    &:hover {
      transform: translateY(-1rem) scale(1.05);
      filter: none;
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    img {
      filter: none;
      height: 50vw;
      max-height: 20rem;
      min-height: 10rem;

      width: 33%;
      &:first-child {
        object-position: center;
        margin: 2rem 0.5rem 0 1.5rem;
      }

      &:nth-child(2) {
        object-position: center;
        margin: 2rem 0.5rem 0 0;
      }

      &:last-child {
        object-position: center;
        margin: 2rem 0 0 0;
      }

      &:hover {
        transform: none;
        filter: none;
        width: 33%;
      }
    }
  }
`;
