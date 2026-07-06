import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { FaCode, FaMobileAlt, FaShoppingCart, FaWrench } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const services = [
  {
    Icon: FaCode,
    title: "Web Development",
    desc: "Custom, performant websites and web apps built with modern frameworks.",
  },
  {
    Icon: MdOutlineDashboardCustomize,
    title: "UI / UX Design",
    desc: "Clean, intuitive interfaces that users love and convert.",
  },
  {
    Icon: FaShoppingCart,
    title: "E-commerce Platforms",
    desc: "Scalable online stores with secure payment and inventory management.",
  },
  {
    Icon: FaWrench,
    title: "Maintenance & Support",
    desc: "Ongoing updates, bug fixes, and performance monitoring.",
  },
];

/* ── right-side mock dashboard ── */
const MockDashboard = () => {
  const bars = [38, 60, 44, 78, 52, 88, 66];
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-borderLight w-full max-w-[360px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] text-textMuted font-medium uppercase tracking-wider">Overview</p>
          <p className="text-[16px] font-bold text-textHead font-sans">Analytics</p>
        </div>
        <span className="bg-accentLight text-accent text-[11px] font-semibold px-3 py-1 rounded-full">Live</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Revenue",    value: "$12.4k", delta: "↑ 12%", bg: "bg-accentLight",  text: "text-accent" },
          { label: "Users",      value: "1,240",  delta: "↑ 8%",  bg: "bg-emerald-50",   text: "text-emerald-600" },
        ].map(({ label, value, delta, bg, text }) => (
          <div key={label} className={`${bg} rounded-xl p-3`}>
            <p className="text-[11px] text-textMuted font-medium">{label}</p>
            <p className="text-[18px] font-bold text-textHead font-sans leading-tight">{value}</p>
            <p className={`text-[11px] font-semibold ${text}`}>{delta}</p>
          </div>
        ))}
      </div>

      {/* Mini bar chart */}
      <div className="bg-bgBase rounded-xl p-4">
        <p className="text-[11px] text-textMuted font-medium mb-3">Weekly Growth</p>
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all duration-300"
              style={{
                height: `${h}%`,
                backgroundColor: i === 5 ? "#6C4CF1" : "#EEE9FE",
              }}
            />
          ))}
        </div>
      </div>

      {/* Active project pill */}
      <div className="mt-4 flex items-center gap-2 border border-borderLight rounded-xl px-3 py-2.5">
        <span className="w-2 h-2 rounded-full bg-green-500 shrink-0 animate-pulse" />
        <p className="text-[12px] text-textBody font-medium">AJ Empire store — live</p>
        <span className="ml-auto text-[11px] text-accent font-semibold">↗</span>
      </div>
    </div>
  );
};

const Services = () => (
  <section className="w-full py-16">
    {/* Section label */}
    <div className="text-center mb-12">
      <span className="inline-flex items-center gap-2 bg-accentLight text-accent text-[12px] font-semibold px-4 py-1.5 rounded-full mb-4">
        What I offer
      </span>
      <h2 className="font-sans font-bold text-[36px] lg:text-[44px] text-textHead leading-tight tracking-tight">
        What I bring to
        <br />
        <span className="text-accent">your project</span>
      </h2>
    </div>

    {/* Two-column body */}
    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

      {/* Left: service rows */}
      <div className="lg:w-[52%] w-full flex flex-col divide-y divide-borderLight">
        {services.map(({ Icon, title, desc }, i) => (
          <div
            key={i}
            className="flex items-center gap-5 py-5 group cursor-default"
            data-aos="fade-right"
            data-aos-delay={i * 80}
          >
            <div className="bg-accentLight rounded-xl p-3 shrink-0 group-hover:bg-accent transition-colors duration-200">
              <Icon className="text-accent group-hover:text-white transition-colors duration-200" size={20} />
            </div>
            <div className="flex-1">
              <p className="font-sans font-semibold text-[16px] text-textHead">{title}</p>
              <p className="font-sans text-[14px] text-textBody leading-snug mt-0.5">{desc}</p>
            </div>
            <HiArrowRight
              size={18}
              className="text-textMuted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 shrink-0"
            />
          </div>
        ))}
      </div>

      {/* Right: mock dashboard */}
      <div className="lg:w-[44%] w-full flex justify-center" data-aos="fade-left">
        <MockDashboard />
      </div>
    </div>
  </section>
);

export default Services;
