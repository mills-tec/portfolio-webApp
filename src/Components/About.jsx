import { useEffect } from "react";
import personalImg from "../assets/WhatsApp Image 2024-10-21 at 08.43.27_0d3a7942.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import portimg from "../assets/protimg.png";

const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "4+", label: "Years building" },
  { value: "...", label: "Social followers" },
];

const About = ({ contactRef, showResume, setShowResume }) => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <section className="w-full py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Photo */}
        <div
          className="lg:w-[44%] w-full flex justify-center"
          data-aos="fade-right"
        >
          <div className="relative">
            {/* accent shape */}
            <div className="absolute w-full h-full bg-accentLight rounded-[28px] top-5 left-5 z-0 rotate-2" />
            <div className="relative z-10 w-[300px] h-[370px] rounded-[28px] overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={portimg}
                alt="Prince Nsude"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="lg:w-[52%] w-full flex flex-col gap-6"
          data-aos="fade-left"
        >
          <span className="inline-flex items-center bg-accentLight text-accent text-[12px] font-semibold px-4 py-1.5 rounded-full w-fit font-sans">
            Who's behind this work
          </span>

          <h2 className="font-sans font-bold text-[36px] lg:text-[44px] text-textHead leading-tight tracking-tight">
            Hi — I'm <span className="text-accent">Prince Oluchukwu</span>
          </h2>

          <p className="font-sans text-[16px] text-textBody leading-relaxed">
            I'm a Full-Stack Developer based in Enugu, Nigeria, with 4 years of
            experience building with Next.js, TypeScript, Supabase, and Python.
            I'm the founder of EazyCodes, building web platforms for businesses,
            and Coders-Versity, a tech training academy. I also work in prompt
            engineering, designing structured, reliable AI-assisted features. I
            love turning complex ideas into clean, fast digital products — from
            pixel-perfect layouts to smooth API integrations.
          </p>

          {/* Personality differentiator */}
          <p className="font-sans text-[14px] text-textMuted italic border-l-2 border-accentLight pl-4">
            Away from the screen I perform as a recorder and saxophone player in
            afrobeats — you might know me as{" "}
            <a
              href="https://www.instagram.com/talentd_prince/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold not-italic hover:underline"
            >
              @Talentd_prince
            </a>
            (1 k+ followers and counting on tiktok).
          </p>

          {/* Stats */}
          <div className="flex gap-8 py-5 border-y border-borderLight">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-sans font-bold text-[28px] text-accent leading-none">
                  {value}
                </p>
                <p className="font-sans text-[13px] text-textMuted mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() =>
                contactRef?.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-accent text-white px-7 py-3 rounded-full font-sans font-semibold text-[14px] hover:bg-accentDark transition-colors duration-200 cursor-pointer shadow-md shadow-accent/20"
            >
              Hire Me
            </button>
            {/* <button
              onClick={() => setShowResume(!showResume)}
              className="border border-borderLight text-textBody px-7 py-3 rounded-full font-sans font-semibold text-[14px] hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer bg-white"
            >
              View Résumé
            </button> */}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Prince_CV.pdf";
                link.download = "Prince_CV.pdf";
                link.click();
              }}
              className="border border-borderLight text-textBody px-7 py-3 rounded-full font-sans font-semibold text-[14px] hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer bg-white"
            >
              Download Résumé
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
