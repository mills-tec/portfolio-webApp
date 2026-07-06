import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name:   "Adaeze Okeke",
    role:   "CEO, AJ Empire",
    quote:  "Prince delivered our e-commerce platform ahead of schedule. The attention to detail in both design and performance was outstanding.",
    stars:  5,
    initials: "AO",
    color:  "bg-purple-100 text-purple-700",
  },
  {
    name:   "Chukwuemeka Eze",
    role:   "Product Manager, TechBridge",
    quote:  "Working with Prince felt like having a senior engineer and a designer in one. Clean code, great communication.",
    stars:  5,
    initials: "CE",
    color:  "bg-blue-100 text-blue-700",
  },
  {
    name:   "Ngozi Adeyemi",
    role:   "Founder, Ilè Élan Interiors",
    quote:  "Our new website has driven a noticeable uptick in client enquiries. Prince understood the brand from day one.",
    stars:  5,
    initials: "NA",
    color:  "bg-emerald-100 text-emerald-700",
  },
];

const Testimonials = () => (
  <section className="w-full py-16">
    <div className="text-center mb-12">
      <span className="inline-flex items-center bg-accentLight text-accent text-[12px] font-semibold px-4 py-1.5 rounded-full mb-4 font-sans">
        Kind words
      </span>
      <h2 className="font-sans font-bold text-[36px] lg:text-[42px] text-textHead leading-tight tracking-tight">
        What clients say
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map(({ name, role, quote, stars, initials, color }, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-6 border border-borderLight hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: stars }).map((_, s) => (
              <FaStar key={s} size={13} className="text-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="font-sans text-[15px] text-textBody leading-relaxed flex-1">
            "{quote}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-2 border-t border-borderLight">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 ${color}`}>
              {initials}
            </div>
            <div>
              <p className="font-sans font-semibold text-[14px] text-textHead leading-none mb-0.5">{name}</p>
              <p className="font-sans text-[12px] text-textMuted">{role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
