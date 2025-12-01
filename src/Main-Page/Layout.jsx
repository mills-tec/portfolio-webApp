import ScrollToTop from "../Components/common/ScrollToTop";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import { useRef } from "react";

const Layout = () => {
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const scrollRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="lg:px-[2rem] px-[10px] flex flex-col gap-[3rem] ">
      <LandingPage
        homeRef={homeRef}
        serviceRef={serviceRef}
        portfolioRef={portfolioRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        scrollRef={scrollRef}
      />
      <Footer
        onNavigate={scrollToSection}
        refs={{
          homeRef,
          aboutRef,
          portfolioRef,
          serviceRef,
          contactRef,
        }}
      />
      <ScrollToTop />
    </div>
  );
};
export default Layout;
