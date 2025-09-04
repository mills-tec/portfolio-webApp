import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = ({ allState }) => {
  const { isLoading, setIsLoading, isSubmitted, setIsSubmitted } = allState;
  const [isOkActive, setIsOkActive] = useState(false); // State to manage the ok button animation
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when sending email
    emailjs
      .sendForm("service_8hjg1g8", "template_t6m87y9", form.current, {
        publicKey: "YSITYRG_b39hs0LGl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Reset the form after successful submission
          setIsLoading(false); // Set loading state to false after submission
          setIsSubmitted(true); // Set submitted state to true
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false); // Set loading state to false on error
          setIsSubmitted((isSubmitted) => isSubmitted === false); // Set submitted state to false on error
        }
      );
  };

  const contactIconStyle =
    "!bg-[#7911ee] w-[40px] text-[10px] h-[40px] !p-[10px] rounded-[5px]";

  const inputStyle =
    "w-[350px] h-[50px] bg-transparent outline-none focus:border-1 focus:border-[#7911ee] focus:rounded-[5px] !p-[10px] ";
  return (
    <div className="w-full h-auto">
      <div className="w-full text-center !text-white ">
        <h1
          className="text-center font-[Roboto] font-bold text-[30px] !mb-[30px]"
          data-aos="fade-up"
        >
          Contact Me
        </h1>
        <p className="font-[Roboto] text-[30px]" data-aos="fade-right">
          Let's discuss your <span className="text-[#7911ee]">project</span>
        </p>
        <p
          className="!mt-[5px] text-[rgba(255,255,255,0.7)] font-[AncizarSerif] text-[19px]"
          data-aos="fade-right"
        >
          let's make something new, different and more meaningfull or make{" "}
        </p>
        <p
          className="font-[AncizarSerif] text-[19px] text-[rgba(255,255,255,0.7)]"
          data-aos="fade-right"
        >
          things more visual and conceptual
        </p>
      </div>

      <div className="w-full h-auto text-white flex justify-center items-center !p-[40px] font-[Roboto] relative">
        <div className="w-[35%] flex flex-col gap-[45px]">
          <div className="flex items-center gap-[15px]" data-aos="fade-right">
            <IoCallSharp className="!bg-[#7911ee] w-[40px] text-[10px] h-[40px] !p-[10px] rounded-[5px]" />
            <div>
              <p className="text-[rgba(255,255,255,0.7)]">Contact me</p>
              <p className="text-[15px]">+234 7069531564</p>
            </div>
          </div>

          <div className="flex items-center gap-[15px]" data-aos="fade-right">
            <MdEmail className={contactIconStyle} />
            <div>
              <p className="text-[rgba(255,255,255,0.7)]">Emial me</p>
              <p className="text-[15px]">princensude6@gamil.com</p>
            </div>
          </div>

          <div className="flex items-center gap-[15px]" data-aos="fade-right">
            <IoLocation className={contactIconStyle} />

            <div>
              <p className="text-[rgba(255,255,255,0.7)]">Locate me</p>
              <p className="text-[15px]">Africa, Nigeria</p>
            </div>
          </div>
        </div>

        <form
          className="text-[white] w-[65%]  !mt-[20px]"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-row items-center gap-[10px] !overflow-hidden">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              className={`${inputStyle} !w-[344px] border-1 border-[rgba(255,255,255,0.1)]  rounded-[5px] `}
              data-aos="zoom-in-up"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              className={`${inputStyle} !w-[344px] rounded-[5px]`}
              data-aos="zoom-in-up"
              style={{ outline: "1px solid green" }}
            />
          </div>
          <div className="!mt-[20px]" data-aos="zoom-in-up">
            <input
              type="text"
              placeholder="Subject"
              name="title"
              className={`${inputStyle} w-[700px] border-1 border-[rgba(255,255,255,0.1)]  rounded-[5px]`}
            />
          </div>
          <div className="!mt-[20px]" data-aos="zoom-in-up overflow-hidden">
            <textarea
              placeholder="Message"
              rows="5"
              cols="82"
              name="message"
              required
              className="!p-[10px] 
            bg-transparent outline-none focus:border-1 focus:border-[#7911ee] focus:rounded-[5px] resize-none border-1 border-[rgba(255,255,255,0.1)]  rounded-[5px]"
            ></textarea>

            <div className="!mt-[1px] flex justify-end  !overflow-hidden !p-[1rem]">
              <input
                onClick={() => {
                  setIsOkActive(true);
                  setTimeout(() => {
                    setIsOkActive(false);
                  }, 300); // Reset after 300ms
                }}
                type="submit"
                value="Send"
                className={`!bg-[#7911ee] w-[140px] h-[40px] text-white rounded-[5px] border-[#7911ee] hover:!bg-transparent hover:border-[1.5px] hover:border-[#7911ee] hover:!transition-all hover:!duration-500 ${
                  isOkActive ? "scale-[1.09]" : "scale-[1]"
                } transition-transform duration-100`}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
