import i18next from "i18next";
import banner1 from "../assets/banner1.jpg";
import { PageHeroPropsTypes } from "./types";

const PageHero = (props: PageHeroPropsTypes) => {
  const language = i18next.language;

  return (
    <div className="relative h-96 lg:h-[450px] mt-8 overflow-hidden bg-sky-900 bg-opacity-50">
      <div className="absolute z-30 flex w-full h-full">
        <div className="relative z-30 w-4/6 md:w-3/6 lg:w-2/6 px-6 py-4 text-white md:w-1/2">
          <h2 className="text-lg md:text-xl lg:text-2xl mb-4 font-bold">
            {language === "en" ? props.engTitle : props.srTitle}
          </h2>
          <p>{language === "en" ? props.engContent : props.srContent}</p>
          <span></span>
        </div>
        <div className="absolute top-0 right-0 flex w-full h-full">
          <div className="w-1/6 h-full bg-sky-900"></div>
          <div className="relative w-1/6">
            <svg
              fill="currentColor"
              viewBox="0 0 100 100"
              className="absolute inset-y-0 z-20 h-full text-sky-900"
            >
              <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
            </svg>
            <svg
              fill="currentColor"
              viewBox="0 0 100 100"
              className="absolute inset-y-0 z-10 h-full ml-6 text-yellow-700 text-opacity-50"
            >
              <polygon points="0,0 100,0 50,100 0,100"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 block w-full h-full">
        <img
          alt="Corporate Office"
          className="object-cover h-full min-w-full"
          src={banner1}
        />
      </div>
    </div>
  );
};

export default PageHero;
