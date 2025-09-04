import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useState } from "react";
const ServiceModule = ({ title, description, icon, features = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full h-[650px] p-3">
      <div
        className={`w-full h-full flex flex-col gap-7 text-white  p-[1.2rem] rounded-[10px] border-[1px] border-[#7911ee] transform transition-transform duration-300 ease-in-out hover:shadow-[0px_0px_15px_0px_#7911ee] hover:scale-[1.02]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p
          className={`bg-[rgba(121,17,238,0.1)] p-3 rounded-[10px] ${
            isHovered ? "text-[#7911ee]" : "text-white"
          } transform transition-transform duration-700 ease-in-out`}
        >
          {icon}
        </p>
        <p className="text-[30px] font-[Roboto]">{title}</p>
        <p className="font-[AncizarSerif] text-[18px] text-[rgba(255,255,255,0.5)]">
          {description}
        </p>
        <ul className="flex flex-col gap-2 font-[Roboto] text-[16px] text-[rgba(255,255,255,0.5)]">
          {features.map((feature, i) => (
            <li key={i} className="items-center flex gap-[0.5rem] ">
              <IoIosCheckmarkCircleOutline className="inline text-[#7911ee] text-[20px]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ServiceModule;
