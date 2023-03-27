import i18next from "i18next";
import banner1 from "../assets/banner1.jpg";
import { PageHeroPropsTypes } from "./types";
import ProgressiveImage from "react-progressive-graceful-image";
import placeholderSrc from "../assets/banner1Small.jpg";

const PageHero = (props: PageHeroPropsTypes) => {
  const language = i18next.language;

  return (
    <div className="h-96 lg:h-[450px] mt-8 overflow-hidden">
      <ProgressiveImage src={banner1} placeholder={placeholderSrc}>
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
  );
};

export default PageHero;
