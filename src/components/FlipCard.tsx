import { CardItemType } from "../content/types";
import i18next from "i18next";

const FlipCard = (item: CardItemType) => {
  const language = i18next.language;
  const { engTitle, serTitle, engContent, serContent, icon: Icon } = item;

  return (
    <div className="w-[300px] h-[300px] bg-transparent cursor-pointer group [perspective:1000px]">
      <div className="relative w-full h-full duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="absolute border-2 w-full h-full bg-teal-200">
          <Icon />
          <h4>{language === "en" ? engTitle : serTitle}</h4>
        </div>
        <div className="absolute border-2 [transform:rotateY(180deg)] w-full h-full bg-pink-200 [backface-visibility:hidden]">
          <Icon />
          <h4>{language === "en" ? engContent : serContent}</h4>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FlipCard;
