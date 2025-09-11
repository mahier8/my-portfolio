import React from "react";
import styled from "@emotion/styled";
import profileImg from "../assets/images/CapeTwonPic.jpeg"; // replace with your image

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: linear-gradient(135deg, #f1f5f9, #dbeafe);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: left; 
  }
`;

const TypingSubtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  border-right: 2px solid #0984e3;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
//   animation: typing 3s steps(30, end) forwards, blink 0.8s step-end infinite;
  animation: typing 3s steps(30, end) forwards;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 18ch; /* number of characters in text */
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 0.75rem 1.5rem;
  background-color: #0984e3;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0652dd;
    transform: translateY(-2px);
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Description = styled.p`
  max-width: 400px;
//   margin: 0 auto;
  line-height: 1.6;
  color: #333;
  margin-top: 30px;

  /* Larger screens */
  font-size: 1.1rem; // ~20px

  @media (max-width: 768px) {
    font-size: 1rem; // ~16px
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; // ~14px
      max-width: 300px;
  }
`;

const Intro: React.FC = () => {
  return (
    <Section id="intro">
      <TextContainer>
        <Title>Hi, I'm Mahier</Title>
        <TypingSubtitle>A Full-stack Developer</TypingSubtitle>
        <Description>
          I’m a frontend developer with 3+ years of experience building customer apps and admin platforms for some of Korea’s largest coffee franchises, including Mega Coffee, Mammoth Coffee, The Liter, and Holly's Coffee. I focus on creating seamless user experiences and scalable solutions that help businesses run more efficiently.
        </Description>
        <CTAButton href="#portfolio">View Portfolio</CTAButton>
      </TextContainer>
      <ProfileImage src={profileImg} alt="Mahier Sydow" />
    </Section>
  );
};

export default Intro;