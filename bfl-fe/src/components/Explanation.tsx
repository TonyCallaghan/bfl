import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/explanation.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Explanation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: 100 },
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
      background: "linear-gradient(to right, #785599, #785599)",
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
      id="page2"
      className="h-[60vh] w-screen relative bg-transparent"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[10vw] w-[60%] items-start text-content font-[Matter]">
        <div className="tracking-[2px] uppercase text-[1vw] sel-wrk">
          <h4>What we offer</h4>
        </div>

        <div className="text-[2.7vw] leading-tight tracking-[-1px] main-txt">
          Preparing for certificates
          <br />
          is f*cking <span id="col2">boring</span>, BFL makes
          <br />
          it easier to <span id="col3"> learn </span>and{" "}
          <span id="col3">
            find
            <br />
            knowledge gaps
          </span>{" "}
          by testing you
          <br />
          with <span id="col1">real exam questions</span>.
        </div>
      </div>
    </section>
  );
};

export default Explanation;
