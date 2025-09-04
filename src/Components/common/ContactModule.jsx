const ContactModule = ({ icon, label, value }) => {
  return (
    <div
      className="flex items-center gap-[15px] text-white p-[15px] border border-[rgba(255,255,255,0.2)] rounded-[5px]"
      data-aos="fade-right"
    >
      <p className="bg-primaryColor flex justify-center items-center w-[40px] h-[40px] rounded-[5px] ">
        {icon}
      </p>
      <div>
        <p className="text-[rgba(255,255,255,0.7)]">{label}</p>
        <p className="text-[15px] font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default ContactModule;
