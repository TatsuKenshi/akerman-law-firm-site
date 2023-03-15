import { useState, useEffect, useRef } from "react";
import i18next from "i18next";
import autoAnimate from "@formkit/auto-animate";
import justice from "../assets/justice.jpg";

type RevealCardPropsTypes = {
  titleSr: string;
  titleEng: string;
  TextSr: React.ReactElement;
  TextEng: React.ReactElement;
};

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
    <div className="w-11/12 sm:w-7/12 lg:w-[300px] h-max bg-white cursor-pointer mx-3 mb-4 rounded-md border-4 border-sky-900">
      <div className="mb-2 h-content text-center">
        <img src={justice} alt="justice" className="w-full" />
        <h2 className="my-8 font-bold text-sky-900">
          {language === "en" ? titleEng : titleSr}
        </h2>
      </div>

      <div ref={parent} className="px-6">
        {show && <div>{language === "en" ? TextEng : TextSr}</div>}
      </div>

      <div className="text-center lg:text-left px-6 mt-2">
        <button
          onClick={() => {
            reveal();
            setRevealSection(!revealSection);
          }}
        >
          {language === "en" ? (
            <span className="text-xl font-bold text-sky-900">
              {!revealSection ? "More" : "Close"}
            </span>
          ) : (
            <span className="text-xl font-bold text-sky-900">
              {!revealSection ? "Više" : "Zatvori"}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default RevealCard;
