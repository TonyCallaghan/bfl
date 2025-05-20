import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/carousel.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Mockup1 from "../assets/images/Mockup1.png";
import Mockup2 from "../assets/images/Mockup2.png";
import Mockup3 from "../assets/images/Mockup3.png";
import Mockup4 from "../assets/images/Mockup4.png";
import Mockup5 from "../assets/images/Mockup5.png";
import Mockup6 from "../assets/images/Mockup6.png";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { img: Mockup1, color: "#018BCF" },
  { img: Mockup2, color: "#90BFD6" },
  { img: Mockup3, color: "#A374FF" },
  { img: Mockup4, color: "#A374FF" },
  { img: Mockup5, color: "#A374FF" },
  { img: Mockup6, color: "#A374FF" },
];

const SkewedCarousel: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = swiperRef.current?.querySelector(".swiper-wrapper");

    if (!wrapper) return;

    gsap.to(wrapper, {
      x: -100, // subtle horizontal shift
      ease: "none",
      scrollTrigger: {
        trigger: swiperRef.current,
        start: "top bottom", // start when carousel enters view
        end: "bottom top",   // end when it's out of view
        scrub: true,         // ties animation to scroll position
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleEnter = () => {
    gsap.to("#blob", {
      background: "linear-gradient(to right, #785599, #0d9180)",
      duration: 2,
      ease: "power2.inOut",
    });
  };

  const handleLeave = () => {
    gsap.to("#blob", {
      background: "linear-gradient(to right, #785599, #9e8548)",
      duration: 2,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      id="gallery"
      ref={swiperRef}
      className="relative w-screen h-[100vh] pt-[30vh] bg-transparent"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Swiper
        modules={[Pagination]}
        slidesPerView={5}
        centeredSlides
        loop
        spaceBetween={20}
        grabCursor
        className="swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="image" style={{ backgroundColor: slide.color }}>
              <img
                src={slide.img}
                alt={`carousel-${index}`}
                className="zoomed"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SkewedCarousel;
