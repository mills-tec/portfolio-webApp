import { useState } from "react";
const ImgModule = ({
  img,
  Alt,
  width = "350px",
  height = "400px",
  liveLink,
}) => {
  const [showScale, setShowScale] = useState(false);
  return (
    <div
      className="w-full"
      onMouseMove={() => setShowScale(true)}
      onMouseLeave={() => setShowScale(false)}
      data-aos="fade-left"
    >
      <div className=" relative h-auto">
        <div className="absolute top-[0%] z-[1] left-[10%] !rounded-[8px]">
          <div className="w-full overflow-hidden">
            {liveLink ? (
              <a href={liveLink} target="_blank">
                <img
                  src={img}
                  alt={Alt}
                  style={{ width, height }}
                  className={`!rounded-[8px] transition-transform duration-500 ${
                    showScale ? "scale-110" : "scale-100"
                  }`}
                />
              </a>
            ) : (
              <img
                src={img}
                alt={Alt}
                style={{ width, height }}
                className={`!rounded-[8px] transition-transform duration-500 ${
                  showScale ? "scale-110" : "scale-100"
                }`}
              />
            )}
          </div>
        </div>

        <div
          className={`border-[10px] border-[#7911ee] rounded-[8px] relative left-[0%] !mt-[10%]`}
          style={{ width, height }}
        ></div>
      </div>
    </div>
  );
};

export default ImgModule;
