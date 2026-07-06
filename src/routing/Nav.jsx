import React, { useState, useEffect } from "react";
import logoImg from "../assets/logoImg.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav({ refs, activeNav }) {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NavList = [
    { name: "Home",      ref: refs.homeRef },
    { name: "About",     ref: refs.aboutRef },
    { name: "Portfolio", ref: refs.portfolioRef },
    { name: "Services",  ref: refs.serviceRef },
    { name: "Contact",   ref: refs.contactRef },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (ref, name) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    activeNav.setActiveNav(name);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-borderLight"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4">
        <img src={logoImg} alt="logo" className="w-[110px] lg:w-[150px]" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 font-sans text-[15px]">
          {NavList.map(({ name, ref }) =>
            name === "Contact" ? (
              <button
                key={name}
                onClick={() => scrollTo(ref, name)}
                className="bg-accent text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:bg-accentDark transition-colors duration-200 cursor-pointer shadow-md shadow-accent/20"
              >
                Let's Talk
              </button>
            ) : (
              <button
                key={name}
                onClick={() => scrollTo(ref, name)}
                className={`relative cursor-pointer group font-medium transition-colors duration-200 bg-transparent border-0 ${
                  activeNav.activeNav === name
                    ? "text-accent"
                    : "text-textBody hover:text-textHead"
                }`}
              >
                {name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-accent rounded-full transition-all duration-200 ${
                    activeNav.activeNav === name ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-textHead p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown — absolute so it floats over content, never pushes it down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-borderLight shadow-lg rounded-b-2xl overflow-hidden"
          >
            <nav className="flex flex-col py-2 gap-1 px-2">
              {NavList.map(({ name, ref }) => (
                <button
                  key={name}
                  onClick={() => { scrollTo(ref, name); setIsOpen(false); }}
                  className={`text-left px-4 py-3 text-[15px] font-medium rounded-xl transition-colors duration-150 bg-transparent border-0 ${
                    activeNav.activeNav === name
                      ? "text-accent bg-accentLight"
                      : "text-textBody hover:text-textHead hover:bg-gray-50"
                  }`}
                >
                  {name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
