import React from "react";
import { useState } from "react";

import project1 from "../assets/project1.png";

import ImgModule from "./common/ImgModule";
import ProjectModule from "./common/ProjectModule";

const Portfolio = ({ ToggleElem }) => {
  // creating state to manage the active project in the portfolio section
  return (
    <div className="w-full">
      <h1
        className="font-[Roboto] font-bold text-[30px] text-center"
        data-aos="fade-right"
      >
        Portfolio
      </h1>

      {/* all projects will go in here  */}
      <div>
        <div className="w-full flex justify-between gap-[0rem] !mt-[4rem]">
          <div className="w-[50%]">
            <ProjectModule
              ToggleElem={ToggleElem}
              description="I built a responsive weather application that allows users to search for real-time weather data by city. It fetches and displays temperature, weather conditions, humidity, and wind speed using the OpenWeatherMap API..."
              techStack={["React Js", "Tailwind CSS"]}
              githubLink="https://github.com/mills-tec/weather-app"
              liveLink="https://weather-app-phi-seven-89.vercel.app/"
            />
          </div>
          {/* product Images */}
          <div className="w-[35%] flex justify-center items-center p-2">
            <ImgModule
              img={project1}
              Alt="weatherApp img"
              liveLink="https://weather-app-phi-seven-89.vercel.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
