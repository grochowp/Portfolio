import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_KEY } from "../../../../public/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";

type FormValues = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export const Form = () => {
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
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name")} placeholder="Name" required />

        <input {...register("subject")} placeholder="Subject" required />
      </div>
      <div>
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <textarea
          className="message"
          {...register("message")}
          placeholder="Message"
          required
        />
      </div>
      <button type="submit">
        <FiSend /> Submit
      </button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  margin-top: 2rem;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    gap: 2rem;
    width: 40rem;
    max-width: max-content;
    margin-bottom: 2rem;

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
    font: 300 17px "Poppins", sans-serif;
    color: #f5f5f5;
    background-color: ${(props) => props.theme.componentsBackground};
    border-radius: 10px;
    transition: 1s;
    border: none;
    width: 100vw;
    height: 3.25rem;
    padding: 0;
    padding-left: 1rem;
    font-size: 1rem;

    &::placeholder {
      color: #f5f5f5;
      opacity: 0.75;
    }

    @media (max-width: 650px) {
      width: 70vw;
    }
  }

  .message {
    padding-top: 1rem;
    min-width: clamp(10rem, 39vw, 39rem);

    min-height: 7rem;
    max-height: 10rem;

    @media (max-width: 650px) {
      max-width: 70vw;
    }
  }

  button {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    height: 2.75rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.15rem;
    font-weight: 400;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.color};
    color: ${(props) => props.theme.color};
    align-self: flex-end;
    cursor: pointer;

    transition: 1s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
