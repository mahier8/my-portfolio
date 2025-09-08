import React from "react";
import styled from "@emotion/styled";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = styled.div`
  width: 300px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 0;
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

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
};

export default PortfolioCard;
