import React from "react";

const Skills = () => {
   

    return (
        <div className="w-full flex  !bg-[rgba(121,17,238,0.0)]  items-center  justify-center">
          <div className="marquee w-full flex justify-between !bg-[rgba(120,17,238,0.04)]  gap-[4rem]">
            <span className="  text-white font-bold !bg-[rgba(120,17,238,0.04)] w-full">
              HTML5
            </span>
            <span
              className=" text-white font-bold !bg-[rgba(120,17,238,0.05)] w-full
              "
            >
              CSS
            </span>
            <span className=" text-white font-bold !bg-[rgba(120,17,238,0.05)] w-full">
              JavaScript
            </span>
            <span
              className=" text-white font-bold !bg-[rgba(120,17,238,0.03)] w-full
              "
            >
              React js
            </span>
            <span className=" text-white font-bold !bg-[rgba(120,17,238,0.04)] w-full">
              Tailwind Css
            </span>
          </div>
        </div>
    );
};

export default Skills;