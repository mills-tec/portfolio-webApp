import { useState } from "react";

const ContactForm = ({ sendEmail, form }) => {
  const [isOkActive, setIsOkActive] = useState(false);
  const [hightlightInput, setHightlightInput] = useState(false);
  return (
    <div>
      <form
        className="text-[white] flex flex-col gap-5"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex gap-2 overflow-hidden">
          <div
            className={`w-full bg-gray-50/10  rounded-[5px] px-2  focus-within:border-primaryColor focus-within:border transition-transform druration-300`}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              className={`w-full h-[40px] bg-transparent border-none outline-none placeholder:text-MutedColor`}
              onChange={() => setHightlightInput(true)}
            />
          </div>
          <div className="w-full bg-gray-50/10  rounded-[5px] px-2 focus-within:border-primaryColor focus-within:border transition-transform druration-300">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              className="w-full h-[40px] bg-transparent border-none outline-none placeholder:text-MutedColor"
              onChange={() => setHightlightInput(true)}
            />
          </div>
        </div>
        <div className="w-full bg-gray-50/10  rounded-[5px] px-2 focus-within:border-primaryColor focus-within:border transition-transform druration-300">
          <input
            type="text"
            placeholder="Project Title"
            name="title"
            className="w-full h-[40px] bg-transparent border-none outline-none placeholder:text-MutedColor"
            onChange={() => setHightlightInput(true)}
          />
        </div>
        <div className="" data-aos="fade-left">
          <textarea
            placeholder="Message"
            rows="5"
            cols="82"
            name="message"
            required
            className="w-full h-[200px] bg-gray-50/10 rounded-[5px] resize-none p-2   outline-none placeholder:text-MutedColor focus:border-primaryColor focus:border transition-transform druration-300"
            onChange={() => setHightlightInput(true)}
          ></textarea>

          <div className="mt-3 overflow-hidden">
            <input
              onClick={() => {
                setIsOkActive(true);
                setTimeout(() => {
                  setIsOkActive(false);
                }, 300); // Reset after 300ms
              }}
              type="submit"
              value="Send"
              className={`!bg-[#7911ee] w-[140px] h-[40px] text-white rounded-[5px] border-[#7911ee] hover:!bg-transparent hover:border-[1.5px] hover:border-[#7911ee] hover:!transition-all hover:!duration-500 ${
                isOkActive ? "scale-[1.09]" : "scale-[1]"
              } transition-transform duration-100`}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
