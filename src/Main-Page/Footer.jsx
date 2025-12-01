import React from "react";
import logoImg from "../assets/logoImg.png";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = ({ onNavigate, refs }) => {
  return (
    <footer className="w-full bg-lightprimary text-white rounded-lg shadow-lg px-3 lg:px-[3rem] py-[2rem] ">
      <div className="w-full lg:flex justify-around items-start  font-primaryFont  ">
        <div className="flex flex-col gap-[1.5rem]">
          <img src={logoImg} alt="" className="w-[150px]" />

          <div className="font-primaryFont text-[14px] text-[rgba(235,235,235,0.7)]">
            <p>Helping brands and businesses stand out </p>
            <p>with high-quality websites and web applications.</p>
          </div>
          <ul className="flex flex-col text-[14px] font-primaryFont gap-[5px] text-[rgba(235,235,235,0.9)]">
            <li className="flex items-center gap-[7px]">
              <div className="bg-primaryColor w-[25px] h-[25px] text-center flex justify-center items-center rounded-[5px]">
                <IoCallSharp />
              </div>
              <p>+123 7069531564</p>
            </li>
            <li className="flex items-center gap-[7px]">
              <div className="bg-primaryColor w-[25px] h-[25px] text-center flex justify-center items-center rounded-[5px]">
                <IoLocation />
              </div>
              123 Main St, City, Country
            </li>
            <li className="flex items-center gap-[7px]">
              <div className="bg-primaryColor w-[25px] h-[25px] text-center flex justify-center items-center rounded-[5px]">
                <MdEmail />
              </div>
              <p>princensude@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex w-[1px] h-[220px] bg-white/20"></div>
        <div className="hidden lg:flex flex-col">
          <p className="text-[20px] mb-4">Navigation</p>
          <u className="text-[14px] text-white/20 flex flex-col gap-[10px] ">
            <li
              className="hover:text-white/70 transition-all duration-200 cursor-pointer"
              onClick={() => onNavigate(refs.homeRef)}
            >
              Home
            </li>
            <li
              className="hover:text-white/70 transition-all duration-200 cursor-pointer"
              onClick={() => onNavigate(refs.aboutRef)}
            >
              About us
            </li>
            <li
              className="hover:text-white/70 transition-all duration-200 cursor-pointer"
              onClick={() => onNavigate(refs.portfolioRef)}
            >
              Projects
            </li>
            <li
              className="hover:text-white/70 transition-all duration-200 cursor-pointer"
              onClick={() => onNavigate(refs.serviceRef)}
            >
              Services
            </li>
          </u>
        </div>
        <div className="hidden lg:flex w-[1px]  h-[220px] bg-white/20"></div>
      </div>
      <div className="border-t-[1px] border-[rgba(255,255,255,0.2)] mt-10 flex items-center pt-5 justify-between lg:text-[14px] text-[12px] ">
        <p>&copy; 2024 My Company. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <h2 className="text-[14px] ">Follow Me: </h2>
          <div className="hidden lg:flex gap-1">
            <div>
              <a
                href="https://www.linkedin.com/in/prince-nsude/"
                target="_blank"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/talentdprince/"
                target="_blank"
              >
                <FaInstagramSquare size={25} />
              </a>
            </div>
          </div>
          <div className="lg:hidden flex gap-1">
            <div>
              <a
                href="https://www.linkedin.com/in/prince-nsude/"
                target="_blank"
              >
                <FaLinkedin className="text-[20px]" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/talentdprince/"
                target="_blank"
              >
                <FaInstagramSquare className="text-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
