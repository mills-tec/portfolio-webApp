import React from "react";
import { useState, useRef } from "react";
import { FaUser } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

// msuci incons
import { GiSaxophone } from "react-icons/gi";
import { FaMicrophoneLines } from "react-icons/fa6";
import { GiFlute } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";

import { motion } from "framer-motion";

const Services = () => {
  const [activeCatiegory, setActiveCategory] = useState("Web");

  // creating Reuseable ClassCard for each service card
  const serviceClassCard = "scale-[1.03] ";

  return (
    <div>
      <h1
        className="text-center font-[Roboto] font-bold text-[30px] text-white"
        data-aos="fade-right"
      >
        Services
      </h1>
      <div>
        <ul className="flex justify-around !mt-[50px] text-[rgba(255,255,255,0.9)] text-[20px] font-[Roboto] !overflow-hidden">
          <li
            onClick={() => setActiveCategory("Web")}
            className={`  cursor-pointer ${
              activeCatiegory === "Web" && "text-[#7911ee]"
            }`}
            data-aos="fade-up"
          >
            Web Development
          </li>

          <li
            onClick={() => setActiveCategory("Music")}
            className={`cursor-pointer ${
              activeCatiegory === "Music" && "text-[#7911ee]"
            }`}
            data-aos="fade-up"
          >
            Music/Intertainment
          </li>
        </ul>

        {activeCatiegory === "Web" ? (
          //shows only when activeCatiegory is === "Web"
          <div className="!px-[0rem] !pr-[1.3rem] w-full h-auto grid grid-cols-2 gap-[2rem]   place-items-center !mt-[30px]  !p-[1.3rem]">
            <div
              className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%]  flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
              data-aos="zoom-in-right"
            >
              <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                <p className="">
                  <FaUser className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                </p>
                <p>Personal Portfolio Websites</p>
              </div>

              <div className="!mt-[1.3rem]  text-[16px]">
                <p>Showcase your skills, projects, and personality with</p>
                <p>a custom-designed portfolio. Perfect for developers,</p>
                <p>designers, artists, and influencers who want a strong </p>
                <p>online presence that reflects their brand.</p>
              </div>
            </div>

            <div
              className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%]  flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
              data-aos="zoom-in-left"
            >
              <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                <p className="">
                  <FaBusinessTime className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                </p>
                <p>Business & Company Websites</p>
              </div>

              <div className="!mt-[1.3rem]">
                <p>Professional websites built to represent your company or</p>
                <p>
                  brand. These sites include essential features like service
                </p>
                <p>pages, contact forms, testimonials, and a clean,</p>
                <p>corporate look to build trust and authority.</p>
              </div>
            </div>

            <div
              className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%] flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
              data-aos="zoom-in-right"
            >
              <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                <p className="">
                  <FaShoppingBag className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                </p>
                <p>E-commerce Websites</p>
              </div>

              <div className="!mt-[1.3rem]">
                <p>Sell your products online with a full-featured e-commerce</p>
                <p>platform. Includes product pages, shopping cart, secure</p>
                <p>checkout, inventory management, and mobile optimization.</p>
              </div>
            </div>

            <div
              className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%] flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
              data-aos="zoom-in-left"
            >
              <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                <p className="">
                  <IoNewspaperOutline className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                </p>
                <p>Blog & News Websites</p>
              </div>

              <div className="!mt-[1.3rem]">
                <p>Dynamic content-driven websites designed for writers,</p>
                <p>bloggers, and media platforms. Features include </p>
                <p>categories, search, recent posts, and easy-to-use content</p>
                <p>management systems.</p>
              </div>
            </div>

            <div
              className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%] flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
              data-aos="zoom-in-right"
            >
              <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                <p className="">
                  <FaRegCalendarCheck className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                </p>
                <p>Event & Booking Websites</p>
              </div>

              <div className="!mt-[1rem]">
                <p>Perfect for events, concerts, conferences,</p>
                <p>or service bookings. Features include event</p>
                <p>schedules, RSVP or booking forms, payment integration,</p>
                <p>and countdown timers.</p>
              </div>
            </div>

            <div
              className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%] flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
              data-aos="zoom-in-left"
            >
              <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                <p className="">
                  <FaGraduationCap className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                </p>
                <p>Educational Platforms</p>
              </div>

              <div className="!mt-[1rem]">
                <p>Websites designed for schools, tutors, or online course</p>
                <p>providers. Features include course listings, student</p>
                <p>dashboards, quizzes, and secure login portals.</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="!px-[0rem] !pr-[1.3rem] w-full h-auto grid grid-cols-2 gap-[2rem]   place-items-center !mt-[30px]  !p-[1.3rem]">
              <div
                className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%]  flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
                data-aos="zoom-in-right"
              >
                <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                  <p className="">
                    <GiSaxophone className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                  </p>
                  <p>Live Saxophone Performances</p>
                </div>

                <div className="!mt-[1.3rem]  text-[16px]">
                  <p>Add elegance and emotion to your event with soulful</p>
                  <p>saxophone music. Available for weddings, birthdays, </p>
                  <p>church events, and corporate functions.Genres: Gospel,</p>
                  <p>Afrobeat, Highlife, Jazz, and Worship.</p>
                </div>
              </div>

              <div
                className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%]  flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
              data-aos="zoom-in-left"
              >
                <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                  <p className="">
                    <GiFlute className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                  </p>
                  <p>Recorder Performances</p>
                </div>

                <div className="!mt-[1.3rem]">
                  <p>Captivating recorder sounds that blend creativity with</p>
                  <p>tradition. Perfect for live shows and viral content.</p>
                  <p>This instrument has helped me grow an audience of </p>
                  <p>
                    over 78k followers —it’s more than music, it’s a movement.
                  </p>
                </div>
              </div>

              <div
                className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%] flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
                data-aos="zoom-in-left"
              >
                <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                  <p className="">
                    <FaVideo className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                  </p>
                  <p>Music Content Creation</p>
                </div>

                <div className="!mt-[1.3rem]">
                  <p>Entertaining and visually engaging content for TikTok,</p>
                  <p>Instagram, and YouTube. Includes live covers,</p>
                  <p>and freestyle sessions with the saxophone and recorder.</p>
                </div>
              </div>

              <div
                className={`text-white border-[4px] border-[#7911ee] rounded-[5px] !p-[1rem] h-[13rem] w-[80%] flex flex-col items-center text-center justify-center hover:shadow-[0px_0px_15px_0px_#7911ee] hover:${serviceClassCard} transition-all duration-300`}
                data-aos="zoom-in-right"
              >
                <div className="flex text-center items-center font-[Roboto] text-[25px] font-bold gap-[0.6rem]">
                  <p className="">
                    <FaMicrophoneLines className="!bg-[white] text-[#7911ee] w-[30px] h-[auto] !p-[0.3rem] rounded-full" />
                  </p>
                  <p>Studio Recording & Session Work</p>
                </div>

                <div className="!mt-[1.3rem]">
                  <p>High-quality saxophone and recorder recordings</p>
                  <p>for songs, intros, and media.</p>
                  <p>Clean audio for artists, producers, and creatives</p>
                  <p>who need expressive wind instrument parts.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
