import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseLargeLine } from "react-icons/ri";

import NavBar       from "../routing/Nav";
import Home         from "../Components/Home";
import Skills       from "../Components/skills";
import Services     from "../Components/Services";
import Portfolio    from "../Components/Portfolio";
import About        from "../Components/About";
import Testimonials from "../Components/Testimonials";
import CTABanner    from "../Components/CTABanner";
import Contact      from "../Components/Contact";
import Resume       from "../Components/common/Resume";

// Section map shared by both effects
const SECTIONS = [
  { id: "home",      name: "Home",      getRef: (r) => r.homeRef },
  { id: "about",     name: "About",     getRef: (r) => r.aboutRef },
  { id: "portfolio", name: "Portfolio", getRef: (r) => r.portfolioRef },
  { id: "services",  name: "Services",  getRef: (r) => r.serviceRef },
  { id: "contact",   name: "Contact",   getRef: (r) => r.contactRef },
];

function LandingPage({ homeRef, serviceRef, portfolioRef, aboutRef, contactRef }) {
  const [activeNav,   setActiveNav]   = useState("Home");
  const [isLoading,   setIsLoading]   = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResume,  setShowResume]  = useState(false);

  const refs = { homeRef, aboutRef, portfolioRef, serviceRef, contactRef };

  /* On mount: if there's a hash in the URL, scroll to that section */
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const match = SECTIONS.find((s) => s.id === hash);
    if (!match) return;
    const t = setTimeout(() => {
      match.getRef(refs).current?.scrollIntoView({ behavior: "smooth" });
    }, 350); // wait for layout to settle
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* Scroll spy: update active nav AND URL hash as sections enter the viewport */
  useEffect(() => {
    const sections = SECTIONS.map((s) => ({ ...s, ref: s.getRef(refs) }));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.ref.current === entry.target);
            if (match) {
              setActiveNav(match.name);
              // keep the URL in sync so users can copy/share the link
              window.history.replaceState(
                null,
                "",
                match.id === "home" ? window.location.pathname : `#${match.id}`
              );
            }
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(({ ref }) => { if (ref.current) observer.observe(ref.current); });
    return () => observer.disconnect();
  }, [homeRef, aboutRef, portfolioRef, serviceRef, contactRef]);

  return (
    <>
      {/* ── Resume modal ── */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            key="resume-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md hover:scale-110 transition-transform z-10"
                aria-label="Close"
              >
                <RiCloseLargeLine size={22} className="text-textHead" />
              </button>
              <Resume />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Message sent overlay ── */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm"
          >
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center gap-4 max-w-[380px] mx-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-sans font-bold text-[20px] text-textHead">Message sent!</h2>
              <p className="font-sans text-[14px] text-textBody text-center">
                Thanks for reaching out — I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-accent text-white px-8 py-2.5 rounded-full font-sans font-semibold text-[14px] hover:bg-accentDark transition-colors cursor-pointer mt-2"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Loading overlay ── */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-white/80 backdrop-blur-sm">
          <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mb-3" />
          <p className="font-sans text-[14px] text-textBody">Sending…</p>
        </div>
      )}

      {/* ── Nav ── */}
      <div ref={homeRef} id="home">
        <NavBar
          refs={{ homeRef, serviceRef, portfolioRef, aboutRef, contactRef }}
          activeNav={{ activeNav, setActiveNav }}
        />
      </div>

      {/* ── Hero ── */}
      <Home
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      {/* ── Tech strip (full-bleed, breaks out of Layout padding) ── */}
      <div className="-mx-4 lg:-mx-[3rem]">
        <Skills />
      </div>

      {/* ── Services ── */}
      <div ref={serviceRef} id="services">
        <Services />
      </div>

      {/* ── Portfolio ── */}
      <div ref={portfolioRef} id="portfolio" className="mt-4">
        <Portfolio />
      </div>

      {/* ── About ── */}
      <div ref={aboutRef} id="about">
        <About
          contactRef={contactRef}
          showResume={showResume}
          setShowResume={setShowResume}
        />
      </div>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA Banner (full-bleed) ── */}
      <div className="-mx-4 lg:-mx-[3rem]">
        <CTABanner contactRef={contactRef} />
      </div>

      {/* ── Contact ── */}
      <div ref={contactRef} id="contact">
        <Contact
          allState={{ isLoading, setIsLoading, isSubmitted, setIsSubmitted }}
        />
      </div>
    </>
  );
}

export default LandingPage;
