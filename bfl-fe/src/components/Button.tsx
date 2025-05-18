import React from "react";

interface ButtonProps {
  label: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ label, href = "#" }) => {
  return (
    <a
      href={href}
      className="relative inline-block overflow-hidden cursor-pointer no-underline border border-[#A374FF] px-[2vw] py-[1vw] rounded-[5vw] text-white transition-all duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group"
    >
      <span className="relative w-full block">
        <span className="relative overflow-hidden inline-block w-full">
          <p className="relative bottom-0 m-0 z-[2] transition-all duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-3vh]">
            {label}
          </p>
        </span>
        <span className="absolute overflow-hidden h-[3vh] w-full left-0 bottom-0 text-white">
          <p className="absolute left-0 bottom-[-3vh] w-full m-0 opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bottom-[0.6vh] group-hover:opacity-100">
            {label}
          </p>
        </span>
      </span>
    </a>
  );
};

export default Button;
