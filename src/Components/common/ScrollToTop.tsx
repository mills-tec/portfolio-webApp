import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // show when close to bottom (100px before)
            if (scrollY + windowHeight >= docHeight - 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!show) return null;

    return (
        <button
            onClick={scrollToTop}
            className="
        fixed lg:bottom-6 bottom-16 right-6 z-50
        bg-primaryColor text-white
        p-3 rounded-full shadow-lg
        hover:scale-110 transition-all duration-300
      "
            aria-label="Scroll to top"
        >
            <FaArrowUp size={20} />
        </button>
    );
};

export default ScrollToTop;
