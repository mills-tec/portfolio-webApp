import React from "react";
import logoImg from "../assets/logoImg.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = ({ onNavigate, refs }) => {
  const quickLinks = [
    { label: "Home",      ref: refs.homeRef },
    { label: "About",     ref: refs.aboutRef },
    { label: "Portfolio", ref: refs.portfolioRef },
    { label: "Services",  ref: refs.serviceRef },
    { label: "Contact",   ref: refs.contactRef },
  ];

  const services = [
    "Web Development",
    "UI / UX Design",
    "E-commerce Platforms",
    "App Maintenance",
  ];

  return (
    <footer className="w-full bg-white border-t border-borderLight px-4 lg:px-[3rem] pt-12 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">

        {/* Brand */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <img src={logoImg} alt="T-Prince Technology" className="w-[130px]" />
          <p className="font-sans text-[14px] text-textBody leading-relaxed max-w-[240px]">
            Helping brands stand out with modern, high-performance web products.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a href="https://github.com/mills-tec"           target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub    size={20} className="text-textMuted hover:text-textHead transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/prince-nsude/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin  size={20} className="text-textMuted hover:text-accent  transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com/talentdprince/"  target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} className="text-textMuted hover:text-pink-500 transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-sans font-semibold text-[14px] text-textHead mb-4 uppercase tracking-wider">Quick Links</p>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map(({ label, ref }) => (
              <li key={label}>
                <button
                  onClick={() => onNavigate(ref)}
                  className="font-sans text-[14px] text-textBody hover:text-accent transition-colors duration-150 bg-transparent border-0 cursor-pointer text-left"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="font-sans font-semibold text-[14px] text-textHead mb-4 uppercase tracking-wider">Services</p>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s} className="font-sans text-[14px] text-textBody">{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans font-semibold text-[14px] text-textHead mb-4 uppercase tracking-wider">Contact</p>
          <ul className="flex flex-col gap-2.5">
            <li className="font-sans text-[14px] text-textBody">+234 706 953 1564</li>
            <li className="font-sans text-[14px] text-textBody">princensude6@gmail.com</li>
            <li className="font-sans text-[14px] text-textBody">Lagos, Nigeria</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-borderLight pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-textMuted font-sans">
        <p>&copy; {new Date().getFullYear()} T-Prince Technology. All rights reserved.</p>
        <p>Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
