import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterBar>
      <div>
        <Rights>All Rights Reserved &copy;</Rights>
      </div>
      <div>
        <Icon
          href="https://github.com/grochowp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faLinkedin} />
        </Icon>
        <Icon
          href="https://www.instagram.com/grochu.p/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
      </div>
    </FooterBar>
  );
};

export default Footer;

const FooterBar = styled.footer`
  background-color: ${(props) => props.theme.componentsBackground};
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid ${(props) => props.theme.pageBackground};
  transition: 1s;

  @media (min-width: 1920px) {
    justify-content: center;
    gap: 95rem;
  }
`;

const Rights = styled.p`
  height: 1.2rem;
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  padding: 1rem;
  color: ${(props) => props.theme.color};
  transition: 1s;

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const Icon = styled.a`
  font-size: 2rem;
  background: transparent;
  border: none;
  margin-right: 2rem;
  color: ${(props) => props.theme.color};
  transition: 1s;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
