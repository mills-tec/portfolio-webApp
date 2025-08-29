import React from "react";
import personalImg from "../assets/WhatsApp Image 2024-10-21 at 08.43.27_0d3a7942.jpg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import Resume from "./common/Resume";
import { div } from "motion/react-m";

const About = ({ btnHover, contactRef, showResume, setShowResume }) => {
  const [scaleImg, setScaleImg] = useState(false);

  // Initialize AOS for animations
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="w-full h-[auto]  !px-[1.5rem] flex justify-center items-center  !mt-[146px]">
      <div className="w-[50%] relative h-auto" data-aos="fade-right">
        <div
          className="absolute top-[0%] z-[1]"
          onMouseMove={() => setScaleImg(true)}
          onMouseLeave={() => setScaleImg(false)}
        >
          <div className="w-full overflow-hidden">
            <img
              src={personalImg}
              alt=""
              className={`w-[330px] h-[auto]  
             rounded-[8px] ${
               scaleImg && "scale-[1.03] "
             } transition-transform duration-300`}
            />
          </div>
        </div>

        <div
          className="border-[10px] w-[330px] h-[400px] border-[#7911ee] rounded-[8px] relative left-[10%] !mt-[10%]
                  "
        ></div>
      </div>

      <div
        className="w-[70%]  text-white flex flex-col justify-center items-start gap-[1.5rem]"
        data-aos="fade-left"
      >
        <h2 className="font-[Roboto] font-bold text-[30px]">About Me</h2>
        <div>
          <p className="font-[AncizarSerif] text-[20px] text-[rgba(255,255,255,0.7)]">
            I'm Prince Oluchukwu Nsude, a dedicated Front-End Developer with a
            strong foundation in building responsive and user-centric web
            applications.
          </p>
          <button className="!mt-[10px] cursor-pointer hover:text-[#7911ee] transition-colors duration-300">
            see more
          </button>
        </div>

        <div className="flex justify-between items-center  gap-[3rem]">
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
