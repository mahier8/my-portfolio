// src/sections/Portfolio.tsx
import React from "react";
import styled from "@emotion/styled";
// import coffee_menu from "../assets/portfolio-images/coffee_menu.jpg";
// import univeristy_image from "../assets/portfolio-images/univeristy_image.jpg";
// import old_portfolio from "../assets/portfolio-images/old_portfolio.jpg";
import cafe_le_quick_image from "../assets/portfolio-images/cafe-le-quick-image2.png";
import quick_university_image from "../assets/portfolio-images/quick_university_image2.png";
import portfolio_image from "../assets/portfolio-images/portfolio_image.png";

import { SiReact, SiHtml5, SiTypescript, SiJavascript, SiCss3, SiVite, SiReactrouter, SiFramer, SiAxios, SiSwiper  } from "react-icons/si";
import hollys_logo from "../assets/logos/hollys_logo.gif";
import mammoth_coffee_logo from "../assets/logos/mammoth_coffee_logo.webp";
import mega_coffee_logo from "../assets/logos/mega_coffee_logo.png";
import the_liter_logo from "../assets/logos/the_liter_logo.png";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  technologies?: React.ReactNode[];
  confidential?: boolean;
}

interface WorkProject {
  id: string;
  title: string;
  description: string;
  logo: string;
  link?: string;
  confidential?: boolean;
}

// Example project data
const projects: Project[] = [
  {
    id: "1",
    title: "Cafe-le-Quick",
    description: "A responsive coffee ordering app built with TypeScript, Jotai, Emotion, Framer Motion, Axios, Swiper.js focusing on mobile-first design and user experience.",
    imageUrl: cafe_le_quick_image,
    link: "https://cafe-le-quick.netlify.app/",
    technologies: [<SiVite key="vite" />, <SiTypescript key="ts" />, <SiReactrouter key="react_router" />, <SiFramer key="framer" />, <SiAxios key="axios" />, <SiSwiper key="swiper" />],
  },
  {
    id: "2",
    title: "Quick University",
    description: "A full-featured university admin app built with TypeScript, Jotai, Emotion, Framer Motion streamlining course and student management.",
    imageUrl: quick_university_image,
    link: "https://quick-university.netlify.app/",
    technologies: [<SiVite key="vite" />, <SiTypescript key="ts" />, <SiReactrouter key="react_router" />, <SiFramer key="framer" />, <SiAxios key="axios" />],
  },
  {
    id: "3",
    title: "Legacy (previous portfolio)",
    description: "A look back at my earlier work and projects from my previous portfolio.",
    imageUrl: portfolio_image,
    link: "http://www.mahiersydow.com",
    technologies: [<SiReact key="react" />, <SiJavascript key="js" />, <SiHtml5 key="css" />, <SiCss3 key="css" />],
  },
];

// Work Projects
const workProjects: WorkProject[] = [
  {
    id: "4",
    title: "The Liter",
    description: "Fully developed customer-facing coffee ordering app, as well as admin dashboard for store management, inventory tracking, and sales reporting.",
    link: "https://the-liter.com/", 
    confidential: false,
    logo: the_liter_logo,
  },
  {
    id: "5",
    title: "Mega Coffee",
    description: "Developed parts of customer-facing coffee ordering app, as well as admin dashboard for store management, inventory tracking, and sales reporting.",
    link: "https://www.mega-mgccoffee.com/#mega", 
    confidential: false,
    logo: mega_coffee_logo,
  },
    {
    id: "6",
    title: "Mammoth Coffee",
    description: "Developed parts of customer-facing coffee ordering app, as well as admin dashboard for store management, inventory tracking, and sales reporting.",
    link: "https://mmthcoffee.com/", 
    confidential: false,
    logo: mammoth_coffee_logo,
  },
    {
    id: "7",
    title: "Holly's Coffee",
    description: "Developed CRM for replinishing in-store stock. Confidential internal project.",
    link: "https://www.hollys.co.kr/", 
    confidential: false,
    logo: hollys_logo,
  },
];

// Styled components
const PortfolioContainer = styled.section`
  padding: 80px 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 50px 15px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem); /* scales with viewport */
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;  // smaller but still readable
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // very small devices
  }
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(20px, 3vw, 50px);
`;

const CardLink = styled.a<{ confidential?: boolean }>`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  width: clamp(250px, 30%, 400px);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${({ confidential }) => confidential ? "0 5px 10px rgba(0,0,0,0.05)" : "0 5px 15px rgba(0,0,0,0.1)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: ${({ confidential }) => confidential ? "default" : "pointer"};

  &:hover {
    transform: ${({ confidential }) => confidential ? "none" : "translateY(-10px) scale(1.03)"};
    box-shadow: ${({ confidential }) => confidential ? "0 5px 10px rgba(0,0,0,0.05)" : "0 10px 25px rgba(0,0,0,0.15)"};
  }
`;

const Image = styled.img`
  width: 100%;
  height: clamp(200px, 25vw, 350px);
  object-fit: cover;
`;

const Content = styled.div`
  padding: clamp(15px, 2vw, 25px);
`;

const Title = styled.h3`
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 700;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  color: #555;
`;

const TechIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  svg {
    font-size: 1.25rem; /* adjust size */
    color: #0984e3;     /* or set per icon */
    transition: transform 0.2s ease;
  }

  svg:hover {
    transform: scale(1.2);
  }
`;

const Divider = styled.div`
  padding: 30px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; // space between logo and title
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain; // keeps logo proportions
  margin-bottom: 10px;
`;



const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer id="portfolio">

      <SectionTitle>Work Projects</SectionTitle>
        <CardsGrid>
          {workProjects.map(project => (
            <CardLink
              key={project.id}
              href={project.link || "#"}
              target={project.confidential ? undefined : "_blank"}
              rel={project.confidential ? undefined : "noopener noreferrer"}
              confidential={project.confidential}
            >
              <Content>
                <TitleContainer>
                  <Title>{project.title}</Title>
                  <LogoImage src={project.logo} alt={`${project.title} logo`} />
                </TitleContainer>      
                <Description>{project.description}</Description>
              </Content>
            </CardLink>
          ))}
        </CardsGrid>

      <Divider />

      <SectionTitle>Personal Projects</SectionTitle>
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
                  {project.technologies && <TechIcons>{project.technologies}</TechIcons>}

              </Content>
            </CardLink>
          ))}
        </CardsGrid>




    </PortfolioContainer>
  );
};

export default Portfolio;
