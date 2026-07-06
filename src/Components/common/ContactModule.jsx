const ContactModule = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-borderLight hover:border-accent transition-colors duration-200" data-aos="fade-right">
    <div className="bg-accentLight text-accent flex justify-center items-center w-10 h-10 rounded-lg shrink-0">
      {icon}
    </div>
    <div>
      <p className="font-sans text-[12px] text-textMuted font-medium">{label}</p>
      <p className="font-sans text-[14px] text-textHead font-semibold">{value}</p>
    </div>
  </div>
);

export default ContactModule;
