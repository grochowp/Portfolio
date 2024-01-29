import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Contact: React.FC = () => {
  return (
    <Container>
      <article>
        <Info>
          <section>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <div>
              <h2>E-mail</h2>
              <h4>patgro3@wp.pl</h4>
            </div>
          </section>

          <section>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <h2>Location</h2>
              <h4>Warsaw, Rakowiska (Lubelskie)</h4>
            </div>
          </section>
        </Info>
        <Form></Form>
      </article>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  height: calc(100vh - 3.5rem);
  transition: 1s;
  width: 100%;
  max-width: 2130px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  article {
    margin-top: 5.6rem;
    height: 80%;
    width: 80%;
    display: flex;
    gap: 3rem;
  }
`;

const Info = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  color: ${(props) => props.theme.color};

  section {
    gap: 2rem;
    display: flex;
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

const Form = styled.div`
  width: 70%;
`;
