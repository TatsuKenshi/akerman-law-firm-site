import { CardItemType } from "../content/types";
import i18next from "i18next";

const FlipCard = (item: CardItemType) => {
  const language = i18next.language;
  // const { engTitle, serTitle, engContent, serContent, icon: Icon } = item;
  const {
    engTitle,
    serTitle,
    engContent: EngContent,
    serContent: SerContent,
    icon: Icon,
  } = item;

  return (
    <div className="w-[320px] h-[380px] bg-transparent cursor-pointer group [perspective:1000px] mx-2 mb-12 text-white">
      <div className="relative w-full h-full duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="absolute p-2 w-full h-full rounded-lg bg-sky-900 text-center">
          <Icon className="mx-auto my-8 h-16 w-16" />
          <h4 className="text-2xl font-bold">
            {language === "en" ? engTitle : serTitle}
          </h4>
        </div>
        <div className="absolute p-2 text-center [transform:rotateY(180deg)] w-full h-full bg-yellow-700 bg-opacity-80 [backface-visibility:hidden] rounded-lg">
          <Icon className="mx-auto my-8 h-16 w-16" />
          <p className="text-2xl font-bold">
            {/* {language === "en" ? engContent : serContent} */}
            {language === "en" ? <EngContent /> : <SerContent />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
