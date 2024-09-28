import React from "react";
import styled from "styled-components";
import { MY_DATA } from "../../../../public/utils";

const AboutMe: React.FC = () => {
  return (
    <Section>
      <article>
        <Description>
          <h1>ABOUT ME</h1>
          <h2>
            {[
              MY_DATA.description[0].toUpperCase(),
              ...MY_DATA.description.slice(1),
            ]}
          </h2>
          <h3>{MY_DATA.aboutMe}</h3>
        </Description>
        <Details>
          <div>
            <h4>NAME</h4>
            <p>
              {MY_DATA.name} {MY_DATA.surname}
            </p>
          </div>
          <div>
            <h4>EDUCATION</h4>
            <p>{MY_DATA.education}</p>
          </div>
          <div>
            <h4>EMAIL</h4>
            <p>{MY_DATA.email}</p>
          </div>
          <div>
            <h4>EMPLOYMENT</h4>
            <p>{MY_DATA.employment}</p>
          </div>
        </Details>
      </article>
      <Photos>
        <img src="/images/myPhoto.webp" alt="my photo" />
        <img src="/images/meEg.webp" alt="My photo in Egypt" />
        <img src="/images/mecat.webp" alt="my photo with cat" />
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
  min-height: 40rem;
  height: max-content;
  max-width: 2130px;
  width: 100%;
  margin: auto;
  align-items: center;
  gap: 2rem;
  display: flex;
  justify-content: center;

  article {
    width: 40rem;
    height: 30rem;
  }

  article:first-child {
    padding-left: 1rem;
    width: 50rem;
    height: 50%;
  }

  article:last-child {
    display: flex;
    align-items: center;
    margin: 0 1rem 0 0;
    height: max-content;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;

    article {
      width: 100%;
    }

    article:first-child {
      width: 90%;
      div {
        margin-top: 2rem;
      }
    }

    article:last-child {
      margin-bottom: 2rem;
    }
  }
`;

const Description = styled.div`
  h1 {
    color: #f1460b;
    font: 400 1.5rem "Roboto", sans-serif;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  h2 {
    font: 500 2.25rem "Roboto", sans-serif;
    margin: 0;
    width: 90%;
  }

  h3 {
    width: 80%;
    font: 400 1rem "Roboto", sans-serif;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    h3 {
      width: 100%;
      font-size: 0.85rem;
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
    height: 4rem;

    font: 500 1rem "Roboto", serif;
  }

  div h4 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  div p {
    font-weight: 600;
    margin-top: 0.5rem;
    opacity: 0.75;
  }

  @media (max-width: 500px) {
    div {
      height: 2.5rem;
    }
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
