import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import personalImg from "../assets/WhatsApp Image 2024-10-21 at 08.43.27_0d3a7942.jpg";

const Home = ({ portfolioRef, contactRef }) => (
  <section className="w-full min-h-[88vh] flex items-center">
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-10 lg:py-0">
      {/* ── Left: text ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-[52%] flex flex-col gap-6"
      >
        {/* Eyebrow pill */}
        <span className="inline-flex items-center gap-2 bg-accentLight text-accent text-[13px] font-semibold px-4 py-2 rounded-full w-fit">
          <HiSparkles size={14} />
          Welcome to Prince's Portfolio
        </span>

        {/* Headline */}
        <h1 className="font-sans font-bold text-[48px] lg:text-[62px] leading-[1.08] text-textHead tracking-tight">
          I'm Prince,
          <br />
          <span className="text-accent">Full-Stack</span>
          <br />
          Developer.
        </h1>

        <p className="text-textBody text-[17px] leading-relaxed max-w-[460px] font-sans">
          I build modern web applications and digital products that help
          businesses stand out — from landing pages to full-stack platforms.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mills-tec"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              size={22}
              className="text-textMuted hover:text-textHead transition-colors duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-nsude/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={22}
              className="text-textMuted hover:text-accent transition-colors duration-200"
            />
          </a>
          <a
            href="https://wa.me/2347069531564"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp
              size={22}
              className="text-textMuted hover:text-green-500 transition-colors duration-200"
            />
          </a>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() =>
              contactRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-accentDark transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/20"
          >
            Let's Talk
          </button>
          <button
            onClick={() =>
              portfolioRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 border border-borderLight bg-white text-textBody px-8 py-3.5 rounded-full font-semibold text-[15px] hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer"
          >
            View Work <span>→</span>
          </button>
        </div>

        {/* Trust line */}
        <div className="flex items-center gap-2 text-[14px] text-textMuted font-sans">
          <FaCheckCircle className="text-green-500 shrink-0" size={14} />
          <span>10+ projects shipped · Available for new work</span>
        </div>
      </motion.div>

      {/* ── Right: photo + floating cards (desktop) ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hidden lg:flex lg:w-[44%] relative justify-center items-center min-h-[440px]"
      >
        {/* Solid geometric accent shape */}
        <div className="absolute w-[300px] h-[370px] bg-accentLight rounded-[32px] top-8 right-4 rotate-3 z-0" />

        {/* Photo */}
        <div className="relative z-10 w-[290px] h-[360px] rounded-[28px] overflow-hidden border-[5px] border-white shadow-2xl">
          <img
            src={personalImg}
            alt="Prince Nsude"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Floating card 1 — role (top-right) */}
        <div className="float-1 absolute top-4 right-0 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-borderLight">
          <div className="bg-accentLight rounded-lg p-2 shrink-0">
            <BsBriefcaseFill className="text-accent" size={16} />
          </div>
          <div>
            <p className="text-[11px] text-textMuted font-medium leading-none mb-0.5">
              Role
            </p>
            <p className="text-[13px] text-textHead font-bold leading-none">
              Full-Stack Dev
            </p>
          </div>
        </div>

        {/* Floating card 2 — projects (bottom-left) */}
        <div className="float-2 absolute bottom-20 left-0 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-borderLight">
          <div className="bg-yellow-50 rounded-lg p-2 shrink-0">
            <FaStar className="text-yellow-400" size={16} />
          </div>
          <div>
            <p className="text-[13px] text-textHead font-bold leading-none mb-0.5">
              10+ Projects
            </p>
            <p className="text-[11px] text-textMuted font-medium leading-none">
              Shipped &amp; live
            </p>
          </div>
        </div>

        {/* Floating card 3 — availability (bottom-right) */}
        <div className="float-3 absolute bottom-4 right-0 z-20 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2 border border-borderLight">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
          <p className="text-[13px] text-textHead font-semibold">
            Available for work
          </p>
        </div>
      </motion.div>

      {/* ── Mobile: photo below text ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden flex flex-col items-center gap-5 w-full"
      >
        <div className="relative">
          <div className="absolute w-full h-full bg-accentLight rounded-[24px] top-4 left-4 rotate-2 z-0" />
          <div className="relative z-10 w-[260px] h-[310px] rounded-[24px] overflow-hidden border-4 border-white shadow-xl">
            <img
              src={personalImg}
              alt="Prince Nsude"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-2 border border-borderLight">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <p className="text-[12px] font-semibold text-textHead">Available</p>
          </div>
          <div className="bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-2 border border-borderLight">
            <FaStar className="text-yellow-400" size={12} />
            <p className="text-[12px] font-semibold text-textHead">
              10+ Projects
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Home;
