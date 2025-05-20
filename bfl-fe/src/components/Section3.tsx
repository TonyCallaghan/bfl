import React from "react";
import gsap from "gsap";
import SpotlightCard from "../components/SpotlightCard";
import ShinyButton from "../pieces/ShinyButton";
import { FaApple, FaAndroid } from "react-icons/fa";

const Section3: React.FC = () => {
  const handleEnter = () => {
    gsap.to("#blob", {
      background: "linear-gradient(to right, #785599, #9e8548)",
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
      className="h-screen w-screen bg-transparent flex flex-col items-center px-6 py-16"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="w-[60%] flex flex-col gap-10 font-[Matter]">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 self-start ml-6">
          Download the app
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center w-full">
          <SpotlightCard
            spotlightColor="rgba(163, 116, 255, 0.6)"
            className="w-[320px] h-[260px] flex flex-col items-start justify-between gap-4"
          >
            <div className="flex flex-col items-start">
              <FaApple className="text-white text-3xl mb-2" />
              <h3 className="text-white text-xl font-bold">iOS App</h3>
              <p className="text-sm text-gray-400">
                Get the Brute Force Learning experience optimized for iPhone &
                iPad.
              </p>
            </div>
            <ShinyButton className="relative group cursor-not-allowed">
              <a>Download</a>
              <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Work in progress
              </span>
            </ShinyButton>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(21, 240, 209, 0.6)"
            className="w-[320px] h-[260px] flex flex-col items-start justify-between gap-4"
          >
            <div className="flex flex-col items-start">
              <FaAndroid className="text-white text-3xl mb-2" />
              <h3 className="text-white text-xl font-bold">Android App</h3>
              <p className="text-sm text-gray-400">
                Available now on Google Play for your phone and tablet.
              </p>
            </div>
            <ShinyButton className="relative group cursor-not-allowed">
              <a>Download</a>
              <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Work in progress
              </span>
            </ShinyButton>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Section3;
