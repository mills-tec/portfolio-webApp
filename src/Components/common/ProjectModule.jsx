import { useState } from "react";

import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
const ProjectModule = ({
  ToggleElem,
  projectNumber = "Project 1",
  projectName = "Weather App",
  description,
  techStack = [],
  githubLink,
  liveLink,
}) => {
  const [showProject, setShowProject] = useState(true);

  return (
    <div className="w-full text-start" data-aos="fade-right">
      <h2 className="text-[30px] font-[Roboto] !mb-[2rem] text-[#7911ee]">
        {projectNumber}
      </h2>
      <div
        onClick={() => setShowProject(!showProject)}
        className="cursor-pointer flex items-end justify-between !shadow-amber-300"
      >
        <h2 className="text-[30px] font-[Roboto] text-white font-bold ">
          {projectName}
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
            {description}
          </p>
          <div className="flex justify-start items-center  gap-[3rem] !mt-[1rem] text-[14px]">
            {techStack.map((tech, i) => (
              <button
                key={i}
                className={`cursor-pointer border-[1.5px] border-[#7911ee] w-[110px] h-[40px] rounded-[5px] bg-transparent hover:!bg-[#7911ee] transition-all duration-500`}
                onMouseEnter={() =>
                  i === 0
                    ? ToggleElem.setIsFirstBtnHovered(true)
                    : ToggleElem.setIsSecondBtnHovered(true)
                }
                onMouseLeave={() =>
                  i === 0
                    ? ToggleElem.setIsFirstBtnHovered(false)
                    : ToggleElem.setIsSecondBtnHovered(false)
                }
              >
                {tech}
              </button>
            ))}

            <a href={githubLink} target="_blank">
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
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-[1rem]   cursor-pointer text-[15px] scale-[1] hover:scale-[1.03]  hover:text-[#7911ee] transition-all    duration-300">
                view project <VscArrowRight />
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModule;
