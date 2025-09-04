import React from "react";
import logoImg from "../assets/logoImg.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Nav({ refs, activeNav }) {
  const NavList = [
    {
      name: "Home",
      ref: refs.homeRef,
    },
    {
      name: "About Me",
      ref: refs.aboutRef,
    },
    {
      name: "Portfolio",
      ref: refs.portfolioRef,
    },
    {
      name: "Services",
      ref: refs.serviceRef,
    },
    {
      name: "Contact",
      ref: refs.contactRef,
    },
  ];
  const [isOkActive, setIsOkActive] = useState(false);

  // Destop view
  return (
    <>
      <div className={`hidden lg:flex w-full`}>
        <div className="w-full flex">
          <div className="w-[40%] ">
            <img src={logoImg} alt="logoimage" className="w-[200px]" />
          </div>
          <ul className=" w-[60%]  flex justify-between items-center font-[AncizarSerif] text-[17px] ">
            {NavList.map(({ name, ref }, index) =>
              name === "Contact" ? (
                <li
                  key={index}
                  onClick={() => {
                    ref.current.scrollIntoView({ behavior: "smooth" });
                    activeNav.setActiveNav(name);
                  }}
                  className="overflow-hidden p-[1rem]"
                >
                  <button
                    onClick={() => {
                      setIsOkActive(true);
                      setTimeout(() => {
                        setIsOkActive(false);
                      }, 300); // Reset after 300ms
                    }}
                    className={`cursor-pointer !bg-[#7911ee] w-[140px] h-[40px] text-white rounded-[5px] border-[#7911ee] ${
                      activeNav.activeNav === name && "text-white"
                    } hover:!bg-transparent hover:border-[1.5px] hover:border-[#7911ee] hover:!transition-all hover:!duration-500 ${
                      isOkActive ? "scale-[1.09]" : "scale-[1]"
                    } transition-transform duration-100`}
                  >
                    {name}
                  </button>
                </li>
              ) : (
                <li
                  key={index}
                  className={`font-[AncizarSerif]  cursor-pointer  ${
                    activeNav.activeNav === name
                      ? "text-white"
                      : "text-[rgba(255,255,255,0.5)]"
                  }`}
                  onClick={() => {
                    ref.current.scrollIntoView({ behavior: "smooth" });
                    activeNav.setActiveNav(name);
                  }}
                >
                  {name}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <MobileView NavList={NavList} logoImg={logoImg} activeNav={activeNav} />
    </>
  );
}

const MobileView = ({ NavList, logoImg, activeNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden w-full flex justify-between items-center !px-[1rem] !pt-[1rem] ">
      <div className="">
        <img src={logoImg} alt="logoimage" className="w-[160px] " />
      </div>

      <div className="">
        {!isOpen && (
          <IoMenu
            className="text-[2rem] cursor-pointer text-white"
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && (
          <div className="fixed inset-0 z-70 w-full h-full !px-[1rem]">
            <div className="flex justify-between items-center !mt-[1rem] gap-[1rem] ">
              <div className="">
                <img src={logoImg} alt="logoimage" className="w-[160px] " />
              </div>

              <IoClose
                className=" text-[2rem] cursor-pointer  text-white  "
                onClick={() => setIsOpen(false)}
              />
            </div>

            <ul className="w-full flex flex-col justify-center align-center gap-[2rem]  !mt-[2.5rem] text-[1.5rem] !px-[0.8rem]">
              {NavList.map(({ name, ref }, index) => (
                <li
                  key={index}
                  className={`w-full font-[AncizarSerif] cursor-pointer text-white transition-all duration-200 hover:text-[#7911ee] hover:bg-white/10 ${
                    activeNav.activeNav === name && "text-white"
                  }`}
                  onClick={() => {
                    ref.current.scrollIntoView({ behavior: "smooth" });
                    activeNav.setActiveNav(name);
                    setIsOpen(false);
                  }}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
