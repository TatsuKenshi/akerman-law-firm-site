import { withTranslation } from "react-i18next";
import ProgressiveImage from "react-progressive-graceful-image";
import banner2 from "../assets/naslovna2.jpg";
import placeholderSrc from "../assets/naslovna2Small.jpg";

const HomeHero = ({ t }: any) => {
  return (
    <div className="relative h-[400px] lg:h-[500px] mt-8 overflow-hidden bg-sky-900 bg-opacity-50">
      <div className="absolute z-30 flex w-full h-full">
        <div className="relative z-30 w-4/6 sm:w-3/6 md:w-5/12 lg:w-2/6 px-8 flex items-center">
          <p className="font-bold text-md sm:text-lg md:text-xl lg:text-lg text-white">
            {t("HomeHeroText")}
          </p>
          <span></span>
        </div>
        <div className="absolute top-0 right-0 flex w-full h-full">
          <div className="w-[0.5%] lg:w-1/6 h-full bg-sky-900"></div>
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
        <ProgressiveImage src={banner2} placeholder={placeholderSrc}>
          {(src, loading) => (
            <img
              alt="Corporate Office"
              className={`image${
                loading ? " loading" : " loaded"
              } object-cover h-full min-w-full`}
              src={src}
            />
          )}
        </ProgressiveImage>
      </div>
    </div>
  );
};

export default withTranslation()(HomeHero);
