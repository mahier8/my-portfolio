import React from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Anfield from "../assets/images/anfield_background.jpg"; 
import Seattle from "../assets/images/seattle_image.jpg";
// import CapeTwonPic from "../assets/images/CapeTwonPic.jpeg"; 
// import honeymoon_image from "../assets/images/honeymoon_image.jpg";
import rugby_image from "../assets/images/rugby_image.jpg"; 
import beattle_image from "../assets/images//beattle_image.jpg"; 

const slides = [
  {
    id: "1",
    icon: "/assets/icons/icons8-briefcase-50-white.png",
    title: "Career",
    desc: "I have been developing projects for the past two years...",
    img: Seattle,
  },
  {
    id: "2",
    icon: "/assets/icons/icons8-africa-50.png",
    title: "Background",
    desc: "Originally from a psychology and educational background...",
    img: rugby_image,
  },
  {
    id: "3",
    icon: "/assets/icons/icons8-soccer-50.png",
    title: "Hobbies",
    desc: "Outside of development and education I spend most of my time...",
    img: beattle_image,
  },
];

export default function Works() {
  return (
    <WorksContainer id="works">
      <SectionTitle>Background</SectionTitle>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1.2} // shows part of next slide
        spaceBetween={30}    // adds more gap
        centeredSlides={true}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </WorksContainer>
  );
}

// Styled components
const WorksContainer = styled.div`
  width: 100%;
  padding: 60px 0;

/* Swiper arrows */
  .swiper-button-next,
  .swiper-button-prev {
    opacity: 1;
    transition: transform 0.3s ease;
  }

  .swiper-button-next {
    right: 30px; /* move away from the edge */
  }

  .swiper-button-prev {
    left: 30px; /* move away from the edge */
  }

  /* Blink animation for active arrows */
  .swiper-button-next:not(.swiper-button-disabled),
  .swiper-button-prev:not(.swiper-button-disabled) {
    animation: blink 4s infinite;
  }

  @keyframes blink {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0.4; }
  }

  /* Optional: scale on hover */
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.2);
  }


  /* Increase padding on larger screens */
  @media (min-width: 1024px) {
    padding: 80px 0;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 40px;
`;

const Item = styled.div`
  width: 100%; // <-- make it take the slide's width, not full viewport
  max-width: 700px; // optional max width
  display: flex;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
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
