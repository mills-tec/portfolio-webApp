import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import ContactModule from "./ContactModule";
const contactIconStyle =
  "!bg-[#7911ee] w-[40px] text-[10px] h-[40px] !p-[10px] rounded-[5px]";
const ContactInfor = () => {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <div>
        <ContactModule
          icon={<IoCallSharp size={20} />}
          label="Contact me"
          value="+234 7069531564"
        />
      </div>

      <div>
        <ContactModule
          icon={<MdEmail size={20} />}
          label="Email me"
          value="princensude6@gamil.com"
        />
      </div>

      <div>
        <ContactModule
          icon={<IoLocation size={20} />}
          label="Locate me"
          value="Africa, Nigeria"
        />
      </div>
    </div>
  );
};
export default ContactInfor;
