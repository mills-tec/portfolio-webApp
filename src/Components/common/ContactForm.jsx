import { useState } from "react";

const inputBase =
  "w-full bg-bgBase border border-borderLight rounded-xl px-4 py-3 font-sans text-[14px] text-textHead placeholder:text-textMuted outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200";

const ContactForm = ({ sendEmail, form }) => {
  const [active, setActive] = useState(false);

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <div className="flex gap-3">
        <input type="text"  name="name"  placeholder="Full Name"      required className={inputBase} onFocus={() => setActive(true)} />
        <input type="email" name="email" placeholder="Email Address"  required className={inputBase} onFocus={() => setActive(true)} />
      </div>
      <input type="text" name="title" placeholder="Project Title" className={inputBase} />
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        required
        rows={5}
        className={`${inputBase} resize-none`}
      />
      <button
        type="submit"
        className={`bg-accent text-white font-sans font-semibold text-[15px] py-3.5 rounded-full hover:bg-accentDark transition-colors duration-200 cursor-pointer shadow-md shadow-accent/20 ${
          active ? "scale-[1]" : ""
        }`}
      >
        Send Message →
      </button>
    </form>
  );
};

export default ContactForm;
