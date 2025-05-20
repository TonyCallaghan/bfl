import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/explanation.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Explanation2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleEnter = () => {
    gsap.to("#blob", {
      background: "linear-gradient(to right, #785599, #15f0d1)",
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
      ref={containerRef}
      id="page3"
      className="h-[60vh] w-screen relative bg-transparent"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[10vw] w-[60%] items-start text-content font-[Matter]">
        {/* Left side text block */}
        <div className="text-[2.7vw] leading-tight tracking-[-1px] main-txt text-left">
          No videos. No walkthroughs.
          <br />
          If you haven’t studied the material, this <span id="col3">
            site
          </span>{" "}
          is <span id="col2">NOT</span> for you.
        </div>

        {/* Right side heading */}
        <div className="tracking-[2px] uppercase text-[1vw] sel-wrk text-right">
          <h4>What we don't offer</h4>
        </div>
      </div>
    </section>
  );
};

export default Explanation2;
