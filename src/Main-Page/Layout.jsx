import ScrollToTop from "../Components/common/ScrollToTop";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import { useRef } from "react";

const Layout = () => {
  const homeRef      = useRef(null);
  const serviceRef   = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef     = useRef(null);
  const contactRef   = useRef(null);

  const scrollToSection = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F3FA" }}>
      <div className="lg:px-[3rem] px-4">
        <LandingPage
          homeRef={homeRef}
          serviceRef={serviceRef}
          portfolioRef={portfolioRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
      </div>
      <Footer
        onNavigate={scrollToSection}
        refs={{ homeRef, aboutRef, portfolioRef, serviceRef, contactRef }}
      />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
