import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import emailjs from "emailjs-com";
import {
  MY_DATA,
  SERVICE_ID,
  TEMPLATE_ID,
  USER_KEY,
} from "../../services/utils";

type FormValues = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const templateParams = {
      from_name: data.name,
      subject: data.subject,
      from_email: data.email,
      message: data.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_KEY).then(
      () => {
        console.log("Email sent sucessfully");
      },
      (error) => {
        console.log("error", error);
      }
    );
    reset();
  };

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register("name")} placeholder="Name..." required />

            <input {...register("subject")} placeholder="Subject..." required />
          </div>
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email..."
              required
            />
          </div>
          <div>
            <textarea
              className="message"
              {...register("message")}
              placeholder="Message..."
              required
            />
          </div>

          <input type="submit" value="Send" />
        </Form>
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
    @media (max-width: 1200px) {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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

  @media (max-width: 1200px) {
    flex-direction: row;
    gap: 5rem;
    width: 20%;
  }

  section {
    gap: 2rem;
    display: flex;

    @media (max-width: 1200px) {
      width: 15rem;
    }
    @media (max-width: 650px) {
      display: none;
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

const Form = styled.form`
  margin-top: 2rem;
  width: 70%;
  color: ${(props) => props.theme.color};
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    gap: 3rem;
    width: 40rem;
    max-width: max-content;
    margin-bottom: 3rem;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }

  div:first-child {
    width: 40rem;
    border-radius: 130px;
  }

  input,
  textarea {
    font: 300 17px "Inter", serif;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.componentsBackground};
    border-radius: 10px;
    transition: 1s;
    border: none;
    width: 100vw;
    height: 4rem;
    padding: 0;
    padding-left: 1rem;
    font-size: 1.25rem;

    @media (max-width: 650px) {
      width: 70vw;
    }
  }

  .message {
    padding-top: 1rem;
    min-width: 39rem;
    min-height: 7rem;
    max-height: 15rem;
    @media (max-width: 6500px) {
      min-width: 0;
    }
  }

  input[type="submit"] {
    height: 3rem;
    width: 8rem;
    font-size: 1.5rem;
    padding: 0;
    cursor: pointer;
  }
`;
