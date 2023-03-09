import { MemberType } from "../content/types";
import i18next from "i18next";

const TeamMemberCard = (member: MemberType) => {
  const language = i18next.language;

  return (
    <div className="w-[320px] h-[380px] bg-transparent cursor-pointer group [perspective:1000px] mx-2 mb-12 text-white">
      <div className="relative w-full h-full duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="absolute w-full h-full rounded-lg bg-sky-900 text-center">
          <img src={member.image} alt="" className="h-full w-full rounded-lg" />
        </div>
        <div className="absolute p-2 text-center [transform:rotateY(180deg)] w-full h-full bg-yellow-700 bg-opacity-80 [backface-visibility:hidden] rounded-lg">
          <h2 className="text-2xl font-bold">{member.name}</h2>
          <h5 className="text-xl font-bold">
            {language === "en" ? member.engRole : member.serRole}
          </h5>
          <p className="text-lg">
            {language === "en" ? member.engContent : member.serContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
