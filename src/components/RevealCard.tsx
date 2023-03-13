import { useState } from "react";

const RevealCard = ({ text, height }: any) => {
  const [revealSection, setRevealSection] = useState<boolean>(false);

  return (
    <div className="w-[200px] h-max bg-sky-900 cursor-pointer text-white mx-4 mb-4">
      <div className="w-[320px] mb-2">
        <h2>Reveal Card</h2>
        <p>Visible part</p>
      </div>
      <div
        className={`${
          !revealSection ? "h-[0px]" : `h-[${height}px]`
        } transition-all delay-150 ease-in-out duration-500 overflow-hidden w-full px-2 flex items-center`}
      >
        <p>{text}</p>
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
          {!revealSection ? "More" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default RevealCard;
