// src/sections/Portfolio.tsx
import React from "react";
import styled from "@emotion/styled";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

// Example project data
const projects: Project[] = [
  {
    id: "1",
    title: "My Portfolio Website",
    description: "A personal portfolio to showcase my projects using React and Emotion.",
    imageUrl: "/assets/portfolio-images/portfolio1.jpg",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    id: "2",
    title: "Todo App",
    description: "A simple Todo app with state management and dynamic UI updates.",
    imageUrl: "/assets/portfolio-images/portfolio2.jpg",
  },
  {
    id: "3",
    title: "E-commerce Demo",
    description: "A demo e-commerce site built with React, showcasing product listing and cart.",
    imageUrl: "/assets/portfolio-images/portfolio3.jpg",
  },
];

// Styled components
const PortfolioContainer = styled.section`
  padding: 80px 20px;
  background-color: #f7f7f7;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #0984e3;
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer id="portfolio">
      <SectionTitle>My Projects</SectionTitle>
      <CardsGrid>
        {projects.map(project => (
          <Card key={project.id}>
            <Image src={project.imageUrl} alt={project.title} />
            <Content>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
            </Content>
          </Card>
        ))}
      </CardsGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
