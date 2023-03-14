import { useState } from "react";
import i18next from "i18next";

const RevealCard = ({ textSr: TextSr, textEng: TextEng }: any) => {
  const [revealSection, setRevealSection] = useState<boolean>(false);
  const language = i18next.language;

  return (
    <div className="w-11/12 sm:w-7/12 lg:w-[300px] h-max bg-sky-900 cursor-pointer text-white mx-3 mb-4 rounded-md">
      <div className="mb-2 h-32">
        <h2>Reveal Card</h2>
        <p>Visible part - icon/photo</p>
      </div>
      {/* smooth transition attempt */}
      {/* <div
        className={`${
          !revealSection ? "h-[0px]" : `${height}`
        } transition-all delay-150 ease-in-out duration-500 overflow-hidden w-full px-6 flex flex-wrap content-center`}
      >
        <p className="w-full mb-4">
          Mi Brinemo o usaglašenosti Vašeg poslovanja sa relevantnom pravnom
          regulativom, kako bi Vaše društvo nesmetano funkcionisalo na tržištu
          Republike Srbije.
        </p>
      </div> */}

      {/* non-smooth transition */}
      <div
        className={`${
          !revealSection ? "hidden" : ""
        } overflow-hidden w-full px-6 py-2 flex flex-wrap content-center`}
      >
        {language === "en" ? <TextEng /> : <TextSr />}
      </div>

      <div>
        <button
          onClick={() => {
            if (!revealSection) {
              setRevealSection(true);
            } else {
              setRevealSection(false);
            }
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
