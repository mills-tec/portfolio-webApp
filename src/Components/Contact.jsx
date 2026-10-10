import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import ContactModule from "./common/ContactModule";
import ContactForm from "./common/ContactForm";

const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/talentdprince/",
    label: "Instagram",
    hoverColor: "hover:bg-pink-500",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/2347069531564",
    label: "WhatsApp",
    hoverColor: "hover:bg-green-500",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/prince-nsude/",
    label: "LinkedIn",
    hoverColor: "hover:bg-accent",
  },
];

const Contact = ({ allState }) => {
  const { isLoading, setIsLoading, isSubmitted, setIsSubmitted } = allState;
  const form = useRef();
  const [showFallback, setShowFallback] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("service_8hjg1g8", "template_t6m87y9", form.current, {
        publicKey: "YSITYRG_b39hs0LGl",
      })
      .then(
        () => {
          form.current.reset();
          setIsLoading(false);
          setIsSubmitted(true);
        },
        () => {
          (setIsLoading(false), setShowFallback(true)); // ← this line is new
        },
      );
  };

  return (
    <section className="w-full py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center bg-accentLight text-accent text-[12px] font-semibold px-4 py-1.5 rounded-full mb-4 font-sans">
          Get in touch
        </span>
        <h2 className="font-sans font-bold text-[36px] lg:text-[44px] text-textHead leading-tight tracking-tight">
          Let's discuss your <span className="text-accent">project</span>
        </h2>
        <p className="font-sans text-textBody text-[16px] mt-3 max-w-[480px] mx-auto">
          Have an idea? Fill in the form or reach out directly — I typically
          respond within 24 hours.
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Contact info */}
        <div
          className="lg:w-[38%] w-full flex flex-col gap-4"
          data-aos="fade-right"
        >
          <ContactModule
            icon={<IoCallSharp size={18} />}
            label="Call me"
            value="+234 706 953 1564"
          />
          <ContactModule
            icon={<MdEmail size={18} />}
            label="Email me"
            value="princensude6@gmail.com"
          />
          <ContactModule
            icon={<IoLocation size={18} />}
            label="Location"
            value="Enugu, Nigeria"
          />

          {/* Social icons */}
          <div className="pt-2">
            <p className="font-sans text-[12px] text-textMuted font-medium mb-3 uppercase tracking-wider">
              Find me on
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl border border-borderLight bg-white flex items-center justify-center text-textBody ${hoverColor} hover:text-white hover:border-transparent transition-all duration-200 shadow-sm`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div
          className="lg:w-[58%] w-full bg-white rounded-2xl border border-borderLight p-6 shadow-sm"
          data-aos="fade-left"
        >
          <ContactForm sendEmail={sendEmail} form={form} />
        </div>
      </div>

      {showFallback && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setShowFallback(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl border border-borderLight max-w-[380px] w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFallback(false)}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-textMuted hover:bg-borderLight/50 hover:text-textBody transition-colors duration-150"
            >
              ✕
            </button>

            <div className="text-center mb-5">
              <h3 className="font-sans font-bold text-[20px] text-textHead mb-1">
                Message didn't go through
              </h3>
              <p className="font-sans text-[14px] text-textBody">
                No worries — reach me directly on any of these instead, I
                usually reply fast.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/2347069531564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-borderLight hover:border-green-500 hover:bg-green-50 transition-all duration-200"
              >
                <span className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                  <FaWhatsapp size={18} />
                </span>
                <span className="font-sans text-[14px] font-semibold text-textBody">
                  Message on WhatsApp
                </span>
              </a>

              <a
                href="https://www.instagram.com/talentdprince/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-borderLight hover:border-pink-500 hover:bg-pink-50 transition-all duration-200"
              >
                <span className="w-9 h-9 rounded-lg bg-pink-500 flex items-center justify-center text-white flex-shrink-0">
                  <FaInstagram size={18} />
                </span>
                <span className="font-sans text-[14px] font-semibold text-textBody">
                  Message on Instagram
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/prince-nsude/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-borderLight hover:border-accent hover:bg-accentLight transition-all duration-200"
              >
                <span className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white flex-shrink-0">
                  <FaLinkedinIn size={18} />
                </span>
                <span className="font-sans text-[14px] font-semibold text-textBody">
                  Message on LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
