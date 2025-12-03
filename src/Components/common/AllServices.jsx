import ServiceModule from "./ServiceModule";
import { LuPanelsLeftBottom } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { IoCodeSharp } from "react-icons/io5";
import { GrVmMaintenance } from "react-icons/gr";
import { CiAlignLeft } from "react-icons/ci";

const AllServices = () => {
  return (
    <div className="w-full lg:grid grid-cols-3 lg:gap-2 gap-[3rem] overflow-hidden">
      <div data-aos="fade-right">
        <ServiceModule
          title="Custom Web Develoment"
          icon={<LuPanelsLeftBottom size={50} />}
          description="I build tailored websites designed to meet your unique business needs. From custom designs and scalable architecture to modern frameworks and SEO optimization, I ensure your website is fast, secure, and ready to grow with your business."
          features={[
            "Custom Design",
            "Scalable Architecture",
            "Modern Frameworks",
            "SEO Optimization",
          ]}
        />
      </div>
      <div data-aos="fade-up">
        <ServiceModule
          title="E-commerce Development"
          icon={<RiShoppingCartLine size={50} />}
          description="I build secure and scalable e-commerce platforms with user-friendly product displays and seamless checkout experiences — designed to drive sales and boost customer trust."
          features={[
            "Custom Online Store Design",
            "Secure Payment Integration",
            "Product & Inventory Management",
            "Mobile-Friendly Shopping Experience",
            "Scalable Solutions for Growth",
          ]}
        />
      </div>
      <div data-aos="fade-left">
        <ServiceModule
          title="Responsive Design & Development"
          icon={<CiAlignLeft size={50} />}
          description="I create responsive websites that adapt to any device. With a mobile-first approach, your site looks great and performs smoothly everywhere."
          features={[
            "Mobile-First & Cross-Device Compatibility",
            "Fluid Layouts & Flexible Grids",
            "Fast Loading Speeds",
            "Optimized User Experience",
          ]}
        />
      </div>
      <div data-aos="fade-right">
        <ServiceModule
          title="Single-Page & Multi-Page Applications"
          icon={<IoCodeSharp size={50} />}
          description="I build single-page and multi-page applications designed around your business goals. From fast, streamlined SPAs to robust MPAs with multiple sections, I ensure your app is modern, interactive, and user-focused."
          features={[
            "SPA Development",
            "MPA Development",
            "Interactive UI",
            "Modern JS Frameworks",
          ]}
        />
      </div>
      <div data-aos="fade-up">
        <ServiceModule
          title="Website Maintenance & Support"
          icon={<GrVmMaintenance size={50} />}
          description="Your website needs continuous care to stay secure, updated, and performing at its best. I provide ongoing maintenance and support services to ensure your site runs smoothly, stays protected from threats, and adapts to your growing needs."
          features={[
            "Regular Updates & Security Patches",
            "Performance Monitoring & Optimization",
            "Bug Fixes & Technical Support",
            "Content & Design Updates",
          ]}
        />
      </div>
    </div>
  );
};
export default AllServices;
