// src/components/Hero.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/hero.css";
import video from "../assets/search-vid-cut.mp4";
import Blob from "./Blob";
import ScrollHintOrb from "./ScrollHintOrb";

const Hero: React.FC = () => {
  // const blobRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const blob = blobRef.current!;
    const videoContainer = videoContainerRef.current!;
    const button = buttonRef.current!;
    const title = titleRef.current!;

    let allowRotation = true;
    const onMouseMove = (e: MouseEvent) => {
      // 3D tilt video
      if (!allowRotation) return;
      const rect = videoContainer.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      gsap.to(videoContainer, {
        rotateX: -20 * dy,
        rotateY: 20 * dx,
        duration: 0.5,
        ease: "power1.out",
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    // --- Button hover & click ---
    let btnPlayed = false;
    const onHover = () => {
      gsap.to(button, { width: 170, height: 46 });
      gsap.fromTo(".text", { y: 9 }, { y: -8 });
      gsap.fromTo("#text-static", { opacity: 1 }, { opacity: 0 });
      gsap.fromTo("#text-reveal", { opacity: 0 }, { opacity: 1 });
      if (!btnPlayed) {
        gsap.fromTo("#purple", { scale: 0 }, { scale: 1 });
        gsap.fromTo("#turquois", { scale: 0 }, { scale: 1, delay: 0.1 });
        gsap.fromTo("#yellow", { scale: 0 }, { scale: 1, delay: 0.2 });
        btnPlayed = true;
      }
    };
    const onOut = () => {
      gsap.to(button, { width: 180, height: 50 });
      btnPlayed = false;
    };

    button.addEventListener("mouseover", onHover);
    button.addEventListener("mouseout", onOut);
    button.addEventListener("click", () => {
      // replay animation
      title.querySelectorAll(".word").forEach((word, wi) => {
        Array.from(word.children).forEach((char, ci) =>
          gsap.fromTo(
            char,
            { opacity: 0, x: 0 },
            {
              opacity: 1,
              x: -300,
              ease: "elastic.out(1.1, 0.7)",
              duration: 1.2,
              delay: wi * 0.2 + ci * 0.03,
            }
          )
        );
      });
      gsap.fromTo(
        [button, videoContainer],
        { scale: 0 },
        {
          scale: 1,
          ease: "elastic.out(1, 0.8)",
          duration: 0.8,
          delay: 0.4,
          onStart: () => {
            allowRotation = false;
          },
          onComplete: () => {
            allowRotation = true;
          },
        }
      );
    });

    // --- Initial pop-in ---
    (() => {
      title.querySelectorAll(".word").forEach((word, wi) => {
        Array.from(word.children).forEach((char, ci) =>
          gsap.fromTo(
            char,
            { opacity: 0, x: 0 },
            {
              opacity: 1,
              x: -300,
              ease: "elastic.out(1.1, 0.7)",
              duration: 1.2,
              delay: wi * 0.2 + ci * 0.03,
            }
          )
        );
      });
      gsap.fromTo(
        [button, videoContainer],
        { scale: 0 },
        {
          scale: 1,
          ease: "elastic.out(1, 0.8)",
          duration: 0.8,
          delay: 0.4,
          onStart: () => {
            allowRotation = false;
          },
          onComplete: () => {
            allowRotation = true;
          },
        }
      );
    })();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      button.removeEventListener("mouseover", onHover);
      button.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div className="hero-container">
      <Blob />
      <ScrollHintOrb />

      <main className="absolute w-full h-full flex justify-center items-center perspective-[2000px] select-none">
        <div className="relative rounded-[40px] w-[580px] h-[520px]">
          <div
            id="video-container"
            ref={videoContainerRef}
            className="transform-style-preserve-3d"
          >
            <video
              poster="/assets/general/_webpTransform/ezgif.com-gif-maker.webp"
              src={video}
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
        </div>

        <div
          id="title"
          ref={titleRef}
          className="absolute flex flex-col items-center pointer-events-none"
        >
          <span className="word">
            <span className="char">B</span>
            <span className="char">r</span>
            <span className="char">u</span>
            <span className="char">t</span>
            <span className="char">e</span>
            <span className="char" />
            <span className="char" />
            <span className="char" />
            <span className="char" />
            <span className="char" />
          </span>
          <span className="word">
            <span className="char">F</span>
            <span className="char">o</span>
            <span className="char">r</span>
            <span className="char">c</span>
            <span className="char">e</span>
          </span>
          <span className="word">
            <span className="char">L</span>
            <span className="char">e</span>
            <span className="char">a</span>
            <span className="char">r</span>
            <span className="char">n</span>
            <span className="char">i</span>
            <span className="char">n</span>
            <span className="char">g</span>
            <span className="char" />
          </span>
        </div>

        <button
          id="replay"
          ref={buttonRef}
          className="absolute translate-x-[220px] -translate-y-[5px] h-[50px] w-[180px] bg-yellow rounded-[30px] flex items-center justify-center flex-col cursor-pointer"
        >
          <span id="purple" />
          <span id="turquois" />
          <span id="yellow" />
          <span className="text" id="text-static">
            Get certified now
          </span>
          <span className="text" id="text-reveal">
            Get certified now
          </span>
        </button>
      </main>
    </div>
  );
};

export default Hero;
