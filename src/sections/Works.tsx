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
    desc: "I have been developing projects for the past two years. I started my development journey by completing a few certifications with FreeCodeCamp and then moved swiftly to develop a portfolio. I then continued by focusing on front-end development, leading me to specialize in React.",
    img: Seattle,
  },
  {
    id: "2",
    icon: "/assets/icons/icons8-africa-50.png",
    title: "Background",
    desc: "Originally from a psychology an educational background, I taught children and adults in South Korea for 7 years, learning many valuable skills along the way. I am from South Africa and, I have a Bachelor's Degree in Psychology and a Master's Degree in Applied Linguistics.",
    img: rugby_image,
  },
  {
    id: "3",
    icon: "/assets/icons/icons8-soccer-50.png",
    title: "Hobbies",
    desc: "Outside of development and education I spend most of my time with my family or playing football. I have been a Liverpool FC supporter for 30 years, and, with the help of my Wife, we visited Anfield for our honeymoon.",
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
                {/* <img src={slide.icon} alt={slide.title} width={40} height={40} /> */}
                <SlideHeader>{slide.title}</SlideHeader>
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
  min-height: 100dvh;
  overflow-y: auto;

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

  @media (max-width: 768px) {
    font-size: 2rem;  // smaller but still readable
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // very small devices
  }
`;

const Item = styled.div`
  width: 100%;
  max-width: 900px;  /* bigger limit for desktops */
  display: flex;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin: 0 auto; /* center it in the slide */

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 90%; /* shrink card */
  }

  @media (max-width: 480px) {
    max-width: 95%;
    border-radius: 12px;
  }
`;

const Left = styled.div`
  flex: 4;
  padding: 20px;

  p {
    font-size: 1rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 15px;
    text-align: center;

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    p {
      font-size: 0.85rem;
    }
  }
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
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    img {
      max-height: 450px;
      transform: rotate(0); /* ✅ remove tilt on small screens */
    }
  }

  @media (max-width: 480px) {
    img {
      max-height: 250px;
    }
  }
`;

const SlideHeader = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
  align-items: left;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

