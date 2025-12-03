import React from "react";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ContactInfor from "./common/ContactInfo";
import ContactForm from "./common/ContactForm";

const Contact = ({ allState }) => {
  const { isLoading, setIsLoading, isSubmitted, setIsSubmitted } = allState;

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

  return (
    <div className="w-full h-auto ">
      <div className="w-full  text-white text-center mb-[2rem]">
        <h1
          className="text-center font-[Roboto] font-bold text-[30px]"
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

      <div className=" flex lg:flex-row flex-col justify-between lg:items-center gap-5  px-3 lg:px-0">
        <div className=" lg:w-[40%]" data-aos="fade-right">
          <ContactInfor />
        </div>

        <div
          className="bg-bgColor lg:w-[60%] mt-5 lg:mt-0 shadow-lg border border-primaryColor rounded-[10px] p-[1rem]"
          data-aos="fade-left"
        >
          <ContactForm sendEmail={sendEmail} form={form} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
