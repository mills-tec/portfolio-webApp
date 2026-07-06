import React from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiGit, SiJavascript,
} from "react-icons/si";

const stack = [
  { name: "React",        Icon: SiReact,        color: "#61DAFB" },
  { name: "Next.js",      Icon: SiNextdotjs,    color: "#111114" },
  { name: "TypeScript",   Icon: SiTypescript,   color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss,  color: "#06B6D4" },
  { name: "JavaScript",   Icon: SiJavascript,   color: "#F7DF1E" },
  { name: "Node.js",      Icon: SiNodedotjs,    color: "#5FA04E" },
  { name: "MongoDB",      Icon: SiMongodb,      color: "#47A248" },
  { name: "Git",          Icon: SiGit,          color: "#F05032" },
];

const Skills = () => (
  <div className="w-full border-y border-borderLight bg-white py-4 overflow-hidden">
    {/* duplicated for seamless loop */}
    <div className="flex gap-10 marquee-track whitespace-nowrap">
      {[...stack, ...stack].map(({ name, Icon, color }, i) => (
        <div key={i} className="flex items-center gap-2 text-textBody font-sans font-medium text-[14px]">
          <Icon size={17} style={{ color }} className="shrink-0" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
