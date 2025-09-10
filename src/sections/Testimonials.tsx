import React from "react";
import styled from "@emotion/styled";
import fastoneLogo from "../assets/images/fastone-logo2.png";
import unisaLogo from "../assets/images/unisa-logo.png";
import truedLogo from "../assets/images/trued-logo.png";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  img: string;
  desc: string;
  featured?: boolean;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Peter Christie",
      role: "Senior Teacher",
      img: fastoneLogo,
      desc: "Mahier brought his energetic, engaging personality and a positive attitude towards language teaching that really resonated with his students.",
    },
    {
      id: 2,
      name: "Sonja Bernard",
      role: "Head of Career Counselling and Academic Development",
      img: unisaLogo,
      desc: "He is a serious person with regards to his career aspirations and put effort into mastering a new set of skills related to interpersonal communication and sensitivity for diversity.",
      featured: true,
    },
    {
      id: 3,
      name: "Won S. Yang",
      role: "CEO of Trued",
      img: truedLogo,
      desc: "He performs at the highest level in instructing different levels of students with excellent reviews from the students and management.",
    },
  ];

  return (
    <Section id="testimonials">
      <Title>Testimonials</Title>
      <CardGrid>
        {testimonials.map((t, idx) => (
          <Card key={idx}>
            <Avatar src={t.img} alt={t.name} />
            <Name>{t.name}</Name>
            <Role>{t.role}</Role>
            <Text>{t.desc}</Text>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
};

export default Testimonials;


const Section = styled.section`
  background-color: #fff;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  overflow-y: auto;

`;

const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: 700;
//   margin-bottom: 40px;

  text-align: center;
  font-size: 3rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;  // smaller but still readable
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // very small devices
  }
`;

const CardGrid = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 250px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Name = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const Role = styled.h4`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #555;

  @media (max-width: 480px) {
    font-size: 0.85rem; // slightly smaller
  }
`;
