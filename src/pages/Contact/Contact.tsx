import styled from "styled-components";
import { Information } from "./Components/Information";
import { Form } from "./Components/Form";
import show from "../../styles/show";

const Contact: React.FC = () => {
  return (
    <Container>
      <Information />
      <Form />
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
  justify-content: space-evenly;
  align-items: center;
  min-height: 45rem;
  animation: ${show} 2s;

  @media (max-width: 1200px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;
