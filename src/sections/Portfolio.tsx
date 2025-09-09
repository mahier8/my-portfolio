// src/sections/Portfolio.tsx
import React from "react";
import styled from "@emotion/styled";
import coffee_menu from "../assets/portfolio-images/coffee_menu.jpg";
import univeristy_image from "../assets/portfolio-images/univeristy_image.jpg";
import old_portfolio from "../assets/portfolio-images/old_portfolio.jpg";


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
    title: "Cafe-le-Quick",
    description: "A responsive coffee ordering app built with TypeScript, focusing on mobile-first design and user experience.",
    imageUrl: coffee_menu,
    link: "https://cafe-le-quick.netlify.app/",
  },
  {
    id: "2",
    title: "Quick University",
    description: "A full-featured university admin app built with TypeScript, streamlining course and student management.",
    imageUrl: univeristy_image,
    link: "https://quick-university.netlify.app/",
  },
  {
    id: "3",
    title: "Legacy (previous portfolio)",
    description: "A look back at my earlier work and projects from my previous portfolio.",
    imageUrl: old_portfolio,
    link: "http://www.mahiersydow.com",
  },
];

// Styled components
const PortfolioContainer = styled.section`
  padding: 80px 20px;
  background-color: #f7f7f7;
  min-height: 100vh; /* ensures at least full screen but can grow */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h2`
  // text-align: center;
  // font-size: 2.5rem;
  // font-weight: 700;
  // margin-bottom: 40px;
  // color: #0984e3;

  text-align: center;
  font-size: 3rem;
  margin-bottom: 40px;
`;

// const CardsGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 50px;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 350px;
//   object-fit: cover;
// `;

const Image = styled.img`
  width: 100%;
  height: clamp(200px, 25vw, 350px); /* min 200px, scales with viewport width, max 350px */
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

// const CardLink = styled.a`
//   text-decoration: none;
//   color: inherit;
//   display: inline-block;
//   width: 350px;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 5px 15px rgba(0,0,0,0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-10px) scale(1.03);
//     box-shadow: 0 10px 25px rgba(0,0,0,0.15);
//   }
// `;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3vw; /* gap scales with viewport width */
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  width: clamp(250px, 30%, 400px); /* min 250px, preferred 30% of container, max 400px */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
`;

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer id="portfolio">
      <SectionTitle>My Projects</SectionTitle>
        <CardsGrid>
          {projects.map(project => (
            <CardLink
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={project.imageUrl} alt={project.title} />
              <Content>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
              </Content>
            </CardLink>
          ))}
        </CardsGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
