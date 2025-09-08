// src/sections/Works.tsx
import { useState } from "react";
import styled from "@emotion/styled";

// Slide data
const slides = [
  {
    id: "1",
    icon: "/assets/icons/icons8-briefcase-50-white.png",
    title: "Career",
    desc: "I have been developing projects for the past two years. I started my development journey by completing a few certifications with FreeCodeCamp and then moved swiftly to develop a portfolio. I then continued by focusing on front-end development, leading me to specialize in React.",
    img: "/assets/portfolio-images/Mahier-Sydow-photo.jpg",
  },
  {
    id: "2",
    icon: "/assets/icons/icons8-africa-50.png",
    title: "Background",
    desc: "Originally from a psychology and educational background, I taught children and adults in South Korea for 7 years, learning many valuable skills along the way. I am from South Africa and have a Bachelor's Degree in Psychology and a Master's Degree in Applied Linguistics.",
    img: "/assets/portfolio-images/KakaoTalk_20210706_121610089_02.jpg",
  },
  {
    id: "3",
    icon: "/assets/icons/icons8-soccer-50.png",
    title: "Hobbies",
    desc: "Outside of development and education I spend most of my time with my family or playing football. I have been a Liverpool FC supporter for 30 years, and, with the help of my Wife, we visited Anfield for our honeymoon.",
    img: "/assets/portfolio-images/KakaoTalk_20210706_120748813.jpg",
  },
];

// Styled components
const WorksContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Slider = styled.div<{ currentSlide: number }>`
  display: flex;
  height: 100%;
  transition: all 0.5s ease;
  transform: translateX(-${props => props.currentSlide * 100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: 700px;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 4;
  padding: 20px;
`;

const Right = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 400px;
    transform: rotate(-10deg);
  }
`;

const Arrow = styled.img<{ direction: "left" | "right" }>`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${props => props.direction === "left" ? "left: 20px; transform: rotateY(180deg);" : "right: 20px;"}
  z-index: 10;
  user-select: none;
`;

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
    } else {
      setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
    }
  };

  return (
    <WorksContainer id="works">
      <Slider currentSlide={currentSlide}>
        {slides.map(slide => (
          <Slide key={slide.id}>
            <Item>
              <Left>
                <img src={slide.icon} alt={slide.title} width={40} height={40} />
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
              </Left>
              <Right>
                <img src={slide.img} alt={slide.title} />
              </Right>
            </Item>
          </Slide>
        ))}
      </Slider>
      <Arrow src="/assets/arrow.png" direction="left" onClick={() => handleClick("left")} />
      <Arrow src="/assets/arrow.png" direction="right" onClick={() => handleClick("right")} />
    </WorksContainer>
  );
}
