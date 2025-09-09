// src/components/Footer.tsx
import React from "react";
import styled from "@emotion/styled";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Content>
        <SocialLinks>
          <a href="https://github.com/mahier8" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mahier-sydow-b4679166/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:mahier.sydow8@gmail.com">
            <FaEnvelope />
          </a>
        </SocialLinks>
        <Copy>&copy; {new Date().getFullYear()} Mahier Sydow. All rights reserved.</Copy>
      </Content>
    </FooterContainer>
  );
};

export default Footer;

// Styled components
const FooterContainer = styled.footer`
  background-color: #0984e3;
  color: #fff;
  padding: 15px 15px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  margin-bottom: 5px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: #0984e3;
      transform: scale(1.2);
    }
  }
`;

const Copy = styled.p`
  font-size: 0.9rem;
  color: #cbd5e1;
`;
