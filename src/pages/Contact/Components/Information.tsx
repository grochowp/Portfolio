import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { MY_DATA } from "../../../../public/utils";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Information = () => {
  return (
    <Info>
      <section>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <div>
          <h2>E-mail</h2>
          <h4>{MY_DATA.email}</h4>
        </div>
      </section>

      <section>
        <span>
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <div>
          <h2>Location</h2>
          <h4>{MY_DATA.location}</h4>
        </div>
      </section>
    </Info>
  );
};

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  color: ${(props) => props.theme.color};

  @media (max-width: 1200px) {
    flex-direction: row;
    gap: 5rem;
    width: 20%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }

  section {
    gap: 2rem;
    display: flex;

    @media (max-width: 1200px) {
      width: 15rem;
    }
  }

  span {
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 15%;
      left: 130%;
      height: 75%;
      width: 1px;
      background-color: ${(props) => props.theme.color};
    }
  }

  div {
    width: 15rem;
  }

  h2 {
    margin: 0;
    font: 600 1.5rem "Inter", serif;
  }

  h4 {
    margin: 0;
    font: 300 1rem "Inter", serif;
  }
`;
