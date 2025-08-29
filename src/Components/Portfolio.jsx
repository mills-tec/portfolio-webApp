import React from "react";
import { useState } from "react";

// icons
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { motion } from "framer-motion";

const Portfolio = ({ ToggleElem }) => {
  // creating state to manage the active project in the portfolio section
  const [showProject, setShowProject] = useState(true);
  const [showScale, setShowScale] = useState(false);

  return (
    <div>
      <h1 className="font-[Roboto] font-bold text-[30px]" data-aos="fade-right">
        Portfolio
      </h1>

      {/* all projects will go in here  */}
      <div className="w-full flex justify-around  gap-[5rem] !mt-[4rem]">
        <div className=" text-start w-[50%]" data-aos="fade-right">
          <h2 className="text-[30px] font-[Roboto] !mb-[2rem] text-[#7911ee]">
            Project 1
          </h2>
          <div
            onClick={() => setShowProject(!showProject)}
            className="cursor-pointer flex items-end justify-between !shadow-amber-300"
          >
            <h2 className="text-[30px] font-[Roboto] text-white font-bold ">
              Weather App
            </h2>
            {showProject ? (
              <VscChevronDown
                onClick={() => setShowProject(false)}
                className="text-[30px]"
              />
            ) : (
              <VscChevronUp
                onClick={() => setShowProject(true)}
                className="text-[30px]"
              />
            )}
          </div>
          {showProject && (
            <div className="!mt-[1rem]">
              <p className="text-[rgba(255,255,255,0.7)] font-[AncizarSerif] text-[20px]">
                I built a responsive weather application that allows users to
                search for real-time weather data by city. It fetches and
                displays temperature, weather conditions, humidity, and wind
                speed using the OpenWeatherMap API. The interface is
                user-friendly and adapts well to different screen sizes. This
                project helped me strengthen my API integration and asynchronous
                JavaScript skills.
              </p>
              <div className="flex justify-start items-center  gap-[3rem] !mt-[1rem] text-[14px]">
                <button
                  className={`cursor-pointer !bg-[#7911ee] w-[100px] h-[40px] rounded-[5px] hover:!bg-transparent border-[1.5px] border-[#7911ee]  hover:border-[#7911ee] hover:border-[1.5px] transition-all duration-500 ${
                    ToggleElem.isSecondBtnHovered &&
                    "!bg-transparent border-[#7911ee] border-[1.5px] !transition-all duration-500"
                  }`}
                  onMouseEnter={() => ToggleElem.setIsFirstBtnHovered(true)}
                  onMouseLeave={() => ToggleElem.setIsFirstBtnHovered(false)}
                >
                  React Js
                </button>

                <button
                  className={`border-[1.5px] border-[#7911ee] cursor-pointer  w-[110px] h-[40px] rounded-[5px] bg-transparent hover:!bg-[#7911ee] transition-colors duration-500 ${
                    ToggleElem.isFirstBtnHovered &&
                    "!bg-[#7911ee] transition-colors duration-500"
                  }`}
                  onMouseEnter={() => ToggleElem.setIsSecondBtnHovered(true)}
                  onMouseLeave={() => ToggleElem.setIsSecondBtnHovered(false)}
                >
                  Tailwind Css
                </button>

                <a
                  href="https://github.com/mills-tec/weather-app"
                  target="_blank"
                >
                  <button
                    className={`border-[1.5px] border-[#7911ee] cursor-pointer  w-[110px] h-[40px] rounded-[5px] bg-transparent hover:!bg-[#7911ee] transition-colors duration-500 ${
                      ToggleElem.isFirstBtnHovered &&
                      "!bg-[#7911ee] transition-colors duration-500"
                    }`}
                    onMouseEnter={() => ToggleElem.setIsSecondBtnHovered(true)}
                    onMouseLeave={() => ToggleElem.setIsSecondBtnHovered(false)}
                  >
                    Git Hub
                  </button>
                </a>
              </div>

              <div className="!mt-[1.3rem] overflow-hidden">
                <a
                  href="https://weather-app-phi-seven-89.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-[1rem]   cursor-pointer text-[15px] scale-[1] hover:scale-[1.03]  hover:text-[#7911ee] transition-all    duration-300">
                    view project <VscArrowRight />
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
        {/* product Images */}
        <div
          className="w-[35%]"
          onMouseMove={() => setShowScale(true)}
          onMouseLeave={() => setShowScale(false)}
          data-aos="fade-left"
        >
          <div className=" relative h-auto">
            <div className="absolute top-[0%] z-[1] left-[10%] !rounded-[8px]">
              <div className="w-full overflow-hidden">
                <img
                  src={project1}
                  alt="Project 1"
                  className={`w-[350px] h-[400px] rounded-[8px] ${
                    showScale && "scale-[1.07]"
                  } transition-transform duration-300`}
                />
              </div>
            </div>

            <div
              className="border-[10px] w-[350px] h-[400px] border-[#7911ee] rounded-[8px] relative left-[0%] !mt-[10%]
                 "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
