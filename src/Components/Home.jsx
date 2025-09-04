import HeroImg from "../assets/heroImg.png";

const Home = ({ serviceRef, motion }) => {
  // const ball = {
  //   width: "100%",
  //   height: "100%",
  //   }
  return (
    <div className="w-full  flex justify-between items-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          scale: { type: "spring", visualDuration: 0.7, bounce: 0.4 },
        }}
      >
        <ul className="!text-white font-[Roboto] font-bold flex flex-col justify-center gap-[0%] overflow-hidden">
          <li className="text-[40px] text-[rgba(255,255,255,0.5)] font-[AncizarSerif]">
            I'm a
          </li>
          <li className="text-[60px]">Full-Stack</li>
          <li className="text-[60px] flex justify-center items-center !gap-[0.23rem]">
            <p>SoftWare Developer</p>
            <p className="!bg-[#7911ee] w-[10px] h-[10px] !mt-[30px]"></p>
          </li>
        </ul>
        <button
          className="!bg-[#7911ee] w-[250px] h-[55px] !text-center text-white font-[Roboto] font-normal rounded-[8px] !mt-[1rem] cursor-pointer hover:!bg-transparent border-[#7911ee] hover:border-[1.5px] hover:border-[#7911ee] transition-all duration-500"
          onClick={() => {
            serviceRef.serviceRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          View Services
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1, x: 100 }} // start off to the right (x: 100px)
        animate={{ opacity: 1, scale: 1, x: 0 }} // move to original position
        transition={{
          duration: 0.5,
          scale: { type: "spring", bounce: 1 }, // removed visualDuration (not valid)
        }}
      >
        <img src={HeroImg} alt="" className="w-[400px]" />
      </motion.div>
    </div>
  );
};

export default Home;
