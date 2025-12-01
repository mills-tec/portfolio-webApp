import React from "react";
import NavBar from "../routing/Nav";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
// Components
import Home from "../Components/Home";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Skills from "../Components/skills";
import Resume from "../Components/common/Resume";
import { RiCloseLargeLine } from "react-icons/ri";

function LandingPage({
  homeRef,
  serviceRef,
  portfolioRef,
  aboutRef,
  contactRef,
}) {
  // Creating a ref for each section to scroll to
  // const homeRef = useRef(null);
  // const serviceRef = useRef(null);
  // const portfolioRef = useRef(null);
  // const aboutRef = useRef(null);
  // const contactRef = useRef(null);
  // const scrollRef = useRef(null);

  // Creating a state to manage the active navigation item
  const [activeNav, setActiveNav] = useState("Home");

  // Creating states to manage hover effects on buttons
  const [isFirstBtnHovered, setIsFirstBtnHovered] = useState(false);
  const [isSecondBtnHovered, setIsSecondBtnHovered] = useState(false);
  const submite = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOkActive, setIsOkActive] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    if (isOkActive) {
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOkActive(false);
      }, 300); // 300ms for the scale animation
    }
  }, [isOkActive, setIsSubmitted]);

  return (
    <>
      <div>
        <AnimatePresence>
          {showResume && (
            <motion.div
              key="resume-modal"
              initial={{ opacity: 0, scale: 0.9, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex justify-center items-center gap-10 bg-[#021024] bg-opacity-90"
            >
              <div className="h-[560px]">
                <Resume />
              </div>
              <div className="flex justify-end hover:scale-110 absolute top-6 right-20 transition-all duration-300">
                <RiCloseLargeLine
                  className="text-[white] cursor-pointer"
                  size={30}
                  onClick={() => setShowResume(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#021024] bg-opacity-90">
            <svg
              className="h-20 w-20 text-green-500 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h1 className="text-white text-2xl font-bold mb-2">
              Message sent successfully!
            </h1>
            <p className="text-white text-lg">
              Thank you for contacting T-Prince Technology. 🚀
            </p>

            <button
              ref={submite}
              onClick={() => setIsSubmitted(false)}
              className={`px-6 py-2 !bg-[#7911ee] text-white rounded  transition  w-[140px] h-[40px]  hover:!bg-transparent hover:border-[1.5px] hover:border-[#7911ee] hover:!transition-all hover:!duration-500  absolute bottom-4 right-4 ${
                isOkActive ? "scale-[3]" : "scale-[1]"
              }`}
            >
              OK
            </button>
          </div>
        )}

        {isLoading && (
          <div className="flex  flex-col justify-center items-center w-full mb-4  !bg-[#021024] fixed inset-0 z-50">
            {/* Spinner SVG */}

            <svg
              className="animate-spin h-8 w-8 text-[#7911ee]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>

            <h1 className="text-white">please wait a sec</h1>
          </div>
        )}

        <div className="w-full" ref={homeRef}>
          <NavBar
            refs={{ homeRef, serviceRef, portfolioRef, aboutRef, contactRef }}
            activeNav={{ activeNav, setActiveNav }}
          />
        </div>

        <div className="px-3 w-full lg:!mt-[40px] mt-[10px]">
          <Home serviceRef={{ serviceRef }} motion={motion} />
        </div>

        {/* skills */}
        <div className="w-full !h-[4rem] absolute  !right-[0] !bg-[rgba(121,17,238,0.7)] flex flex-col justify-center lg:!mt-[1rem] mt-10">
          <Skills />
        </div>

        {/* about us */}
        <div ref={aboutRef} className="!mt-[160px]">
          <About
            btnHover={{
              isSecondBtnHovered,
              setIsSecondBtnHovered,
              isFirstBtnHovered,
              setIsFirstBtnHovered,
            }}
            contactRef={contactRef}
            showResume={showResume}
            setShowResume={setShowResume}
          />
        </div>

        {/* profolio/products */}
        <div ref={portfolioRef} className=" !mt-[73px] text-white !p-[0rem]">
          <Portfolio
            ToggleElem={{
              isFirstBtnHovered,
              setIsFirstBtnHovered,
              isSecondBtnHovered,
              setIsSecondBtnHovered,
            }}
          />
        </div>

        <div ref={serviceRef} className=" !mt-[73px]">
          <Services />
        </div>

        <div ref={contactRef} className=" !mt-[73px]">
          <Contact
            allState={{ isLoading, setIsLoading, isSubmitted, setIsSubmitted }}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
