// src/components/ScrollHintOrb.tsx
import React from "react";
import Orb from "./Orb";
import { motion } from "framer-motion";

const ScrollHintOrb = () => {
  return (
    

    <div className="absolute bottom-[-12%] left-[-5%] w-[24vw] h-[24vw] flex flex-col items-center justify-center text-center z-30 overflow-hidden">
      <Orb
        hoverIntensity={0.25}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-[Matter] space-y-3 pointer-events-none">
        <p className="text-sm md:text-lg font-semibold">Why am I here?</p>

        {/* Animated Mouse Icon */}
        <div className="flex flex-col items-center justify-center space-y-2 pb-2">
          <div className="w-6 h-10 border-2 rounded-full flex items-center justify-center relative border-white">
            <motion.div
              className="w-1.5 h-1.5 rounded-full absolute top-2 bg-white"
              animate={{ y: [0, 6, 0], opacity: [1, 0.8, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollHintOrb;
