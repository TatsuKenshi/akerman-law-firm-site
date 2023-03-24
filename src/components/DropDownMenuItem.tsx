import { useState, useRef, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import autoAnimate from "@formkit/auto-animate";
import { DropDownMenuItemPropsTypes } from "./types";
import i18next from "i18next";

const DropDownMenuItem = ({
  TextSr,
  TextEng,
  titleSr,
  titleEng,
}: DropDownMenuItemPropsTypes) => {
  const [show, setShow] = useState(false);
  const [revealSection, setRevealSection] = useState<boolean>(false);
  const parent = useRef(null);
  const language = i18next.language;

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div ref={parent} className="mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-sky-900">
          {language === "en" ? titleEng : titleSr}
        </h3>
        <button
          onClick={() => {
            reveal();
            setRevealSection(!revealSection);
          }}
        >
          {show ? (
            <FaChevronUp className="text-yellow-700" />
          ) : (
            <FaChevronDown className="text-yellow-700" />
          )}
        </button>
      </div>

      {show && (
        <div className="mt-4">{language === "en" ? TextEng : TextSr}</div>
      )}
    </div>
  );
};

export default DropDownMenuItem;
