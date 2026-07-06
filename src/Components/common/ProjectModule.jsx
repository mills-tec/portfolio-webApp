import { HiArrowUpRight } from "react-icons/hi2";

const ProjectModule = ({ projectName, category, img, liveLink, placeholderColor, comingSoon }) => {
  const Wrapper = liveLink ? "a" : "div";
  const wrapperProps = liveLink
    ? { href: liveLink, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block bg-white rounded-2xl overflow-hidden border border-borderLight hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      data-aos="fade-up"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-[210px]">
        {img ? (
          <img
            src={img}
            alt={projectName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ backgroundColor: placeholderColor || "#EEE9FE" }}
          />
        )}

        {/* Coming Soon badge */}
        {comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/90 backdrop-blur-sm text-textHead text-[12px] font-bold font-sans px-4 py-2 rounded-full border border-borderLight shadow-sm tracking-wide">
              Coming Soon
            </span>
          </div>
        )}

        {/* Hover arrow badge (only when there's a live link) */}
        {liveLink && (
          <div className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <HiArrowUpRight size={16} className="text-accent" />
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="px-4 py-4">
        <p className="text-[11px] font-semibold text-accent uppercase tracking-widest font-sans mb-1">
          {category}
        </p>
        <p className="text-[16px] font-bold text-textHead font-sans group-hover:text-accent transition-colors duration-200">
          {projectName}
        </p>
      </div>
    </Wrapper>
  );
};

export default ProjectModule;
