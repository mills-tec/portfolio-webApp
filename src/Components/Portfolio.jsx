import React from "react";
import project2 from "../assets/project2.png";
import ProjectModule from "./common/ProjectModule";
import shortlet from "../assets/apartment.png";
import ileelan from "../assets/interiordesgin.png";
import vivanabeauty from "../assets/project5.png";
import tecterminal from "../assets/tecterminal.png";
const projects = [
  {
    name: "Shortlet Apartment",
    category: "Booking Platform",
    placeholderColor: "#E8F2FF",
    liveLink: "https://shortlet-apartment-phi.vercel.app/",
    img: shortlet,
  },
  {
    name: "Ilè Élan Interiors",
    category: "Interior Design Studio",
    placeholderColor: "#F5F0E8",
    liveLink: "https://ile-elaninteriors.vercel.app/",
    img: ileelan,
  },
  {
    name: "AJ Empire",
    category: "E-commerce Platform",
    img: project2,
    liveLink: "https://www.ajempire.store/",
  },
  {
    name: "Viva Nail Spa",
    category: "Beauty & Wellness",
    placeholderColor: "#FFF0F5",
    liveLink: "https://viva-nail-spa.vercel.app/",
    img: vivanabeauty,
  },
  {
    name: "Tecterminal",
    category: "EdTech & School Management",
    placeholderColor: "#FFF0F5",
    liveLink: "https://tecterminal.com/",
    img: tecterminal,
  },
  {
    name: "VTU App",
    category: "Fintech / VTU Platform",
    placeholderColor: "#F0FFF4",
    comingSoon: true,
  },
];

const Portfolio = () => (
  <section className="w-full py-16">
    {/* Heading */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
      <div>
        <span className="inline-flex items-center bg-accentLight text-accent text-[12px] font-semibold px-4 py-1.5 rounded-full mb-4 font-sans">
          My work
        </span>
        <h2 className="font-sans font-bold text-[36px] lg:text-[44px] text-textHead leading-tight tracking-tight">
          My latest work —
          <br />
          <span className="text-accent">live on the web.</span>
        </h2>
      </div>
      <a
        href="https://github.com/mills-tec"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-borderLight text-textBody hover:border-accent hover:text-accent px-5 py-2.5 rounded-full font-sans font-medium text-[14px] transition-all duration-200 bg-white w-fit shrink-0"
      >
        View all on GitHub →
      </a>
    </div>

    {/* Grid — last card spans full width when count is odd */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <div
          key={i}
          className={
            i === projects.length - 1 && projects.length % 2 !== 0
              ? "sm:col-span-2 sm:max-w-[50%]"
              : ""
          }
        >
          <ProjectModule {...p} />
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
