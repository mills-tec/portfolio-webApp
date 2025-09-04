import React from "react";
import logoImg from "../assets/logoImg.png";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-white ">
      <div className="w-full flex justify-between items-center">
        <div>
          <img src={logoImg} alt="" className="w-[150px]" />
          <ul className="flex flex-col ">
            <li className="flex items-center gap-[10px]">
              <IoLocation />
              123 Main St, City, Country
            </li>
            <li className="flex items-center gap-[10px]">
              <MdEmail />
              princensude@gmail.com
            </li>
          </ul>

          <div></div>
        </div>

        <u>
          <li>About us</li>
          <li>misstions</li>
          <li></li>
        </u>
      </div>
      <p>&copy; 2024 My Company. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
