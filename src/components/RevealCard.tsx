import { useState, useEffect, useRef } from "react";
import i18next from "i18next";
import autoAnimate from "@formkit/auto-animate";

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
    <div className="w-11/12 sm:w-7/12 lg:w-[300px] h-max bg-sky-900 cursor-pointer text-white mx-3 mb-4 rounded-md">
      <div className="mb-2 h-32">
        <h2>Reveal Card</h2>
        <p>Visible part - icon/photo</p>
        <h2>{language === "en" ? titleEng : titleSr}</h2>
      </div>

      <div ref={parent} className="px-6">
        {show && <div>{language === "en" ? TextEng : TextSr}</div>}
      </div>

      <div>
        <button
          onClick={() => {
            reveal();
            setRevealSection(!revealSection);
          }}
        >
          {language === "en" ? (
            <span className="text-2xl font-bold">
              {!revealSection ? "More" : "Close"}
            </span>
          ) : (
            <span className="text-2xl font-bold">
              {!revealSection ? "Više" : "Zatvori"}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default RevealCard;
