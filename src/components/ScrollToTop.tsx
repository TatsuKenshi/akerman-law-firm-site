import { useState, useEffect } from "react";
import { FaChevronUp, FaPhone } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollToTopButton, setScrollToTopButton] =
    useState<string>("invisible");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollToTopButton("");
      } else {
        setScrollToTopButton("invisible");
      }
    });

    return () =>
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setScrollToTopButton("");
        } else {
          setScrollToTopButton("invisible");
        }
      });
  }, []);

  return (
    <section className="fixed bottom-16 right-2 md:right-4 lg:right-8 z-[50]">
      <div className="mb-2">
        <a href="tel:+38166426624">
          <button className="p-2 rounded-full bg-white border-4 border-sky-900">
            <FaPhone className="w-8 h-8 fill-sky-900" />
          </button>
        </a>
      </div>

      <div>
        <button
          className={`${scrollToTopButton} p-2 rounded-full bg-white border-4 border-sky-900`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <FaChevronUp className="w-8 h-8 fill-sky-900" />
        </button>
      </div>
    </section>
  );
};

export default ScrollToTop;
