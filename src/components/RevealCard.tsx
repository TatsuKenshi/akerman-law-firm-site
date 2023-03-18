import { useState, useEffect, useRef } from "react";
import i18next from "i18next";
import autoAnimate from "@formkit/auto-animate";
import justice from "../assets/justice.jpg";
import { RevealCardPropsTypes } from "./types";
import ProgressiveImage from "react-progressive-graceful-image";
import placeholderSrc from "../assets/justiceSmall.jpg";

const RevealCard = ({
  TextSr,
  TextEng,
  titleSr,
  titleEng,
}: RevealCardPropsTypes) => {
  const [revealSection, setRevealSection] = useState<boolean>(false);
  const language = i18next.language;

  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div className="group w-11/12 sm:w-7/12 lg:w-[300px] h-max cursor-pointer mx-3 mb-20 rounded-md hover:shadow-2xl hover:bg-slate-50">
      <div className="mb-2 h-content text-center lg:text-left">
        <ProgressiveImage src={justice} placeholder={placeholderSrc}>
          {(src, loading) => (
            <img
              src={src}
              alt="justice"
              className={`image${
                loading ? " loading" : " loaded"
              } w-full grayscale group-hover:grayscale-0`}
            />
          )}
        </ProgressiveImage>
        <h2 className="mt-8 mb-4 text-xl text-sky-900 px-6">
          {language === "en" ? titleEng : titleSr}
        </h2>
      </div>

      <div ref={parent} className="px-6">
        {show && <div>{language === "en" ? TextEng : TextSr}</div>}
      </div>

      <div className="text-center lg:text-left px-6 my-2">
        <button
          onClick={() => {
            reveal();
            setRevealSection(!revealSection);
          }}
        >
          {language === "en" ? (
            <span className="text-lg font-bold text-yellow-700">
              {!revealSection ? "Read more" : "Close"}
            </span>
          ) : (
            <span className="text-lg font-bold text-yellow-700">
              {!revealSection ? "Više informacija" : "Zatvori"}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default RevealCard;
