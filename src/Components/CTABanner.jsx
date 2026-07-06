import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const CTABanner = ({ contactRef }) => (
  <section className="w-full bg-accent py-16 px-6 lg:px-[4rem]">
    <div className="max-w-[900px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
      <div>
        <h2 className="font-sans font-bold text-[36px] lg:text-[44px] text-white leading-tight tracking-tight">
          Let's work together.
        </h2>
        <p className="font-sans text-[16px] text-white/75 mt-2 max-w-[420px]">
          Have a project in mind? I'd love to hear about it — let's build
          something great.
        </p>
      </div>
      <button
        onClick={() => contactRef?.current?.scrollIntoView({ behavior: "smooth" })}
        className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-sans font-bold text-[15px] hover:bg-accentLight transition-colors duration-200 cursor-pointer shrink-0 shadow-lg"
      >
        Start a conversation <HiArrowRight size={17} />
      </button>
    </div>
  </section>
);

export default CTABanner;
