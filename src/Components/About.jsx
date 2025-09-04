import React from "react";
import personalImg from "../assets/WhatsApp Image 2024-10-21 at 08.43.27_0d3a7942.jpg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

import ImgModule from "./common/ImgModule";

const About = ({ btnHover, contactRef, showResume, setShowResume }) => {
  // Initialize AOS for animations
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="w-full flex items-center gap-[1rem] justify-between  !mt-[146px]">
      <div className="w-[40%]" data-aos="fade-right">
        <div className="w-full">
          <ImgModule img={personalImg} Alt="person Img" width="320px" />
        </div>
      </div>

      <div
        className="w-[60%] text-white  p-4 flex flex-col justify-start  items-start "
        data-aos="fade-left"
      >
        <h2 className="font-[Roboto] font-bold text-[30px]">About Me</h2>
        <div>
          <p className="font-[AncizarSerif]  text-[20px] text-[rgba(255,255,255,0.7)]">
            I'm Prince Oluchukwu Nsude, a dedicated Front-End Developer with a
            strong foundation in building responsive and user-centric web
            applications.
          </p>
          <button className="!mt-[10px] cursor-pointer hover:text-[#7911ee] transition-colors duration-300">
            see more
          </button>
        </div>

        <div className=" flex justify-between items-center  gap-[3rem]">
          <button
            className={`cursor-pointer !bg-[#7911ee] w-[140px] h-[40px] rounded-[5px] hover:!bg-transparent border-[1.5px] border-[#7911ee] hover:border-[#7911ee] hover:border-[1.5px] transition-all duration-500 ${
              btnHover.isSecondBtnHovered &&
              "!bg-transparent border-[#7911ee] border-[1.5px] !transition-all duration-500"
            }`}
            onMouseEnter={() => btnHover.setIsFirstBtnHovered(true)}
            onMouseLeave={() => btnHover.setIsFirstBtnHovered(false)}
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            HIRE ME
          </button>

          <div>
            <button
              className={`border-[1.5px] border-[#7911ee] cursor-pointer  w-[140px] h-[40px] rounded-[5px] bg-transparent hover:!bg-[#7911ee] transition-colors duration-500 ${
                btnHover.isFirstBtnHovered &&
                "!bg-[#7911ee] transition-colors duration-500"
              }`}
              onMouseEnter={() => btnHover.setIsSecondBtnHovered(true)}
              onMouseLeave={() => btnHover.setIsSecondBtnHovered(false)}
              onClick={() => setShowResume(!showResume)}
            >
              RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
